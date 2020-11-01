import { IonButton, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItemDivider, IonLabel, IonLoading, IonModal, IonPage, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonTextarea, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { addCircleSharp, personSharp } from 'ionicons/icons';

import "../../css/Global.css";
import "../../css/Forum.css";
import TopNav from '../../components/TopNav';
import ForumRules from '../../components/Forum/ForumRules';
import ForumQuestions from '../../components/Forum/ForumQuestions';
import ForumComments from '../../components/Forum/ForumComments';
import { db } from '../../firebase';
import { useAuth } from '../../modules/auth';

const ForumUser: React.FC = () => {
    const { userID } = useAuth();

    let history = useHistory();

    const [loading, setLoading] = useState(false);
    const [qnsCom, setQnsCom] = useState('forum-myQuestions');
    const [modalSegmentValue, setModalSegmentValue] = useState('');
    const [showPostModal, setShowPostModal] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [comments, setComments] = useState([]);
    const [entry, setEntry] = useState("");
    const [keyword, setKeyword] = useState("");

    const handleQuestions = () => {
        setQnsCom('forum-myQuestions');
    }

    const handleComments = () => {
        setQnsCom('forum-myComments');
    }

    const handleQuestion = async () => {
        try {
            setLoading(true);
            const time = new Date();
            let name: string;

            await db.collection('Students').doc(userID).get().then(doc => {
                if (doc.exists)
                    name = doc.data()?.firstName + " " + doc.data()?.lastName;
            });

            const docRef = db.collection('Forum').doc(userID).collection('Questions').doc((time.getTime()).toString());
            await docRef.set({
                id: +docRef.id,
                entry: entry,
                posterName: name!,
                posterId: userID,
                dateTime: time.toLocaleString().replace(/\//g, "-"),
                noOfComments: 0,
                deleted: false,
                reported: false
            });
        } catch (e) {
            return console.log(e);
        } finally {
            setLoading(false);
            setShowPostModal(false);
            setEntry("");
        }
    }

    /* useEffect(() => {
        const questions: any = [];
        const comments: any = [];

        const questionsListener = db.collection('Forum').doc(userID).collection('Questions').where("deleted", "==", false).onSnapshot(snaps => {
            snaps.forEach(snap => questions.push(snap.data()));
        });

        const commentsListener = db.collection('Forum').doc(userID).collection('Comments').where("deleted", "==", false).onSnapshot(snaps => {
            setComments(comments);

            snaps.forEach(async (snap) => {
                let post: any = { ...snap.data() }

                const questionRef = db.collectionGroup('Questions').where("id", "==", snap.data().questionId).onSnapshot(questions => {
                    questions.forEach(question => {
                        if (question.exists) {
                            post.question = question.data()?.entry;
                            post.questionRemoved = question.data()?.deleted;
                        }
                    });
                }); 

                await db.collection('Forum').get().then(users => {
                    users.forEach(user => {
                        return db.collection('Forum').doc(user.id).collection('Questions').doc(snap.data().questionId.toString()).onSnapshot(question => {
                            if(question.exists) {
                                post.question = question.data()?.entry;
                                post.questionRemoved = question.data()?.deleted;
                            }
                        });
                    });
                });
                comments.push(post)
                //questionRef();
            });
        });

        setTimeout(() => {
            setQuestions(questions);
            setComments(comments);

            questionsListener();
            commentsListener();
            setLoading(false);
        }, 500);
    }, []); */

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Forum" route="/u/forum" backarrow={true} hamburger={true} />
            </IonHeader>

            <IonContent fullscreen id="forum-content">
                <IonGrid id="forum-searchbar-container">
                    <IonRow className="ion-justify-content-start">
                        <IonCol size="10" className="forum-col">
                            <form onSubmit={e => { e.preventDefault(); history.push(`/u/forumSearch/${keyword}`); }}>
                                <IonSearchbar value={keyword} onIonChange={e => setKeyword(e.detail.value!)} enterkeyhint="search" id="forum-searchbar" animated></IonSearchbar>
                            </form>
                        </IonCol>
                        <IonCol size="2" className="forum-col ion-align-self-center">
                            <ForumRules />
                        </IonCol>
                    </IonRow>
                </IonGrid>

                <IonGrid id="forumUser-ionRowCol">
                    <IonRow id="forumUser-ionRowCol">
                        <IonCol id="forumUser-ionRowCol">
                            <IonToolbar>
                                <IonSegment scrollable value={qnsCom} onIonChange={(e) => console.log(`${e.detail.value}`)}>
                                    <IonSegmentButton value="forum-myQuestions" onClick={() => handleQuestions()} className="forumUser-heading">My Questions</IonSegmentButton>
                                    <IonSegmentButton value="forum-myComments" onClick={() => handleComments()} className="forumUser-heading">My Comments</IonSegmentButton>
                                </IonSegment>
                            </IonToolbar>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                {qnsCom === 'forum-myQuestions' ?
                    <ForumQuestions questions={questions} /> : <ForumComments comments={comments} />
                }

                {/* Post Question Modal */}
                <IonModal isOpen={showPostModal} cssClass='post-question-modal' onDidDismiss={() => setShowPostModal(false)}>
                    <IonContent>
                        <IonGrid id="postQns-modal-container">
                            <IonRow style={{ paddingTop: '1%' }}>
                                <IonLabel id="postQns-title">Post Question</IonLabel>
                            </IonRow>
                            <IonItemDivider />
                            <IonRow id="postQns-modal-inputArea">
                                <IonTextarea value={entry} onIonChange={(e: any) => setEntry(e.detail.value)} rows={11} placeholder="Type your question here..." required></IonTextarea>
                            </IonRow>
                            <IonRow className="ion-justify-content-around">
                                <IonButton id="postQns-close-button" fill="outline" onClick={() => [setShowPostModal(false), setModalSegmentValue('')]}>CLOSE</IonButton>
                                <IonButton id="postQns-post-button" onClick={handleQuestion}>POST</IonButton>
                            </IonRow>
                        </IonGrid>
                    </IonContent>
                </IonModal>
                <IonLoading isOpen={loading} />
            </IonContent>

            <IonFooter>
                <IonToolbar>
                    <IonSegment scrollable value={modalSegmentValue} onIonChange={(e) => console.log(`${e.detail.value}`)}>
                        <IonSegmentButton className="forum-segmentBtn" value="postQuestionBtn" onClick={() => [setShowPostModal(true), setModalSegmentValue('postQuestionBtn')]}><IonIcon icon={addCircleSharp} /></IonSegmentButton>
                        <IonSegmentButton className="forum-segmentBtn" value="forumUserBtn" onClick={(e) => { e.preventDefault(); history.push('/u/forumUser'); }}><IonIcon icon={personSharp} /></IonSegmentButton>
                    </IonSegment>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default ForumUser;
import { IonContent, IonPage, IonGrid, IonRow, IonSearchbar, IonCol, IonList, IonLabel, IonText, IonHeader, IonLoading } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCommentAlt } from '@fortawesome/free-regular-svg-icons';

import '../../css/Global.css';
import '../../css/Forum.css';
import TopNav from '../../components/TopNav';
import ForumRules from '../../components/Forum/ForumRules';
import Forum_WithComment from '../../components/Forum/Forum_WithComment';
import Forum_FlagModal from '../../components/Forum/Forum_FlagModal';
import Forum_AddCommentModal from '../../components/Forum/Forum_AddCommentModal';
import { db } from '../../firebase';
import { useAuth } from '../../modules/auth';

interface RouteParams {
    id: string;
    uid: string;
}

const ForumViewQuestion: React.FC = () => {
    const { id, uid } = useParams<RouteParams>();
    const { userID } = useAuth();

    const [loading, setLoading] = useState(true);
    const [question, setQuestion] = useState<any>({});
    const [comment, setComment] = useState();

    const handlePost = async () => {
        try {
            setLoading(true);
            const time = new Date();
            let name: string;

            await db.collection('Students').doc(userID).get().then((doc: any) => {
                name = doc.data().firstName + " " + doc.data().lastName;
            });

            
            const docRef = db.collection('Forum').doc(userID).collection('Comments').doc((time.getTime()).toString());
            await docRef.set({
                id: +docRef.id,
                entry: comment,
                posterName: name!,
                posterId: userID,
                dateTime: time.toLocaleString().replace(/\//g, "-"),
                deleted: false,
                reported: false
            });

            /* const increment = firebase.firestore.FieldValue.increment(1);
            await db.collection('Forum').doc("").collection('Questions').doc("").update({
                noOfComments: increment,
            }); */
        } catch (e) {
            return console.log(e);
        } finally {
            setLoading(false);
            //setShowPostModal(false);
            //setEntry("");
        }
    }

    useEffect(() => {
        db.collection('Forum').doc(uid).collection('Questions').doc(id).get().then((entry: any) => {
            setQuestion({
                title: entry.data().entry,
                poster: entry.data().posterName,
                dateTime: entry.data().dateTime,
                commentCount: entry.data().noOfComments,
                removed: entry.data().deleted
            });
        });

        setLoading(false);
    }, []);
    
    //console.log(question)
    
    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Forum" route="/u/forum" backarrow={ true } hamburger={ true }/>
            </IonHeader>
            
            <IonContent  fullscreen id="forum-content">
                <IonGrid id="forum-searchbar-container">
                    <IonRow className="ion-justify-content-start">
                        <IonCol size="10" className="forum-col">
                            <IonSearchbar id="forum-searchbar" animated></IonSearchbar>
                        </IonCol>
                        <IonCol size="2" className="forum-col ion-align-self-center">
                            <ForumRules />
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonList className="forum-container">
                    <IonGrid>
                        <IonRow>
                            { question.removed === false ? (
                                <IonLabel>
                                    <IonText className="forum-question">{question.title}</IonText>
                                </IonLabel>
                            ) : (
                                <IonLabel>
                                    <IonText className="forum-question">[deleted]</IonText>
                                </IonLabel>
                            ) }
                        </IonRow>
                        <IonRow className="ion-justify-content-end">
                            <IonText className="forum-question-details" id="forum-userName">~ {question.poster}</IonText>
                        </IonRow>
                        <IonRow className="ion-align-items-end ion-justify-content-start" id="forum-question-detail-container">
                            <IonCol size="1" className="forum-col ion-align-self-end">
                                <FontAwesomeIcon icon={faClock} size="sm"/>
                            </IonCol>
                            <IonCol size="6" className="forum-col ion-align-self-end">
                                <IonText className="forum-question-details">{question.dateTime}</IonText>
                            </IonCol>
                            <IonCol size="1" className="forum-col ion-align-self-end">
                                <FontAwesomeIcon icon={faCommentAlt} size="sm"/>
                            </IonCol>
                            <IonCol size="3" className="forum-col ion-align-self-end">
                                <IonText className="forum-question-details">{question.commentCount}</IonText>
                            </IonCol>
                            <IonCol size="1" className="ion-align-self-end forum-col">
                                <Forum_FlagModal />
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonList>
                <IonGrid id="add-comment-container">
                    <IonRow>
                        <IonCol className="ion-align-self-center">
                            <IonText id="addComment-commentText">Comments</IonText>
                        </IonCol>
                        <IonCol className="ion-align-self-center">
                            <Forum_AddCommentModal />
                        </IonCol>
                    </IonRow>
                </IonGrid>

                {/* When there's no comment */}
                {/* <Forum_NoComment /> */}

                {/* When there's 2 comments, reply to comment and deleted comment*/}
                <Forum_WithComment />

                <IonLoading isOpen={loading} />
            </IonContent>
        </IonPage>
    );
};

export default ForumViewQuestion;
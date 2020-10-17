import { IonContent, IonPage, IonGrid, IonRow, IonSearchbar, IonCol, IonList, IonLabel, IonText, IonHeader, IonLoading, IonButton, IonItemDivider, IonModal, IonTextarea } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faComment, faCommentAlt, faCommentDots } from '@fortawesome/free-regular-svg-icons';
import firebase from 'firebase';

import '../../css/Global.css';
import '../../css/Forum.css';
import TopNav from '../../components/TopNav';
import ForumRules from '../../components/Forum/ForumRules';
import Forum_WithComment from '../../components/Forum/Forum_WithComment';
import Forum_FlagModal from '../../components/Forum/Forum_FlagModal';
import Forum_AddCommentModal from '../../components/Forum/Forum_AddCommentModal';
import Forum_ReplyModal from '../../components/Forum/Forum_ReplyModal';
import { db } from '../../firebase';
import { useAuth } from '../../modules/auth';
import { forumPostsDesc } from '../../modules/compare';

interface RouteParams {
    id: string;
    uid: string;
}

const ForumViewQuestion: React.FC = () => {
    const { id, uid } = useParams<RouteParams>();
    const { userID } = useAuth();

    const [loading, setLoading] = useState(true);
    const [showAddCommentModal, setShowAddCommentModal] = useState(false);
    const [showReplyCommentModal, setShowReplyCommentModal] = useState(false);
    const [question, setQuestion] = useState<any>({});
    const [entry, setEntry] = useState("");
    const [comments, setComments] = useState([]);


    const handleComment = async () => {
        try {
            setLoading(true);
            const time = new Date();
            let name: string;

            await db.collection('Students').doc(userID).get().then(doc => {
                if (doc.exists)
                    name = doc.data()?.firstName + " " + doc.data()?.lastName;
            });
            
            const docRef = db.collection('Forum').doc(userID).collection('Comments').doc((time.getTime()).toString());
            await docRef.set({
                id: +docRef.id,
                entry: entry,
                questionId: +id,
                posterName: name!,
                posterId: userID,
                dateTime: time.toLocaleString().replace(/\//g, "-"),
                deleted: false,
                reported: false,
                repliedTo: false
            });

            const increment = firebase.firestore.FieldValue.increment(1);
            await db.collection('Forum').doc(uid).collection('Questions').doc(id).update({
                noOfComments: increment,
            });
        } catch (e) {
            return console.log(e);
        } finally {
            setLoading(false);
            setShowAddCommentModal(false);
            setEntry("");
        }
    }

    useEffect(() => {
        db.collection('Forum').doc(uid).collection('Questions').doc(id).get().then(entry => {
            if (entry.exists) {
                setQuestion({
                    title: entry.data()?.entry,
                    asker: entry.data()?.posterName,
                    askerId: entry.data()?.posterId,
                    dateTime: entry.data()?.dateTime,
                    commentCount: entry.data()?.noOfComments,
                    removed: entry.data()?.deleted
                });
            }
        });

        db.collection('Forum').get().then(uRef => {
            const comments: any = [];

            uRef.forEach(user => {
                return db.collection('Forum').doc(user.id).collection('Comments').where("questionId", "==", +id).onSnapshot(entries => {
                    entries.docChanges().forEach(change => {
                        comments.unshift({
                            id: change.doc.id,
                            entry: change.doc.data().entry,
                            dateTime: change.doc.data().dateTime,
                            user: change.doc.data().posterName,
                            uid: change.doc.data().posterId,
                            removed: change.doc.data().deleted,
                            hasReply: change.doc.data().repliedTo
                        });
                    });
                });
            });

            setTimeout(() => {
                comments.sort(forumPostsDesc);
                setComments(comments);
                setLoading(false);
            }, 500);
        });

        setLoading(false);
    }, []);
    
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
                            { question.removed === false ?
                                <IonLabel><IonText className="forum-question">{question.title}</IonText></IonLabel>
                                :
                                <IonLabel><IonText className="forum-question">[deleted]</IonText></IonLabel>
                            }
                        </IonRow>
                        <IonRow className="ion-justify-content-end">
                            <IonText className="forum-question-details" id="forum-userName">~ {question.asker}</IonText>
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
                                { question.removed === false ?
                                    <Forum_FlagModal disabled={false} postId={question.id} postType={"Question"} offender={question.askerId} reportedBy={userID!} />
                                    :
                                    <Forum_FlagModal disabled={true} postId={question.id} postType={"Question"} offender={question.askerId} reportedBy={userID!} />
                                }
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
                            <IonButton id="forum-addCommentBtn" size="small" onClick={() => setShowAddCommentModal(true)}>
                                <FontAwesomeIcon icon={faComment} size="sm" />
                                <IonText style={{marginLeft: '5%', fontSize: '90%'}}>Add Comment</IonText>
                            </IonButton>
                            <IonModal isOpen={showAddCommentModal} cssClass='post-question-modal' onDidDismiss={() => setShowAddCommentModal(false)}>
                                <IonContent>
                                    <IonGrid id="postQns-modal-container">
                                        <IonRow style={{paddingTop: '1%'}}>
                                            <IonLabel id="postQns-title">Add Comment</IonLabel>
                                        </IonRow>
                                        <IonItemDivider />
                                        <IonRow id="postQns-modal-inputArea">
                                            <IonTextarea value={entry} onIonChange={e => setEntry(e.detail.value!)} rows={11} contentEditable={true} required></IonTextarea>
                                        </IonRow>
                                        <IonRow className="ion-justify-content-around">
                                            <IonButton id="postQns-close-button" fill="outline" onClick={() => setShowAddCommentModal(false)}>CANCEL</IonButton>
                                            <IonButton id="postQns-post-button" onClick={handleComment}>COMMENT</IonButton>
                                        </IonRow>
                                    </IonGrid>
                                </IonContent>
                            </IonModal>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                {/* COMMENT */}
                <IonGrid id="comment-main-container">
                    {comments.length > 0 ? 
                        comments.map((post: any) => (
                            <IonList id="comment-list" key={post.id}>
                                <IonGrid className="forum-container">
                                    <IonRow>
                                        { post.removed === false ?
                                            <IonLabel><IonText id="comment-text">{post.entry}</IonText></IonLabel>
                                            :
                                            <IonLabel><IonText id="comment-text">[deleted]</IonText></IonLabel>
                                        }
                                    </IonRow>
                                    <IonRow className="ion-justify-content-end">
                                        <IonText id="comment-userName">~ {post.user}</IonText>
                                    </IonRow>
                                    <IonRow className="ion-align-items-end ion-justify-content-start" id="comment-detail-container">
                                        <IonCol size="1" className="forum-col ion-align-self-end">
                                            <FontAwesomeIcon icon={faClock} size="sm"/>
                                        </IonCol>
                                        <IonCol size="6" className="forum-col ion-align-self-end">
                                            <IonText id="comment-details">{post.dateTime}</IonText>
                                        </IonCol>
                                        <IonCol size="4" className="forum-col ion-align-self-end">
                                            {/* { post.removed === false ? 
                                                <IonButton onClick={() => setShowReplyCommentModal(true)} id="comment-replyBtn" size="small" disabled={false}>
                                                    <FontAwesomeIcon icon={faCommentDots} size="sm"/>
                                                    <IonText style={{marginLeft: '5%'}}>Reply</IonText>
                                                </IonButton>
                                                :
                                                <IonButton id="comment-replyBtn" size="small" disabled={true}>
                                                    <FontAwesomeIcon icon={faCommentDots} size="sm"/>
                                                    <IonText style={{marginLeft: '5%'}}>Reply</IonText>
                                                </IonButton>
                                            } */}
                                        
                                            { post.removed === false ? 
                                                <Forum_ReplyModal disabled={false} commenter={post.user} /> :
                                                <Forum_ReplyModal disabled={true} commenter={post.user} />
                                            }
                                        </IonCol>
                                        <IonCol size="1" className="ion-align-self-end forum-col">
                                            { post.removed === false ?
                                                <Forum_FlagModal disabled={false} postId={post.id} postType={"Comment"} offender={post.uid} reportedBy={userID!} />
                                                :
                                                <Forum_FlagModal disabled={true} postId={post.id} postType={"Comment"} offender={post.uid} reportedBy={userID!} />
                                            }
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>

                                {/* REPLY */}
                                { post.hasReply === true ? 
                                    <IonGrid className="forum-container" id="comment-reply-container">
                                        <IonRow>
                                            <IonLabel>
                                                <IonText id="comment-text">Thank you! :)</IonText>
                                            </IonLabel>
                                        </IonRow>
                                        <IonRow className="ion-justify-content-end">
                                            <IonText id="comment-userName">~ John Tan</IonText>
                                        </IonRow>
                                        <IonRow className="ion-align-items-end ion-justify-content-start" id="comment-detail-container">
                                            <IonCol size="1" className="forum-col ion-align-self-end">
                                                <FontAwesomeIcon icon={faClock} size="sm"/>
                                            </IonCol>
                                            <IonCol size="10" className="forum-col ion-align-self-end">
                                                <IonText id="comment-details">22-11-2020, 9.13am</IonText>
                                            </IonCol>
                                            <IonCol size="1" className="ion-align-self-end forum-col">
                                                <Forum_FlagModal disabled={false} postId={post.id} postType={"Reply"} offender={post.uid} reportedBy={userID!} />
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                    : <></>
                                }
                            </IonList>
                        )
                    ) : (
                        <IonGrid>
                            <IonRow className="ion-justify-content-center">
                                <IonText color="medium" id="no-comment-text">There are currently no comments for this part.</IonText>
                            </IonRow>
                        </IonGrid>
                    )}
                </IonGrid>
                <IonLoading isOpen={loading} />
            </IonContent>
        </IonPage>
    );
};

export default ForumViewQuestion;
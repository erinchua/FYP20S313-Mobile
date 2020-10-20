import { IonContent, IonPage, IonGrid, IonRow, IonSearchbar, IonCol, IonList, IonLabel, IonText, IonHeader, IonLoading, IonButton, IonItemDivider, IonModal, IonTextarea } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faComment, faCommentAlt, faCommentDots } from '@fortawesome/free-regular-svg-icons';
import firebase from 'firebase';

import '../../css/Global.css';
import '../../css/Forum.css';
import TopNav from '../../components/TopNav';
import ForumRules from '../../components/Forum/ForumRules';
import Forum_FlagModal from '../../components/Forum/Forum_FlagModal';
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

    let history = useHistory();

    const [loading, setLoading] = useState(true);
    const [showAddCommentModal, setShowAddCommentModal] = useState(false);
    const [showReplyCommentModal, setShowReplyCommentModal] = useState(false);
    const [question, setQuestion] = useState<any>({});
    const [entry, setEntry] = useState("");
    const [comments, setComments] = useState([]);
    const [commentDetails, setCommentDetails] = useState({ commenter: "", commentId: 0, commenterId: 0 });
    const [keyword, setKeyword] = useState("");


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

    const handleReply = async (commentId: string, commenterId: string) => {
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
                posterName: name!,
                posterId: userID,
                dateTime: time.toLocaleString().replace(/\//g, "-"),
                deleted: false,
                reported: false,
                commentId: +commentId,
                questionId: +id
            });

            await db.collection('Forum').doc(commenterId).collection('Comments').doc(commentId).update({
                repliedTo: true,
            });
        } catch (e) {
            return console.log(e);
        } finally {
            setLoading(false);
            setShowReplyCommentModal(false);
            setEntry("");
        }
    }

    useEffect(() => {
        setComments([]);

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
                        comments.push({
                            id: +change.doc.id,
                            entry: change.doc.data().entry,
                            dateTime: change.doc.data().dateTime,
                            user: change.doc.data().posterName,
                            uid: change.doc.data().posterId,
                            removed: change.doc.data().deleted,
                            hasReply: change.doc.data().repliedTo || null,
                            commentId: change.doc.data().commentId || null
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

    //console.log(comments)
    
    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Forum" route="/u/forum" backarrow={ true } hamburger={ true }/>
            </IonHeader>
            
            <IonContent  fullscreen id="forum-content">
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
                <IonList className="forum-container">
                    <IonGrid>
                        <IonRow>
                            <IonLabel><IonText className="forum-question">{question.removed === false ? question.title : "[deleted]"}</IonText></IonLabel>
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
                                <Forum_FlagModal disabled={question.removed === false ? false : true} postId={question.id} postType={"Question"} offender={question.askerId} reportedBy={userID!} />
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
                        </IonCol>
                    </IonRow>
                </IonGrid>

                {/* COMMENT */}
                <IonGrid id="comment-main-container">
                    { comments.length > 0 ? 
                        comments.map((post: any) => {
                            if (post.commentId === null) {
                                return (
                                    <IonList id="comment-list" key={post.id}>
                                        <IonGrid className="forum-container">
                                            <IonRow>
                                                <IonLabel><IonText id="comment-text">{post.removed === false ? post.entry : "[deleted]"}</IonText></IonLabel>
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
                                                    { (question.askerId === userID! || post.uid === userID!) ?
                                                        <IonButton onClick={() => [setShowReplyCommentModal(true), setCommentDetails({ commenter: post.user, commentId: post.id, commenterId: post.uid })]} id="comment-replyBtn" size="small" disabled={post.removed === false ? false : true}>
                                                            <FontAwesomeIcon icon={faCommentDots} size="sm"/>
                                                            <IonText style={{marginLeft: '5%'}}>Reply</IonText>
                                                        </IonButton>
                                                        :
                                                        null
                                                    }
                                                </IonCol>
                                                <IonCol size="1" className="ion-align-self-end forum-col">
                                                    <Forum_FlagModal disabled={post.removed === false ? false : true} postId={post.id} postType={"Comment"} offender={post.uid} reportedBy={userID!} />
                                                </IonCol>
                                            </IonRow>
                                        </IonGrid>

                                        {/* REPLY */}
                                        { comments.map((reply: any) => {
                                            if (reply.commentId === post.id) {
                                                return (
                                                    <IonGrid className="forum-container" id="comment-reply-container" key={reply.id}>
                                                        <IonRow>
                                                            <IonLabel>
                                                                <IonText id="comment-text">{reply.entry}</IonText>
                                                            </IonLabel>
                                                        </IonRow>
                                                        <IonRow className="ion-justify-content-end">
                                                            <IonText id="comment-userName">~ {reply.user}</IonText>
                                                        </IonRow>
                                                        <IonRow className="ion-align-items-end ion-justify-content-start" id="comment-detail-container">
                                                            <IonCol size="1" className="forum-col ion-align-self-end">
                                                                <FontAwesomeIcon icon={faClock} size="sm"/>
                                                            </IonCol>
                                                            <IonCol size="10" className="forum-col ion-align-self-end">
                                                                <IonText id="comment-details">{reply.dateTime}</IonText>
                                                            </IonCol>
                                                            <IonCol size="1" className="ion-align-self-end forum-col">
                                                                <Forum_FlagModal disabled={false} postId={reply.id} postType={"Reply"} offender={reply.uid} reportedBy={userID!} />
                                                            </IonCol>
                                                        </IonRow>
                                                    </IonGrid>
                                                )
                                            }   
                                        })}
                                    </IonList>
                                )
                            }
                        }
                    ) : (
                        <IonGrid>
                            <IonRow className="ion-justify-content-center">
                                <IonText color="medium" id="no-comment-text">There are currently no comments for this part.</IonText>
                            </IonRow>
                        </IonGrid>
                    )}
                </IonGrid>
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
                <IonModal isOpen={showReplyCommentModal} cssClass='post-question-modal' onDidDismiss={() => setShowReplyCommentModal(false)}>
                    <IonContent>
                        <IonGrid id="postQns-modal-container">
                            <IonRow style={{paddingTop: '1%'}}>
                                <IonLabel id="postQns-title">Reply to {commentDetails.commenter}'s comment</IonLabel>
                            </IonRow>
                            <IonItemDivider />
                            <IonRow id="postQns-modal-inputArea">
                                <IonTextarea value={entry} onIonChange={e => setEntry(e.detail.value!)} rows={11} contentEditable={true} required></IonTextarea>
                            </IonRow>
                            <IonRow className="ion-justify-content-around">
                                <IonButton id="postQns-close-button" fill="outline" onClick={() => setShowReplyCommentModal(false)}>CANCEL</IonButton>
                                <IonButton id="postQns-post-button" onClick={() => handleReply(commentDetails.commentId.toString(), commentDetails.commenterId.toString())}>COMMENT</IonButton>
                            </IonRow>
                        </IonGrid>
                    </IonContent>
                </IonModal>
                <IonLoading isOpen={loading} />
            </IonContent>
        </IonPage>
    );
};

export default ForumViewQuestion;
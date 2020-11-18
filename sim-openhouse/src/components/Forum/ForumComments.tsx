import { IonAlert, IonButton, IonCol, IonContent, IonGrid, IonItemDivider, IonLabel, IonLoading, IonModal, IonRouterLink, IonRow, IonTextarea } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import "../../css/Global.css";
import "../../css/Forum.css";
import { db } from '../../firebase';
import { useAuth } from '../../modules/auth';

const ForumQuestions: React.FC = () => {
    const { userID } = useAuth();

    const [loading, setLoading] = useState(true);
    const [showEditCommentModal, setShowEditCommentModal] = useState(false);
    const [deleteAlert, setDeleteAlert] = useState({ alert: false, loading: false });
    const [comments, setComments] = useState([]);
    const [entry, setEntry] = useState("");
    const [toBeEdited, setToBeEdited] = useState(0);
    const [toBeDeleted, setToBeDeleted] = useState(0);

    const handleDelete = async (postId: string) => {
        try {
            setDeleteAlert({ alert: false, loading: true });
            await db.collection('Forum').doc(userID).collection('Comments').doc(postId).update({
                deleted: true
            });
        } catch (e) {
            return console.log(e);
        } finally {
            setDeleteAlert({ alert: false, loading: false });
        }
    }

    const handleEdit = async (postId: string) => {
        try {
            setLoading(true);

            if (entry !== "") {
                await db.collection('Forum').doc(userID).collection('Comments').doc(postId).update({
                    entry: entry
                });
            }
        } catch (e) {
            return console.log(e);
        } finally {
            setShowEditCommentModal(false);
            setLoading(false);
            setEntry("");
        }
    }

    useEffect(() => {
        return db.collection('Forum').doc(userID).collection('Comments').where("deleted", "==", false).onSnapshot(snaps => {
            const posts: any = [];

            snaps.forEach(async (snap) => {
                let post: any = { ...snap.data() }

                await db.collection('Forum').get().then(users => {
                    users.forEach(user => {
                        return db.collection('Forum').doc(user.id).collection('Questions').doc(snap.data().questionId.toString()).onSnapshot(question => {
                            if (question.exists) {
                                post.questionId = +question.data()?.id;
                                post.question = question.data()?.entry;
                                post.askerId = question.data()?.posterId;
                                post.questionRemoved = question.data()?.deleted;
                            }
                        });
                    });
                });
                posts.push(post)
            });

            setTimeout(() => {
                setComments(posts);
                setLoading(false);
            }, 500);
        });
    }, []);

    return (
        <>
            <IonGrid id="forumQnsCom-tableGrid">
                <IonRow id="forumQnsCom-tableHeader" className="ion-justify-content-center">
                    <IonCol className="forumQnsCom-Header ion-text-wrap">Question</IonCol>
                    <IonCol className="forumQnsCom-Header ion-text-wrap">My Comment</IonCol>
                    <IonCol className="forumQnsCom-Header ion-text-wrap">Posted Date/Time</IonCol>
                    <IonCol className="forumQnsCom-Header ion-text-wrap"><IonRow className="ion-justify-content-center">No. of</IonRow><IonRow className="ion-justify-content-center"><FontAwesomeIcon icon={faCommentDots} size="lg" /></IonRow></IonCol>
                    <IonCol className="forumQnsCom-Header ion-text-wrap">Edit Comment</IonCol>
                    <IonCol className="forumQnsCom-Header ion-text-wrap">Delete Comment</IonCol>
                </IonRow>
                {comments.map((post: any) => (
                    <IonRow className="ion-justify-content-center" key={post.id}>
                        <IonCol className="forumQnsCom-Data ion-text-wrap ion-text-left">
                            {post.questionRemoved === false ?
                                <IonRouterLink href={`/u/forumViewQuestion/${post.questionId}/${post.askerId}`} className="forumViewLink">{post.question}</IonRouterLink>
                                : "[deleted]"
                            }
                        </IonCol>
                        <IonCol className="forumQnsCom-Data ion-text-wrap ion-text-left">{post.entry}</IonCol>
                        <IonCol className="forumQnsCom-Data ion-text-wrap">{post.dateTime}</IonCol>
                        <IonCol className="forumQnsCom-Data ion-text-wrap">{post.hasOwnProperty('commentId') === false ? post.noOfReplies : "-"}</IonCol>
                        <IonCol className="forumQnsCom-Data ion-text-wrap">
                            {/* <Forum_EditCommentModal /> */}
                            <IonButton onClick={() => [setShowEditCommentModal(true), setToBeEdited(post.id), setEntry(post.entry)]} className="forumQnsCom-DataBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }}><FontAwesomeIcon icon={faEdit} size="lg" /></IonButton>
                        </IonCol>
                        <IonCol className="forumQnsCom-Data ion-text-wrap">
                            {/* <Forum_DeleteComment /> */}
                            <IonButton onClick={() => [setDeleteAlert({ alert: true, loading: false }), setToBeDeleted(post.id)]} className="forumQnsCom-DataBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }}><FontAwesomeIcon icon={faTrash} size="lg" /></IonButton>
                        </IonCol>
                    </IonRow>
                ))}
            </IonGrid>
            <IonModal isOpen={showEditCommentModal} cssClass='post-question-modal' onDidDismiss={() => setShowEditCommentModal(false)}>
                <IonContent>
                    <IonGrid id="postQns-modal-container">
                        <IonRow style={{ paddingTop: '1%' }}>
                            <IonLabel id="postQns-title">Edit Comment</IonLabel>
                        </IonRow>
                        <IonItemDivider />
                        <IonRow id="postQns-modal-inputArea">
                            <IonTextarea rows={11} contentEditable={true} value={entry} onIonChange={e => setEntry(e.detail.value!)} required></IonTextarea>
                        </IonRow>
                        <IonRow className="ion-justify-content-around">
                            <IonButton id="postQns-close-button" fill="outline" onClick={() => setShowEditCommentModal(false)}>CANCEL</IonButton>
                            <IonButton id="postQns-post-button" onClick={() => handleEdit(toBeEdited.toString())}>UPDATE</IonButton>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonModal>

            {/* Delete Comment Alert */}
            <IonAlert
                isOpen={deleteAlert.alert}
                cssClass='alertBox' header={'Delete Comment'}
                message={'Are you sure you want to delete the comment?'}
                buttons={[
                    {
                        text: 'NO',
                        handler: () => setDeleteAlert({ alert: false, loading: false })
                    }, {
                        text: 'YES',
                        handler: () => handleDelete(toBeDeleted.toString())
                    }]}
            ></IonAlert>
            <IonLoading isOpen={deleteAlert.loading || loading} />
        </>
    );
};

export default ForumQuestions;
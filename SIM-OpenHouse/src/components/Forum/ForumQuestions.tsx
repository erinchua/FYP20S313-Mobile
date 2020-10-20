import { IonAlert, IonButton, IonCol, IonContent, IonGrid, IonItemDivider, IonLabel, IonLoading, IonModal, IonRow, IonTextarea } from '@ionic/react';
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

    const [loading, setLoading] = useState(false);
    const [deleteAlert, setDeleteAlert] = useState({ alert: false, loading: false });
    const [showEditQuestionModal, setShowEditQuestionModal] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [entry, setEntry] = useState("");
    const [toBeEdited, setToBeEdited] = useState("");
    const [toBeDeleted, setToBeDeleted] = useState("");

    const handleDelete = async (postId: string) => {
        try {
            setDeleteAlert({ alert: false, loading: true });
            await db.collection('Forum').doc(userID).collection('Questions').doc(postId).update({
                deleted: true
            });
        } catch(e) {
            return console.log(e);
        } finally {
            setDeleteAlert({ alert: false, loading: false });
        }
    }

    const handleEdit = async (postId: string) => {
        try {
            setLoading(true);
            await db.collection('Forum').doc(userID).collection('Questions').doc(postId).update({
                entry: entry
            });
        } catch(e) {
            return console.log(e);
        } finally {
            setShowEditQuestionModal(false);
            setLoading(false);
            setEntry("");
        }
    }

    useEffect(() => {
        return db.collection('Forum').doc(userID).collection('Questions').where("deleted", "==", false).onSnapshot(snaps => {
            const posts: any = [];
            
            snaps.forEach(snap => posts.push(snap.data()));
            setQuestions(posts);
        });
    }, []);

    return (
        <>
            <IonGrid id="forumQnsCom-tableGrid">
                <IonRow id="forumQnsCom-tableHeader" className="ion-justify-content-center">
                    <IonCol className="forumQnsCom-Header ion-text-wrap">My Question</IonCol>
                    <IonCol className="forumQnsCom-Header ion-text-wrap">Posted Date/Time</IonCol>
                    <IonCol className="forumQnsCom-Header ion-text-wrap"><IonRow className="ion-justify-content-center">No. of</IonRow><IonRow className="ion-justify-content-center"><FontAwesomeIcon icon={faCommentDots} size="lg" /></IonRow></IonCol>
                    <IonCol className="forumQnsCom-Header ion-text-wrap">Edit Question</IonCol>
                    <IonCol className="forumQnsCom-Header ion-text-wrap">Delete Question</IonCol>
                </IonRow>
                { questions.map((post: any) => (
                    <IonRow className="ion-justify-content-center" key={post.id}>
                        <IonCol className="forumQnsCom-Data ion-text-wrap">{post.entry}</IonCol>
                        <IonCol className="forumQnsCom-Data ion-text-wrap">{post.dateTime}</IonCol>
                        <IonCol className="forumQnsCom-Data ion-text-wrap">{post.noOfComments}</IonCol>
                        <IonCol className="forumQnsCom-Data ion-text-wrap">
                            {/* <Forum_EditQuestionModal /> */}
                            <IonButton onClick={() => [setShowEditQuestionModal(true), setToBeEdited(post.id)]} className="forumQnsCom-DataBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }}><FontAwesomeIcon icon={faEdit} size="lg" /></IonButton>
                        </IonCol>
                        <IonCol className="forumQnsCom-Data ion-text-wrap">
                            {/* <Forum_DeleteQuestion /> */}
                            <IonButton onClick={() => [setDeleteAlert({ alert: true, loading: false }), setToBeDeleted(post.id)]} className="forumQnsCom-DataBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }}><FontAwesomeIcon icon={faTrash} size="lg" /></IonButton>
                        </IonCol>
                    </IonRow>
                ))}
            </IonGrid>
            <IonModal isOpen={showEditQuestionModal} cssClass='post-question-modal' onDidDismiss={() => setShowEditQuestionModal(false)}>
                <IonContent>
                    <IonGrid id="postQns-modal-container">
                        <IonRow style={{paddingTop: '1%'}}>
                            <IonLabel id="postQns-title">Edit Question</IonLabel>
                        </IonRow>
                        <IonItemDivider />
                        <IonRow id="postQns-modal-inputArea">
                            <IonTextarea rows={11} contentEditable={true} value={entry} onIonChange={e => setEntry(e.detail.value!)} required></IonTextarea>
                        </IonRow>
                        <IonRow className="ion-justify-content-around">
                            <IonButton id="postQns-close-button" fill="outline" onClick={() => setShowEditQuestionModal(false)}>CANCEL</IonButton>
                            <IonButton id="postQns-post-button" onClick={() => handleEdit(toBeEdited.toString())}>UPDATE</IonButton>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonModal>
            <IonAlert
                isOpen={deleteAlert.alert}
                cssClass='alertBox' header={'Delete Question'}
                message={'Are you sure you want to delete the question?'}
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
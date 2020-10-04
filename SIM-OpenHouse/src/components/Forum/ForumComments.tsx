import { IonButton, IonCol, IonGrid, IonItemDivider, IonLabel, IonModal, IonRow, IonTextarea } from '@ionic/react';
import React, { useState } from 'react';

import "../../css/Global.css"
import "../../css/Forum.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ForumQuestions: React.FC = (props) => {

    const [showEditCommentModal, setShowEditCommentModal] = useState(false);

    const userComment = 'Thank you! :)';

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
            <IonRow className="ion-justify-content-center">
                <IonCol className="forumQnsCom-Data ion-text-wrap">Where's the ATM?</IonCol>
                <IonCol className="forumQnsCom-Data ion-text-wrap">{userComment}</IonCol>
                <IonCol className="forumQnsCom-Data ion-text-wrap">22-11-2020, 9.13am</IonCol>
                <IonCol className="forumQnsCom-Data ion-text-wrap">-</IonCol>
                <IonCol className="forumQnsCom-Data ion-text-wrap"><IonButton onClick={() => setShowEditCommentModal(true)} className="forumQnsCom-DataBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }}><FontAwesomeIcon icon={faEdit} size="lg" /></IonButton></IonCol>
                <IonCol className="forumQnsCom-Data ion-text-wrap"><IonButton className="forumQnsCom-DataBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }}><FontAwesomeIcon icon={faTrash} size="lg" /></IonButton></IonCol>
            </IonRow>
        </IonGrid>

        {/* Edit Comment Modal */}
        <IonModal isOpen={showEditCommentModal} cssClass='post-question-modal' onDidDismiss={() => setShowEditCommentModal(false)}>
            <IonGrid id="postQns-modal-container">
                <IonRow style={{paddingTop: '1%'}}>
                    <IonLabel id="postQns-title">Edit Comment</IonLabel>
                </IonRow>
                <IonItemDivider></IonItemDivider>
                <IonRow id="postQns-modal-inputArea">
                    <IonTextarea contentEditable={true} value={userComment}></IonTextarea>
                </IonRow>
                <IonRow className="ion-justify-content-around">
                    <IonButton id="postQns-close-button" fill="outline" onClick={() => setShowEditCommentModal(false)}>CANCEL</IonButton>
                    <IonButton id="postQns-post-button">UPDATE</IonButton>
                </IonRow>
            </IonGrid>
        </IonModal>
        </>
    );
};

export default ForumQuestions;
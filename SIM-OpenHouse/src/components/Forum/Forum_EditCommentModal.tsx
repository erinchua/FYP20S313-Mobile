import { IonButton, IonGrid, IonItemDivider, IonLabel, IonModal, IonRow, IonTextarea } from '@ionic/react';
import React, { useState } from 'react';

import "../../css/Global.css"
import "../../css/Forum.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

const Forum_EditCommentModal: React.FC = () => {

    const [showEditCommentModal, setShowEditCommentModal] = useState(false);
    const userComment = 'Thank you! :)';

    return (
        <>
        <IonModal isOpen={showEditCommentModal} cssClass='post-question-modal' onDidDismiss={() => setShowEditCommentModal(false)}>
            <IonGrid id="postQns-modal-container">
                <IonRow style={{paddingTop: '1%'}}>
                    <IonLabel id="postQns-title">Edit Comment</IonLabel>
                </IonRow>
                <IonItemDivider></IonItemDivider>
                <IonRow id="postQns-modal-inputArea">
                    <IonTextarea contentEditable={true} value={userComment} required></IonTextarea>
                </IonRow>
                <IonRow className="ion-justify-content-around">
                    <IonButton id="postQns-close-button" fill="outline" onClick={() => setShowEditCommentModal(false)}>CANCEL</IonButton>
                    <IonButton id="postQns-post-button">UPDATE</IonButton>
                </IonRow>
            </IonGrid>
        </IonModal>

        <IonButton onClick={() => setShowEditCommentModal(true)} className="forumQnsCom-DataBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }}><FontAwesomeIcon icon={faEdit} size="lg" /></IonButton>        
        </>
    );
};

export default Forum_EditCommentModal;
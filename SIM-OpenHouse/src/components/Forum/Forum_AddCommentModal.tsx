import { IonButton, IonGrid, IonItemDivider, IonLabel, IonModal, IonRow, IonText, IonTextarea } from '@ionic/react';
import React, { useState } from 'react';

import "../../css/Global.css"
import "../../css/Forum.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';

const Forum_AddCommentModal: React.FC = () => {

    const [showAddCommentModal, setShowAddCommentModal] = useState(false);

    return (
        <>
        <IonModal isOpen={showAddCommentModal} cssClass='post-question-modal' onDidDismiss={() => setShowAddCommentModal(false)}>
            <IonGrid id="postQns-modal-container">
                <IonRow style={{paddingTop: '1%'}}>
                    <IonLabel id="postQns-title">Add Comment</IonLabel>
                </IonRow>
                <IonItemDivider></IonItemDivider>
                <IonRow id="postQns-modal-inputArea">
                    <IonTextarea contentEditable={true} required></IonTextarea>
                </IonRow>
                <IonRow className="ion-justify-content-around">
                    <IonButton id="postQns-close-button" fill="outline" onClick={() => setShowAddCommentModal(false)}>CANCEL</IonButton>
                    <IonButton id="postQns-post-button">COMMENT</IonButton>
                </IonRow>
            </IonGrid>
        </IonModal>

        <IonButton id="forum-addCommentBtn" size="small" onClick={() => setShowAddCommentModal(true)}><FontAwesomeIcon icon={faComment} size="sm"/><IonText style={{marginLeft: '5%', fontSize: '90%'}}>Add Comment</IonText></IonButton>
        </>
    );
};

export default Forum_AddCommentModal;
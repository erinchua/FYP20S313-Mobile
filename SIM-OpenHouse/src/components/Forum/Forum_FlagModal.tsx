import { IonButton, IonGrid, IonItemDivider, IonLabel, IonModal, IonRow, IonTextarea } from '@ionic/react';
import React, { useState } from 'react';

import "../../css/Global.css"
import "../../css/Forum.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

const Forum_FlagModal: React.FC = () => {

    const [showFlagModal, setShowFlagModal] = useState(false);

    return (
        <>
        <IonModal isOpen={showFlagModal} cssClass='post-question-modal' onDidDismiss={() => setShowFlagModal(false)}>
            <IonGrid id="postQns-modal-container">
                <IonRow style={{paddingTop: '1%'}}>
                    <IonLabel id="postQns-title">Report Post</IonLabel>
                </IonRow>
                <IonItemDivider></IonItemDivider>
                <IonRow id="postQns-modal-inputArea">
                    <IonTextarea contentEditable={true} required placeholder="Type your reason for reporting here..."></IonTextarea>
                </IonRow>
                <IonRow className="ion-justify-content-around">
                    <IonButton id="postQns-close-button" fill="outline" onClick={() => setShowFlagModal(false)}>CANCEL</IonButton>
                    <IonButton id="postQns-post-button">REPORT</IonButton>
                </IonRow>
            </IonGrid>
        </IonModal>

        <IonButton onClick={() => setShowFlagModal(true)} id="forum-question-flagBtn" size="small"><FontAwesomeIcon icon={faFlag} size="sm"/></IonButton>
        </>
    );
};

export default Forum_FlagModal;
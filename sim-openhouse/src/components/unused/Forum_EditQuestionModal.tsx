import { IonButton, IonContent, IonGrid, IonItemDivider, IonLabel, IonModal, IonRow, IonTextarea } from '@ionic/react';
import React, { useState } from 'react';

import "../../css/Global.css"
import "../../css/Forum.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

const Forum_EditQuestionModal: React.FC = () => {

    const [showEditQuestionModal, setShowEditQuestionModal] = useState(false);
    const userQuestion = 'Wheres the ATM?';

    return (
        <>
        <IonModal isOpen={showEditQuestionModal} cssClass='post-question-modal' onDidDismiss={() => setShowEditQuestionModal(false)}>
            <IonContent>
                <IonGrid id="postQns-modal-container">
                    <IonRow style={{paddingTop: '1%'}}>
                        <IonLabel id="postQns-title">Edit Question</IonLabel>
                    </IonRow>
                    <IonItemDivider></IonItemDivider>
                    <IonRow id="postQns-modal-inputArea">
                        <IonTextarea rows={11} contentEditable={true} value={userQuestion} required></IonTextarea>
                    </IonRow>
                    <IonRow className="ion-justify-content-around">
                        <IonButton id="postQns-close-button" fill="outline" onClick={() => setShowEditQuestionModal(false)}>CANCEL</IonButton>
                        <IonButton id="postQns-post-button">UPDATE</IonButton>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonModal>

        <IonButton onClick={() => setShowEditQuestionModal(true)} className="forumQnsCom-DataBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }}><FontAwesomeIcon icon={faEdit} size="lg" /></IonButton>
        </>
    );
};

export default Forum_EditQuestionModal;
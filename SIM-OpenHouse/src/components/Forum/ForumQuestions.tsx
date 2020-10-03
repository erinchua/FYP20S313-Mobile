import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonItemDivider, IonLabel, IonModal, IonPage, IonPopover, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonText, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';

import "../../css/Global.css"
import "../../css/Forum.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ForumQuestions: React.FC = () => {

    const [showEditQuestionModal, setShowEditQuestionModal] = useState(false);

    const userQuestion = 'Wheres the ATM?';

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
            <IonRow className="ion-justify-content-center">
                <IonCol className="forumQnsCom-Data ion-text-wrap">Where's the ATM?</IonCol>
                <IonCol className="forumQnsCom-Data ion-text-wrap">21-11-2020, 10.00am</IonCol>
                <IonCol className="forumQnsCom-Data ion-text-wrap">1</IonCol>
                <IonCol className="forumQnsCom-Data ion-text-wrap"><IonButton onClick={() => setShowEditQuestionModal(true)} className="forumQnsCom-DataBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }}><FontAwesomeIcon icon={faEdit} size="lg" /></IonButton></IonCol>
                <IonCol className="forumQnsCom-Data ion-text-wrap"><IonButton className="forumQnsCom-DataBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }}><FontAwesomeIcon icon={faTrash} size="lg" /></IonButton></IonCol>
            </IonRow>
        </IonGrid>

        {/* Edit Question Modal */}
        <IonModal isOpen={showEditQuestionModal} cssClass='post-question-modal' onDidDismiss={() => setShowEditQuestionModal(false)}>
            <IonGrid id="postQns-modal-container">
                <IonRow style={{paddingTop: '1%'}}>
                    <IonLabel id="postQns-title">Edit Question</IonLabel>
                </IonRow>
                <IonItemDivider></IonItemDivider>
                <IonRow id="postQns-modal-inputArea">
                    <IonTextarea contentEditable={true} value={userQuestion}></IonTextarea>
                </IonRow>
                <IonRow className="ion-justify-content-around">
                    <IonButton id="postQns-close-button" fill="outline" onClick={() => setShowEditQuestionModal(false)}>CANCEL</IonButton>
                    <IonButton id="postQns-post-button">UPDATE</IonButton>
                </IonRow>
            </IonGrid>
        </IonModal>
        </>
    );
};

export default ForumQuestions;
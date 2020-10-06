import { IonAlert, IonButton, IonCol, IonContent, IonGrid, IonIcon, IonItemDivider, IonLabel, IonModal, IonPage, IonPopover, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonText, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';

import "../../css/Global.css"
import "../../css/Forum.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Forum_EditQuestionModal from './Forum_EditQuestionModal';
import Forum_DeleteQuestion from './Forum_DeleteQuestion';

const ForumQuestions: React.FC = () => {

    const [showDeleteAlert, setShowDeleteAlert] = useState(false);


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
                <IonCol className="forumQnsCom-Data ion-text-wrap"><Forum_EditQuestionModal /></IonCol>
                <IonCol className="forumQnsCom-Data ion-text-wrap"><Forum_DeleteQuestion /></IonCol>
            </IonRow>
        </IonGrid>        

        </>
    );
};

export default ForumQuestions;
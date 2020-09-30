import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonPage, IonPopover, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';

import "../../css/Global.css"
import "../../css/Forum.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ForumQuestions: React.FC = () => {

    return (
        <>
        <IonGrid id="forumQnsCom-tableGrid">
            <IonRow id="forumQnsCom-tableHeader" className="ion-justify-content-center">
                <IonCol className="forumQnsCom-Data ion-text-wrap">Question</IonCol>
                <IonCol className="forumQnsCom-Data ion-text-wrap">My Comment</IonCol>
                <IonCol className="forumQnsCom-Data ion-text-wrap">Posted Date/Time</IonCol>
                <IonCol className="forumQnsCom-Data ion-text-wrap"><IonRow className="ion-justify-content-center">No. of</IonRow><IonRow className="ion-justify-content-center"><FontAwesomeIcon icon={faCommentDots} size="lg" /></IonRow></IonCol>
                <IonCol className="forumQnsCom-Data ion-text-wrap">Edit Comment</IonCol>
                <IonCol className="forumQnsCom-Data ion-text-wrap">Delete Comment</IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol className="forumQnsCom-Data ion-text-wrap">Where's the ATM?</IonCol>
                <IonCol className="forumQnsCom-Data ion-text-wrap">Thank you! :)</IonCol>
                <IonCol className="forumQnsCom-Data ion-text-wrap">22-11-2020, 9.13am</IonCol>
                <IonCol className="forumQnsCom-Data ion-text-wrap">-</IonCol>
                <IonCol className="forumQnsCom-Data ion-text-wrap"><IonButton className="forumQnsCom-DataBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }}><FontAwesomeIcon icon={faEdit} size="lg" /></IonButton></IonCol>
                <IonCol className="forumQnsCom-Data ion-text-wrap"><IonButton className="forumQnsCom-DataBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }}><FontAwesomeIcon icon={faTrash} size="lg" /></IonButton></IonCol>
            </IonRow>
        </IonGrid>
        </>
    );
};

export default ForumQuestions;
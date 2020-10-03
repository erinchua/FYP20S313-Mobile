import { IonButton, IonCol, IonGrid, IonLabel, IonRow, IonText } from '@ionic/react';
import React from 'react';

import '../../css/Global.css';
import '../../css/Forum.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

const Forum_CommentReply: React.FC = () => {

    return (
        <>
        <IonGrid className="forum-container" id="comment-reply-container">
            <IonRow>
                <IonLabel>
                    <IonText id="comment-text">Thank you! :)</IonText>
                </IonLabel>
            </IonRow>
            <IonRow className="ion-justify-content-end">
                <IonText id="comment-userName">~ John Tan</IonText>
            </IonRow>
            <IonRow className="ion-align-items-end ion-justify-content-start" id="comment-detail-container">
                <IonCol size="1" className="forum-col ion-align-self-end">
                    <FontAwesomeIcon icon={faClock} size="sm"/>
                </IonCol>
                <IonCol size="10" className="forum-col ion-align-self-end">
                    <IonText id="comment-details">22-11-2020, 9.13am</IonText>
                </IonCol>
                <IonCol size="1" className="ion-align-self-end forum-col">
                    <IonButton id="comment-flagBtn" size="small"><FontAwesomeIcon icon={faFlag} size="sm"/></IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
        </>
    );
};

export default Forum_CommentReply;
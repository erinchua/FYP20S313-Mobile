import { IonAlert, IonCol, IonGrid, IonRow } from '@ionic/react';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';

import "../../css/Global.css"
import "../../css/Forum.css"
import Forum_EditCommentModal from './Forum_EditCommentModal';
import Forum_DeleteComment from './Forum_DeleteComment';

const ForumQuestions: React.FC = (props) => {

    const [showEditCommentModal, setShowEditCommentModal] = useState(false);
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);

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
                <IonCol className="forumQnsCom-Data ion-text-wrap"><Forum_EditCommentModal /></IonCol>
                <IonCol className="forumQnsCom-Data ion-text-wrap"><Forum_DeleteComment/></IonCol>
            </IonRow>
        </IonGrid>        

        {/* Delete Comment Alert */}
        <IonAlert isOpen={showDeleteAlert} onDidDismiss={() => setShowDeleteAlert(false)} cssClass='alertBox' header={'Delete Comment'} message={'Are you sure you want to delete the comment?'} buttons={['NO', 'YES']}></IonAlert>
        </>
    );
};

export default ForumQuestions;
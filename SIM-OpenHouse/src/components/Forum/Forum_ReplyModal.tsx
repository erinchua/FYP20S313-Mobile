import { IonButton, IonGrid, IonItemDivider, IonLabel, IonModal, IonRow, IonText, IonTextarea } from '@ionic/react';
import React, { useState } from 'react';

import "../../css/Global.css"
import "../../css/Forum.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';

const Forum_ReplyModal: React.FC<{disabled: boolean}> = (props) => {

    const [showReplyCommentModal, setShowReplyCommentModal] = useState(false);

    return (
        <>
        <IonModal isOpen={showReplyCommentModal} cssClass='post-question-modal' onDidDismiss={() => setShowReplyCommentModal(false)}>
            <IonGrid id="postQns-modal-container">
                <IonRow style={{paddingTop: '1%'}}>
                    <IonLabel id="postQns-title">Reply to Comment</IonLabel>
                </IonRow>
                <IonItemDivider></IonItemDivider>
                <IonRow id="postQns-modal-inputArea">
                    <IonTextarea contentEditable={true} required></IonTextarea>
                </IonRow>
                <IonRow className="ion-justify-content-around">
                    <IonButton id="postQns-close-button" fill="outline" onClick={() => setShowReplyCommentModal(false)}>CANCEL</IonButton>
                    <IonButton id="postQns-post-button">COMMENT</IonButton>
                </IonRow>
            </IonGrid>
        </IonModal>

        <IonButton disabled={props.disabled} onClick={() => setShowReplyCommentModal(true)} id="comment-replyBtn" size="small"><FontAwesomeIcon icon={faCommentDots} size="sm"/><IonText style={{marginLeft: '5%'}}>Reply</IonText></IonButton>        </>
    );
};

export default Forum_ReplyModal;
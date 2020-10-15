import { IonButton, IonContent, IonGrid, IonItemDivider, IonLabel, IonModal, IonRow, IonText, IonTextarea } from '@ionic/react';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';

import "../../css/Global.css"
import "../../css/Forum.css"

const Forum_ReplyModal: React.FC<{ disabled: boolean, commenter: string }> = (props) => {

    const [showReplyCommentModal, setShowReplyCommentModal] = useState(false);

    const handleReply = async () => {

    }

    return (
        <>
        <IonModal isOpen={showReplyCommentModal} cssClass='post-question-modal' onDidDismiss={() => setShowReplyCommentModal(false)}>
            <IonContent>
                <IonGrid id="postQns-modal-container">
                    <IonRow style={{paddingTop: '1%'}}>
                        <IonLabel id="postQns-title">Reply to {props.commenter}'s comment</IonLabel>
                    </IonRow>
                    <IonItemDivider />
                    <IonRow id="postQns-modal-inputArea">
                        <IonTextarea rows={11} contentEditable={true} required></IonTextarea>
                    </IonRow>
                    <IonRow className="ion-justify-content-around">
                        <IonButton id="postQns-close-button" fill="outline" onClick={() => setShowReplyCommentModal(false)}>CANCEL</IonButton>
                        <IonButton id="postQns-post-button" onClick={handleReply}>COMMENT</IonButton>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonModal>

        <IonButton onClick={() => setShowReplyCommentModal(true)} id="comment-replyBtn" size="small" disabled={props.disabled}><FontAwesomeIcon icon={faCommentDots} size="sm"/><IonText style={{marginLeft: '5%'}}>Reply</IonText></IonButton>        </>
    );
};

export default Forum_ReplyModal;
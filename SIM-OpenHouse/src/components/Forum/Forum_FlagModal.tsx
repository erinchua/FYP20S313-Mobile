import { IonButton, IonContent, IonGrid, IonItemDivider, IonLabel, IonLoading, IonModal, IonRow, IonTextarea } from '@ionic/react';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

import "../../css/Global.css"
import "../../css/Forum.css"
import { db } from '../../firebase';

const Forum_FlagModal: React.FC<{ disabled: boolean, postId: number, postType: string, offender: string, reportedBy: string }> = props => {

    const [loading, setLoading] = useState(false);
    const [showFlagModal, setShowFlagModal] = useState(false);
    const [reason, setReason] = useState("");

    const handleReport = async () => {
        try {
            setLoading(true);
            const time = new Date();
            
            const docRef = db.collection('Forum').doc(props.reportedBy).collection('Reports').doc((time.getTime()).toString());
            await docRef.set({
                id: +docRef.id,
                entry: reason,
                postId: +props.postId,
                postType: props.postType,
                offender: props.offender,
                reportedBy: props.reportedBy,
                dateTime: time.toLocaleString().replace(/\//g, "-")
            });
        } catch (e) {
            return console.log(e);
        } finally {
            setLoading(false);
            setShowFlagModal(false);
            setReason("");
        }
    }

    return (
        <>
        <IonModal isOpen={showFlagModal} cssClass='post-question-modal' onDidDismiss={() => setShowFlagModal(false)}>
            <IonContent>
                <IonGrid id="postQns-modal-container">
                    <IonRow style={{paddingTop: '1%'}}>
                        <IonLabel id="postQns-title">Report Post</IonLabel>
                    </IonRow>
                    <IonItemDivider />
                    <IonRow id="postQns-modal-inputArea">
                        <IonTextarea value={reason} onIonChange={e => setReason(e.detail.value!)} rows={11} contentEditable={true} required placeholder="Type your reason for reporting here..."></IonTextarea>
                    </IonRow>
                    <IonRow className="ion-justify-content-around">
                        <IonButton id="postQns-close-button" fill="outline" onClick={() => setShowFlagModal(false)}>CANCEL</IonButton>
                        <IonButton id="postQns-post-button" onClick={handleReport}>REPORT</IonButton>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonModal>

        <IonButton onClick={() => setShowFlagModal(true)} id="forum-question-flagBtn" size="small" disabled={props.disabled}><FontAwesomeIcon icon={faFlag} size="sm"/></IonButton>
        <IonLoading isOpen={loading} />
        </>
    );
};

export default Forum_FlagModal;
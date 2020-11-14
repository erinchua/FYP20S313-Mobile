import { IonButton, IonContent, IonGrid, IonItemDivider, IonLabel, IonLoading, IonModal, IonRow, IonTextarea } from '@ionic/react';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

import "../../css/Global.css";
import "../../css/Forum.css";
import { db } from '../../firebase';
import { useAuth } from '../../modules/auth';

const Forum_FlagModal: React.FC<{ disabled: boolean, postId: number, postType: string, postContent: string, offender: string, offenderId: string }> = props => {
    const { userID } = useAuth();

    const [loading, setLoading] = useState(false);
    const [showFlagModal, setShowFlagModal] = useState(false);
    const [reason, setReason] = useState("");

    const handleReport = async () => {
        try {
            setLoading(true);

            if (reason !== "") {
                const time = Date.now();
                let name: string;

                await db.collection('Students').doc(userID).get().then((doc: any) => {
                    name = doc.data().firstName + " " + doc.data().lastName;
                });

                const batch = db.batch();

                const reportRef = db.collection('Forum').doc(userID).collection('Reports').doc(time.toString());
                batch.set(reportRef, {
                    id: +reportRef.id,
                    entry: reason,
                    postId: +props.postId,
                    postType: props.postType,
                    postContent: props.postContent,
                    offender: props.offender,
                    offenderId: props.offenderId,
                    reporter: name!,
                    reporterId: userID,
                    dateTime: new Date(time).toLocaleString().replace(/\//g, "-")
                });

                if (props.postType === "Question") {
                    const questionRef = db.collection('Forum').doc(props.offenderId).collection('Questions').doc(props.postId.toString());
                    batch.update(questionRef, {
                        reported: true
                    });
                }
                if (props.postType === "Comment" || props.postType === "Reply") {
                    const questionRef = db.collection('Forum').doc(props.offenderId).collection('Comments').doc(props.postId.toString());
                    batch.update(questionRef, {
                        reported: true
                    });
                }

                await batch.commit();
            }
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
                        <IonRow style={{ paddingTop: '1%' }}>
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

            <IonButton onClick={() => setShowFlagModal(true)} id="forum-question-flagBtn" size="small" disabled={props.disabled}><FontAwesomeIcon icon={faFlag} size="sm" /></IonButton>
            <IonLoading isOpen={loading} />
        </>
    );
};

export default Forum_FlagModal;
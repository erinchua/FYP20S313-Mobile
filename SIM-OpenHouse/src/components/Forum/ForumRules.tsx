import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonPage, IonPopover, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';

import "../../css/Global.css"
import "../../css/Forum.css"
import { informationCircleOutline } from 'ionicons/icons';

const ForumRules: React.FC = () => {

    const [showPopover, setShowPopover] = useState(false);
   
    return (
        <>
        <IonPopover isOpen={showPopover} cssClass='my-custom-class' onDidDismiss={e => setShowPopover(false)}>
            <IonGrid>
                <IonRow id="popover-infoDetails">
                    <IonText>1. Remain respectful of other users at all times.</IonText>
                </IonRow>
                <IonRow id="popover-infoDetails">
                    <IonText>2. Please do not spam. The definition of spam is an irrelevant or advertising post. Any post that is considered spam will be removed.</IonText>
                </IonRow>
                <IonRow id="popover-infoDetails">
                    <IonText>3. Do not post offensive posts, links or images.</IonText>
                </IonRow>
                <IonRow id="popover-infoDetails">
                    <IonText>4. Please do not post threads text in all CAPITALS since this is considered to be shouting.</IonText>
                </IonRow>
                <IonRow id="popover-infoDetails">
                    <IonText>Anyone who breaks any of the above rules will be banned from the forum. Let's keep this forum safe for everyone.</IonText>
                </IonRow>
            </IonGrid>
        </IonPopover>

        <IonButton id="forum-informationBtn" size="small" onClick={() => setShowPopover(true)}><IonIcon size="sm" icon={informationCircleOutline} /></IonButton>
        </>
    );
};

export default ForumRules;
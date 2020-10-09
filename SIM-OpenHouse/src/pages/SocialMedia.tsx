import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonSegment, IonSegmentButton, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';

import '../css/Global.css';
import '../css/SocialMedia.css';
import TopNav from '../components/TopNav';

const SocialMedia: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Social Media" route="/u/home" backarrow={ true } hamburger={ true }/>
            </IonHeader>
            <IonContent fullscreen className="socialMedia-content">
            
            </IonContent>
        </IonPage>
    );
};

export default SocialMedia;
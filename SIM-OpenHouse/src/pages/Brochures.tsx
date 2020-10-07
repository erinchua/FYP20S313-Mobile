import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonSegment, IonSegmentButton } from '@ionic/react';
import React, { useState } from 'react';

import '../css/Global.css';
import '../css/Brochures.css';
import TopNav from '../components/TopNav';

const Brochures: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Brochures" route="/u/home" backarrow={ true } hamburger={ true }/>
            </IonHeader>
            <IonContent fullscreen className="brochures-content">
                
            </IonContent>
        </IonPage>
    );
};

export default Brochures;
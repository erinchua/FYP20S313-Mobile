import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRouterLink, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import '../../css/Global.css';
import '../../css/StudentLife.css';
import TopNav from '../../components/TopNav';

const Scholarships: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Scholarships" route="/u/studentLife@SIM" backarrow={ true } hamburger={ true }/>
            </IonHeader>
            <IonContent fullscreen id="studentLifeMain-content">
                
            </IonContent>
        </IonPage>
    );
};

export default Scholarships;
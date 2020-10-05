import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRouterLink, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import '../../css/Global.css';
import '../../css/StudentLife.css';
import TopNav from '../../components/TopNav';

const StudentLifeMain: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Student Life@SIM" route="/u/home" backarrow={ true } hamburger={ true }/>
            </IonHeader>
            <IonContent fullscreen id="studentLifeMain-content">
                
            </IonContent>
        </IonPage>
    );
};

export default StudentLifeMain;
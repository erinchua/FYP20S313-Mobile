import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRouterLink, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import '../../css/Global.css';
import '../../css/StudentLife.css';
import TopNav from '../../components/TopNav';

const StudentCare: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Student Care" route="/u/studentLife@SIM" backarrow={ true } hamburger={ true }/>
            </IonHeader>
            <IonContent fullscreen id="studentLifeMain-content">
                
            </IonContent>
        </IonPage>
    );
};

export default StudentCare;
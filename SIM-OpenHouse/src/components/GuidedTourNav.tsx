import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonIcon, IonMenuButton, IonContent} from '@ionic/react';
import '../css/Global.css';
import '../css/GuidedTourNav.css';
import TopNavBAMenu from './TopNavBAMenu';

const GuidedTourNav: React.FC = () => {

    return(
        <>
        <TopNavBAMenu title="Guided Tours" route="/u/openHouseMain"/>
        <IonToolbar id="guidedTours-schedule">
            <IonTitle id="guidedTours-schedule-text">Schedule</IonTitle>
        </IonToolbar>
        </>
    );
}

export default GuidedTourNav;
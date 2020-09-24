import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonIcon, IonMenuButton, IonContent} from '@ionic/react';
import '../css/Global.css';
import '../css/GuidedTourNav.css';
import TopNav from './TopNav';

const GuidedTourNav: React.FC = () => {

    return(
        <>
        <TopNav title="Guided Tours" route="/u/openHouseMain" backarrow={true} hamburger={true}/>
        <IonToolbar id="guidedTours-schedule">
            <IonTitle id="guidedTours-schedule-text">Schedule</IonTitle>
        </IonToolbar>
        </>
    );
}

export default GuidedTourNav;
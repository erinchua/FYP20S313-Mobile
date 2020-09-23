import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonLabel, IonPage, IonRouterLink, IonRouterOutlet, IonRow, IonTabs, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import "../css/Global.css";
import "../css/GuidedTours.css";
import TopNavBAMenu from '../components/TopNavBAMenu';
import GuidedTourNav from '../components/GuidedTourNav';

const GuidedTours: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <GuidedTourNav/>
            </IonHeader>
    
            <IonContent fullscreen>
                <IonGrid id="guidedTours-ionRowCol">
                    <IonRow className="ion-justify-content-center" id="guidedTours-ionRowCol">
                        <IonCol size="6" id="guidedTours-ionRowCol">
                            <IonRouterLink routerLink="/u/openHouseMain/guidedTours-day1">
                                <IonToolbar id="guidedTours-schedule-day1">
                                    <IonLabel id="guidedTours-schedule-day1-text">Day 1: 21 Nov 2020 (Sat)</IonLabel>
                                </IonToolbar>
                            </IonRouterLink>
                        </IonCol>
                        <IonCol size="6" id="guidedTours-ionRowCol">
                            <IonRouterLink routerLink="/u/openHouseMain/guidedTours-day2">
                                <IonToolbar id="guidedTours-schedule-day2">
                                    <IonLabel id="guidedTours-schedule-day2-text">Day 2: 22 Nov 2020 (Sun)</IonLabel>
                                </IonToolbar>
                            </IonRouterLink>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default GuidedTours;
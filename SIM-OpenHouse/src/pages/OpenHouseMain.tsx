import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import React from 'react';
import "../css/Global.css";
import "../css/OpenHouseMain.css";


const OpenHouseMain: React.FC = () => {

    return (
        <IonPage>
          <IonHeader>
            <IonToolbar id="toolBar">
              <IonButtons slot="start">
                <IonButton routerLink="/home">
                  <IonIcon slot="icon-only" icon={arrowBackOutline} id="backBtn" />
                </IonButton>
              </IonButtons>
    
              <IonTitle id="title">Login</IonTitle>
            </IonToolbar>
          </IonHeader>
    
          <IonContent fullscreen>
            
          </IonContent>
        </IonPage>
      );
};

export default OpenHouseMain;
import {  IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';

const GenQR: React.FC = () => {
  const generateQR = async () => {

  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Generate QR</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonButton onClick={generateQR}>Generate QR</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default GenQR;

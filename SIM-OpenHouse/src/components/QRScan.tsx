import {  IonButton, IonCol, IonGrid, IonRow } from '@ionic/react';
import React from 'react';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import firebase from 'firebase';

import '../css/Global.css';
import '../css/OpenHouseActivities.css';
import { db } from '../firebase';
import { useAuth } from '../auth';

const QRScan: React.FC = () => {
  const { userID } = useAuth();

  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    console.log(`Barcode data: ${data.text}`);

    let increment = firebase.firestore.FieldValue.increment(0);

    switch (data.text) {
      case "plusTen":
        increment = firebase.firestore.FieldValue.increment(10);
        break;
      case "minusTen":
        increment = firebase.firestore.FieldValue.increment(-10);
        break;
      default:
    }
    await db.collection('Students').doc(userID).update({
      points: increment,
    })
  };

  return (
        <>
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol>
              <IonButton color="dark" expand="block" onClick={openScanner}>Scan barcode</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        </>
  );
};

export default QRScan;

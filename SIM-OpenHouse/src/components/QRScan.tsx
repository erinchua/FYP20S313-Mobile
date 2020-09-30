import {  IonButton, IonCol, IonGrid, IonRow } from '@ionic/react';
import React from 'react';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import '../css/Global.css';
import '../css/OpenHouseActivities.css';

const QRScan: React.FC = () => {

  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    console.log(`Barcode data: ${data.text}`);
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

import {  IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
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
        <IonButton onClick={openScanner}>Scan barcode</IonButton>
        </>
  );
};

export default QRScan;

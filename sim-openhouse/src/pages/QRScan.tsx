import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonAlert } from '@ionic/react';
import React, { useState } from 'react';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import firebase from 'firebase';

import '../css/Global.css';
import '../css/OpenHouseActivities.css';
import TopNav from '../components/TopNav';
import { db } from '../firebase';
import { useAuth } from '../modules/auth';

const QRScan: React.FC = () => {
  const { userID } = useAuth();
  const [qrErrorAlert, setQrErrorAlert] = useState(false);

  const openScanner = async () => {
    const data = await BarcodeScanner.scan();

    if (!isNaN(+data.text)) {
      const increment = firebase.firestore.FieldValue.increment(+data.text);

      await db.collection('Games').doc(userID).update({
        points: increment,
      });
    } 
    else {
      setQrErrorAlert(true);
    }
  };

  return (
    <React.Fragment>

      {/* Change Password Fail Alert */}
      <IonAlert
        isOpen={qrErrorAlert}
        onDidDismiss={() => setQrErrorAlert(false)}
        cssClass='alertBox'
        mode='md'
        header={'Invalid QR Code'}
        message={'Please scan a valid QR code!'}
        buttons={[
          {
            text: 'Close',
            handler: () => {
              setQrErrorAlert(false);
            }
          }
        ]}
      ></IonAlert>

      <IonPage>
        <IonHeader>
          <TopNav title="QR Scanner" route="/u/home" backarrow={ true } hamburger={ true }/>
        </IonHeader>

        <IonContent fullscreen className="QR-content">
          <IonGrid>
            <IonRow className="ion-justify-content-center">
              <IonCol>
                <IonButton color="dark" expand="block" onClick={openScanner}>Scan QR Code</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default QRScan;

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import '../css/ForgetPassword.css';

const ForgetPassword: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>ForgetPassword</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Blank</IonTitle>
            </IonToolbar>
          </IonHeader>
          <ExploreContainer />
        </IonContent>
      </IonPage>
    );
  };
  
  export default ForgetPassword;
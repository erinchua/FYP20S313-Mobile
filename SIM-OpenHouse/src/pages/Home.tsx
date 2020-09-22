import { IonButton, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import { auth } from '../firebase';

import '../css/Global.css';
import '../css/Home.css';
import TopNavWithoutBA from '../components/TopNavWithoutBA';

const Home: React.FC = () => {
  const handleLogout = async () => {
    await auth.signOut();
    sessionStorage.clear();
  };

  return (
    <IonPage>
      <TopNavWithoutBA title="Home" />

      <IonContent fullscreen>
        <IonGrid>
          <IonRow class="ion-justify-content-center">
            <IonButton type="submit" onClick={ handleLogout }>LOGOUT</IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;

import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Redirect } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';

import { useAuth } from '../auth';
import '../css/Global.css';
import '../css/Home.css';

const Tab1: React.FC = () => {
  const { loggedIn } = useAuth();

  if (!loggedIn)
    return <Redirect to="/main" />

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

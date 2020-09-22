import React, { useState } from 'react';
import { IonButton, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { Redirect } from 'react-router';
import { useForm  } from "react-hook-form";

import { useAuth } from '../auth';
import { auth } from '../firebase';

import '../css/Global.css';
import '../css/Home.css';
import TopNavWithoutBA from '../components/TopNavWithoutBA';

const Home: React.FC = () => {
  const { loggedIn } = useAuth();

  const { handleSubmit } = useForm();

  const handleLogout = async (data: any) => {
    console.log(data);
    await auth.signOut();
    sessionStorage.clear();
  }

  console.log(loggedIn);

  if (!loggedIn){
    return <Redirect to="/" />
  }

  return (
    <IonPage>
      <TopNavWithoutBA title="Home" />

      <IonContent fullscreen>
        <form onSubmit={handleSubmit(handleLogout)}>
          <IonGrid>
            <IonRow class="ion-justify-content-center">
              <IonButton type="submit">LOGOUT</IonButton>
            </IonRow>
          </IonGrid>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Home;

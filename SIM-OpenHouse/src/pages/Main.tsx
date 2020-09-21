import React from 'react';
import { IonContent, IonPage, IonImg, IonGrid, IonRow, IonButton, IonRouterLink } from '@ionic/react';
import { Redirect } from 'react-router';

import { useAuth } from '../auth';
import '../css/Main.css';
import '../css/Global.css';
import logo from '../img/main/SIMGE-White.png';

const Main: React.FC = () => {
  const { loggedIn } = useAuth();

  if (loggedIn)
    return <Redirect to="/home" />

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid className="TopHalf">
            <IonRow>
              <IonImg src={ logo }></IonImg>
            </IonRow>
            <IonRow>
              <p id="heading">SIM Open House</p>
            </IonRow>
            <IonRow>
              <p id="information">Date: 21 - 22 November 2020, Saturday - Sunday</p>
            </IonRow>
            <IonRow>
              <p id="information">Time: 9am - 5pm</p>
            </IonRow>
        </IonGrid>

        <IonGrid className="BottomHalf">
          <IonRow class="ion-justify-content-center">
            <IonButton size="large" id="registrationBtn" routerLink="/registration">REGISTER</IonButton>
          </IonRow>
          <IonRow class="ion-justify-content-center">
            <IonButton size="large" id="loginBtn" routerLink="/login">LOGIN</IonButton>
          </IonRow>
          <IonRow class="ion-justify-content-center">
            <IonRouterLink color="medium" routerLink="/forgetPassword1">Forget Password?</IonRouterLink>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Main;

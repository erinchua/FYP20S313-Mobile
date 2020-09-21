import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonInput } from '@ionic/react';
import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { useForm  } from "react-hook-form";

import { useAuth } from '../auth';
import { auth } from '../firebase';

import { arrowBackOutline } from "ionicons/icons";
import '../css/Login.css';
import '../css/Global.css';

const Login: React.FC = () => {
  const { loggedIn } = useAuth();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [status, setStatus] = useState({ loading: false, error: false });

  const { reset } = useForm();

  const handleLogin = async() => {
    try {
      setStatus({ loading: true, error: false });
      await auth.signInWithEmailAndPassword(email, pass);
      setStatus({ loading: false, error: false });
    } catch(e) {
      setStatus({ loading: false, error: true });
      console.log(e);
    }
  }

  //if (loggedIn)
  //  return <Redirect to="/u/success" /> // replace this with post-login page

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar id="toolBar">
          <IonButtons slot="start">
            <IonButton routerLink="/main" onClick={() => {reset()}}>
              <IonIcon slot="icon-only" icon={arrowBackOutline} id="backBtn" />
            </IonButton>
          </IonButtons>

          <IonTitle id="title">Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <form onSubmit={handleLogin}>
          <IonGrid>
            <IonRow>
              <IonCol>
              <IonInput className="inputField" type="text" placeholder="Email" name="email"></IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
              <IonInput className="inputField" type="password" placeholder="Password" name="password"></IonInput>
              </IonCol>
            </IonRow>

            <IonRow class="ion-justify-content-center">
              <IonButton id="loginButton" type="submit">LOGIN</IonButton>
            </IonRow>
          </IonGrid>
        </form>
      </IonContent>
    </IonPage>
  );
};
  
  export default Login;
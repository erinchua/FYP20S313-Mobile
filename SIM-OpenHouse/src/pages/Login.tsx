import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonInput, IonRouterLink, IonItemDivider, IonLoading, IonAlert, IonText } from '@ionic/react';
import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { useForm  } from "react-hook-form";
import { arrowBackOutline } from "ionicons/icons";

import { useAuth } from '../auth';
import { auth } from '../firebase';
import firebase from 'firebase';
import '../css/Login.css';
import '../css/Global.css';

import TopNavBA from '../components/TopNavBA';

const Login: React.FC = () => {
  const { loggedIn } = useAuth();

  //const [email, setEmail] = useState('');
  //const [pass, setPass] = useState('');
  const [status, setStatus] = useState({ loading: false, error: false });
  const [showAlert, setShowAlert] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const handleLogin = async (data: any) => {
    //console.log(data);
    try {
      setStatus({ loading: true, error: false });

      await auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
        return auth.signInWithEmailAndPassword(data.email, data.password);
      }).then(user => {
        return user.user?.getIdToken();
      }).then((idToken: any) => {
        //console.log(idToken);
        sessionStorage.setItem('token:', idToken);
      });

      /* await auth.signInWithEmailAndPassword(data.email, data.password).then((user) => {
        return user.user?.getIdToken().then((idToken) => {
          sessionStorage.setItem('token: ', idToken);
        });
      }); */
      setStatus({ loading: false, error: false });
    } catch(e) {
      setStatus({ loading: false, error: true });
      console.log(e);
    };
  };

  if (loggedIn)
    return <Redirect to="/u/home" />;

  return (
    <IonPage>
      <TopNavBA title="Login" route="/main" />

      <IonContent fullscreen>
        <form onSubmit={handleSubmit(handleLogin)}>
          <IonGrid>
            <IonRow>
              <IonCol>
              <IonInput className="inputField" type="text" placeholder="Email" name="email" ref={register} style={{marginTop: "5%"}}/>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
              <IonInput className="inputField" type="password" placeholder="Password" name="password" ref={register} />
              </IonCol>
            </IonRow>

            <IonRow class="ion-justify-content-center">
              <IonButton id="login_loginBtn" type="submit" onClick={() => setShowAlert(true)}>LOGIN</IonButton>
            </IonRow>
            <IonRow class="ion-justify-content-center">
              <IonRouterLink color="medium" routerLink="/forgetPassword1">Forget Password?</IonRouterLink>
            </IonRow>
            <IonItemDivider></IonItemDivider>
            <IonText color="medium"><div className="ion-text-center" style={{marginTop: "5%", fontWeight: "bold"}}>OR</div></IonText>
          </IonGrid>
          {status.error && <IonAlert isOpen={showAlert} onDidDismiss={() => setShowAlert(false)} cssClass='alertBox' header={'Error Occured!'} message={'Please enter a valid email and password.'} buttons={['OK']}></IonAlert>}
        </form>
        <IonLoading isOpen={status.loading} message={'Loading...'} />
      </IonContent>
    </IonPage>
  );
};
  
  export default Login;
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { useAuth } from '../auth';
import { auth } from '../firebase';
//import ExploreContainer from '../components/ExploreContainer';
import '../css/Login.css';

const Login: React.FC = () => {
  const { loggedIn } = useAuth();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [status, setStatus] = useState({ loading: false, error: false });

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
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer /> */}
      </IonContent>
    </IonPage>
  );
};
  
  export default Login;
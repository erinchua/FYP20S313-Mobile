import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Main from './pages/Main';
import ForgetPassword1 from './pages/ForgetPassword1';
import ForgetPassword2 from './pages/ForgetPassword2';
import Registration from './pages/Registration';
import Login from './pages/Login';
import firebase from './firebase';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/main" component={Main} exact={true} />
        <Route path="/registration" component={Registration} exact={true} />
        <Route path="/login" component={Login} exact={true} />
        <Route path="/forgetPassword1" component={ForgetPassword1} exact={true} />
        <Route path="/forgetPassword2" component={ForgetPassword2} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/main" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

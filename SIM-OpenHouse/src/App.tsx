import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonLoading, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Main from './pages/Main';
import ForgetPassword1 from './pages/ForgetPassword1';
import ForgetPassword2 from './pages/ForgetPassword2';
import ForgetPassword3 from './pages/ForgetPassword3';
import Registration from './pages/Registration';
import Login from './pages/Login';
import AppU from './AppU';
import Test from './pages/Test';

import { AuthContext, useAuthInit } from './auth';

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

const App: React.FC = () => {
  const { loading, auth } = useAuthInit();

  if (loading)
    return <IonLoading isOpen />;

  return (
    <IonApp>
      {/* <AuthContext.Provider value={ auth }> ignore this error */}
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/main" component={Main} exact={true} />
            <Route path="/registration" component={Registration} exact={true} />
            <Route path="/login" component={Login} exact={true} />
            <Route path="/forgetPassword1" component={ForgetPassword1} exact={true} />
            <Route path="/forgetPassword2" component={ForgetPassword2} exact={true} />
            <Route path="/forgetPassword3" component={ForgetPassword3} exact={true} />
            <Route path="/home" render={() => <Redirect to="/u/home"/>} />
            <Route path="/openHouseMain" render={() => <Redirect to="/u/openHouseMain"/>} />
            <Route path="/openHouseMain/guidedTours-day1" render={() => <Redirect to="/u/openHouseMain/guidedTours-day1"/>} />

            <Route path="/u" component={AppU} exact={false} />
            <Route exact path="/" render={() => <Redirect to="/main" />} />
          </IonRouterOutlet>
        </IonReactRouter>
      {/* </AuthContext.Provider> */}
    </IonApp>
  )
};

export default App;

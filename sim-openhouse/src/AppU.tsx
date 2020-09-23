import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {  IonRouterOutlet } from '@ionic/react';
import Home from './pages/Home';
import OpenHouseMain from './pages/OpenHouseMain';
import GuidedTours from './pages/GuidedTours';

import { useAuth } from './auth';

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
  const { loggedIn } = useAuth();

  if (!loggedIn)
    return <Redirect to="/" />

  return (
    <IonRouterOutlet>
      <Route path="/u/home" component={Home} exact={true} />
      <Route path="/u/openHouseMain" component={OpenHouseMain} exact={true} />
      <Route path="/u/openHouseMain/guidedTours-day1" component={GuidedTours} exact={true} />
    </IonRouterOutlet>
  )
};

export default App;

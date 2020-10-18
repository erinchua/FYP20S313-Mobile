import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';

import Home from './pages/Home';
import OpenHouseMain from './pages/OpenHouseProgrammes/OpenHouseMain';
import ProgrammeTalks from './pages/OpenHouseProgrammes/ProgrammeTalks';
import ProgTalkInfo from './components/OpenHouseProgrammes/ProgTalkInfo';
import GuidedTours from './pages/OpenHouseProgrammes/GuidedTours';
import OpenHouseActivities from './pages/OpenHouseProgrammes/OpenHouseActivities';
import MySchedule from './pages/MySchedule';
import Forum from './pages/Forum/Forum';
import ForumUser from './pages/Forum/ForumUser';
import ForumViewQuestion from './pages/Forum/ForumViewQuestion';
import ForumSearch from './pages/Forum/ForumSearch';
import CampusFacilitiesMap from './pages/CampusFacilitiesMap';
import UsefulInfoMain from './pages/UsefulInfo/UsefulInfoMain';
import AdmissionApplication from './pages/UsefulInfo/AdmissionApplication';
import ContactInfo from './pages/UsefulInfo/ContactInfo';
import OpenHouseFeedback from './pages/UsefulInfo/OpenHouseFeedback';
import CommonFaqs from './pages/UsefulInfo/CommonFaqs';
import GettingToSimHq from './pages/GettingToSimHq';
import MyProfile from './pages/MyProfile';
import StudentLife from './pages/StudentLife@SIM/StudentLifeMain';
import Clubs_Councils_Routing from './pages/StudentLife@SIM/Clubs_Councils_Routing';
import StudentCare from './pages/StudentLife@SIM/StudentCare';
import Scholarships from './pages/StudentLife@SIM/Scholarships';
import Bursary from './pages/StudentLife@SIM/Bursary';
import Announcements from './pages/Announcements';
import Settings from './pages/Settings';
import StudySIM_Routing from './pages/Study@SIM/Study@SIM_Routing';
import Brochures from './pages/Brochures';
import QRScan from './pages/QRScan';
import SocialMedia from './pages/SocialMedia';

import { useAuth } from './modules/auth';

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

  if (!loggedIn) return <Redirect to="/main" />;

  return (
    <IonRouterOutlet>
      <Route path="/u/home" component={Home} exact={true} />
      <Route path="/u/openHouseMain" component={OpenHouseMain} exact={true} />
      <Route path="/u/openHouseMain/guidedTours" component={GuidedTours} exact={true} />
      <Route path="/u/mySchedule" component={MySchedule} exact={true} />
      <Route path="/u/openHouseMain/programmeTalks" component={ProgrammeTalks} exact={true} />
      <Route path="/u/openHouseMain/programmeTalks/progTalkInfo" component={ProgTalkInfo} exact={true} />
      <Route path="/u/openHouseMain/openHouseActivities" component={OpenHouseActivities} exact={true} />
      <Route path="/u/forum" component={Forum} exact={true} />
      <Route path="/u/forumUser" component={ForumUser} exact={true} />
      <Route path="/u/forumSearch/:keyword" component={ForumSearch} exact={true} />
      <Route path="/u/forumViewQuestion/:id/:uid" component={ForumViewQuestion} exact={true} />
      <Route path="/u/campusFacilitiesMap" component={CampusFacilitiesMap} exact={true} />
      <Route path="/u/usefulInfoMain" component={UsefulInfoMain} exact={true} />
      <Route path="/u/usefulInfoMain/admissionApplication" component={AdmissionApplication} exact={true} />
      <Route path="/u/usefulInfoMain/contactInfo" component={ContactInfo} exact={true} />
      <Route path="/u/usefulInfoMain/openHouseFeedback" component={OpenHouseFeedback} exact={true} />
      <Route path="/u/usefulInfoMain/commonFAQs" component={CommonFaqs} exact={true} />
      <Route path="/u/gettingToSIMHQ" component={GettingToSimHq} exact={true} />
      <Route path="/u/myProfile" component={MyProfile} exact={true} />
      <Route path="/u/studentLife@SIM" component={StudentLife} exact={true} />
      <Route path="/u/studentLife@SIM/clubs&councils@SIM" render={props => <Clubs_Councils_Routing {...props} />} />
      <Route path="/u/studentLife@SIM/studentCare" component={StudentCare} exact={true} />
      <Route path="/u/studentLife@SIM/scholarships" component={Scholarships} exact={true} />
      <Route path="/u/studentLife@SIM/bursary" component={Bursary} exact={true} />
      <Route path="/u/announcements" component={Announcements} exact={true} />
      <Route path="/u/settings" component={Settings} exact={true} />
      <Route path="/u/study@SIMMain" render={props => <StudySIM_Routing {...props} />} />
      <Route path="/u/brochures" component={Brochures} exact={true} />
      <Route path="/u/QRScan" component={QRScan} exact={true} />
      <Route path="/u/socialMedia" component={SocialMedia} exact={true} />

    </IonRouterOutlet>
  )
};

export default App;

import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonLoading, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import Main from "./pages/Main";
import ForgetPassword1 from "./pages/ForgetPassword1";
import ForgetPassword2 from "./pages/ForgetPassword2";
import ForgetPassword3 from "./pages/ForgetPassword3";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import AppU from "./AppU";
import SingleSignIn from "./pages/SingleSignIn";

import { AuthContext, useAuthInit } from "./auth";
import "./css/TopNav.css";
import "./css/Global.css";
import "./css/Menu.css";

/* Temp files */
//import Test from "./temp/Test";
import VincentTest from "./temp/VincentTest";
//import QRscan from "./components/QRScan";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import Menu from "./components/Menu";

const App: React.FC = () => {
  const { loading, auth } = useAuthInit();
  const [renderTopBar, setRenderTopBar] = useState<Boolean>(false);
  const [backArrow, setBackArrow] = useState<Boolean>(false);
  const [title, setTitle] = useState<String>("");
  const [route, setRoute] = useState<String>("");
  const [hamburger, setHamburger] = useState<Boolean>(false);

  const toggleMenuOptions = (backArrowData: Boolean, titleData: String, routeData: String, hamburgerData: Boolean, renderTopBarData: Boolean) => {
    setRenderTopBar(renderTopBarData);
    setBackArrow(backArrowData);
    setTitle(titleData);
    setHamburger(hamburgerData);
    setRoute(routeData);
  };

  if (loading) return <IonLoading isOpen />;

  console.log(auth);

  return (
    <IonApp>
      <AuthContext.Provider value={auth!}>
        {" "}
        {/*ignore this error */}
        {/* { renderTopBar ? 
        <TopNav backarrow={backArrow} title= { title }  route={route} hamburger={hamburger}/> : ''
        } */}
        <Menu />
        <IonReactRouter>
          <IonRouterOutlet>
            {/* <Route path="/main" exact={true} render={() => {toggleMenuOptions(false, "", "", false, false); <Redirect to="/main"/<}}/>
            <Route path="/registration" exact={true} render={() => {toggleMenuOptions(true, "Registration", "", false, true); return <Registration/>;}}/>
            <Route path="/login" exact={true} render={() => {toggleMenuOptions(true, "Login", "", false, true); return <Login/>;}}/> */}
            <Route path="/main" component={Main} exact={true} />
            <Route path="/registration" component={Registration} exact={true} />
            <Route path="/login" component={Login} exact={true} />
            <Route path="/singleSignIn" component={SingleSignIn} exact={true} />
            <Route path="/forgetPassword1" component={ForgetPassword1} exact={true} />
            <Route path="/forgetPassword2" component={ForgetPassword2} exact={true} />
            <Route path="/forgetPassword3" component={ForgetPassword3} exact={true} />
            <Route path="/home" render={() => <Redirect to="/u/home" />}/>
            <Route path="/openHouseMain" render={() => <Redirect to="/u/openHouseMain" />}/>
            <Route path="/progTalkInfo" render={() => <Redirect to="/u/openHouseMain/programmeTalks/progTalkInfo" />} />
            <Route path="/openHouseMain/guidedTours" render={() => <Redirect to="/u/openHouseMain/guidedTours" />} />

            {/* Test components */}
            {/* <Route path="/u/home" component={Home} exact={true}/>
            <Route path="/u/openHouseMain" component={OpenHouseMain} exact={true}/>
            <Route path="/u/openHouseMain/guidedTours" component={GuidedTours} exact={true} />
            <Route path="/u/mySchedule" component={MySchedule} exact={true} />
            <Route path="/u/openHouseMain/programmeTalks" component={ProgrammeTalks} />
            <Route path="/u/openHouseMain/openHouseActivities" component={OpenHouseActivities} exact={true} /> */}
            <Route path="/vincenttest" component={VincentTest} exact={true} />

            {/* <Route path="/test" component={Test} exact={false} />
            <Route path="/u/qrscan" component={QRscan} exact={true} /> */}

            <Route path="/u" component={AppU} exact={false} />
            <Route exact path="/" render={() => <Redirect to="/main" />} />
          </IonRouterOutlet>
        </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  );
};

export default App;

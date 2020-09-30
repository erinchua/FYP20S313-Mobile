import { IonContent, IonMenuButton, IonPage } from '@ionic/react';
import React from 'react';

import "../css/Global.css";
import "../css/MySchedule.css";

import TopNav from '../components/TopNav';
import Menu from '../components/Menu';

const MySchedule: React.FC = () => {

    return (
        <IonPage id="main">
            <TopNav title="Home" route='/u/home' backarrow={ false } hamburger = { true }/>
            <IonMenuButton menu="menuID"></IonMenuButton>

            <IonContent>
                <h2>Content here</h2>
            </IonContent>
        </IonPage>
    );
};

export default MySchedule;
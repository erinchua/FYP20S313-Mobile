import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonItemDivider, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonRouterLink, IonRow, IonSplitPane, IonText, IonToolbar } from '@ionic/react';
import React from 'react';

import "../css/Global.css";
import "../css/MySchedule.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReadme } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faCalendarAlt, faComments, faBell, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faHome, faMapSigns, faMapMarkedAlt, faInfoCircle, faPhotoVideo, faBookOpen, faHands, faCog, faQrcode, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

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
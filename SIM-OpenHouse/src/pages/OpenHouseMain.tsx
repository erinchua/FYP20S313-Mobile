import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRouterLink, IonRow, IonText, IonToolbar } from '@ionic/react';
import React from 'react';

import "../css/Global.css";
import "../css/OpenHouseMain.css";
import gif from '../img/openHouseProgrammes/Open House Programmes.gif';
import { arrowBackOutline } from 'ionicons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faMapPin, faStar } from '@fortawesome/free-solid-svg-icons';
import TopNavBAMenu from '../components/TopNavBAMenu';
import Menu from '../components/Menu';

const OpenHouseMain: React.FC = () => {

    return (
        <IonPage>
            <TopNavBAMenu title="Open House Programmes" route="/u/home" backarrow={ true } hamburger = { true }/>

            <IonContent fullscreen>
                <Menu />
                <IonImg src={ gif }></IonImg>
                <IonGrid>
                    <IonRow className="ion-justify-content-around" id="openHouseMainRow">
                        <IonCol size="3"> 
                            <IonRouterLink routerLink="/u/openHouseMain/programmeTalks" color="dark">
                                <IonRow className="ion-justify-content-center">
                                    <FontAwesomeIcon icon={faChalkboardTeacher} size="3x"/>
                                </IonRow>
                                <IonRow className="ion-justify-content-center">
                                    <IonText id="openHouseMainText">Programme Talks</IonText>
                                </IonRow>
                            </IonRouterLink>
                        </IonCol>
                        <IonCol size="3">
                            <IonRouterLink routerLink="/u/openHouseMain/guidedTours" routerDirection="forward" color="dark">
                                <IonRow className="ion-justify-content-center">
                                    <FontAwesomeIcon icon={faMapPin} size="3x"/>
                                </IonRow>
                                <IonRow className="ion-justify-content-center">
                                    <IonText id="openHouseMainText">Guided Tours</IonText>
                                </IonRow> 
                            </IonRouterLink>   
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-justify-content-around" id="openHouseMainRow">
                        <IonCol size="3"> 
                            <IonRouterLink routerLink="/u/openHouseMain/openHouseActivities" color="dark">
                                <IonRow className="ion-justify-content-center">
                                    <FontAwesomeIcon icon={faStar} size="3x"/>
                                </IonRow>
                                <IonRow className="ion-justify-content-center">
                                    <IonText id="openHouseMainText">Open House Activities</IonText>
                                </IonRow>
                            </IonRouterLink>
                        </IonCol>
                        <IonCol size="3"></IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default OpenHouseMain;
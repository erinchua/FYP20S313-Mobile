import { IonCol, IonContent, IonGrid, IonImg, IonPage, IonRouterLink, IonRow, IonText } from '@ionic/react';
import React from 'react';

import "../../css/Global.css";
import "../../css/OpenHouseMain.css";
import gif from '../img/openHouseProgrammes/Open House Programmes.gif';
import { arrowBackOutline } from 'ionicons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faMapPin, faStar } from '@fortawesome/free-solid-svg-icons';
import TopNav from '../../components/TopNav';
import Menu from '../../components/Menu';

const OpenHouseMain: React.FC = () => {

    return (
        <IonPage>
            <TopNav title="Open House Programmes" route="/u/home" backarrow={ true } hamburger = { true }/>

            <IonContent fullscreen>
                <IonGrid id="openHouseMain-grid">
                    <IonRow>
                        <IonCol sizeSm="12" className="gifCol">
                            <IonImg src={ gif }></IonImg>
                        </IonCol>
                    </IonRow>

                    <IonRow className="ion-justify-content-around openHouseMainRow">
                        <IonCol sizeSm="4" className="openHouseMainCol"> 
                            <IonRouterLink routerLink="/u/openHouseMain/programmeTalks">
                                <IonRow className="ion-justify-content-center">
                                    <FontAwesomeIcon className="openHouseMain-icons" icon={faChalkboardTeacher} size="2x"/>
                                </IonRow>
                                <IonRow className="ion-justify-content-center">
                                    <IonText id="openHouseMainText">Programme Talks</IonText>
                                </IonRow>
                            </IonRouterLink>
                        </IonCol>
                        <IonCol sizeSm="4" className="openHouseMainCol">
                            <IonRouterLink routerLink="/u/openHouseMain/guidedTours" routerDirection="forward">
                                <IonRow className="ion-justify-content-center">
                                    <FontAwesomeIcon className="openHouseMain-icons" icon={faMapPin} size="2x"/>
                                </IonRow>
                                <IonRow className="ion-justify-content-center">
                                    <IonText id="openHouseMainText">Guided Tours</IonText>
                                </IonRow> 
                            </IonRouterLink>  
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-justify-content-around openHouseMainRow">
                        <IonCol sizeSm="4" className="openHouseMainCol"> 
                            <IonRouterLink routerLink="/u/openHouseMain/openHouseActivities">
                                <IonRow className="ion-justify-content-center">
                                    <FontAwesomeIcon className="openHouseMain-icons" icon={faStar} size="2x"/>
                                </IonRow>
                                <IonRow className="ion-justify-content-center">
                                    <IonText id="openHouseMainText">Open House Activities</IonText>
                                </IonRow>
                            </IonRouterLink>
                        </IonCol>
                        <IonCol sizeSm="4" className="openHouseMainCol"></IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default OpenHouseMain;
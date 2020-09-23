import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRouterLink, IonRow, IonText, IonToolbar } from '@ionic/react';
import React from 'react';

import "../css/Global.css";
import "../css/OpenHouseMain.css";
import TopNavBAMenu from '../components/TopNavBAMenu';
import gif from '../img/openHouseProgrammes/Open House Programmes.gif';
import { arrowBackOutline } from 'ionicons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faMapPin, faStar } from '@fortawesome/free-solid-svg-icons';

const OpenHouseMain: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className="topNav">
                    <TopNavBAMenu title="Open House Programmes" route="/u/home"/>
                </IonToolbar>
            </IonHeader>
    
            <IonContent fullscreen>
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
                            <IonRouterLink routerLink="/u/openHouseMain/guidedTours-day1" routerDirection="forward" color="dark">
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
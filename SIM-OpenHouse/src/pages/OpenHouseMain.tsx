import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Redirect } from 'react-router';

import { useAuth } from '../auth';

import "../css/Global.css";
import "../css/OpenHouseMain.css";
import gif from '../img/openHouseProgrammes/Open House Programmes.gif';
import { arrowBackOutline } from 'ionicons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faMapPin, faStar } from '@fortawesome/free-solid-svg-icons';

const OpenHouseMain: React.FC = () => {

    const { loggedIn } = useAuth();

    if (!loggedIn)
        return <Redirect to="/login" />;

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className="topNav">
                    <IonButtons slot="start">
                        <IonButton routerLink="/u/home">
                            <IonIcon slot="icon-only" icon={arrowBackOutline} className="back_button" />
                        </IonButton>
                    </IonButtons>
                    <IonTitle className="title">Open House Programmes</IonTitle>
                </IonToolbar>
            </IonHeader>
    
            <IonContent fullscreen>
                <IonImg src={ gif }></IonImg>
                <IonGrid>
                    <IonRow className="ion-justify-content-around" id="openHouseMainRow">
                        <IonCol size="3"> 
                            <IonRow className="ion-justify-content-center">
                                <FontAwesomeIcon icon={faChalkboardTeacher} size="3x"/>
                            </IonRow>
                            <IonRow className="ion-justify-content-center">
                                <IonText id="openHouseMainText">Programme Talks</IonText>
                            </IonRow>
                        </IonCol>
                        <IonCol size="3">
                            <IonRow className="ion-justify-content-center">
                                <FontAwesomeIcon icon={faMapPin} size="3x"/>
                            </IonRow>
                            <IonRow className="ion-justify-content-center">
                                <IonText id="openHouseMainText">Guided Tours</IonText>
                            </IonRow>                            
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-justify-content-around" id="openHouseMainRow">
                        <IonCol size="3"> 
                            <IonRow className="ion-justify-content-center">
                                <FontAwesomeIcon icon={faStar} size="3x"/>
                            </IonRow>
                            <IonRow className="ion-justify-content-center">
                                <IonText id="openHouseMainText">Open House Activities</IonText>
                            </IonRow>
                        </IonCol>
                        <IonCol size="3"></IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default OpenHouseMain;
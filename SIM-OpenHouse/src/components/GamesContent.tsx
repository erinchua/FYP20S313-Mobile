import { IonGrid, IonRow, IonCol } from '@ionic/react';
import React from 'react';

import '../css/Global.css';
import '../css/OpenHouseActivities.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GamesContent: React.FC<{day1: any; day2: any}> = props => {

    return (
        <>
        <IonGrid id="gamesContent-tableGrid">
            <IonRow id="gamesContent-tableHeader" className="ion-justify-content-center">
                <IonCol className="gamesContent-Data ion-text-wrap">Booth No.</IonCol>
                <IonCol className="gamesContent-Data ion-text-wrap">Booth Name</IonCol>
                <IonCol className="gamesContent-Data ion-text-wrap">Venue</IonCol>
                <IonCol className="gamesContent-Data ion-text-wrap">Points</IonCol>
                <IonCol className="gamesContent-Data ion-text-wrap">Add to My Schedule</IonCol>
            </IonRow>
            {props.day1 === 'day1' ? 
                <IonRow className="ion-justify-content-center">
                    <IonCol className="gamesContent-Data ion-text-wrap">1</IonCol>
                    <IonCol className="gamesContent-Data ion-text-wrap">Day One</IonCol>
                    <IonCol className="gamesContent-Data ion-text-wrap">Sample</IonCol>
                    <IonCol className="gamesContent-Data ion-text-wrap">Sample</IonCol>
                    <IonCol className="gamesContent-Data ion-text-wrap"><FontAwesomeIcon icon={faPlus} size="1x"/></IonCol>
                </IonRow> : '' 
            }
            {props.day2 === 'day2' ? 
                <IonRow className="ion-justify-content-center">
                    <IonCol className="gamesContent-Data ion-text-wrap">1</IonCol>
                    <IonCol className="gamesContent-Data ion-text-wrap">Day Two</IonCol>
                    <IonCol className="gamesContent-Data ion-text-wrap">Sample</IonCol>
                    <IonCol className="gamesContent-Data ion-text-wrap">Sample</IonCol>
                    <IonCol className="gamesContent-Data ion-text-wrap"><FontAwesomeIcon icon={faPlus} size="1x"/></IonCol>
                </IonRow> : '' 
            }
        </IonGrid>
        </>
    );

};

export default GamesContent;
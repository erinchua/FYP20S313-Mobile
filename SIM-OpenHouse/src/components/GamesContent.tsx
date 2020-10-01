import { IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import React from 'react';

import '../css/Global.css';
import '../css/OpenHouseActivities.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GamesContent: React.FC<{ day1: any; day2: any; gamesActivities: any; openhouseDates: any }> = props => {

    const gamesActivitiesDay1 = props.gamesActivities.filter((activity: any) => {
        return activity.date == props.openhouseDates[0]
    })
    const gamesActivitiesDay2 = props.gamesActivities.filter((activity: any) => {
        return activity.date == props.openhouseDates[1]
    })
    return (
        <>
            <IonGrid id="gamesContent-tableGrid">
                <IonRow id="gamesContent-tableHeader" className="ion-justify-content-center">
                    <IonCol className="gamesContent-Header ion-text-wrap">Booth No.</IonCol>
                    <IonCol className="gamesContent-Header ion-text-wrap">Booth Name</IonCol>
                    <IonCol className="gamesContent-Header ion-text-wrap">Venue</IonCol>
                    <IonCol className="gamesContent-Header ion-text-wrap">Points</IonCol>
                    <IonCol className="gamesContent-Header ion-text-wrap">Add to My Schedule</IonCol>
                </IonRow>
                {props.day1 === 'day1' ?
                    gamesActivitiesDay1.map((activity: any, index: any) => {
                        return (
                            <IonRow className="ion-justify-content-center">
                                <IonCol className="gamesContent-Data ion-text-wrap">{index + 1}</IonCol>
                                <IonCol className="gamesContent-Data ion-text-wrap">{activity.gameBoothName}</IonCol>
                                <IonCol className="gamesContent-Data ion-text-wrap">{activity.venue}</IonCol>
                                <IonCol className="gamesContent-Data ion-text-wrap">{activity.pointsAward}</IonCol>
                                <IonCol className="gamesContent-Data ion-text-wrap"><IonButton className="gamesContent-DataBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }}><FontAwesomeIcon icon={faPlus} size="lg" /></IonButton></IonCol>
                            </IonRow>
                        )
                    })
                    : ''
                }
                {props.day2 === 'day2' ?
                    gamesActivitiesDay2.map((activity: any, index: any) => {
                        return (
                            <IonRow className="ion-justify-content-center">
                                <IonCol className="gamesContent-Data ion-text-wrap">{index + 1}</IonCol>
                                <IonCol className="gamesContent-Data ion-text-wrap">{activity.gameBoothName}</IonCol>
                                <IonCol className="gamesContent-Data ion-text-wrap">{activity.venue}</IonCol>
                                <IonCol className="gamesContent-Data ion-text-wrap">{activity.pointsAward}</IonCol>
                                <IonCol className="gamesContent-Data ion-text-wrap"><IonButton className="gamesContent-DataBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }}><FontAwesomeIcon icon={faPlus} size="lg" /></IonButton></IonCol>
                            </IonRow>
                        )
                    })
                    : ''
                }
            </IonGrid>
        </>
    );

};

export default GamesContent;
import { IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import React from 'react';

import '../../css/Global.css';
import '../../css/OpenHouseActivities.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PerformancesContent: React.FC<{ day1: any; day2: any; performances: any; openhouseDates: any }> = props => {

    const performanceDay1 = props.performances.filter((performance: any) => {
        return performance.date == props.openhouseDates[0]
    })
    const performanceDay2 = props.performances.filter((performance: any) => {
        return performance.date == props.openhouseDates[1]
    })

    return (
        <>
            <IonGrid id="performancesContent-tableGrid">
                <IonRow id="performancesContent-tableHeader" className="ion-justify-content-center">
                    <IonCol className="performancesContent-Header ion-text-wrap">Performance</IonCol>
                    <IonCol className="performancesContent-Header ion-text-wrap">Time</IonCol>
                    <IonCol className="performancesContent-Header ion-text-wrap">Venue</IonCol>
                    <IonCol className="performancesContent-Header ion-text-wrap">Add to My Schedule</IonCol>
                </IonRow>
                {props.day1 === 'day1' ?
                    performanceDay1.map((performance: any) => {
                        return (
                            <IonRow className="ion-justify-content-center" key={performance.id}>
                                <IonCol className="performancesContent-Data ion-text-wrap">{performance.performanceName}</IonCol>
                                <IonCol className="performancesContent-Data ion-text-wrap">{performance.startTime + " to " + performance.endTime}</IonCol>
                                <IonCol className="performancesContent-Data ion-text-wrap">{performance.venue}</IonCol>
                                <IonCol className="performancesContent-Data ion-text-wrap"><IonButton className="performancesContent-DataBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }}><FontAwesomeIcon icon={faPlus} size="lg" /></IonButton></IonCol>
                            </IonRow>
                        )
                    })
                    : ''
                }
                {props.day2 === 'day2' ?
                    performanceDay2.map((performance: any) => {
                        return (
                            <IonRow className="ion-justify-content-center" key={performance.id}>
                                <IonCol className="performancesContent-Data ion-text-wrap">{performance.performanceName}</IonCol>
                                <IonCol className="performancesContent-Data ion-text-wrap">{performance.startTime + " to " + performance.endTime}</IonCol>
                                <IonCol className="performancesContent-Data ion-text-wrap">{performance.venue}</IonCol>
                                <IonCol className="performancesContent-Data ion-text-wrap"><IonButton className="performancesContent-DataBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }}><FontAwesomeIcon icon={faPlus} size="lg" /></IonButton></IonCol>
                            </IonRow>
                        )
                    })
                    : ''
                }
            </IonGrid>
        </>
    );

};

export default PerformancesContent;
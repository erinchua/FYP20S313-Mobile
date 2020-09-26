import { IonGrid, IonRow, IonCol, IonToolbar, IonSegment, IonSegmentButton } from '@ionic/react';
import React, { useState } from 'react';

import '../css/Global.css';
import '../css/OpenHouseActivities.css'

const PerformancesContent: React.FC<{day1: any; day2: any}> = props => {

    const [dayNum, setDayNum] = useState('day1');

    const handleClick = () => {
        setDayNum('day1');
    }

    const handleClick2 = () => {
        setDayNum('day2');
    }

    return (
        <>
        <IonGrid id="performancesContent-ionRowCol">
            <IonRow id="performancesContent-ionRowCol">
                <IonCol id="performancesContent-ionRowCol">
                    <IonToolbar>
                        <IonSegment value="day1" onIonChange={(e) => console.log(`${e.detail.value}`)}>
                            <IonSegmentButton value="day1" onClick={() => handleClick()} className="performancesContent-heading">Day 1: 21 Nov 2020</IonSegmentButton>
                            <IonSegmentButton value="day2" onClick={() => handleClick2()} className="performancesContent-heading">Day 2: 22 Nov 2020</IonSegmentButton>
                        </IonSegment>
                    </IonToolbar>
                </IonCol>
            </IonRow>
        </IonGrid>

        <IonGrid id="performancesContent-tableGrid">
                <IonRow id="performancesContent-tableHeader" className="ion-justify-content-center">
                    <IonCol className="performancesContent-Data ion-text-wrap">Performance</IonCol>
                    <IonCol className="performancesContent-Data ion-text-wrap">Time</IonCol>
                    <IonCol className="performancesContent-Data ion-text-wrap">Venue</IonCol>
                    <IonCol className="performancesContent-Data ion-text-wrap">Add to My Schedule</IonCol>
                </IonRow>
                {props.day1 === "day1" ? 
                    <IonRow className="ion-justify-content-center">
                        <IonCol className="performancesContent-Data ion-text-wrap">1</IonCol>
                        <IonCol className="performancesContent-Data ion-text-wrap">Day One</IonCol>
                        <IonCol className="performancesContent-Data ion-text-wrap">Sample</IonCol>
                        <IonCol className="performancesContent-Data ion-text-wrap">Sample</IonCol>
                    </IonRow> : '' 
                }
                {props.day2 === "day2" ? 
                    <IonRow className="ion-justify-content-center">
                        <IonCol className="performancesContent-Data ion-text-wrap">1</IonCol>
                        <IonCol className="performancesContent-Data ion-text-wrap">Day Two</IonCol>
                        <IonCol className="performancesContent-Data ion-text-wrap">Sample</IonCol>
                        <IonCol className="performancesContent-Data ion-text-wrap">Sample</IonCol>
                    </IonRow> : '' 
                }
            </IonGrid>
        </>
    );

};

export default PerformancesContent;
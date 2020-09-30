import { IonCol, IonContent, IonGrid, IonPage, IonRow, IonSegment, IonSegmentButton, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';


import "../css/Global.css";
import "../css/MySchedule.css";

import TopNav from '../components/TopNav';
import Menu from '../components/Menu';
import MyScheduleContent from '../components/MyScheduleContent';

const MySchedule: React.FC = () => {
    const [dayNum, setDayNum] = useState("day1");

    const handleDayOne = () => {
        setDayNum("day1");
    };
    
    const handleDayTwo = () => {
        setDayNum("day2");
    };

    return (
        <IonPage id="main">
            <TopNav title="My Schedule" route='/u/home' backarrow={ true } hamburger = { true }/>
            
            <IonContent fullscreen={true} className="myScheduleIonContent">
                <IonGrid className="myScheduleGrid">
                    <IonRow className="ion-justify-content-center openHouseDateRow">
                        <IonCol size-sizeSm="6" className="openHouseDateCol">
                            <span className="openHouseDateTitleText">From: </span> 
                            <span className="openHouseDateText">21 November 2020</span> {/* Date is not hardcoded */}
                        </IonCol>
                        <IonCol size-sizeSm="6" className="openHouseDateCol">
                            <span className="openHouseDateTitleText">To: </span> 
                            <span className="openHouseDateText">22 November 2020</span> {/* Date is not hardcoded */}
                        </IonCol>
                    </IonRow>

                    <IonRow className="mySchedule-IonRowCol">
                        <IonToolbar>
                            <IonSegment scrollable value={dayNum} onIonChange={(e) => console.log(`${e.detail.value}`)}>
                                <IonSegmentButton value="day1" onClick={() => handleDayOne()} className="mySchedule-DayTab">
                                    Day 1: 21 Nov 2020  {/* Date is not hardcoded, only Day 1: is */}
                                </IonSegmentButton>
                                
                                <IonSegmentButton value="day2" onClick={() => handleDayTwo()} className="mySchedule-DayTab">
                                    Day 2: 22 Nov 2020  {/* Date is not hardcoded, only Day 2: is */}
                                </IonSegmentButton>
                            </IonSegment>
                        </IonToolbar>
                    </IonRow>
                </IonGrid>

                <MyScheduleContent day1={dayNum} day2={dayNum} />
            </IonContent>
        </IonPage>
    );
};

export default MySchedule;
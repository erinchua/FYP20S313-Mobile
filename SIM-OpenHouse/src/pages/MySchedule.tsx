import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonSegment, IonSegmentButton, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';

import { db } from '../firebase';
import { ScheduleItem, toSchedule } from '../schedule';
import '../css/Global.css';
import '../css/MySchedule.css';

import TopNav from '../components/TopNav';
import Menu from '../components/Menu';
import MyScheduleContent from '../components/MyScheduleContent';
import ProgrammeTalks from './OpenHouseProgrammes/ProgrammeTalks';

const MySchedule: React.FC = () => {
    const [dayNum, setDayNum] = useState("day1");
    const [openhouseDates, setOpenhouseDates] = useState([]);
    const [openhouseProgs, setOpenHouseProgs] = useState<ScheduleItem[]>([]);

    const handleDayOne = () => {
        setDayNum("day1");
    };
    
    const handleDayTwo = () => {
        setDayNum("day2");
    };

    useEffect(() => {
        const dates: any = [];
        const programmeItems: any = [];
    
        db.collection("Openhouse").get().then((snapshot) => {
            snapshot.forEach((doc) => {
                const data = doc.get('day')
                data.forEach((day: any) => { dates.push(day.date) })
            });
            setOpenhouseDates(dates);
        }).catch((error) => console.log(error));
    
        db.collection("ProgrammeTalks").get().then((snapshot) => {
            const items: any = [];
            snapshot.forEach((doc) => {
              const data = doc.data();
              items.push(data);
            });
            const schedule = items.map(toSchedule);
            schedule.forEach((i: any) => programmeItems.push(i));
        }).catch((error) => console.log(error));

        db.collection("GuidedTours").get().then((snapshot) => {
            const items: any = [];
            snapshot.forEach((doc) => {
              const data = doc.data();
              items.push(data);
            });
            const schedule = items.map(toSchedule);
            schedule.forEach((i: any) => programmeItems.push(i));
        }).catch((error) => console.log(error));

        db.collection("Performances").get().then((snapshot) => {
            const items: any = [];
            snapshot.forEach((doc) => {
              const data = doc.data();
              items.push(data);
            });
            const schedule = items.map(toSchedule);
            schedule.forEach((i: any) => programmeItems.push(i));
        }).catch((error) => console.log(error));

        db.collection("GamesActivities").get().then((snapshot) => {
            const items: any = [];
            snapshot.forEach((doc) => {
              const data = doc.data();
              items.push(data);
            });
            const schedule = items.map(toSchedule);
            schedule.forEach((i: any) => programmeItems.push(i));
        }).catch((error) => console.log(error));

        //console.log("progItems", programmeItems);

        setOpenHouseProgs(programmeItems);
    }, []);

    //console.log("openHouseProgs", openhouseProgs);

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="My Schedule" route='/u/home' backarrow={ true } hamburger = { true }/>
            </IonHeader>
            
            <IonContent fullscreen={true} className="myScheduleIonContent">
                <IonGrid className="myScheduleGrid">
                    <IonRow className="ion-justify-content-center openHouseDateRow">
                        <IonCol sizeSm="6" className="openHouseDateCol">
                            <span className="openHouseDateTitleText">From: </span> 
                            <span className="openHouseDateText">21 November 2020</span> {/* Date is not hardcoded */}
                        </IonCol>
                        <IonCol sizeSm="6" className="openHouseDateCol">
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

                <MyScheduleContent day1={dayNum} day2={dayNum} openHouseProgs={openhouseProgs} openhouseDates={openhouseDates} />
            </IonContent>
        </IonPage>
    );
};

export default MySchedule;
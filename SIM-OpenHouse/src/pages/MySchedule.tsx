import { IonCol, IonContent, IonGrid, IonHeader, IonLoading, IonPage, IonRow, IonSegment, IonSegmentButton, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';

import '../css/Global.css';
import '../css/MySchedule.css';
import TopNav from '../components/TopNav';
import MyScheduleContent from '../components/MyScheduleContent';
import { db } from '../firebase';
import { useAuth } from '../modules/auth';
import { ScheduleItem, toSchedule } from '../modules/map';

const MySchedule: React.FC = () => {
    const { userID } = useAuth();

    const [loading, setLoading] = useState(true);
    const [dayNum, setDayNum] = useState("day1");
    const [openhouseDates, setOpenhouseDates] = useState([]);
    const [openHouseProgs, setOpenHouseProgs] = useState<ScheduleItem[]>([]);

    const handleDayOne = () => {
        setDayNum("day1");
    };
    
    const handleDayTwo = () => {
        setDayNum("day2");
    };

    useEffect(() => {
        db.collection('Openhouse').get().then(snapshot => {
            const dates: any = [];

            snapshot.forEach(doc => {
                const data = doc.get('day');

                for (let i = 0; i < Object.keys(data).length; i++) {
                    const day = data[Object.keys(data)[i]];
                    dates.push(day.date);
                }
            });

            setOpenhouseDates(dates);
        }).catch((error) => console.log(error));

        return db.collection('PersonalScheduler').doc(userID).onSnapshot((snapshot: any) => {
            const registered = snapshot.data().registeredProgrammes;
            const scheduleProgs: any = [];

            registered.forEach((item: any) => {
                const itemType = item.split("-");

                switch (itemType[0]) {
                    case "talk":
                        return db.collection('ProgrammeTalks').doc(item).onSnapshot(doc => scheduleProgs.push(doc.data()));
                    case "tour":
                        return db.collection('GuidedTours').doc(item).onSnapshot(doc => scheduleProgs.push(doc.data()));
                    case "performance":
                        return db.collection('Performances').doc(item).onSnapshot(doc => scheduleProgs.push(doc.data()));
                    case "activity":
                        return db.collection('GamesActivities').doc(item).onSnapshot(doc => scheduleProgs.push(doc.data()));
                    default:
                        return;
                }
            });
            
            setTimeout(() => {
                setOpenHouseProgs(scheduleProgs.map(toSchedule));
                setLoading(false);
            }, 500);
        });
    }, []);

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
                            <span className="openHouseDateText">{openhouseDates[0]}</span>
                        </IonCol>
                        <IonCol sizeSm="6" className="openHouseDateCol">
                            <span className="openHouseDateTitleText">To: </span> 
                            <span className="openHouseDateText">{openhouseDates[1]}</span>
                        </IonCol>
                    </IonRow>

                    <IonRow className="mySchedule-IonRowCol">
                        <IonCol sizeSm="12" style={{padding:"0", width:"100%"}}>
                            <IonSegment scrollable value={dayNum} onIonChange={(e) => console.log(`${e.detail.value}`)}>
                                <IonSegmentButton value="day1" onClick={() => handleDayOne()} className="mySchedule-DayTab">
                                    Day 1: {openhouseDates[0]}
                                </IonSegmentButton>
                                
                                <IonSegmentButton value="day2" onClick={() => handleDayTwo()} className="mySchedule-DayTab">
                                    Day 2: {openhouseDates[1]}
                                </IonSegmentButton>
                            </IonSegment>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                <MyScheduleContent day1={dayNum} day2={dayNum} openhouseDates={openhouseDates} openHouseProgs={openHouseProgs} />
                <IonLoading isOpen={loading} />
            </IonContent>
        </IonPage>
    );
};

export default MySchedule;
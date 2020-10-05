import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonSegment, IonSegmentButton, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';

import { db } from '../firebase';
import { useAuth } from '../auth';
import { ScheduleItem, toSchedule } from '../schedule';
import '../css/Global.css';
import '../css/MySchedule.css';

import TopNav from '../components/TopNav';
import Menu from '../components/Menu';
import MyScheduleContent from '../components/MyScheduleContent';

const MySchedule: React.FC = () => {
    const { userID } = useAuth();
    const [dayNum, setDayNum] = useState("day1");
    const [openhouseDates, setOpenhouseDates] = useState([]);
    const [programmeTalks, setProgrammeTalks] = useState<ScheduleItem[]>([]);
    const [guidedTours, setGuidedTours] = useState<ScheduleItem[]>([]);
    const [performances, setPerformances] = useState<ScheduleItem[]>([]);
    const [gamesActivities, setGamesActivities] = useState<ScheduleItem[]>([]);
    const [openHouseProgs, setOpenHouseProgs] = useState<ScheduleItem[]>([]);

    const handleDayOne = () => {
        setDayNum("day1");
    };
    
    const handleDayTwo = () => {
        setDayNum("day2");
    };

    useEffect(() => {
        const dates: any = [];
    
        db.collection('Openhouse').get().then((snapshot) => {
            snapshot.forEach((doc) => {
                const data = doc.get('day')
                data.forEach((day: any) => { dates.push(day.date) })
            });
            setOpenhouseDates(dates);
        }).catch((error) => console.log(error));

        // Have problem
        db.collection('PersonalScheduler').doc(userID).get().then((snapshot: any) => {
            const registered = snapshot.data().registeredProgrammes;
            //const talks: any = [], tours: any = [], perform: any = [], games: any = [];
            const scheduleProgs: any = [];
            registered.forEach((item: any) => {
                const itemType = item.split("-");
                switch (itemType[0]) {
                    case "talk":
                        //console.log(item);
                        db.collection('ProgrammeTalks').doc(item).get().then(doc => scheduleProgs.push(doc.data()));
                        break;
                    case "tour":
                        //db.collection('GuidedTours').doc(item).get().then(doc => scheduleProgs.push(doc.data()));
                        break;
                    case "performance":
                        //db.collection('Performances').doc(item).get().then(doc => scheduleProgs.push(doc.data()));
                        break;
                    case "activity":
                        //db.collection('GamesActivities').doc(item).get().then(doc => scheduleProgs.push(doc.data()));
                        break;
                    default:
                        return;
                }
            });
            console.log(scheduleProgs) // this one returns no value, length is 0
            // setProgrammeTalks(talks.map(toSchedule));
            // setGuidedTours(tours.map(toSchedule));
            // setPerformances(perform.map(toSchedule));
            // setGamesActivities(games.map(toSchedule));
            setOpenHouseProgs(scheduleProgs.map(toSchedule));
        });
    
        // No problem
        db.collection('ProgrammeTalks').get().then(snapshot => {
            const items: any = [];
            snapshot.forEach((doc) => items.push(doc.data()));
            console.log(items) // this one returns a value, length is 6
            return setProgrammeTalks(items.map(toSchedule));
        }).catch(err => console.log(err));;

        /* db.collection('GuidedTours').get().then(snapshot => {
            const items: any = [];
            snapshot.forEach((doc) => items.push(doc.data()));
            return setGuidedTours(items.map(toSchedule));
        }).catch(err => console.log(err));;

        db.collection('Performances').get().then(snapshot => {
            const items: any = [];
            snapshot.forEach((doc) => items.push(doc.data()));
            return setPerformances(items.map(toSchedule));
        }).catch(err => console.log(err));;

        db.collection('GamesActivities').get().then(snapshot => {
            const items: any = [];
            snapshot.forEach((doc) => items.push(doc.data()));
            return setGamesActivities(items.map(toSchedule));
        }).catch(err => console.log(err)); */

    }, []);

    //console.log(programmeTalks)

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
                            <span className="openHouseDateText">{openhouseDates[0]}</span> {/* Date is not hardcoded */}
                        </IonCol>
                        <IonCol sizeSm="6" className="openHouseDateCol">
                            <span className="openHouseDateTitleText">To: </span> 
                            <span className="openHouseDateText">{openhouseDates[1]}</span> {/* Date is not hardcoded */}
                        </IonCol>
                    </IonRow>

                    <IonRow className="mySchedule-IonRowCol">
                        <IonToolbar>
                            <IonSegment scrollable value={dayNum} onIonChange={(e) => console.log(`${e.detail.value}`)}>
                                <IonSegmentButton value="day1" onClick={() => handleDayOne()} className="mySchedule-DayTab">
                                    Day 1: {openhouseDates[0]}  {/* Date is not hardcoded, only Day 1: is */}
                                </IonSegmentButton>
                                
                                <IonSegmentButton value="day2" onClick={() => handleDayTwo()} className="mySchedule-DayTab">
                                    Day 2: {openhouseDates[1]}  {/* Date is not hardcoded, only Day 2: is */}
                                </IonSegmentButton>
                            </IonSegment>
                        </IonToolbar>
                    </IonRow>
                </IonGrid>

                <MyScheduleContent day1={dayNum} day2={dayNum} openhouseDates={openhouseDates} openHouseProgs={[...programmeTalks, ...guidedTours, ...performances, ...gamesActivities]} />
            </IonContent>
        </IonPage>
    );
};

export default MySchedule;
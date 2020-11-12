import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useEffect } from 'react';

import '../../css/Global.css';
import '../../css/GuidedTours.css';
import TopNav from '../../components/TopNav';
import GuidedTourContent from '../../components/OpenHouseProgrammes/GuidedTourContent';
import { db } from "../../firebase";
import { useAuth } from '../../modules/auth';
import { sortTimeAsc } from '../../modules/compare';

const GuidedTours: React.FC = () => {
	const { userID } = useAuth();

    const [dayNum, setDayNum] = useState('day1');
    const [openhouseDates, setOpenhouseDates] = useState([])
    const [guidedTours, setGuidedTours] = useState<any[]>([]);
    const [scheduleItems, setScheduleItems] = useState([]);

    const handleDayOne = () => {
        setDayNum('day1');
    }

    const handleDayTwo = () => {
        setDayNum('day2');
    }
    useEffect(() => {
        const dates: any = [];

        db.collection("Openhouse")
            .get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    const data = doc.get('day')
                    for (var i = 0; i < Object.keys(data).length; i++) {
                        const date = data[Object.keys(data)[i]].date;
                        dates.push(date)
                    }
                });
                setOpenhouseDates(dates);
            })
            .catch((error) => console.log(error));

        db.collection("GuidedTours")
            .get()
            .then((snapshot) => {
                const tours: any = [];
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    tours.push(data);
                });
                setGuidedTours(tours.sort((a: any, b: any) => sortTimeAsc(a.startTime, b.startTime)));
            })
            .catch((error) => console.log(error));

            return db.collection('PersonalScheduler').doc(userID).onSnapshot(snap => {
                setScheduleItems(snap.data()?.registeredProgrammes);
            });
    }, []);
    
    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Guided Tours" route="/u/openHouseMain" backarrow={true} hamburger={true} />
                <IonToolbar id="guidedTours-schedule">
                    <IonTitle id="guidedTours-schedule-text">Schedule</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen id="guidedTours-content">
                <IonGrid id="guidedTours-ionRowCol">
                    <IonRow id="guidedTours-ionRowCol">
                        <IonCol id="guidedTours-ionRowCol">
                            <IonToolbar>
                                <IonSegment scrollable value={dayNum} id="guidedTours-mainHeader">
                                    <IonSegmentButton value="day1" className="guidedTours-heading" onClick={handleDayOne}>Day 1: {openhouseDates[0]}</IonSegmentButton>
                                    <IonSegmentButton value="day2" className="guidedTours-heading" onClick={handleDayTwo}>Day 2: {openhouseDates[1]}</IonSegmentButton>
                                </IonSegment>
                            </IonToolbar>
                        </IonCol>
                    </IonRow>
                    <GuidedTourContent day1={dayNum} day2={dayNum} guidedTours={guidedTours} openhouseDates={openhouseDates} scheduleItems={scheduleItems} />
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default GuidedTours;
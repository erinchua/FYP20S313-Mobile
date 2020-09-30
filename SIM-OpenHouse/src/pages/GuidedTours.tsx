import { IonCol, IonContent, IonGrid, IonPage, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { db } from "../firebase";

import "../css/Global.css";
import "../css/GuidedTours.css";
import TopNav from '../components/TopNav';
import GuidedTourContent from '../components/GuidedTourContent';

const GuidedTours: React.FC = () => {

    const [dayNum, setDayNum] = useState('day1');
    const [openhouseDates, setOpenhouseDates] = useState([])
    const [guidedTours, setGuidedTours] = useState<any[]>([]);

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
                    data.forEach((day: any) => { dates.push(day.date) })
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
                setGuidedTours(tours);
            })
            .catch((error) => console.log(error));

    }, [])
    return (
        <IonPage>
            <TopNav title="Guided Tours" route="/u/openHouseMain" backarrow={true} hamburger={true} />
            <IonToolbar id="guidedTours-schedule">
                <IonTitle id="guidedTours-schedule-text">Schedule</IonTitle>
            </IonToolbar>

            <IonContent fullscreen id="guidedTours-content">
                <IonGrid id="guidedTours-ionRowCol">
                    <IonRow id="guidedTours-ionRowCol">
                        <IonCol id="guidedTours-ionRowCol">
                            <IonToolbar>
                                <IonSegment scrollable value={dayNum} id="guidedTours-mainHeader" onIonChange={(e) => console.log(`${e.detail.value} segment selected`)}>
                                    <IonSegmentButton value="day1" className="guidedTours-heading" onClick={handleDayOne}>Day 1: 21 Nov 2020</IonSegmentButton>
                                    <IonSegmentButton value="day2" className="guidedTours-heading" onClick={handleDayTwo}>Day 2: 22 Nov 2020</IonSegmentButton>
                                </IonSegment>
                            </IonToolbar>
                        </IonCol>
                    </IonRow>
                    <GuidedTourContent day1={dayNum} day2={dayNum} guidedTours={guidedTours} openhouseDates={openhouseDates} />
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default GuidedTours;
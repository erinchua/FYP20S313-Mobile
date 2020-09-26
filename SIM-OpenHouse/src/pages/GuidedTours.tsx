import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import React, { useRef, useState } from 'react';

import "../css/Global.css";
import "../css/GuidedTours.css";
import TopNav from '../components/TopNav';
import GuidedTourContent from '../components/GuidedTourContent';
import Menu from '../components/Menu';

const GuidedTours: React.FC = () => {

    // const [dayNum, setDayNum] = useState('day1');

    // const handleClick = () => {
    //     setDayNum('day1');
    // }

    // const handleClick2 = () => {
    //     setDayNum('day2');
    // }

    // const dayRef = useRef<HTMLIonSegmentButtonElement>(null);
    // const [dayNum, setDayNum] = useState('');
    

    // const handleClick = () => {
    //     if (dayRef.current!.id === 'day1') {
    //         console.log(dayNum);
    //         setDayNum('day1');
    //     } else {
    //         console.log(dayNum);
    //         setDayNum('day2');
    //     }
    // }

    return (
        <IonPage>
            <TopNav title="Guided Tours" route="/u/openHouseMain" backarrow={ true } hamburger={ true } />
            <IonToolbar id="guidedTours-schedule">
                <IonTitle id="guidedTours-schedule-text">Schedule</IonTitle>
            </IonToolbar>
    
            <IonContent fullscreen>
                <IonGrid id="guidedTours-ionRowCol">
                    <IonRow id="guidedTours-ionRowCol">
                        <IonCol id="guidedTours-ionRowCol">
                            <IonToolbar>
                                <IonSegment value="day1" id="guidedTours-mainHeader" onIonChange={(e) => console.log(`${e.detail.value} segment selected`)}>
                                    <IonSegmentButton value="day1" id="day1" ref={dayRef} className="guidedTours-heading" onClick={handleClick}>Day 1: 21 Nov 2020</IonSegmentButton>
                                    <IonSegmentButton value="day2" id="day2" ref={dayRef} className="guidedTours-heading" onClick={handleClick}>Day 2: 22 Nov 2020</IonSegmentButton>
                                </IonSegment>
                            </IonToolbar>
                        </IonCol>
                    </IonRow>
                    <GuidedTourContent day1={dayNum} day2={dayNum}/>
                </IonGrid>

            </IonContent>
        </IonPage>
    );
};

export default GuidedTours;
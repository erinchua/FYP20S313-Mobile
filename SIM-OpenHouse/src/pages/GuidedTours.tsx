import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';

import "../css/Global.css";
import "../css/GuidedTours.css";
import TopNav from '../components/TopNav';
import GuidedTourContent from '../components/GuidedTourContent';
import Menu from '../components/Menu';

const GuidedTours: React.FC = () => {

    const [dayNum, setDayNum] = useState('day1');

    const handleClick = () => {
        setDayNum('day1');
    }

    const handleClick2 = () => {
        setDayNum('day2');
    }

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
                                <IonSegment value="day1" id="guidedTours-mainHeader">
                                    <IonSegmentButton value="day1" className="guidedTours-heading" onClick={ () =>  handleClick()}>Day 1: 21 Nov 2020</IonSegmentButton>
                                    <IonSegmentButton value="day2" className="guidedTours-heading" onClick={ () =>  handleClick2()}>Day 2: 22 Nov 2020</IonSegmentButton>
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
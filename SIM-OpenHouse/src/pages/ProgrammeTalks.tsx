import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRouterLink, IonRow, IonSegment, IonSegmentButton, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useRef, useState } from 'react';

import { auth } from '../firebase';

import '../css/Global.css';
import '../css/ProgrammeTalks.css';

import TopNav from '../components/TopNav'

const ProgrammeTalks: React.FC = () => {
    const [tab, setTab] = useState('schedule');
    const [dayNum, setDayNum] = useState('day1');

    const handleDayOne = () => {
        setDayNum('day1');
    }

    const handleDayTwo = () => {
        setDayNum('day2');
    }

    const handleSchedule = () => {
        setTab('schedule');
    }
    const handleLiveTalks = () => {
        setTab('liveTalks');
    }
    
    const handlePastRec = () => {
        setTab('pastRecordings');
    }


    return(
        <IonPage>
            <TopNav title="Programme Talks" route="/u/openHouseMain" backarrow={ true } hamburger={ true } />
            
            <IonContent fullscreen>
                <IonGrid id="programmeTalksGrid">
                    <IonRow>
                        <IonHeader className="segmentHeader">
                            <IonToolbar className="segmentHeader">
                                <IonSegment scrollable value={tab}>
                                    <IonSegmentButton value="schedule" className="segmentBtn ion-text-wrap" id="progTalkSchedule" onClick={handleSchedule}>Schedule</IonSegmentButton>
                                    <IonSegmentButton value="liveTalks" className="segmentBtn ion-text-wrap" id="progTalkLiveTalk" onClick={handleLiveTalks}>Live Talks</IonSegmentButton>
                                    <IonSegmentButton value="pastRecordings" className="segmentBtn ion-text-wrap" id="progTalkPastRec" onClick={handlePastRec}>Past Recordings</IonSegmentButton>
                                </IonSegment>
                            </IonToolbar>
                        </IonHeader>
                    </IonRow>


                </IonGrid>


            </IonContent>

        </IonPage>

    );
};

export default ProgrammeTalks;
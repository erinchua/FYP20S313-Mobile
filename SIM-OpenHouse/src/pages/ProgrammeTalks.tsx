import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRouterLink, IonRow, IonSegment, IonSegmentButton, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useRef, useState } from 'react';

import { auth } from '../firebase';

import '../css/Global.css';
import '../css/ProgrammeTalks.css';

import TopNav from '../components/TopNav'

const ProgrammeTalks: React.FC = () => {
    const [tab, setTab] = useState('schedule');
    const [dayNum, setDayNum] = useState('day1');

    const tabRef = useRef<HTMLIonSegmentButtonElement>(null);

    const tabClick = () => {
        const tabNo = tabRef.current!.id!;
        if (tabNo == 'progTalkSchedule') {
            console.log(tabNo);
        } else if (tabNo == 'progTalkLiveTalk') {
            console.log(tabNo);
        }
        
    }

    const handleClick = () => {
        setDayNum('day1');
    }

    const handleClick2 = () => {
        setDayNum('day2');
    }

    return(
        <IonPage>
            <TopNav title="Programme Talks" route="/u/openHouseMain" backarrow={ true } hamburger={ true } />
            
            <IonContent fullscreen>
                <IonGrid id="programmeTalksGrid">
                    <IonRow>
                        <IonHeader className="segmentHeader">
                            <IonToolbar className="segmentHeader">
                                <IonSegment value="schedule">
                                    <IonSegmentButton value="schedule" className="segmentBtn" id="progTalkSchedule" ref={tabRef} onClick={tabClick}>Schedule</IonSegmentButton>
                                    <IonSegmentButton value="liveTalks" className="segmentBtn" id="progTalkLiveTalk">Live Talks</IonSegmentButton>
                                    <IonSegmentButton value="pastRecordings" className="segmentBtn" id="progTalkPastRec">Past Recordings</IonSegmentButton>
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
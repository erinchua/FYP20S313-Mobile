import { IonPage, IonContent, IonToolbar, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, IonIcon } from '@ionic/react';
import React, { useState } from 'react';

import TopNav from '../components/TopNav';
import '../css/Global.css';
import '../css/OpenHouseActivities.css';
import { giftOutline, qrCodeOutline } from 'ionicons/icons';
import PerformancesContent from '../components/PerformancesContent';
import GamesContent from '../components/GamesContent';

const OpenHouseActivities: React.FC<{headingTitle: any}> = (props) => {

    const [dayNum, setDayNum] = useState('day1');
    const [headingTitle, setHeadingTitle] = useState('Performances');

    const handleClick = () => {
        setDayNum('day1');
    }

    const handleClick2 = () => {
        setDayNum('day2');
    }

    const handlePerformance = () => {
        setHeadingTitle('Performances');
    }
    const handleGames = () => {
        setHeadingTitle('GamesNActivities');
    }

    return (
        <IonPage>
            <TopNav title="Open House Activities" route="/u/openHouseMain" backarrow={ true } hamburger={ true } />
            
            <IonContent fullscreen>
                {/* Main Heading */}
                <IonGrid className="openHouseActivities-grid">
                    <IonRow className="openHouseActivities-grid">
                        <IonToolbar>
                            <IonSegment scrollable value={headingTitle} onIonChange={(e) => console.log(`${e.detail.value}`)}>
                                <IonCol className="openHouseActivities-grid" size-sizeSm="4">
                                    <IonSegmentButton value="Performances" onClick={handlePerformance} className="openHouseActivities-heading ion-text-wrap">Performances</IonSegmentButton>
                                </IonCol>
                                <IonCol className="openHouseActivities-grid" size-sizeSm="4">
                                    <IonSegmentButton value="GamesNActivities" onClick={handleGames} className="openHouseActivities-heading ion-text-wrap">Games & Activities</IonSegmentButton>
                                </IonCol>
                                <IonCol className="openHouseActivities-grid" size-sizeSm="4">
                                    <IonRow className="openHouseActivities-grid">
                                        <IonCol className="openHouseActivities-grid">
                                            <IonSegmentButton value="Prize" id="openHouseActivities-prizesHeader">
                                                <IonIcon icon={giftOutline} />                                            
                                            </IonSegmentButton>
                                            <IonSegmentButton value="QR" id="openHouseActivities-prizesHeader">
                                                <IonIcon icon={qrCodeOutline} />
                                            </IonSegmentButton>
                                        </IonCol>
                                    </IonRow>
                                </IonCol>
                            </IonSegment>
                        </IonToolbar>
                    </IonRow>
                </IonGrid>
                {headingTitle === 'Performances' ? 
                    <>
                    <IonGrid id="performancesContent-ionRowCol">
                        <IonRow id="performancesContent-ionRowCol">
                            <IonCol id="performancesContent-ionRowCol">
                                <IonToolbar>
                                    <IonSegment scrollable value={dayNum} onIonChange={(e) => console.log(`${e.detail.value}`)}>
                                        <IonSegmentButton value="day1" onClick={() => handleClick()} className="performancesContent-heading">Day 1: 21 Nov 2020</IonSegmentButton>
                                        <IonSegmentButton value="day2" onClick={() => handleClick2()} className="performancesContent-heading">Day 2: 22 Nov 2020</IonSegmentButton>
                                    </IonSegment>
                                </IonToolbar>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <PerformancesContent day1={dayNum} day2={dayNum} />
                    </> : ''
                }
                {headingTitle === 'GamesNActivities' ? 
                    <>
                    <IonGrid id="gamesContent-ionRowCol">
                        <IonRow id="gamesContent-ionRowCol">
                            <IonCol id="gamesContent-ionRowCol">
                                <IonToolbar>
                                    <IonSegment scrollable value={dayNum} onIonChange={(e) => console.log(`${e.detail.value}`)}>
                                        <IonSegmentButton value="day1" onClick={() => handleClick()} className="gamesContent-heading">Day 1: 21 Nov 2020</IonSegmentButton>
                                        <IonSegmentButton value="day2" onClick={() => handleClick2()} className="gamesContent-heading">Day 2: 22 Nov 2020</IonSegmentButton>
                                    </IonSegment>
                                </IonToolbar>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <GamesContent day1={dayNum} day2={dayNum} />
                    </> : ''
                }
                

            </IonContent>
        </IonPage>
    );

};

export default OpenHouseActivities;
import { IonPage, IonContent, IonToolbar, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, IonIcon } from '@ionic/react';
import React, { useState } from 'react';

import TopNav from '../components/TopNav';
import '../css/Global.css';
import '../css/OpenHouseActivities.css';
import { giftOutline, qrCodeOutline } from 'ionicons/icons';
import PerformancesContent from '../components/PerformancesContent';
import GamesContent from '../components/GamesContent';
import PrizesContent from '../components/PrizesContent';
import QRScanner from '../components/QRScan';

const OpenHouseActivities: React.FC<{headingTitle: any}> = (props) => {

    const [dayNum, setDayNum] = useState('day1');
    const [headingTitle, setHeadingTitle] = useState('Performances');

    const handleDayOne = () => {
        setDayNum('day1');
    }

    const handleDayTwo = () => {
        setDayNum('day2');
    }

    const handlePerformance = () => {
        setHeadingTitle('Performances');
    }
    const handleGames = () => {
        setHeadingTitle('GamesNActivities');
    }
    
    const handlePrizes = () => {
        setHeadingTitle('Prizes');
    }

    const handleQr = () => {
        setHeadingTitle('QR');
    }

    return (
        <IonPage>
            <TopNav title="Open House Activities" route="/u/openHouseMain" backarrow={ true } hamburger={ true } />
            
            <IonContent fullscreen id="openHouseActivities-content">
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
                                            <IonSegmentButton value="Prizes" onClick={handlePrizes} id="openHouseActivities-prizesHeader">
                                                <IonIcon icon={giftOutline} />                                            
                                            </IonSegmentButton>
                                            <IonSegmentButton value="QR" onClick={handleQr} id="openHouseActivities-prizesHeader">
                                                <IonIcon icon={qrCodeOutline} />
                                            </IonSegmentButton>
                                        </IonCol>
                                    </IonRow>
                                </IonCol>
                            </IonSegment>
                        </IonToolbar>
                    </IonRow>
                </IonGrid>

                {/* Performances */}
                {headingTitle === 'Performances' ? 
                    <>
                    <IonGrid id="performancesContent-ionRowCol">
                        <IonRow id="performancesContent-ionRowCol">
                            <IonCol id="performancesContent-ionRowCol">
                                <IonToolbar>
                                    <IonSegment scrollable value={dayNum} onIonChange={(e) => console.log(`${e.detail.value}`)}>
                                        <IonSegmentButton value="day1" onClick={() => handleDayOne()} className="performancesContent-heading">Day 1: 21 Nov 2020</IonSegmentButton>
                                        <IonSegmentButton value="day2" onClick={() => handleDayTwo()} className="performancesContent-heading">Day 2: 22 Nov 2020</IonSegmentButton>
                                    </IonSegment>
                                </IonToolbar>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <PerformancesContent day1={dayNum} day2={dayNum} />
                    </> : ''
                }

                {/* Games & Activities */}
                {headingTitle === 'GamesNActivities' ? 
                    <>
                    <IonGrid id="gamesContent-ionRowCol">
                        <IonRow id="gamesContent-ionRowCol">
                            <IonCol id="gamesContent-ionRowCol">
                                <IonToolbar>
                                    <IonSegment scrollable value={dayNum} onIonChange={(e) => console.log(`${e.detail.value}`)}>
                                        <IonSegmentButton value="day1" onClick={() => handleDayOne()} className="gamesContent-heading">Day 1: 21 Nov 2020</IonSegmentButton>
                                        <IonSegmentButton value="day2" onClick={() => handleDayTwo()} className="gamesContent-heading">Day 2: 22 Nov 2020</IonSegmentButton>
                                    </IonSegment>
                                </IonToolbar>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <GamesContent day1={dayNum} day2={dayNum} />
                    </> : ''
                }

                {/* Prizes */}
                {headingTitle === 'Prizes' ? 
                    <>
                    <PrizesContent />
                    </> : ''
                }

                {/* QR Scanner */}
                {headingTitle === 'QR' ? 
                    <QRScanner /> : ''
                }
                
            </IonContent>
        </IonPage>
    );

};

export default OpenHouseActivities;
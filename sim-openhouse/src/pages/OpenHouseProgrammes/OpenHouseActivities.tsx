import { IonPage, IonContent, IonToolbar, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, IonIcon, IonHeader } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { giftOutline, qrCodeOutline } from 'ionicons/icons';

import '../../css/Global.css';
import '../../css/OpenHouseActivities.css';
import PerformancesContent from '../../components/OpenHouseProgrammes/PerformancesContent';
import GamesContent from '../../components/OpenHouseProgrammes/GamesContent';
import PrizesContent from '../../components/OpenHouseProgrammes/PrizesContent';
import TopNav from '../../components/TopNav';
import { db } from '../../firebase'
import { useAuth } from '../../modules/auth';
import { sortNumAlphaAsc, sortTimeAsc } from '../../modules/compare';

const OpenHouseActivities: React.FC<{ headingTitle: any }> = () => {
    const { userID } = useAuth();

    const [dayNum, setDayNum] = useState('day1');
    const [headingTitle, setHeadingTitle] = useState('Performances');
    const [openhouseDates, setOpenhouseDates] = useState([])
    const [performances, setPerformances] = useState<any[]>([]);
    const [gamesActivities, setGamesActivities] = useState<any[]>([]);
    const [prizes, setPrizes] = useState<any[]>([]);
    const [venue, setVenue] = useState([]);
    const [scheduleItems, setScheduleItems] = useState([]);


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

    useEffect(() => {
        db.collection("Openhouse").get().then((snapshot) => {
            const dates: any = [];
            snapshot.forEach((doc) => {
                const data = doc.get('day')
                for (var i = 0; i < Object.keys(data).length; i++) {
                    const date = data[Object.keys(data)[i]].date;
                    dates.push(date)
                }
            });
            setOpenhouseDates(dates);
        }).catch((error) => console.log(error));

        db.collection("Performances").get().then((snapshot) => {
            const performances: any = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                performances.push(data);
            });
            setPerformances(performances.sort((a: any, b: any) => sortTimeAsc(a.startTime, b.startTime)));
        }).catch((error) => console.log(error));

        db.collection("GamesActivities").get().then((snapshot) => {
            const activities: any = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                activities.push(data);
            });
            setGamesActivities(activities.sort((a: any, b: any) => sortNumAlphaAsc(a.boothNumber, b.boothNumber)));
        }).catch((error) => console.log(error));

        db.collection("Prizes").get().then((snapshot) => {
            const prizes: any = [];
            const venue: any = [];

            snapshot.forEach((doc) => {
                const data = doc.data();

                if (doc.id.includes("prize")) {
                    prizes.push(data);
                } else if (doc.id.includes("venue")) {
                    for (let i = 0; i < Object.keys(data.day).length; i++) {
                        const day = data.day[Object.keys(data.day)[i]];
                        venue.push(day);
                    }
                }
            });

            setPrizes(prizes);
            setVenue(venue);
        }).catch((error) => console.log(error));

        return db.collection('PersonalScheduler').doc(userID).onSnapshot(snap => {
            setScheduleItems(snap.data()?.registeredProgrammes);
        });
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Open House Activities" route="/u/openHouseMain" backarrow={true} hamburger={true} />

                {/* Main Heading */}
                <IonGrid className="openHouseActivities-grid">
                    <IonRow className="openHouseActivities-grid">
                        <IonToolbar>
                            <IonSegment scrollable value={headingTitle}>
                                <IonCol className="openHouseActivities-grid" sizeSm="4">
                                    <IonSegmentButton value="Performances" onClick={handlePerformance} className="openHouseActivities-heading ion-text-wrap">Performances</IonSegmentButton>
                                </IonCol>
                                <IonCol className="openHouseActivities-grid" sizeSm="4">
                                    <IonSegmentButton value="GamesNActivities" onClick={handleGames} className="openHouseActivities-heading ion-text-wrap">Games & Activities</IonSegmentButton>
                                </IonCol>
                                <IonCol className="openHouseActivities-grid" sizeSm="4">
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
                {headingTitle === 'Performances' &&
                    <IonToolbar>
                        <IonSegment scrollable value={dayNum}>
                            <IonSegmentButton value="day1" onClick={() => handleDayOne()} className="performancesContent-heading">Day 1: {openhouseDates[0]}</IonSegmentButton>
                            <IonSegmentButton value="day2" onClick={() => handleDayTwo()} className="performancesContent-heading">Day 2: {openhouseDates[1]}</IonSegmentButton>
                        </IonSegment>
                    </IonToolbar>
                }

                {/* Games & Activities */}
                {headingTitle === 'GamesNActivities' &&
                    <IonToolbar>
                        <IonSegment scrollable value={dayNum}>
                            <IonSegmentButton value="day1" onClick={() => handleDayOne()} className="gamesContent-heading">Day 1: {openhouseDates[0]}</IonSegmentButton>
                            <IonSegmentButton value="day2" onClick={() => handleDayTwo()} className="gamesContent-heading">Day 2: {openhouseDates[1]}</IonSegmentButton>
                        </IonSegment>
                    </IonToolbar>
                }
            
            </IonHeader>

            <IonContent fullscreen id="openHouseActivities-content">
                {/* Performances */}
                {headingTitle === 'Performances' &&
                    <PerformancesContent day1={dayNum} day2={dayNum} openhouseDates={openhouseDates} performances={performances} scheduleItems={scheduleItems} />
                }

                {/* Games & Activities */}
                {headingTitle === 'GamesNActivities' &&
                    <GamesContent day1={dayNum} day2={dayNum} openhouseDates={openhouseDates} gamesActivities={gamesActivities} scheduleItems={scheduleItems} />
                }

                {/* Prizes */}
                {headingTitle === 'Prizes' &&
                    <PrizesContent prizes={prizes} venue={venue} />
                }

                {/* QR Scanner */}
                {headingTitle === 'QR' &&
                    <Redirect to="/u/QRScan" from="/u/openHouseMain/openHouseActivities" /> 
                }

            </IonContent>
        </IonPage>
    );

};

export default OpenHouseActivities;
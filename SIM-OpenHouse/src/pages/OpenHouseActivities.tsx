import { IonPage, IonContent, IonToolbar, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, IonIcon } from '@ionic/react';
import React, { useState } from 'react';

import TopNav from '../components/TopNav';
import '../css/Global.css';
import '../css/OpenHouseActivities.css';
import { giftOutline, qrCodeOutline } from 'ionicons/icons';
import PerformancesContent from '../components/PerformancesContent';

const OpenHouseActivities: React.FC = () => {

    const [dayNum, setDayNum] = useState('day1');

    return (
        <IonPage>
            <TopNav title="Open House Activities" route="/u/openHouseMain" backarrow={ true } hamburger={ true } />
            
            <IonContent fullscreen>
                {/* Main Heading */}
                <IonGrid className="openHouseActivities-grid">
                    <IonRow className="openHouseActivities-grid">
                        <IonToolbar>
                            <IonSegment value="Performances">
                                <IonCol className="openHouseActivities-grid" size-sizeSm="4">
                                    <IonSegmentButton value="Performances" className="openHouseActivities-heading ion-text-wrap">Performances</IonSegmentButton>
                                </IonCol>
                                <IonCol className="openHouseActivities-grid" size-sizeSm="4">
                                    <IonSegmentButton value="GamesNActivities" className="openHouseActivities-heading ion-text-wrap">Games & Activities</IonSegmentButton>
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
                <PerformancesContent day1={dayNum} day2={dayNum}/>
                

            </IonContent>
        </IonPage>
    );

};

export default OpenHouseActivities;
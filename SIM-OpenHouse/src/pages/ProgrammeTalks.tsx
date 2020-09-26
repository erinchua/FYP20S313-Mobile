import { IonBadge, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonLabel, IonPage, IonRouterLink, IonRouterOutlet, IonRow, IonSegment, IonSegmentButton, IonTab, IonTabBar, IonTabButton, IonTabs, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';

import "../css/Global.css";
import "../css/ProgrammeTalks.css";
import TopNav from '../components/TopNav';
import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';

const ProgrammeTalks: React.FC = () => {

    // const [dayNum, setDayNum] = useState('day1');

    // const handleClick = () => {
    //     setDayNum('day1');
    // }

    // const handleClick2 = () => {
    //     setDayNum('day2');
    // }

    return (
        <IonPage>
            <TopNav title="Programme Talks" route='/u/openHouseMain' backarrow={ true } hamburger = { true }/>
            {/* <IonHeader>
                <IonToolbar>
                    <IonTabs>
                        <IonTabBar slot="bottom">
                            <IonTabButton tab="schedule">
                                <IonIcon icon={calendar} />
                                <IonLabel>Schedule</IonLabel>
                                <IonBadge>6</IonBadge>
                            </IonTabButton>

                            <IonTabButton tab="speakers">
                                <IonIcon icon={personCircle} />
                                <IonLabel>Speakers</IonLabel>
                            </IonTabButton>

                            <IonTabButton tab="map">
                                <IonIcon icon={map} />
                                <IonLabel>Map</IonLabel>
                            </IonTabButton>

                            <IonTabButton tab="about">
                                <IonIcon icon={informationCircle} />
                                <IonLabel>About</IonLabel>
                            </IonTabButton>
                        </IonTabBar>
                    </IonTabs>
                </IonToolbar>
            </IonHeader> */}

            <IonContent>

            </IonContent>
        </IonPage>
    );
};

export default ProgrammeTalks;
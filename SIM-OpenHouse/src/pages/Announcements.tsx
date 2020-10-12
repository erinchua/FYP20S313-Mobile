import { IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonPage, IonRow, IonTitle } from '@ionic/react';
import React, { useState } from 'react';

import '../css/Global.css';
import '../css/Announcements.css';
import TopNav from '../components/TopNav';


const Announcements: React.FC = () => {

    const [haveAnnouncement, setHaveAnnouncement] = useState(false);

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Announcements" route='/u/home' backarrow={ true } hamburger = { true }/>
            </IonHeader>

            <IonContent fullscreen={true}>
                {/* No Announcements */}
                {haveAnnouncement === false ?
                    <IonGrid id="noAnnouncementGrid">
                        <IonRow id="noAnnouncementRow" class="ion-align-items-center">
                            <IonCol id="noAnnnouncementCol" class="ion-text-center">
                                <IonTitle id="noAnnouncementTitle">There are currently no announcements</IonTitle>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    :''
                }  

                {/* Have Announcement */}
                {haveAnnouncement === true ?
                    <IonGrid id="announcementGrid">
                        <IonRow className="announcementRow">
                            <IonCol className="announcementColDetails">
                                <IonRow>
                                    <IonTitle id="announcementTitle">Announcement Title</IonTitle>
                                </IonRow>

                                <IonRow>
                                    <IonLabel id="announcementDate">Posted on (21 Novemeber 2020 (Sat)), (time)</IonLabel>
                                </IonRow>

                                <IonRow>
                                    <IonLabel id="announcementDetails">Feeling abit snacky after the talks? Come on down to Block B to redeem free popcorns and candy floss! While stock lasts!</IonLabel>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    : ''
                }

            </IonContent>
        </IonPage>
    );

};

export default Announcements;
import { IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonPage, IonRow, IonTitle } from '@ionic/react';
import React, { useEffect, useState } from 'react';

import '../css/Global.css';
import '../css/Announcements.css';
import TopNav from '../components/TopNav';
import { db } from '../firebase';
import { Announcement, toAnnouncement } from '../modules/map';
import { toDateObject } from '../modules/convert';


const Announcements: React.FC = () => {

    const [announcements, setAnnouncements] = useState<Announcement[]>([]);

    const current = announcements.filter(news => { return new Date().getTime() > toDateObject(news.date, news.time).getTime() });

    useEffect(() => {
        db.collection('Announcements').get().then(({ docs }) => {
            setAnnouncements(docs.map(toAnnouncement));
        });
    }, []);

    console.log(current)

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Announcements" route='/u/home' backarrow={true} hamburger={true} />
            </IonHeader>

            <IonContent fullscreen={true}>
                {current.length > 0 ? (
                    current.map((news, index) => {
                        const day = toDateObject(news.date, news.time).toString().split(" ")[0];

                        return (
                            <IonGrid id="announcementGrid" key={index}>
                                <IonRow className="announcementRow">
                                    <IonCol className="announcementColDetails">
                                        <IonRow>
                                            <IonTitle id="announcementTitle">{news.title}</IonTitle>
                                        </IonRow>

                                        <IonRow>
                                            <IonLabel id="announcementDate">Posted on {news.date} ({day}), {news.time}</IonLabel>
                                        </IonRow>

                                        <IonRow>
                                            <IonLabel id="announcementDetails">{news.details}</IonLabel>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        )
                    })) : (
                        <IonGrid id="noAnnouncementGrid">
                            <IonRow id="noAnnouncementRow" class="ion-align-items-center">
                                <IonCol id="noAnnnouncementCol" class="ion-text-center">
                                    <IonTitle id="noAnnouncementTitle">There are currently no announcements</IonTitle>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    )
                }
            </IonContent>
        </IonPage>
    );

};

export default Announcements;
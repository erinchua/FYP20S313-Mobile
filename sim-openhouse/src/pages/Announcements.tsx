import { IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonPage, IonRow, IonTitle } from '@ionic/react';
import React, { useEffect, useState } from 'react';

import '../css/Global.css';
import '../css/Announcements.css';
import TopNav from '../components/TopNav';
import { db } from '../firebase';
import { Announcement, toAnnouncement } from '../modules/map';
import { toDateObject } from '../modules/convert';
import { sortDsc } from '../modules/compare';


const Announcements: React.FC = () => {

    const [announcements, setAnnouncements] = useState<Announcement[]>([]);

    const current = announcements.filter(news => { return new Date().getTime() > toDateObject(news.date, news.time).getTime() }).sort((a, b) => sortDsc(a.ms, b.ms));

    useEffect(() => {
        const fetchData = async () => {
            await db.collection('Announcements').get().then(({ docs }) => {
                setAnnouncements(docs.map(toAnnouncement));
            });
        }
        fetchData();
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Announcements" route='/u/home' backarrow={true} hamburger={true} />
            </IonHeader>

            <IonContent fullscreen={true}>
                {current.length > 0 ? (
                    <IonGrid id="announcementGrid">

                        {current.map(news => {
                            const day = toDateObject(news.date, news.time).toDateString().split(" ")[0];

                            return (
                                <IonRow className="announcementRow" key={news.id}>
                                    <IonCol className="announcementColDetails">
                                        <IonRow style={{paddingTop: "0%"}}>
                                            <IonCol>
                                                <IonTitle id="announcementTitle">
                                                    <div className="ion-text-wrap">{news.title}</div>
                                                </IonTitle>
                                            </IonCol>
                                        </IonRow>

                                        <IonRow style={{paddingTop: "0%"}}>
                                            <IonCol>
                                                <IonLabel id="announcementDate">Posted on {news.date} ({day}), {news.time}</IonLabel>
                                            </IonCol>
                                        </IonRow>

                                        <IonRow style={{paddingTop: "0%"}}>
                                            <IonCol className="announcementCol">
                                                <IonLabel id="announcementDetails">
                                                    <div className="ion-text-wrap">{news.details}</div>
                                                </IonLabel>
                                            </IonCol>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                            )
                        })}
                        
                    </IonGrid>
                ) : (
                    <IonGrid id="noAnnouncementGrid">
                        <IonRow id="noAnnouncementRow" class="ion-align-items-center">
                            <IonCol id="noAnnnouncementCol" class="ion-text-center">
                                <IonTitle id="noAnnouncementTitle">There are currently no announcements</IonTitle>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                )}
            </IonContent>
        </IonPage>
    );

};

export default Announcements;
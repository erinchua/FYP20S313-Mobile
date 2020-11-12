import { IonCol, IonContent, IonGrid, IonHeader, IonList, IonPage, IonRow, IonText, IonThumbnail } from '@ionic/react';
import React, { useEffect, useState } from 'react';

import '../../css/Global.css';
import '../../css/StudentLife.css';
import TopNav from '../../components/TopNav';
import { db } from '../../firebase';
import { sentence } from '../../modules/convert';

const StudentCare: React.FC = () => {

    const [studentCare, setStudentCare] = useState([]);

    useEffect(() => {
        db.collection('StudentCare').get().then(docs => {
            const studCare: any = [];

            docs.forEach(doc => {
                let data = doc.data();

                if (data.id === "workPlayLiveWell") {
                    const activitiesData = doc.data().activities;
                    const activities = [];

                    for (let i = 0; i < Object.keys(activitiesData).length; i++) {
                        const activity = {
                            id: Object.keys(activitiesData)[i],
                            ...activitiesData[Object.keys(activitiesData)[i]]
                        }
                        activities.push(activity)
                    }

                    data = {
                        ...doc.data(),
                        activities: activities
                    }
                }
                studCare.push(data);
            });
            setStudentCare(studCare);
        });
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Student Care" route="/u/studentLife@SIM" backarrow={true} hamburger={true} />
            </IonHeader>
            <IonContent fullscreen className="studentLife-content">
                <IonGrid id="studentCare-grid">
                    <IonRow id="studentCare-topHeader-container" className="ion-justify-content-start">
                        <IonText id="studentCare-topHeader-text">Work, play and live well</IonText>
                    </IonRow>

                    {studentCare.map((content: any, index: number) => (
                        content.id === "workPlayLiveWell" ? (
                            <div key={index}>
                                <IonRow>
                                    <IonText id="studentCare-description">{content.desc}</IonText>
                                </IonRow>

                                <IonRow className="ion-justify-content-center" id="studentCare-trip-container">
                                    {content.activities.map((activity: any, idx: number) => (
                                        <IonCol size="4" key={idx}>
                                            <IonRow className="ion-justify-content-center">
                                                <IonThumbnail className="studentCare-tripThumbnail">
                                                    <img src={activity.activitiesLogo} />
                                                </IonThumbnail>
                                            </IonRow>
                                            <IonRow className="ion-justify-content-center">
                                                <IonText className="studentCare-tripText">{activity.activitiesName}</IonText>
                                            </IonRow>
                                        </IonCol>
                                    ))}
                                </IonRow>
                            </div>
                        ) : null
                    ))}

                    {studentCare.map((content: any) => (
                        content.id !== "workPlayLiveWell" ? (
                            <IonList className="studentCare-list" key={content.id}>
                                <IonGrid className="studentCare-details-grid">
                                    <IonRow>
                                        <IonCol size="4" className="ion-align-self-center">
                                            <IonThumbnail className="studentCare-thumbnail">
                                                <img src={content.logo} />
                                            </IonThumbnail>
                                        </IonCol>
                                        <IonCol size="8" className="ion-align-self-center">
                                            <IonRow>
                                                <IonText className="studentCare-details-heading">{sentence(content.id)}</IonText>
                                            </IonRow>
                                            <IonRow>
                                                <IonText className="studentCare-details-description">{content.desc}</IonText>
                                            </IonRow>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonList>
                        ) : null
                    ))}

                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default StudentCare;
import { IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { useAuth } from '../modules/auth';

import '../css/Global.css';
import '../css/Settings.css';
import TopNav from '../components/TopNav';
import { db } from '../firebase';


const Settings: React.FC = () => {
    const { userID } = useAuth();

    const [announcementAlertChecked, setAnnouncementAlertChecked] = useState(false);
    const [openHouseRemindersChecked, setOpenHouseRemindersChecked] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
            await db.collection('Students').doc(userID).get().then(doc => {
                setOpenHouseRemindersChecked(doc.data()?.allowOpenhouseNotify)
                setAnnouncementAlertChecked(doc.data()?.allowAnnoucementNotify)
            })
        }

        fetchData()
    }, [])

    useEffect(() => {
        console.log("Openhouse Changed to: " + openHouseRemindersChecked)
    }, [openHouseRemindersChecked])

    useEffect(() => {
        console.log("Annoucement Changed to: " + announcementAlertChecked)
    }, [announcementAlertChecked])

    const onToggle = async (setValue: boolean, type: string) => {

        if (type == 'openhouse') {
            setOpenHouseRemindersChecked(setValue)
            await db.collection('Students').doc(userID).update({ allowOpenhouseNotify: setValue })
        }
        if (type == 'annoucement') {
            setAnnouncementAlertChecked(setValue)
            await db.collection('Students').doc(userID).update({ allowAnnoucementNotify: setValue })
        }

    }
    // console.log("From DB notification is allow: " + openhouseNotify)
    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Settings" route='/u/home' backarrow={true} hamburger={true} />
            </IonHeader>

            <IonContent fullscreen={true} id="settingsIonContent">
                <IonGrid id="settingsGrid">
                    {/* Announcement Alerts */}
                    <IonRow className="settingsRow">
                        <IonCol className="settingsColDetails">
                            <IonRow>
                                <IonItem className="settingsItem" lines="none">
                                    <IonTitle className="settingsTitle">Announcement Alerts</IonTitle>
                                    <IonToggle className="settingsToggleBtn" slot="end" name="announcementAlerts" checked={announcementAlertChecked} onIonChange={e => onToggle(e.detail.checked, 'annoucement')}></IonToggle>
                                </IonItem>
                            </IonRow>

                            <IonRow>
                                {announcementAlertChecked ?
                                    <IonLabel className="settingsDetails">Toggle to disable alerts for important announcements during the Open House</IonLabel>
                                    : (
                                        <IonLabel className="settingsDetails">Toggle to enable alerts for important announcements during the Open House</IonLabel>
                                    )
                                }
                            </IonRow>
                        </IonCol>
                    </IonRow>

                    {/* Open House Reminders */}
                    <IonRow className="settingsRow">
                        <IonCol className="settingsColDetails">
                            <IonRow>
                                <IonItem className="settingsItem" lines="none">
                                    <IonTitle className="settingsTitle">Open House Programmes Reminders</IonTitle>
                                    <IonToggle className="settingsToggleBtn" slot="end" name="openHouseReminders" checked={openHouseRemindersChecked} onIonChange={e => onToggle(e.detail.checked, 'openhouse')}></IonToggle>
                                </IonItem>
                            </IonRow>

                            <IonRow>
                                {openHouseRemindersChecked ?
                                    <IonLabel className="settingsDetails">Toggle to disable reminders for open house programmes you have added to your personal scheduler</IonLabel>
                                    : (
                                        <IonLabel className="settingsDetails">Toggle to enable reminders for open house programmes you have added to your personal scheduler</IonLabel>
                                    )
                                }
                            </IonRow>
                        </IonCol>
                    </IonRow>

                    {/* SIM Open House Website */}
                    <IonRow className="simWebsiteRow">
                        <IonCol>
                            <IonItem className="simWebsiteItem" lines="none">
                                <IonTitle className="settingsTitle">
                                    <IonRouterLink id="simWebsiteUrl" href="https://www.simge.edu.sg/open-house-overview/" target="_blank">
                                        SIM Open House Website
                                    </IonRouterLink>
                                </IonTitle>
                            </IonItem>
                        </IonCol>
                    </IonRow>

                </IonGrid>
            </IonContent>

            <IonFooter className="ion-no-border">
                <IonToolbar id="settingsFooter">
                    <IonLabel className="footerText">App Version: 2020.8</IonLabel>
                    <br />
                    <IonLabel className="footerText">Designed & Developed By FYP-20-S3-13</IonLabel>
                </IonToolbar>
            </IonFooter>

        </IonPage>
    );
};

export default Settings;
import { IonCol, IonGrid, IonRow, IonButton, IonAlert, IonLoading } from '@ionic/react';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase';

import '../../css/Global.css';
import '../../css/GuidedTourContent.css';
import { db } from '../../firebase';
import { useAuth } from '../../modules/auth';
import { toDateObject } from '../../modules/convert';
import { notification } from '../../modules/notifications';


const GuidedTourContent: React.FC<{ day1: any, day2: any, guidedTours: any, openhouseDates: any, scheduleItems: any[] }> = props => {
    const { userID } = useAuth();
    const [alert, setAlert] = useState({ registerSuccess: false, registerFail: false, loading: false });

    const guidedTourDay1 = props.guidedTours.filter((tour: any) => { return tour.date === props.openhouseDates[0] });
    const guidedTourDay2 = props.guidedTours.filter((tour: any) => { return tour.date === props.openhouseDates[1] });

    const addToSchedule = async (programme: any) => {
        try {
            setAlert({ registerSuccess: false, registerFail: false, loading: true });

            await db.collection('PersonalScheduler').doc(userID).get().then(async (snapshot: any) => {
                const registered = snapshot.data().registeredProgrammes;

                if (registered != null) {
                    if (registered.length > 0) {
                        let check = false;

                        registered.forEach((item: any) => {
                            const itemType = item.split("-");

                            switch (itemType[0]) {
                                case "talk":
                                    db.collection('ProgrammeTalks').doc(item).onSnapshot((doc: any) => {

                                        if (programme.date === doc.data().date) {

                                            const progStart = toDateObject(programme.date, programme.startTime), progEnd = toDateObject(programme.date, programme.endTime);
                                            const itemStart = toDateObject(doc.data().date, doc.data().startTime), itemEnd = toDateObject(doc.data().date, doc.data().endTime);

                                            if ((progStart >= itemStart && progStart < itemEnd) || (progEnd > itemStart && progEnd <= itemEnd)) {
                                                check = true;
                                            }
                                        }
                                    });

                                    break;

                                case "tour":
                                    db.collection('GuidedTours').doc(item).onSnapshot((doc: any) => {

                                        if (programme.date === doc.data().date) {

                                            const progStart = toDateObject(programme.date, programme.startTime), progEnd = toDateObject(programme.date, programme.endTime);
                                            const itemStart = toDateObject(doc.data().date, doc.data().startTime), itemEnd = toDateObject(doc.data().date, doc.data().endTime);

                                            if ((progStart >= itemStart && progStart < itemEnd) || (progEnd > itemStart && progEnd <= itemEnd)) {
                                                check = true;
                                            }
                                        }
                                    });

                                    break;

                                case "performance":
                                    db.collection('Performances').doc(item).onSnapshot((doc: any) => {

                                        if (programme.date === doc.data().date) {

                                            const progStart = toDateObject(programme.date, programme.startTime), progEnd = toDateObject(programme.date, programme.endTime);
                                            const itemStart = toDateObject(doc.data().date, doc.data().startTime), itemEnd = toDateObject(doc.data().date, doc.data().endTime);

                                            if ((progStart >= itemStart && progStart < itemEnd) || (progEnd > itemStart && progEnd <= itemEnd)) {
                                                check = true;
                                            }
                                        }
                                    });

                                    break;

                                default:
                            }
                        });

                        setTimeout(async () => {
                            if (check) {
                                setAlert({ registerSuccess: false, registerFail: true, loading: false });
                            } else {
                                notification(programme.date, programme.startTime, programme.tourName, "programme")
                                await db.collection('PersonalScheduler').doc(userID).update({
                                    registeredProgrammes: firebase.firestore.FieldValue.arrayUnion(programme.id)
                                });
                                setAlert({ registerSuccess: true, registerFail: false, loading: false });
                            };

                            check = false;
                        }, 500);

                    } else {
                        notification(programme.date, programme.startTime, programme.tourName, "programme")
                        await db.collection('PersonalScheduler').doc(userID).update({
                            registeredProgrammes: firebase.firestore.FieldValue.arrayUnion(programme.id)
                        });
                        setAlert({ registerSuccess: true, registerFail: false, loading: false });
                    }

                } else {
                    notification(programme.date, programme.startTime, programme.tourName, "programme")
                    await db.collection('PersonalScheduler').doc(userID).update({
                        registeredProgrammes: firebase.firestore.FieldValue.arrayUnion(programme.id)
                    });
                    setAlert({ registerSuccess: true, registerFail: false, loading: false });
                }
            });

        } catch (e) {
            setAlert({ registerSuccess: false, registerFail: false, loading: false });
            return console.log(e)
        };
    };


    return (
        <>
            <IonAlert
                isOpen={alert.registerSuccess}
                onDidDismiss={() => setAlert({ registerSuccess: false, registerFail: false, loading: false })}
                cssClass='alertBox'
                mode='md'
                header={'Successfully Registered'}
                message={'You have successfully registered for the guided tour and it has been successfully added to My Schedule.'}
                buttons={['Close']}
            ></IonAlert>

            <IonAlert
                isOpen={alert.registerFail}
                onDidDismiss={() => setAlert({ registerSuccess: false, registerFail: false, loading: false })}
                cssClass='alertBox'
                mode='md'
                header={'Registration Unsuccessful'}
                message={'There exists a guided tour in your scheduler at this timing. Please remove the existing tour from your scheduler first!'}
                buttons={['Close']}
            ></IonAlert>

            <IonGrid id="guidedTours-tableGrid">
                <IonRow id="guidedTours-tableHeader" className="ion-justify-content-center">
                    <IonCol className="guidedTours-Header ion-text-wrap">Tour No.</IonCol>
                    <IonCol className="guidedTours-Header ion-text-wrap">Tour</IonCol>
                    <IonCol className="guidedTours-Header ion-text-wrap">Reporting Time</IonCol>
                    <IonCol className="guidedTours-Header ion-text-wrap">Venue</IonCol>
                    <IonCol className="guidedTours-Header ion-text-wrap">Add to My Schedule</IonCol>
                </IonRow>
                {props.day1 === "day1" ?
                    guidedTourDay1.map((guidedTour: any, index: any) => {
                        return (
                            <IonRow className="ion-justify-content-center" key={guidedTour.id}>
                                <IonCol className="guidedTours-Data ion-text-wrap">{index + 1}</IonCol>
                                <IonCol className="guidedTours-Data ion-text-wrap">{guidedTour.tourName}</IonCol>
                                <IonCol className="guidedTours-Data ion-text-wrap">{guidedTour.startTime}</IonCol>
                                <IonCol className="guidedTours-Data ion-text-wrap">{guidedTour.venue}</IonCol>
                                <IonCol className="guidedTours-Data ion-text-wrap">
                                    <IonButton className="guidedTours-DataBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => addToSchedule(guidedTour)} disabled={props.scheduleItems.includes(guidedTour.id) ? true : false}>
                                        <FontAwesomeIcon icon={faPlus} size="lg" />
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        )
                    })
                    : ''
                }
                {props.day2 === "day2" ?
                    guidedTourDay2.map((guidedTour: any, index: any) => {
                        return (
                            <IonRow className="ion-justify-content-center" key={guidedTour.id}>
                                <IonCol className="guidedTours-Data ion-text-wrap">{index + 1}</IonCol>
                                <IonCol className="guidedTours-Data ion-text-wrap">{guidedTour.tourName}</IonCol>
                                <IonCol className="guidedTours-Data ion-text-wrap">{guidedTour.startTime}</IonCol>
                                <IonCol className="guidedTours-Data ion-text-wrap">{guidedTour.venue}</IonCol>
                                <IonCol className="guidedTours-Data ion-text-wrap">
                                    <IonButton className="guidedTours-DataBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => addToSchedule(guidedTour)} disabled={props.scheduleItems.includes(guidedTour.id) ? true : false}>
                                        <FontAwesomeIcon icon={faPlus} size="lg" />
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        )
                    })
                    : ''
                }
            </IonGrid>
            <IonLoading isOpen={alert.loading} />
        </>
    );
}

export default GuidedTourContent;
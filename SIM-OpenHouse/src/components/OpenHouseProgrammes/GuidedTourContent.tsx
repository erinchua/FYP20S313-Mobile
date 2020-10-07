import { IonCol, IonGrid, IonRow, IonButton, IonAlert, IonLoading } from '@ionic/react';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase';
import '../../css/Global.css';
import '../../css/GuidedTourContent.css';
import { db } from '../../firebase';
import { useAuth } from '../../auth';

const GuidedTourContent: React.FC<{ day1: any; day2: any; guidedTours: any; openhouseDates: any }> = props => {
    const { userID } = useAuth();
    const [alert, setAlert] = useState({ registerSuccess: false, registerFail: false, loading: false });

    const guidedTourDay1 = props.guidedTours
        .filter((tour: any) => {
            return tour.date == props.openhouseDates[0]
        })

    const guidedTourDay2 = props.guidedTours
        .filter((tour: any) => {
            return tour.date == props.openhouseDates[1]
        })

    const addToSchedule = async (programmeTalk: any) => {
        try {
            // make check for schedule conflict then below
            setAlert({ registerSuccess: false, registerFail: false, loading: true });
            await db.collection('PersonalScheduler').doc(userID).update({
                registeredProgrammes: firebase.firestore.FieldValue.arrayUnion(programmeTalk.id)
            });
            setAlert({ registerSuccess: true, registerFail: false, loading: false });
        } catch (e) {
            setAlert({ registerSuccess: false, registerFail: false, loading: false });
            console.log(e);
        }
    };


    return (
        <>
            <IonAlert
                isOpen={alert.registerSuccess}
                onDidDismiss={() => setAlert({ registerSuccess: false, registerFail: false, loading: false })}
                cssClass='alertBox'
                mode='md'
                header={'Successfully Registered'}
                message={'You have successfully registered for the programme talk and it has been successfully added to My Schedule.'}
                buttons={['Close']}
            ></IonAlert>

            <IonAlert
                isOpen={alert.registerFail}
                onDidDismiss={() => setAlert({ registerSuccess: false, registerFail: false, loading: false })}
                cssClass='alertBox'
                mode='md'
                header={'Registration Unsuccessful'}
                message={'There exists an open house programme in your scheduler at this timing. Please remove the existing programme from your scheduler first!'}
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
                                    <IonButton className="guidedTours-DataBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => addToSchedule(guidedTour)}>
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
                                    <IonButton className="guidedTours-DataBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => addToSchedule(guidedTour)}>
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
import { IonCol, IonGrid, IonRow, IonButton } from '@ionic/react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase';
import '../../css/Global.css';
import '../../css/GuidedTourContent.css';
import { db } from '../../firebase';
import { useAuth } from '../../auth';

const GuidedTourContent: React.FC<{ day1: any; day2: any; guidedTours: any; openhouseDates: any }> = props => {
    const { userID } = useAuth();

    const guidedTourDay1 = props.guidedTours
        .filter((tour: any) => {
            return tour.date == props.openhouseDates[0]
        })

    const guidedTourDay2 = props.guidedTours
        .filter((tour: any) => {
            return tour.date == props.openhouseDates[1]
        })

    const addToSchedule = (programmeTalk: any) => {
        try {
            // make check for schedule conflict then below
            db.collection('PersonalScheduler').doc(userID).update({
                registeredProgrammes: firebase.firestore.FieldValue.arrayUnion(programmeTalk.id)
            })
        } catch (e) {
            console.log(e);
        }
    };


    return (
        <>
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
        </>
    );
}

export default GuidedTourContent;
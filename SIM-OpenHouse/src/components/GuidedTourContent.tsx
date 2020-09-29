import React, { useState, useEffect } from 'react';
import { IonCol, IonGrid, IonRow, IonIcon, IonButton } from '@ionic/react';
import '../css/Global.css';
import '../css/GuidedTourContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { auth, db } from "../firebase";


const GuidedTourContent: React.FC<{ day1: any; day2: any }> = props => {

    const [guidedTourDay1, setGuidedTourDay1] = useState<any[]>([]);
    const [guidedTourDay2, setGuidedTourDay2] = useState<any[]>([]);

    useEffect(() => {
        db.collection("GuidedTours")
            .where("date", "==", "21-Nov-2020")
            .get()
            .then((snapshot) => {
                const guidedTours: any = [];
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    guidedTours.push(data);
                });
                setGuidedTourDay1(guidedTours);
            })
            .catch((error) => console.log(error));

        db.collection("GuidedTours")
            .where("date", "==", "22-Nov-2020")
            .get()
            .then((snapshot) => {
                const guidedTours: any = [];
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    guidedTours.push(data);
                });
                setGuidedTourDay2(guidedTours);
            })
            .catch((error) => console.log(error));

    }, []);

    return (
        <>
            <IonGrid id="guidedTours-tableGrid">
                <IonRow id="guidedTours-tableHeader" className="ion-justify-content-center">
                    <IonCol className="guidedTours-Data ion-text-wrap">Tour No.</IonCol>
                    <IonCol className="guidedTours-Data ion-text-wrap">Tour</IonCol>
                    <IonCol className="guidedTours-Data ion-text-wrap">Reporting Time</IonCol>
                    <IonCol className="guidedTours-Data ion-text-wrap">Venue</IonCol>
                    <IonCol className="guidedTours-Data ion-text-wrap">Add to My Schedule</IonCol>
                </IonRow>
                {props.day1 === "day1" ?
                    guidedTourDay1.map((guidedTour, index) => {
                        return (
                            <IonRow className="ion-justify-content-center">
                                <IonCol className="guidedTours-Data ion-text-wrap">{index + 1}</IonCol>
                                <IonCol className="guidedTours-Data ion-text-wrap">{guidedTour.tourName}</IonCol>
                                <IonCol className="guidedTours-Data ion-text-wrap">{guidedTour.startTime}</IonCol>
                                <IonCol className="guidedTours-Data ion-text-wrap">{guidedTour.venue}</IonCol>
                                <IonCol className="guidedTours-Data ion-text-wrap"><IonButton className="guidedTours-DataBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }}><FontAwesomeIcon icon={faPlus} size="lg" /></IonButton></IonCol>
                            </IonRow>
                        )
                    })
                    : ''
                }
                {props.day2 === "day2" ?
                    guidedTourDay2.map((guidedTour, index) => {
                        return (
                            <IonRow className="ion-justify-content-center">
                                <IonCol className="guidedTours-Data ion-text-wrap">{index + 1}</IonCol>
                                <IonCol className="guidedTours-Data ion-text-wrap">{guidedTour.tourName}</IonCol>
                                <IonCol className="guidedTours-Data ion-text-wrap">{guidedTour.startTime}</IonCol>
                                <IonCol className="guidedTours-Data ion-text-wrap">{guidedTour.venue}</IonCol>
                                <IonCol className="guidedTours-Data ion-text-wrap"><IonButton className="guidedTours-DataBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }}><FontAwesomeIcon icon={faPlus} size="lg" /></IonButton></IonCol>
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
import React from 'react';
import { IonCol, IonGrid, IonRow, IonButton } from '@ionic/react';
import '../css/Global.css';
import '../css/GuidedTourContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const GuidedTourContent: React.FC<{ day1: any; day2: any; guidedTours: any; openhouseDates: any }> = props => {

    const guidedTourDay1 = props.guidedTours
        .filter((tour: any) => {
            return tour.date == props.openhouseDates[0]
        })

    const guidedTourDay2 = props.guidedTours
        .filter((tour: any) => {
            return tour.date == props.openhouseDates[1]
        })


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
                    guidedTourDay1.map((guidedTour: any, index: any) => {
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
                    guidedTourDay2.map((guidedTour: any, index: any) => {
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
                {/* {tours.map((data: any) => (
                    <IonItem key={data.id}>
                        <IonLabel className="ion-padding">
                        <p>{data.tourName}</p>
                        <p>{data.date}</p>
                        <p>{data.endTime}</p>
                        <p>{data.statTime}</p>
                        <p>{data.venue}</p>
                        </IonLabel>
                    </IonItem>
                ))} */}
            </IonGrid>
        </>
    );
}

export default GuidedTourContent;
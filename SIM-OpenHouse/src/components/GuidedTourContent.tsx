import React, { useEffect, useState } from 'react';
import { IonCol, IonGrid, IonRow, IonButton } from '@ionic/react';
import '../css/Global.css';
import '../css/GuidedTourContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { db } from '../firebase';
import { GuidedTours, toGuidedTours } from '../openHouseProg';

const GuidedTourContent: React.FC<{day1: any; day2: any}> = props => {
    const [tours, setTours] = useState<GuidedTours[]>([]);

    useEffect(() => {
        return db.collection('GuidedTours').onSnapshot(({ docs }) => setTours(docs.map(toGuidedTours)));
    }, []);

    console.log(tours);

    return(
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
                    <IonRow className="ion-justify-content-center">
                        <IonCol className="guidedTours-Data ion-text-wrap">1</IonCol>
                        <IonCol className="guidedTours-Data ion-text-wrap">Day One</IonCol>
                        <IonCol className="guidedTours-Data ion-text-wrap">Sample</IonCol>
                        <IonCol className="guidedTours-Data ion-text-wrap">Sample</IonCol>
                        <IonCol className="guidedTours-Data ion-text-wrap"><IonButton className="guidedTours-DataBtn" size="small" style={{marginTop: "-5%", marginBottom: "-5%"}}><FontAwesomeIcon icon={faPlus} size="lg"/></IonButton></IonCol>
                    </IonRow> : '' 
                }
                {props.day2 === "day2" ? 
                    <IonRow className="ion-justify-content-center">
                        <IonCol className="guidedTours-Data ion-text-wrap">1</IonCol>
                        <IonCol className="guidedTours-Data ion-text-wrap">Day Two</IonCol>
                        <IonCol className="guidedTours-Data ion-text-wrap">Sample</IonCol>
                        <IonCol className="guidedTours-Data ion-text-wrap">Sample</IonCol>
                        <IonCol className="guidedTours-Data ion-text-wrap"><IonButton className="guidedTours-DataBtn" size="small" style={{marginTop: "-5%", marginBottom: "-5%"}}><FontAwesomeIcon icon={faPlus} size="lg"/></IonButton></IonCol>
                    </IonRow> : '' 
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
import React from 'react';
import { IonCol, IonGrid, IonRow, IonIcon, IonButton } from '@ionic/react';
import '../css/Global.css';
import '../css/GuidedTourContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const GuidedTourContent: React.FC<{day1: any; day2: any}> = props => {

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
                        <IonCol className="guidedTours-Data ion-text-wrap"><IonButton className="guidedTours-DataBtn" size="small" style={{marginTop: "-5%", marginBottom: "-5%"}}><FontAwesomeIcon icon={faPlus} size="1x"/></IonButton></IonCol>
                    </IonRow> : '' 
                }
                {props.day2 === "day2" ? 
                    <IonRow className="ion-justify-content-center">
                        <IonCol className="guidedTours-Data ion-text-wrap">1</IonCol>
                        <IonCol className="guidedTours-Data ion-text-wrap">Day Two</IonCol>
                        <IonCol className="guidedTours-Data ion-text-wrap">Sample</IonCol>
                        <IonCol className="guidedTours-Data ion-text-wrap">Sample</IonCol>
                        <IonCol className="guidedTours-Data ion-text-wrap"><IonButton className="guidedTours-DataBtn" size="small" style={{marginTop: "-5%", marginBottom: "-5%"}}><FontAwesomeIcon icon={faPlus} size="1x"/></IonButton></IonCol>
                    </IonRow> : '' 
                }
            </IonGrid>
        </>
    );
}

export default GuidedTourContent;
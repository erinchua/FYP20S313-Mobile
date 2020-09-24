import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import '../css/Global.css';
import '../css/GuidedTourContent.css';

const GuidedTourContent: React.FC<{day1: any; day2: any}> = props => {

    return(
        <>
        <IonRow>
            <IonGrid id="guidedTours-tableGrid">
                <IonRow id="guidedTours-tableHeader">
                    <IonCol id="guidedTours-Data">Tour No.</IonCol>
                    <IonCol id="guidedTours-Data">Tour</IonCol>
                    <IonCol id="guidedTours-Data">Reporting Time</IonCol>
                    <IonCol id="guidedTours-Data">Venue</IonCol>
                    <IonCol id="guidedTours-Data">Add to My Schedule</IonCol>
                </IonRow>
                {props.day1 === "day1" ? 
                    <IonRow>
                        <IonCol id="guidedTours-Data">1</IonCol>
                        <IonCol id="guidedTours-Data">Sample</IonCol>
                        <IonCol id="guidedTours-Data">Sample</IonCol>
                        <IonCol id="guidedTours-Data">Sample</IonCol>
                        <IonCol id="guidedTours-Data">Sample</IonCol>
                    </IonRow> : '' 
                }
                {props.day2 === "day2" ? 
                    <IonRow>
                        <IonCol id="guidedTours-Data">2</IonCol>
                        <IonCol id="guidedTours-Data">Sample</IonCol>
                        <IonCol id="guidedTours-Data">Sample</IonCol>
                        <IonCol id="guidedTours-Data">Sample</IonCol>
                        <IonCol id="guidedTours-Data">Sample</IonCol>
                    </IonRow> : '' 
                }
            </IonGrid>
        </IonRow>
        </>
    );
}

export default GuidedTourContent;
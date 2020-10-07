import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRow, IonSegment, IonSegmentButton, IonText, IonTitle } from '@ionic/react';
import React, { useRef, useState } from 'react';

import '../../css/Global.css';
import '../../css/Brochures.css';
import { addCircle, removeCircle } from 'ionicons/icons';
import fullTimeProspectus from '../../img/brochure/full-time-prospectus.jpg';
import partTimeProspectus from '../../img/brochure/part-time-prospectus.jpg';

const Study_SIM: React.FC = () => {

    const prospectus = useRef<HTMLIonRowElement>(null);

    const toggleShow1 = useRef<HTMLIonIconElement>(null);

    const displayProspectus = () => {
        prospectus.current!.hidden = !prospectus.current!.hidden;
        if(toggleShow1.current!.icon == addCircle) {
            toggleShow1.current!.icon = removeCircle;
        } else {
            toggleShow1.current!.icon = addCircle;
        }
    }

    return (
        <>
            <IonGrid id="brochures-grid">
                <IonRow className="brochures-toggle-container">
                    <IonCol className="brochures-toggle-container">
                        <IonRow className="ion-justify-content-start brochures-inner-row">
                            <IonCol className="ion-align-self-center" size="10">
                                <IonTitle className="brochures-toggle-header">Prospectus</IonTitle>
                                <IonTitle className="brochures-toggle-subHeader">For Singaporeans & Permanent Residents</IonTitle>
                            </IonCol>
                            <IonCol size="2" className="ion-align-self-center">
                                <IonButton size="small" className="brochures-toggle-button" onClick={() => displayProspectus()}><IonIcon ref={toggleShow1} icon={addCircle} slot="icon-only"/></IonButton>
                            </IonCol>
                        </IonRow>

                        <IonRow className="brochures-toggle-details-container" ref={prospectus} hidden={true}>
                            <IonCol size="12">
                                <IonRow className="ion-justify-content-center">
                                    <IonCol size="6">
                                        <IonRow>
                                            <IonImg className="brochures-coverImg" src={fullTimeProspectus}/>
                                        </IonRow>
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download Prospectus</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonRow>
                                            <IonImg className="brochures-coverImg" src={partTimeProspectus}/>
                                        </IonRow>
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download Part-Time Prospectus</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonCol>
                </IonRow>

            </IonGrid>
        </>
    );
};

export default Study_SIM;
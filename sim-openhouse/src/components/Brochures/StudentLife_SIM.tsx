import { IonButton, IonCol, IonGrid, IonRow, IonTitle } from '@ionic/react';
import React from 'react';

import '../../css/Global.css';
import '../../css/Brochures.css';
import { Brochure } from '../../modules/map';

const StudentLife_SIM: React.FC<{ brochures: Brochure[] }> = (props) => {

    const studLifeBrochures = props.brochures.filter(broc => { return broc.id.split("-")[0].toLowerCase() === "study" });

    return (
        <>
            <IonGrid id="brochures-grid">
                {studLifeBrochures.map(broc => {
                    if (broc.description.split("-")[0].toLowerCase() === "scholarship") {
                        return (
                            <IonRow className="brochures-toggle-container" key={broc.id}>
                                <IonCol className="brochures-toggle-container">
                                    <IonRow className="ion-justify-content-start brochures-inner-row">
                                        <IonCol className="ion-align-self-center" size="12">
                                            <IonTitle className="brochures-toggle-header">SIM GE Scholarship</IonTitle>
                                        </IonCol>
                                    </IonRow>

                                    <IonRow>
                                        <IonCol size="12">
                                            <IonRow>
                                                <IonCol size="12" >
                                                    <IonRow className="ion-justify-content-center">
                                                        <IonButton className="brochures-studentLife-button" href={broc.brochureUrl} target="_blank"><div className="ion-text-wrap">Download SIM GE Scholarship FAQs</div></IonButton>
                                                    </IonRow>
                                                </IonCol>
                                            </IonRow>
                                        </IonCol>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        )
                    }
                    if (broc.description.split("-")[0].toLowerCase() === "bursary") {
                        return (
                            <IonRow className="brochures-toggle-container" key={broc.id}>
                                <IonCol className="brochures-toggle-container">
                                    <IonRow className="ion-justify-content-start brochures-inner-row">
                                        <IonCol className="ion-align-self-center" size="12">
                                            <IonTitle className="brochures-toggle-header">SIM GE Bursary</IonTitle>
                                        </IonCol>
                                    </IonRow>

                                    <IonRow>
                                        <IonCol size="12">
                                            <IonRow>
                                                <IonCol size="12" >
                                                    <IonRow className="ion-justify-content-center">
                                                        <IonButton className="brochures-studentLife-button" href={broc.brochureUrl} target="_blank"><div className="ion-text-wrap">Download SIM GE Bursary Application FAQs</div></IonButton>
                                                    </IonRow>
                                                </IonCol>
                                            </IonRow>
                                        </IonCol>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        )
                    }
                })}
            </IonGrid>
        </>
    );
};

export default StudentLife_SIM;
import { IonButton, IonCol, IonGrid, IonRow, IonTitle } from '@ionic/react';
import React from 'react';

import '../../css/Global.css';
import '../../css/Brochures.css';

const StudentLife_SIM: React.FC = () => {

    return (
        <>
            <IonGrid id="brochures-grid">
                <IonRow className="brochures-toggle-container">
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
                                            <IonButton className="brochures-studentLife-button"><div className="ion-text-wrap">Download SIM GE Scholarship FAQs</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonCol>
                </IonRow>

                <IonRow className="brochures-toggle-container">
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
                                            <IonButton className="brochures-studentLife-button"><div className="ion-text-wrap">Download SIM GE Bursary Application FAQs</div></IonButton>
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

export default StudentLife_SIM;
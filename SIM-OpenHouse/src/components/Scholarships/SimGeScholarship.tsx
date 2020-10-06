import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRouterLink, IonRow, IonSegment, IonSegmentButton, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { addCircleOutline, cloudDownloadOutline } from 'ionicons/icons';
import React, { useState } from 'react';

import '../../css/Global.css';
import '../../css/StudentLife.css';

const SimGeScholarship: React.FC = () => {

    const [hide, setHide] = useState(true);

    const handleHide = () => {
        setHide(false);
    }

    return (
        <>
        <IonGrid id="scholarship-grid">
            <IonRow className="ion-justify-content-center scholarship-mainRow">
                <IonCol className="ion-align-self-center">
                    <IonText className="scholarship-mainHeading">SIM GE Scholarship</IonText>
                </IonCol>
                <IonCol className="ion-align-self-center">
                    <IonButton id="scholarship-FAQ-button" size="small">FAQ Download <IonIcon slot="end" icon={cloudDownloadOutline} size="sm"/></IonButton>
                </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center scholarship-mainRow">
                <IonText className="scholarship-mainDescription">
                    The SIM Global Education Scholarship is awarded to outstanding local and international students to 
                    pursue Bachelor’s degree programmes at SIM Global Education (SIM GE).
                </IonText>
            </IonRow>

            {/* Toggling Parts */}

            {/* Categories of Scholarships */}
            <IonRow className="scholarship-toggle-container">
                <IonCol className="scholarship-toggle-container">
                    <IonRow className="ion-justify-content-start scholarship-inner-row">
                        <IonCol className="ion-align-self-center" size="10">
                            <IonTitle className="scholarship-toggle-header">Categories of Scholarships</IonTitle>
                        </IonCol>
                        <IonCol size="2" className="ion-align-self-center">
                            <IonButton size="small" className="scholarship-toggle-button" onClick={() => handleHide()}><IonIcon icon={addCircleOutline} slot="icon-only"/></IonButton>
                        </IonCol>
                    </IonRow>

                    <IonRow className="scholarship-toggle-details-container" hidden={hide}>
                        <IonCol size="12">
                            <IonRow>
                                <IonText className="scholarship-categories-header">Academic Excellence and Leadership</IonText>
                            </IonRow>
                            <IonRow>
                                <IonText className="scholarship-description">
                                    Awards are granted to outstanding students who have achieved academic excellence and 
                                    demonstrated leadership qualities both in and outside the classroom.
                                </IonText>
                            </IonRow>
                            <IonRow>
                                <IonText className="scholarship-categories-header">Sports and Artistic Talent</IonText>
                            </IonRow>
                            <IonRow>
                                <IonText className="scholarship-description">
                                    Awards are granted to athletes who possess an impressive track record of achievement in 
                                    sports or individuals with outstanding artistic talents.
                                </IonText>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonCol>
            </IonRow>

            {/* Eligibility */}
            <IonRow className="scholarship-toggle-container">
                <IonCol className="scholarship-toggle-container">
                    <IonRow className="ion-justify-content-start scholarship-inner-row">
                        <IonCol className="ion-align-self-center scholarship-inner-col" size="10">
                            <IonTitle className="scholarship-toggle-header">Eligibility</IonTitle>
                        </IonCol>
                        <IonCol size="2" className="ion-align-self-center">
                            <IonButton size="small" className="scholarship-toggle-button" onClick={() => handleHide()}><IonIcon icon={addCircleOutline} slot="icon-only"/></IonButton>
                        </IonCol>
                    </IonRow>

                    <IonRow className="scholarship-toggle-details-container" hidden={hide}>
                        <IonCol size="12">
                            <IonRow>
                                <IonText className="scholarship-description">
                                    - Outstanding Singapore-Cambridge GCE ‘A’ Level, Local Polytechnic Diploma, IB Diploma or Year 12 equivalent qualifications <br/>
                                    - An impressive community contribution and co-curricular activities involvement record <br/>
                                    - Strong leadership, interpersonal and communication skills
                                </IonText>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonCol>
            </IonRow>

            
        </IonGrid>
        </>
    );
};

export default SimGeScholarship;
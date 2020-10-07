import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRouterLink, IonRow, IonSegment, IonSegmentButton, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { addCircle, removeCircle } from 'ionicons/icons';
import React, { useRef, useState } from 'react';

import '../../css/Global.css';
import '../../css/StudentLife.css';

const Sponsors: React.FC = () => {

    const safra = useRef<HTMLIonRowElement>(null);
    const toggleShow1 = useRef<HTMLIonIconElement>(null);

    const displaySafra = () => {
        safra.current!.hidden = !safra.current!.hidden;
        if(toggleShow1.current!.icon == addCircle) {
            toggleShow1.current!.icon = removeCircle;
        } else {
            toggleShow1.current!.icon = addCircle;
        }
    }
    

    return (
        <>
        <IonGrid id="scholarship-grid">
            <IonRow className="ion-justify-content-center scholarship-mainRow">
                <IonCol className="ion-align-self-center">
                    <IonText className="scholarship-mainHeading">Sponsorship</IonText>
                </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-start scholarship-mainRow">
                <IonText className="scholarship-mainDescription">
                    <p>
                    An education is the best gift one can receive. SIM GE works with partners and benefactors who 
                    have been helping us to grow from strength to strength as we strive to provide the best all 
                    rounded education for our students.
                    </p>
                    <p>
                    If you are an organisation, foundation, trust or even an individual, and you wish to sponsor a 
                    Scholarship, Bursary, or Grant, we welcome you to explore this noble ambition with us.
                    </p>
                    <p>Please email <a href="mailto:scholarship@sim.edu.sg">scholarship@sim.edu.sg</a></p>
                </IonText>
            </IonRow>

            {/* Toggling Parts */}

            {/* SAFRA-SIM GE Sponsorship */}
            <IonRow className="scholarship-toggle-container">
                <IonCol className="scholarship-toggle-container">
                    <IonRow className="ion-justify-content-start">
                        <IonCol className="ion-align-self-center" size="10">
                            <IonTitle className="scholarship-toggle-header">SAFRA-SIM GE Sponsorship</IonTitle>
                        </IonCol>
                        <IonCol size="2" className="ion-align-self-center">
                            <IonButton size="small" className="scholarship-toggle-button" onClick={() => displaySafra()}><IonIcon ref={toggleShow1} icon={addCircle} slot="icon-only"/></IonButton>
                        </IonCol>
                    </IonRow>

                    <IonRow className="scholarship-toggle-details-container" ref={safra} hidden={true}>
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

            <IonRow id="scholarship-moreInfo">
                <IonText>For more information, please visit the SAFRA website at <IonRouterLink href="www.safra.sg">www.safra.sg</IonRouterLink>.</IonText>
                <IonText>For enquiries, please email <a href="mailto:oelaine@safra.sg">oelaine@safra.sg</a></IonText>
            </IonRow>
            
        </IonGrid>
        </>
    );
};

export default Sponsors;
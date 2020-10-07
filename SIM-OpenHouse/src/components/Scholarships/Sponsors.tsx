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
                                <IonText className="scholarship-description">
                                    <p>
                                    SAFRA members can tap on the SAFRA-SIM GE Sponsorship under the SAFRA Education Scheme to further their education. 
                                    SIM Global Education will sponsor up to a maximum of ten Nominated Members, by SAFRA, for each academic year.
                                    </p>
                                    <p>
                                    The sponsorship is only applicable for full-time SIM diploma programmes and part-time University of London (UOL) 
                                    undergraduate degree programmes.
                                    </p>
                                    <p>
                                    Successful members will be granted 50% sponsorship of course fees for diploma programmes. 
                                    Full SIM course fees sponsorship is granted for part time UOL undergraduate degree programmes 
                                    but the sponsorship excludes fees payable to UOL.
                                    </p>
                                    <p>There are two application periods per year:</p>
                                    <ul className="scholarship-unorderedList">
                                        <li className="scholarship-unorderedList-description">March</li>
                                        <li className="scholarship-unorderedList-description">September</li>
                                    </ul>
                                    <p>For more information, please visit the SAFRA website at <IonRouterLink href="www.safra.sg">www.safra.sg</IonRouterLink>.</p>
                                </IonText>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonCol>
            </IonRow>

            <IonRow id="scholarship-moreInfo">
                <IonText>For enquiries, please email <a href="mailto:oelaine@safra.sg">oelaine@safra.sg</a></IonText>
            </IonRow>
            
        </IonGrid>
        </>
    );
};

export default Sponsors;
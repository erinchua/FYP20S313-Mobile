import { IonButton, IonCol, IonGrid, IonIcon, IonRouterLink, IonRow, IonText, IonTitle } from '@ionic/react';
import { addCircle, removeCircle } from 'ionicons/icons';
import React, { useRef } from 'react';

import '../../css/Global.css';
import '../../css/StudentLife.css';
import { camalize } from '../../modules/convert';

const Sponsors: React.FC<{ scholarships: any }> = (props) => {

    const sponsorInfo = props.scholarships.filter((info: any) => { return info.segment === "Sponsors" }).reduce((accu: any, curr: any) => (accu[camalize(curr.header)] = curr, accu), {});

    const safra = useRef<HTMLIonRowElement>(null);
    const toggleShow1 = useRef<HTMLIonIconElement>(null);

    const displaySafra = () => {
        safra.current!.hidden = !safra.current!.hidden;
        if (toggleShow1.current!.icon === addCircle) {
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
                        <p>An education is the best gift one can receive. SIM GE works with partners and benefactors who have been helping us to grow from strength to strength as we strive to provide the best all rounded education for our students.</p>
                        <p>If you are an organisation, foundation, trust or even an individual, and you wish to sponsor a Scholarship, Bursary, or Grant, we welcome you to explore this noble ambition with us.</p>
                        <p>Please email <a href="mailto:scholarship@sim.edu.sg">scholarship@sim.edu.sg</a></p>
                    </IonText>
                </IonRow>

                {/* Toggling Parts */}

                {/* SAFRA-SIM GE Sponsorship */}
                {sponsorInfo.safraSimGeSponsorship !== undefined ? (
                    <div>
                        <IonRow className="scholarship-toggle-container">
                            <IonCol className="scholarship-toggle-container">
                                <IonRow className="ion-justify-content-start">
                                    <IonCol className="ion-align-self-center" size="10">
                                        <IonTitle className="scholarship-toggle-header">{sponsorInfo.safraSimGeSponsorship.header}</IonTitle>
                                    </IonCol>
                                    <IonCol size="2" className="ion-align-self-center">
                                        <IonButton size="small" className="scholarship-toggle-button" onClick={() => displaySafra()}><IonIcon ref={toggleShow1} icon={addCircle} slot="icon-only" /></IonButton>
                                    </IonCol>
                                </IonRow>

                                <IonRow className="scholarship-toggle-details-container" ref={safra} hidden={true}>
                                    <IonCol size="12">
                                        <IonRow>
                                            <IonText className="scholarship-description">
                                                {sponsorInfo.safraSimGeSponsorship.description.split('\n').map((line: string, index: number) => (
                                                    <p key={index}>{line}</p>
                                                ))}
                                                <ul className="scholarship-unorderedList">
                                                    {sponsorInfo.safraSimGeSponsorship.applicationPeriods.map((li: string, index: number) => (
                                                        <li key={index} className="scholarship-unorderedList-description">{li}</li>
                                                    ))}
                                                </ul>
                                                <p>For more information, please visit the SAFRA website at <IonRouterLink href={`${sponsorInfo.safraSimGeSponsorship.website}`}>{sponsorInfo.safraSimGeSponsorship.website}</IonRouterLink>.</p>
                                            </IonText>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>

                        <IonRow id="scholarship-moreInfo">
                            <IonText>For enquiries, please email <a href={`${sponsorInfo.safraSimGeSponsorship.email}`}>{sponsorInfo.safraSimGeSponsorship.email}</a></IonText>
                        </IonRow>
                    </div>
                ) : null
                }

            </IonGrid>
        </>
    );
};

export default Sponsors;
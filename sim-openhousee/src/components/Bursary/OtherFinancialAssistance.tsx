import { IonButton, IonCol, IonGrid, IonIcon, IonRouterLink, IonRow, IonText, IonTitle } from '@ionic/react';
import { addCircle, removeCircle } from 'ionicons/icons';
import React, { useRef } from 'react';

import '../../css/Global.css';
import '../../css/StudentLife.css';
import { camalize } from '../../modules/convert';

const OtherFinancialAssistance: React.FC<{ bursaries: any }> = (props) => {

    const bursaryInfo = props.bursaries.filter((info: any) => { return info.segment === "Other Financial Assistance" }).reduce((accu: any, curr: any) => (accu[camalize(curr.header)] = curr, accu), {});

    const ampEducationBursary = useRef<HTMLIonRowElement>(null);
    const mtfaBursary = useRef<HTMLIonRowElement>(null);
    const lembagaBiasiswaKenangaMaulud = useRef<HTMLIonRowElement>(null);
    const sivadasHebEducationFund = useRef<HTMLIonRowElement>(null);
    const toggleShow1 = useRef<HTMLIonIconElement>(null);
    const toggleShow2 = useRef<HTMLIonIconElement>(null);
    const toggleShow3 = useRef<HTMLIonIconElement>(null);
    const toggleShow4 = useRef<HTMLIonIconElement>(null);

    const displayAmpEducationBursary = () => {
        ampEducationBursary.current!.hidden = !ampEducationBursary.current!.hidden;
        if (toggleShow1.current!.icon === addCircle) {
            toggleShow1.current!.icon = removeCircle;
        } else {
            toggleShow1.current!.icon = addCircle;
        }
    }

    const displayMtfaBursary = () => {
        mtfaBursary.current!.hidden = !mtfaBursary.current!.hidden;
        if (toggleShow2.current!.icon === addCircle) {
            toggleShow2.current!.icon = removeCircle;
        } else {
            toggleShow2.current!.icon = addCircle;
        }
    }

    const displayLembagaBiasiswaKenangaMaulud = () => {
        lembagaBiasiswaKenangaMaulud.current!.hidden = !lembagaBiasiswaKenangaMaulud.current!.hidden;
        if (toggleShow3.current!.icon === addCircle) {
            toggleShow3.current!.icon = removeCircle;
        } else {
            toggleShow3.current!.icon = addCircle;
        }
    }

    const displaySivadasHebEducationFund = () => {
        sivadasHebEducationFund.current!.hidden = !sivadasHebEducationFund.current!.hidden;
        if (toggleShow4.current!.icon === addCircle) {
            toggleShow4.current!.icon = removeCircle;
        } else {
            toggleShow4.current!.icon = addCircle;
        }
    }

    return (
        <>
            <IonGrid id="bursary-grid">
                <IonRow className="ion-justify-content-center bursary-mainRow">
                    <IonCol className="ion-align-self-center">
                        <IonText className="bursary-mainHeading">Other Financial Assistance</IonText>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-justify-content-start bursary-mainRow">
                    <IonText className="bursary-mainDescription">
                        <p>SIM GE continues to keep a look out for other partners and opportunities which can help our students. As such, we will add more of these bursaries/ financial assistance programmes over time. You can check them out and apply directly to the relevant organisations.</p>
                    </IonText>
                </IonRow>

                {/* Toggling Parts */}

                {/* AMP Education Bursary */}
                {bursaryInfo.ampEducationBursary !== undefined ? (
                    <IonRow className="bursary-toggle-container">
                        <IonCol className="bursary-toggle-container">
                            <IonRow className="ion-justify-content-start bursary-inner-row">
                                <IonCol className="ion-align-self-center" size="10">
                                    <IonTitle className="bursary-toggle-header">{bursaryInfo.ampEducationBursary.header}</IonTitle>
                                </IonCol>
                                <IonCol size="2" className="ion-align-self-center">
                                    <IonButton size="small" className="bursary-toggle-button" onClick={() => displayAmpEducationBursary()}><IonIcon ref={toggleShow1} icon={addCircle} slot="icon-only" /></IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow className="bursary-toggle-details-container" ref={ampEducationBursary} hidden={true}>
                                <IonCol size="12">
                                    <IonRow>
                                        <IonText className="bursary-description">
                                            {bursaryInfo.ampEducationBursary.description.split('\n').map((line: string, index: number) => (
                                                <p key={index}>{line}</p>
                                            ))}
                                            <p>Visit their <IonRouterLink href={`${bursaryInfo.ampEducationBursary.website}`}>website</IonRouterLink> for more details about the bursary.</p>
                                            <p>For enquiries, please call tel: {bursaryInfo.ampEducationBursary.contact.join(' / ')} or email them at <a href={`mailto:${bursaryInfo.ampEducationBursary.email}`}>{bursaryInfo.ampEducationBursary.email}</a>.</p>
                                        </IonText>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                ) : null
                }


                {/* MTFA Bursary */}
                {bursaryInfo.mtfaBursary !== undefined ? (
                    <IonRow className="bursary-toggle-container">
                        <IonCol className="bursary-toggle-container">
                            <IonRow className="ion-justify-content-start bursary-inner-row">
                                <IonCol className="ion-align-self-center" size="10">
                                    <IonTitle className="bursary-toggle-header">{bursaryInfo.mtfaBursary.header}</IonTitle>
                                </IonCol>
                                <IonCol size="2" className="ion-align-self-center">
                                    <IonButton size="small" className="bursary-toggle-button" onClick={() => displayMtfaBursary()}><IonIcon ref={toggleShow2} icon={addCircle} slot="icon-only" /></IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow className="bursary-toggle-details-container" ref={mtfaBursary} hidden={true}>
                                <IonCol size="12">
                                    <IonRow>
                                        <IonText className="bursary-description">
                                            {bursaryInfo.mtfaBursary.description.split('\n').map((line: string, index: number) => (
                                                <p key={index}>{line}</p>
                                            ))}
                                            <p>Application forms can be downloaded from their <IonRouterLink href={`${bursaryInfo.mtfaBursary.website}`}>website</IonRouterLink> or obtained at the MTFA Office, 5 Mattar Road, Darul Ihsan Orphanage Building, Singapore 387713.</p>
                                            <p>For enquiries, please call them at tel: {bursaryInfo.mtfaBursary.contact.join(' / ')} or email them at <a href={`mailto:${bursaryInfo.mtfaBursary.email}`}>{bursaryInfo.mtfaBursary.email}</a>.</p>
                                        </IonText>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                ) : null
                }

                {/* Lembaga Biasiswa Kenanga Maulud (LBKM) */}
                {bursaryInfo.lembagaBiasiswaKenangaMaulud !== undefined ? (
                    <IonRow className="bursary-toggle-container">
                        <IonCol className="bursary-toggle-container">
                            <IonRow className="ion-justify-content-start bursary-inner-row">
                                <IonCol className="ion-align-self-center" size="10">
                                    <IonTitle className="bursary-toggle-header"><div className="ion-text-wrap">{bursaryInfo.lembagaBiasiswaKenangaMaulud.header} (LBKM)</div></IonTitle>
                                </IonCol>
                                <IonCol size="2" className="ion-align-self-center">
                                    <IonButton size="small" className="bursary-toggle-button" onClick={() => displayLembagaBiasiswaKenangaMaulud()}><IonIcon ref={toggleShow3} icon={addCircle} slot="icon-only" /></IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow className="bursary-toggle-details-container" ref={lembagaBiasiswaKenangaMaulud} hidden={true}>
                                <IonCol size="12">
                                    <IonRow>
                                        <IonText className="bursary-description">
                                            {bursaryInfo.lembagaBiasiswaKenangaMaulud.description.split('\n').map((line: string, index: number) => (
                                                <p key={index}>{line}</p>
                                            ))}
                                            <p>Visit their <IonRouterLink href={`${bursaryInfo.lembagaBiasiswaKenangaMaulud.website}`}>website</IonRouterLink> for more details about the bursary.</p>
                                            <p>For enquiries, please call them at tel: {bursaryInfo.lembagaBiasiswaKenangaMaulud.contact.join(' / ')} or email them at <a href={`mailto:${bursaryInfo.lembagaBiasiswaKenangaMaulud.email}`}>{bursaryInfo.lembagaBiasiswaKenangaMaulud.email}</a>.</p>
                                        </IonText>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                ) : null
                }

                {/* Sivadas-HEB Education Fund */}
                {bursaryInfo.sivadasHebEducationFund !== undefined ? (
                    <IonRow className="bursary-toggle-container">
                        <IonCol className="bursary-toggle-container">
                            <IonRow className="ion-justify-content-start bursary-inner-row">
                                <IonCol className="ion-align-self-center" size="10">
                                    <IonTitle className="bursary-toggle-header">{bursaryInfo.sivadasHebEducationFund.header}</IonTitle>
                                </IonCol>
                                <IonCol size="2" className="ion-align-self-center">
                                    <IonButton size="small" className="bursary-toggle-button" onClick={() => displaySivadasHebEducationFund()}><IonIcon ref={toggleShow4} icon={addCircle} slot="icon-only" /></IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow className="bursary-toggle-details-container" ref={sivadasHebEducationFund} hidden={true}>
                                <IonCol size="12">
                                    <IonRow>
                                        <IonText className="bursary-description">
                                            {bursaryInfo.sivadasHebEducationFund.description.split('\n').map((line: string, index: number) => (
                                                <p key={index}>{line}</p>
                                            ))}
                                            <p>Visit their <IonRouterLink href={`${bursaryInfo.sivadasHebEducationFund.website}`}>website</IonRouterLink> for more details about this tuition subsidy.</p>
                                            <p>For enquiries, please contact the Hindu Endowments Board Office at tel: {bursaryInfo.sivadasHebEducationFund.contact.join(' / ')} or email them at <a href={`mailto:${bursaryInfo.sivadasHebEducationFund.email}`}>{bursaryInfo.sivadasHebEducationFund.email}</a>.</p>
                                        </IonText>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                ) : null
                }

            </IonGrid>
        </>
    );
};

export default OtherFinancialAssistance;
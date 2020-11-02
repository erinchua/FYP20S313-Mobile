import { IonButton, IonCol, IonGrid, IonIcon, IonRouterLink, IonRow, IonText, IonTitle } from '@ionic/react';
import { addCircle, removeCircle } from 'ionicons/icons';
import React, { useRef } from 'react';

import '../../css/Global.css';
import '../../css/StudentLife.css';

const OtherFinancialAssistance: React.FC = () => {

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
        if(toggleShow1.current!.icon === addCircle) {
            toggleShow1.current!.icon = removeCircle;
        } else {
            toggleShow1.current!.icon = addCircle;
        }
    }

    const displayMtfaBursary = () => {
        mtfaBursary.current!.hidden = !mtfaBursary.current!.hidden;
        if(toggleShow2.current!.icon === addCircle) {
            toggleShow2.current!.icon = removeCircle;
        } else {
            toggleShow2.current!.icon = addCircle;
        }
    }

    const displayLembagaBiasiswaKenangaMaulud = () => {
        lembagaBiasiswaKenangaMaulud.current!.hidden = !lembagaBiasiswaKenangaMaulud.current!.hidden;
        if(toggleShow3.current!.icon === addCircle) {
            toggleShow3.current!.icon = removeCircle;
        } else {
            toggleShow3.current!.icon = addCircle;
        }
    }

    const displaySivadasHebEducationFund = () => {
        sivadasHebEducationFund.current!.hidden = !sivadasHebEducationFund.current!.hidden;
        if(toggleShow4.current!.icon === addCircle) {
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
                    <p>
                    SIM GE continues to keep a look out for other partners and opportunities which can help our students. 
                    As such, we will add more of these bursaries/ financial assistance programmes over time. 
                    You can check them out and apply directly to the relevant organisations.
                    </p>
                </IonText>
            </IonRow>

            {/* Toggling Parts */}

            {/* AMP Education Bursary */}
            <IonRow className="bursary-toggle-container">
                <IonCol className="bursary-toggle-container">
                    <IonRow className="ion-justify-content-start bursary-inner-row">
                        <IonCol className="ion-align-self-center" size="10">
                            <IonTitle className="bursary-toggle-header">AMP Education Bursary</IonTitle>
                        </IonCol>
                        <IonCol size="2" className="ion-align-self-center">
                            <IonButton size="small" className="bursary-toggle-button" onClick={() => displayAmpEducationBursary()}><IonIcon ref={toggleShow1} icon={addCircle} slot="icon-only"/></IonButton>
                        </IonCol>
                    </IonRow>

                    <IonRow className="bursary-toggle-details-container" ref={ampEducationBursary} hidden={true}>
                        <IonCol size="12">
                            <IonRow>
                                <IonText className="bursary-description">
                                    <p>
                                    The Association of Muslim Professionals (AMP) was established on 10 October 1991, 
                                    formed with core programmes in education, human resource development, social development and research.
                                    </p>
                                    <p>
                                    The AMP Education Bursary offers monetary assistance to students who are pursuing their polytechnic or 
                                    university education. The bursary award seeks to recognize their academic achievements and be a source of 
                                    motivation for them to strive harder in their studies. It hopes to see students through their pursuit of 
                                    higher levels of education and in future, give back to those in need within the community.
                                    </p>
                                    <p>
                                    Visit their <IonRouterLink href="https://www.amp.org.sg/service/ready-for-school-fund/#ert_pane1-1">website</IonRouterLink> for more details about the bursary.
                                    </p>
                                    <p>
                                    There are two application periods per year:
                                    </p>
                                    <p>
                                    For enquiries, please call tel: 6416 3966 or email them at <a href="mailto:corporate@amp.org.sg">corporate@amp.org.sg</a>.
                                    </p>
                                </IonText>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonCol>
            </IonRow>

            {/* MTFA Bursary */}
            <IonRow className="bursary-toggle-container">
                <IonCol className="bursary-toggle-container">
                    <IonRow className="ion-justify-content-start bursary-inner-row">
                        <IonCol className="ion-align-self-center" size="10">
                            <IonTitle className="bursary-toggle-header">MTFA Bursary</IonTitle>
                        </IonCol>
                        <IonCol size="2" className="ion-align-self-center">
                            <IonButton size="small" className="bursary-toggle-button" onClick={() => displayMtfaBursary()}><IonIcon ref={toggleShow2} icon={addCircle} slot="icon-only"/></IonButton>
                        </IonCol>
                    </IonRow>

                    <IonRow className="bursary-toggle-details-container" ref={mtfaBursary} hidden={true}>
                        <IonCol size="12">
                            <IonRow>
                                <IonText className="bursary-description">
                                    <p>
                                    Muslimin Trust Fund Association (MTFA), a registered charitable Muslim organisation in Singapore aims 
                                    to provide financial assistance to Muslim students from lower-income families in Singapore as well as 
                                    orphans who wish to further their education in various fields.
                                    </p>
                                    <p>
                                    Application forms can be downloaded from their <IonRouterLink href="https://www.mtfa.org/scholarship-bursary/">website</IonRouterLink> or obtained at the MTFA Office, 
                                    5 Mattar Road, Darul Ihsan Orphanage Building, Singapore 387713.
                                    </p>
                                    <p>
                                    For enquiries, please call them at tel: 6747 7556 / 6746 5729 or email them at <a href="mailto:adminMTFA@mtfa.org">adminMTFA@mtfa.org</a>.
                                    </p>
                                </IonText>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonCol>
            </IonRow>

            {/* Lembaga Biasiswa Kenanga Maulud (LBKM) */}
            <IonRow className="bursary-toggle-container">
                <IonCol className="bursary-toggle-container">
                    <IonRow className="ion-justify-content-start bursary-inner-row">
                        <IonCol className="ion-align-self-center" size="10">
                            <IonTitle className="bursary-toggle-header"><div className="ion-text-wrap">Lembaga Biasiswa Kenanga Maulud (LBKM)</div></IonTitle>
                        </IonCol>
                        <IonCol size="2" className="ion-align-self-center">
                            <IonButton size="small" className="bursary-toggle-button" onClick={() => displayLembagaBiasiswaKenangaMaulud()}><IonIcon ref={toggleShow3} icon={addCircle} slot="icon-only"/></IonButton>
                        </IonCol>
                    </IonRow>

                    <IonRow className="bursary-toggle-details-container" ref={lembagaBiasiswaKenangaMaulud} hidden={true}>
                        <IonCol size="12">
                            <IonRow>
                                <IonText className="bursary-description">
                                    <p>
                                    LBKM was formed in 1965 with the concerted determination and commitment of the leaders of 
                                    about 70 Malay/Muslim organisations who felt the need to have an organisation that can cater 
                                    to the financial needs of the needy students.
                                    </p>
                                    <p>
                                    Since their establishment in 1965, their main focus has been to provide financial assistance 
                                    in the form of bursaries to needy students.
                                    </p>
                                    <p>
                                    Visit their <IonRouterLink href="http://lbkm.org.sg/bursary-scholarship/lbkm-bursaries/">website</IonRouterLink> for more details about the bursary.
                                    </p>
                                    <p>
                                    For enquiries, please call them at tel: 6747 7556 / 6746 5729 or email them at <a href="mailto:enquiries@lbkm.org.sg">enquiries@lbkm.org.sg</a>.
                                    </p>
                                </IonText>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonCol>
            </IonRow>

            {/* Sivadas-HEB Education Fund */}
            <IonRow className="bursary-toggle-container">
                <IonCol className="bursary-toggle-container">
                    <IonRow className="ion-justify-content-start bursary-inner-row">
                        <IonCol className="ion-align-self-center" size="10">
                            <IonTitle className="bursary-toggle-header">Sivadas-HEB Education Fund</IonTitle>
                        </IonCol>
                        <IonCol size="2" className="ion-align-self-center">
                            <IonButton size="small" className="bursary-toggle-button" onClick={() => displaySivadasHebEducationFund()}><IonIcon ref={toggleShow4} icon={addCircle} slot="icon-only"/></IonButton>
                        </IonCol>
                    </IonRow>

                    <IonRow className="bursary-toggle-details-container" ref={sivadasHebEducationFund} hidden={true}>
                        <IonCol size="12">
                            <IonRow>
                                <IonText className="bursary-description">
                                    <p>
                                    The Sivadas-HEB Education Fund, a fund established by the trustees of the Estate of the Late Sivadas Sankaran, 
                                    provides needy Hindu children with financial assistance to get a good education.
                                    </p>
                                    <p>
                                    The Sivadas-HEB Education Fund invites Hindu students from low-income families pursuing tertiary education to 
                                    apply for financial assistance to help them meet the cost of their education. Students can apply for a Tuition Subsidy. 
                                    The tuition subsidy will be limited to a maximum of 50% of the yearly tuition fee subject to a maximum of $5,000 per year, 
                                    according to the year of study or any other amount as determined by the Sivadas-HEB Education Fund Committee.
                                    </p>
                                    <p>
                                    Visit their <IonRouterLink href="https://heb.org.sg/assistance-schemes/sivadas-heb-tertiary-bursary/">website</IonRouterLink> for more details about this tuition subsidy.
                                    </p>
                                    <p>
                                    For enquiries, please contact the Hindu Endowments Board Office at tel: 6296 3469 or email them at <a href="mailto:admin@heb.org.sg">admin@heb.org.sg</a>.
                                    </p>
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

export default OtherFinancialAssistance;
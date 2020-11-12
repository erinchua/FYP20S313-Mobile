import { IonButton, IonCol, IonGrid, IonIcon, IonRouterLink, IonRow, IonText, IonTitle } from '@ionic/react';
import { addCircle, cloudDownloadOutline, removeCircle } from 'ionicons/icons';
import React, { useRef } from 'react';

import '../../css/Global.css';
import '../../css/StudentLife.css';
import { camalize } from '../../modules/convert';
import { Brochure } from '../../modules/map';

const SimGeBursary: React.FC<{ brochure: Brochure, bursaries: any }> = (props) => {

    const bursaryInfo = props.bursaries.filter((info: any) => { return info.segment === "SIM GE Bursary" }).reduce((accu: any, curr: any) => (accu[camalize(curr.header)] = curr, accu), {});

    const valueAndTenureOfBursary = useRef<HTMLIonRowElement>(null);
    const eligibility = useRef<HTMLIonRowElement>(null);
    const repayment = useRef<HTMLIonRowElement>(null);
    const howToApply = useRef<HTMLIonRowElement>(null);
    const requiredSupportingDocuments = useRef<HTMLIonRowElement>(null);
    const thingsToNote = useRef<HTMLIonRowElement>(null);
    const contactInformation = useRef<HTMLIonRowElement>(null);

    const toggleShow1 = useRef<HTMLIonIconElement>(null);
    const toggleShow2 = useRef<HTMLIonIconElement>(null);
    const toggleShow3 = useRef<HTMLIonIconElement>(null);
    const toggleShow4 = useRef<HTMLIonIconElement>(null);
    const toggleShow5 = useRef<HTMLIonIconElement>(null);
    const toggleShow6 = useRef<HTMLIonIconElement>(null);
    const toggleShow7 = useRef<HTMLIonIconElement>(null);

    const displayValueAndTenureOfBursary = () => {
        valueAndTenureOfBursary.current!.hidden = !valueAndTenureOfBursary.current!.hidden;
        if (toggleShow1.current!.icon === addCircle) {
            toggleShow1.current!.icon = removeCircle;
        } else {
            toggleShow1.current!.icon = addCircle;
        }
    }

    const displayEligibility = () => {
        eligibility.current!.hidden = !eligibility.current!.hidden;
        if (toggleShow2.current!.icon === addCircle) {
            toggleShow2.current!.icon = removeCircle;
        } else {
            toggleShow2.current!.icon = addCircle;
        }
    }

    const displayRepayment = () => {
        repayment.current!.hidden = !repayment.current!.hidden;
        if (toggleShow3.current!.icon === addCircle) {
            toggleShow3.current!.icon = removeCircle;
        } else {
            toggleShow3.current!.icon = addCircle;
        }
    }

    const displayHowToApply = () => {
        howToApply.current!.hidden = !howToApply.current!.hidden;
        if (toggleShow4.current!.icon === addCircle) {
            toggleShow4.current!.icon = removeCircle;
        } else {
            toggleShow4.current!.icon = addCircle;
        }
    }

    const displayRequiredSupportingDocuments = () => {
        requiredSupportingDocuments.current!.hidden = !requiredSupportingDocuments.current!.hidden;
        if (toggleShow5.current!.icon === addCircle) {
            toggleShow5.current!.icon = removeCircle;
        } else {
            toggleShow5.current!.icon = addCircle;
        }
    }

    const displayThingsToNote = () => {
        thingsToNote.current!.hidden = !thingsToNote.current!.hidden;
        if (toggleShow6.current!.icon === addCircle) {
            toggleShow6.current!.icon = removeCircle;
        } else {
            toggleShow6.current!.icon = addCircle;
        }
    }

    const displayContactInformation = () => {
        contactInformation.current!.hidden = !contactInformation.current!.hidden;
        if (toggleShow7.current!.icon === addCircle) {
            toggleShow7.current!.icon = removeCircle;
        } else {
            toggleShow7.current!.icon = addCircle;
        }
    }

    return (
        <>
            <IonGrid id="bursary-grid">
                <IonRow className="ion-justify-content-center bursary-mainRow">
                    <IonCol className="ion-align-self-center">
                        <IonText className="bursary-mainHeading">SIM GE Bursary</IonText>
                    </IonCol>
                    <IonCol className="ion-align-self-center">
                        <IonButton id="bursary-FAQ-button" size="small" href={props.brochure.brochureUrl} target="_blank">FAQ Download <IonIcon slot="end" icon={cloudDownloadOutline} size="sm" /></IonButton>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-justify-content-start bursary-mainRow">
                    <IonText className="bursary-mainDescription">
                        The SIM GE Bursary aims to provide financial assistance to needy students studying at SIM GE. This award is given based on our eligibility criteria, as well as the assessed level of neediness of the applicants.
                </IonText>
                </IonRow>

                {/* Toggling Parts */}

                {/* Value and Tenure of Bursary */}
                {bursaryInfo.valueAndTenureOfBursary !== undefined ? (
                    <IonRow className="bursary-toggle-container">
                        <IonCol className="bursary-toggle-container">
                            <IonRow className="ion-justify-content-start">
                                <IonCol className="ion-align-self-center" size="10">
                                    <IonTitle className="bursary-toggle-header">{bursaryInfo.valueAndTenureOfBursary.header}</IonTitle>
                                </IonCol>
                                <IonCol size="2" className="ion-align-self-center">
                                    <IonButton size="small" className="bursary-toggle-button" onClick={() => displayValueAndTenureOfBursary()}><IonIcon ref={toggleShow1} icon={addCircle} slot="icon-only" /></IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow className="bursary-toggle-details-container" ref={valueAndTenureOfBursary} hidden={true}>
                                <IonCol size="12">
                                    <IonRow>
                                        <IonText className="bursary-description">{bursaryInfo.valueAndTenureOfBursary.description}</IonText>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                ) : null
                }


                {/* Eligibility */}
                {bursaryInfo.eligibility !== undefined ? (
                    <IonRow className="bursary-toggle-container">
                        <IonCol className="bursary-toggle-container">
                            <IonRow className="ion-justify-content-start bursary-inner-row">
                                <IonCol className="ion-align-self-center bursary-inner-col" size="10">
                                    <IonTitle className="bursary-toggle-header">{bursaryInfo.eligibility.header}</IonTitle>
                                </IonCol>
                                <IonCol size="2" className="ion-align-self-center">
                                    <IonButton size="small" className="bursary-toggle-button" onClick={() => displayEligibility()}><IonIcon ref={toggleShow2} icon={addCircle} slot="icon-only" /></IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow className="bursary-toggle-details-container" ref={eligibility} hidden={true}>
                                <IonCol size="12">
                                    <IonRow>
                                        <IonText className="bursary-description">
                                            <ul className="bursary-unorderedList">
                                                {bursaryInfo.eligibility.content.map((li: string, index: number) => (
                                                    <li key={index} className="bursary-unorderedList-description">{li}</li>
                                                ))}
                                            </ul>
                                        </IonText>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                ) : null
                }

                {/* Repayment */}
                {bursaryInfo.repayment !== undefined ? (
                    <IonRow className="bursary-toggle-container">
                        <IonCol className="bursary-toggle-container">
                            <IonRow className="ion-justify-content-start bursary-inner-row">
                                <IonCol className="ion-align-self-center bursary-inner-col" size="10">
                                    <IonTitle className="bursary-toggle-header">{bursaryInfo.repayment.header}</IonTitle>
                                </IonCol>
                                <IonCol size="2" className="ion-align-self-center">
                                    <IonButton size="small" className="bursary-toggle-button" onClick={() => displayRepayment()}><IonIcon ref={toggleShow3} icon={addCircle} slot="icon-only" /></IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow className="bursary-toggle-details-container" ref={repayment} hidden={true}>
                                <IonCol size="12">
                                    <IonRow>
                                        <IonText className="bursary-description">{bursaryInfo.repayment.description}</IonText>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                ) : null
                }

                {/* How to Apply */}
                {bursaryInfo.howToApply !== undefined ? (
                    <IonRow className="bursary-toggle-container">
                        <IonCol className="bursary-toggle-container">
                            <IonRow className="ion-justify-content-start bursary-inner-row">
                                <IonCol className="ion-align-self-center bursary-inner-col" size="10">
                                    <IonTitle className="bursary-toggle-header">{bursaryInfo.howToApply.header}</IonTitle>
                                </IonCol>
                                <IonCol size="2" className="ion-align-self-center">
                                    <IonButton size="small" className="bursary-toggle-button" onClick={() => displayHowToApply()}><IonIcon ref={toggleShow4} icon={addCircle} slot="icon-only" /></IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow className="bursary-toggle-details-container" ref={howToApply} hidden={true}>
                                <IonCol size="12">
                                    <IonRow>
                                        <IonText className="bursary-description">
                                            <p>{bursaryInfo.howToApply.steps}</p>
                                            <p>{bursaryInfo.howToApply.description}</p>
                                            {bursaryInfo.howToApply.content.map((list: any, index: number) => (
                                                <div key={index}>
                                                    <p><b><u>Application Period ({list.applicationPeriod})</u></b></p>
                                                    <ul className="bursary-unorderedList">
                                                        <li className="bursary-unorderedList-description">Closing Date: {list.closingDate}</li>
                                                        <li className="bursary-unorderedList-description">Processing Period: {list.processingPeriod}</li>
                                                        <li className="bursary-unorderedList-description">Notification Period: {list.notificationPeriod}</li>
                                                    </ul>
                                                </div>
                                            ))}
                                        </IonText>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                ) : null
                }

                {/* Required Supporting Documents */}
                {bursaryInfo.requiredSupportingDocuments !== undefined ? (
                    <IonRow className="bursary-toggle-container">
                        <IonCol className="bursary-toggle-container">
                            <IonRow className="ion-justify-content-start bursary-inner-row">
                                <IonCol className="ion-align-self-center bursary-inner-col" size="10">
                                    <IonTitle className="bursary-toggle-header">{bursaryInfo.requiredSupportingDocuments.header}</IonTitle>
                                </IonCol>
                                <IonCol size="2" className="ion-align-self-center">
                                    <IonButton size="small" className="bursary-toggle-button" onClick={() => displayRequiredSupportingDocuments()}><IonIcon ref={toggleShow5} icon={addCircle} slot="icon-only" /></IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow className="bursary-toggle-details-container" ref={requiredSupportingDocuments} hidden={true}>
                                <IonCol size="12">
                                    <IonRow>
                                        <IonText className="bursary-description">
                                            <p>All documents must be scanned and attached to the online application form before submission as no changes can be made thereafter. SIM GE has the right to reject applications with incomplete documents.</p>
                                            <ul className="bursary-unorderedList">
                                                {bursaryInfo.requiredSupportingDocuments.content.map((list: any, index: number) => (
                                                    <div key={index}>
                                                        <li className="bursary-unorderedList-description"><b><u>{list.title}:</u></b></li>
                                                        <ul className="bursary-unorderedList">
                                                            {list.description.map((li: string, idx: number) => (
                                                                <li key={idx} className="bursary-unorderedList-description">{li}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </ul>
                                            <p>The collection of personal data such as NRICs, and other supporting documents are required to facilitate the processing of applications, including verifications of the identities of applicants and household members. For information on SIM PDPA Policy, please refer to <IonRouterLink href={`${bursaryInfo.requiredSupportingDocuments.simPdpaPolicy}`}>{bursaryInfo.requiredSupportingDocuments.simPdpaPolicy}</IonRouterLink>.</p>
                                        </IonText>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                ) : null
                }

                {/* Things to Note */}
                {bursaryInfo.thingsToNote !== undefined ? (
                    <IonRow className="bursary-toggle-container">
                        <IonCol className="bursary-toggle-container">
                            <IonRow className="ion-justify-content-start bursary-inner-row">
                                <IonCol className="ion-align-self-center bursary-inner-col" size="10">
                                    <IonTitle className="bursary-toggle-header">{bursaryInfo.thingsToNote.header}</IonTitle>
                                </IonCol>
                                <IonCol size="2" className="ion-align-self-center">
                                    <IonButton size="small" className="bursary-toggle-button" onClick={() => displayThingsToNote()}><IonIcon ref={toggleShow6} icon={addCircle} slot="icon-only" /></IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow className="bursary-toggle-details-container" ref={thingsToNote} hidden={true}>
                                <IonCol size="12">
                                    <IonRow>
                                        <IonText className="bursary-description">
                                            <ul className="bursary-unorderedList">
                                                {bursaryInfo.thingsToNote.content.map((li: string, index: number) => (
                                                    <li key={index} className="bursary-unorderedList-description">{li}</li>
                                                ))}
                                            </ul>
                                        </IonText>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                ) : null
                }

                {/* Contact Information */}
                {bursaryInfo.contactInformation !== undefined ? (
                    <IonRow className="bursary-toggle-container">
                        <IonCol className="bursary-toggle-container">
                            <IonRow className="ion-justify-content-start bursary-inner-row">
                                <IonCol className="ion-align-self-center bursary-inner-col" size="10">
                                    <IonTitle className="bursary-toggle-header">{bursaryInfo.contactInformation.header}</IonTitle>
                                </IonCol>
                                <IonCol size="2" className="ion-align-self-center">
                                    <IonButton size="small" className="bursary-toggle-button" onClick={() => displayContactInformation()}><IonIcon ref={toggleShow7} icon={addCircle} slot="icon-only" /></IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow className="bursary-toggle-details-container" ref={contactInformation} hidden={true}>
                                <IonCol size="12">
                                    <IonRow>
                                        <IonText className="bursary-description">
                                            For enquiries, please drop us an email at <a href={`${bursaryInfo.contactInformation.email}`}>{bursaryInfo.contactInformation.email}</a>.
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

export default SimGeBursary;
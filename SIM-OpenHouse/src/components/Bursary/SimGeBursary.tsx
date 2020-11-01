import { IonButton, IonCol, IonGrid, IonIcon, IonRouterLink, IonRow, IonText, IonTitle } from '@ionic/react';
import { addCircle, cloudDownloadOutline, removeCircle } from 'ionicons/icons';
import React, { useRef } from 'react';

import '../../css/Global.css';
import '../../css/StudentLife.css';
import { Brochure } from '../../modules/map';

const SimGeBursary: React.FC<{ brochure: Brochure }> = (props) => {

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
        if(toggleShow1.current!.icon == addCircle) {
            toggleShow1.current!.icon = removeCircle;
        } else {
            toggleShow1.current!.icon = addCircle;
        }
    }

    const displayEligibility = () => {
        eligibility.current!.hidden = !eligibility.current!.hidden;
        if(toggleShow2.current!.icon == addCircle) {
            toggleShow2.current!.icon = removeCircle;
        } else {
            toggleShow2.current!.icon = addCircle;
        }
    }

    const displayRepayment = () => {
        repayment.current!.hidden = !repayment.current!.hidden;
        if(toggleShow3.current!.icon == addCircle) {
            toggleShow3.current!.icon = removeCircle;
        } else {
            toggleShow3.current!.icon = addCircle;
        }
    }

    const displayHowToApply = () => {
        howToApply.current!.hidden = !howToApply.current!.hidden;
        if(toggleShow4.current!.icon == addCircle) {
            toggleShow4.current!.icon = removeCircle;
        } else {
            toggleShow4.current!.icon = addCircle;
        }
    }

    const displayRequiredSupportingDocuments = () => {
        requiredSupportingDocuments.current!.hidden = !requiredSupportingDocuments.current!.hidden;
        if(toggleShow5.current!.icon == addCircle) {
            toggleShow5.current!.icon = removeCircle;
        } else {
            toggleShow5.current!.icon = addCircle;
        }
    }

    const displayThingsToNote = () => {
        thingsToNote.current!.hidden = !thingsToNote.current!.hidden;
        if(toggleShow6.current!.icon == addCircle) {
            toggleShow6.current!.icon = removeCircle;
        } else {
            toggleShow6.current!.icon = addCircle;
        }
    }

    const displayContactInformation = () => {
        contactInformation.current!.hidden = !contactInformation.current!.hidden;
        if(toggleShow7.current!.icon == addCircle) {
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
                    <IonButton id="bursary-FAQ-button" size="small" href={props.brochure.brochureUrl} target="_blank">FAQ Download <IonIcon slot="end" icon={cloudDownloadOutline} size="sm"/></IonButton>
                </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-start bursary-mainRow">
                <IonText className="bursary-mainDescription">
                The SIM GE Bursary aims to provide financial assistance to needy students studying at SIM GE. 
                This award is given based on our eligibility criteria, as well as the assessed level of neediness of the applicants.
                </IonText>
            </IonRow>

            {/* Toggling Parts */}

            {/* Value and Tenure of Bursary */}
            <IonRow className="bursary-toggle-container">
                <IonCol className="bursary-toggle-container">
                    <IonRow className="ion-justify-content-start">
                        <IonCol className="ion-align-self-center" size="10">
                            <IonTitle className="bursary-toggle-header">Value and Tenure of Bursary</IonTitle>
                        </IonCol>
                        <IonCol size="2" className="ion-align-self-center">
                            <IonButton size="small" className="bursary-toggle-button" onClick={() => displayValueAndTenureOfBursary()}><IonIcon ref={toggleShow1} icon={addCircle} slot="icon-only"/></IonButton>
                        </IonCol>
                    </IonRow>

                    <IonRow className="bursary-toggle-details-container" ref={valueAndTenureOfBursary} hidden={true}>
                        <IonCol size="12">
                            <IonRow>
                                <IonText className="bursary-description">
                                The bursary quantum is up to $2,000 and is tenable for one year of study. 
                                (This has been now increased to $2,400 under the SIM COVID-19 Support Fund for bursaries 
                                given out in 2020. Please refer to FAQ for more information.) 
                                </IonText>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonCol>
            </IonRow>

            {/* Eligibility */}
            <IonRow className="bursary-toggle-container">
                <IonCol className="bursary-toggle-container">
                    <IonRow className="ion-justify-content-start bursary-inner-row">
                        <IonCol className="ion-align-self-center bursary-inner-col" size="10">
                            <IonTitle className="bursary-toggle-header">Eligibility</IonTitle>
                        </IonCol>
                        <IonCol size="2" className="ion-align-self-center">
                            <IonButton size="small" className="bursary-toggle-button" onClick={() => displayEligibility()}><IonIcon ref={toggleShow2} icon={addCircle} slot="icon-only"/></IonButton>
                        </IonCol>
                    </IonRow>

                    <IonRow className="bursary-toggle-details-container" ref={eligibility} hidden={true}>
                        <IonCol size="12">
                            <IonRow>
                                <IonText className="bursary-description">
                                    <ul className="bursary-unorderedList">
                                        <li className="bursary-unorderedList-description">Full-time / Part-time SIM GE students pursuing Diploma, Undergraduate or Postgraduate programmes, excluding those who are currently in Bridging / Preparatory / Certificate in English course</li>
                                        <li className="bursary-unorderedList-description">Must have enrolled and started classes</li>
                                        <li className="bursary-unorderedList-description">Singapore Citizen / Singapore Permanent Resident / International Student</li>
                                        <li className="bursary-unorderedList-description">Ceiling for Per Capita Income (PCI): S$600 (e.g. Total Gross Household Income = $3000, Total Number of Household Members = 5, PCI = $3000 / 5 = $600)</li>
                                        <li className="bursary-unorderedList-description">Have financial difficulties caused by loss of job, loss of income-earner or medical treatment / condition</li>
                                        <li className="bursary-unorderedList-description">Have satisfactory academic results</li>
                                        <li className="bursary-unorderedList-description">Must not hold on to any SIM GE sponsorship / bursary or have not been awarded the SIM GE bursary within the last one year at the point of application.</li>
                                    </ul>
                                </IonText>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonCol>
            </IonRow>

            {/* Repayment */}
            <IonRow className="bursary-toggle-container">
                <IonCol className="bursary-toggle-container">
                    <IonRow className="ion-justify-content-start bursary-inner-row">
                        <IonCol className="ion-align-self-center bursary-inner-col" size="10">
                            <IonTitle className="bursary-toggle-header">Repayment</IonTitle>
                        </IonCol>
                        <IonCol size="2" className="ion-align-self-center">
                            <IonButton size="small" className="bursary-toggle-button" onClick={() => displayRepayment()}><IonIcon ref={toggleShow3} icon={addCircle} slot="icon-only"/></IonButton>
                        </IonCol>
                    </IonRow>

                    <IonRow className="bursary-toggle-details-container" ref={repayment} hidden={true}>
                        <IonCol size="12">
                            <IonRow>
                                <IonText className="bursary-description">
                                No repayment is required. However, the bursary must be refunded in part or in full if the student discontinues his or her studies.
                                </IonText>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonCol>
            </IonRow>

            {/* How to Apply */}
            <IonRow className="bursary-toggle-container">
                <IonCol className="bursary-toggle-container">
                    <IonRow className="ion-justify-content-start bursary-inner-row">
                        <IonCol className="ion-align-self-center bursary-inner-col" size="10">
                            <IonTitle className="bursary-toggle-header">How to Apply</IonTitle>
                        </IonCol>
                        <IonCol size="2" className="ion-align-self-center">
                            <IonButton size="small" className="bursary-toggle-button" onClick={() => displayHowToApply()}><IonIcon ref={toggleShow4} icon={addCircle} slot="icon-only"/></IonButton>
                        </IonCol>
                    </IonRow>

                    <IonRow className="bursary-toggle-details-container" ref={howToApply} hidden={true}>
                        <IonCol size="12">
                            <IonRow>
                                <IonText className="bursary-description">
                                    <p>Login to SIMConnect ={">"} My Apps Tab ={">"} Self Service ={">"} Campus Finance ={">"} Financial Aid ={">"} Apply for Bursary</p>
                                    <p>Application is open throughout the year but will be processed and awarded on a quarterly basis. Late entries will be considered in the subsequent quarter.</p>
                                    <p><b><u>Application Period (Quarter 1 – Jan to Mar)</u></b></p>
                                    <ul className="bursary-unorderedList">
                                        <li className="bursary-unorderedList-description">Closing Date: 31 March</li>
                                        <li className="bursary-unorderedList-description">Processing Period: April to May</li>
                                        <li className="bursary-unorderedList-description">Notification Period: June</li>
                                    </ul>
                                    <p><b><u>Application Period (Quarter 2 – Apr to Jun)</u></b></p>
                                    <ul className="bursary-unorderedList">
                                        <li className="bursary-unorderedList-description">Closing Date: 30 June</li>
                                        <li className="bursary-unorderedList-description">Processing Period: July to August</li>
                                        <li className="bursary-unorderedList-description">Notification Period: September</li>
                                    </ul>
                                    <p><b><u>Application Period (Quarter 3 – Jul to Sep)</u></b></p>
                                    <ul className="bursary-unorderedList">
                                        <li className="bursary-unorderedList-description">Closing Date: 30 September</li>
                                        <li className="bursary-unorderedList-description">Processing Period: October to November</li>
                                        <li className="bursary-unorderedList-description">Notification Period: December</li>
                                    </ul>
                                    <p><b><u>Application Period (Quarter 4 – Oct to Dec)</u></b></p>
                                    <ul className="bursary-unorderedList">
                                        <li className="bursary-unorderedList-description">Closing Date: 31 December</li>
                                        <li className="bursary-unorderedList-description">Processing Period: January to February</li>
                                        <li className="bursary-unorderedList-description">Notification Period: March</li>
                                    </ul>
                                </IonText>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonCol>
            </IonRow>

            {/* Required Supporting Documents */}
            <IonRow className="bursary-toggle-container">
                <IonCol className="bursary-toggle-container">
                    <IonRow className="ion-justify-content-start bursary-inner-row">
                        <IonCol className="ion-align-self-center bursary-inner-col" size="10">
                            <IonTitle className="bursary-toggle-header">Required Supporting Documents</IonTitle>
                        </IonCol>
                        <IonCol size="2" className="ion-align-self-center">
                            <IonButton size="small" className="bursary-toggle-button" onClick={() => displayRequiredSupportingDocuments()}><IonIcon ref={toggleShow5} icon={addCircle} slot="icon-only"/></IonButton>
                        </IonCol>
                    </IonRow>

                    <IonRow className="bursary-toggle-details-container" ref={requiredSupportingDocuments} hidden={true}>
                        <IonCol size="12">
                            <IonRow>
                                <IonText className="bursary-description">
                                    <p>All documents must be scanned and attached to the online application form before submission as no changes can be made thereafter. SIM GE has the right to reject applications with incomplete documents.</p>
                                    <ul className="bursary-unorderedList">
                                        <li className="bursary-unorderedList-description"><b><u>Household Income-related Documents:</u></b></li>
                                        <ul className="bursary-unorderedList">
                                            <li className="bursary-unorderedList-description">Latest 15 Months’ CPF Contribution History (Compulsory for all household members above 16 years old including applicant, even if not working)</li>
                                            <li className="bursary-unorderedList-description">Latest Notice of Assessment (NOA) from IRAS (For household members who are self-employed)</li>
                                            <li className="bursary-unorderedList-description">Latest Payslip (For household members who are working full-time/ part-time / working as private hire drivers)</li>
                                            <li className="bursary-unorderedList-description">Signed Self-Declaration Letter Stating the Income on Average Per Month (For household members who take up adhoc jobs)</li>
                                            <li className="bursary-unorderedList-description">NSF Allowance Payslip (For household members who are serving National Service)</li>
                                            <li className="bursary-unorderedList-description">Summary of CPF Annual Statement – Ordinary Account, Special Account, Medisave Account, Retirement Account (Compulsory for all household members above 16 years old including applicant, even if not working)</li>
                                        </ul>

                                        <li className="bursary-unorderedList-description"><b><u>Results / Official Transcript:</u></b></li>
                                        <ul className="bursary-unorderedList">
                                            <li className="bursary-unorderedList-description">Latest SIM GE (Download or print-screen your cumulative results from the partner university portal or SIMConnect) / A level / Diploma / O Level results</li>
                                        </ul>

                                        <li className="bursary-unorderedList-description"><b><u>NRIC:</u></b></li>
                                        <ul className="bursary-unorderedList">
                                            <li className="bursary-unorderedList-description">NRIC / Birth Certificate (For all household members including applicant)</li>
                                        </ul>

                                        <li className="bursary-unorderedList-description"><b><u>Expenses-related Documents:</u></b></li>
                                        <ul className="bursary-unorderedList">
                                            <li className="bursary-unorderedList-description">Rental Agreement / Acceptance Letter (For rented accommodation)</li>
                                            <li className="bursary-unorderedList-description">Other supporting documents related to household expenses e.g. utilities bill</li>
                                        </ul>

                                        <li className="bursary-unorderedList-description"><b><u>Personal-related Documents (If applicable):</u></b></li>
                                        <ul className="bursary-unorderedList">
                                            <li className="bursary-unorderedList-description">Divorce Certificate</li>
                                            <li className="bursary-unorderedList-description">Death Certificate</li>
                                            <li className="bursary-unorderedList-description">Latest Medical Diagnosis / Memo</li>
                                            <li className="bursary-unorderedList-description">Latest Medical Bills</li>
                                            <li className="bursary-unorderedList-description">Unemployment Letter (E.g. Retrenchment Letter / Resignation Letter / End of Service Letter / Self-Declaration Letter with signature)</li>
                                            <li className="bursary-unorderedList-description">Study Grant / Loan Acceptance Letter (For those who receive support from government or other organisations)</li>
                                            <li className="bursary-unorderedList-description">Bankruptcy Letter</li>
                                        </ul>
                                    </ul>
                                    <p>
                                    The collection of personal data such as NRICs, and other supporting documents are required to facilitate the 
                                    processing of applications, including verifications of the identities of applicants and household members. 
                                    For information on SIM PDPA Policy, please refer to 
                                    <IonRouterLink href="https://www.simge.edu.sg/contact-us/personal-data-protection-act/"> https://www.simge.edu.sg/contact-us/personal-data-protection-act/</IonRouterLink>.
                                    </p>
                                </IonText>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonCol>
            </IonRow>

            {/* Things to Note */}
            <IonRow className="bursary-toggle-container">
                <IonCol className="bursary-toggle-container">
                    <IonRow className="ion-justify-content-start bursary-inner-row">
                        <IonCol className="ion-align-self-center bursary-inner-col" size="10">
                            <IonTitle className="bursary-toggle-header">Things to Note</IonTitle>
                        </IonCol>
                        <IonCol size="2" className="ion-align-self-center">
                            <IonButton size="small" className="bursary-toggle-button" onClick={() => displayThingsToNote()}><IonIcon ref={toggleShow6} icon={addCircle} slot="icon-only"/></IonButton>
                        </IonCol>
                    </IonRow>

                    <IonRow className="bursary-toggle-details-container" ref={thingsToNote} hidden={true}>
                        <IonCol size="12">
                            <IonRow>
                                <IonText className="bursary-description">
                                    <ul className="bursary-unorderedList">
                                        <li className="bursary-unorderedList-description">Not all eligible applications will be guaranteed award.</li>
                                        <li className="bursary-unorderedList-description">Bursary recipients will need to make course fees payment first and have started classes before the bursaries can be disbursed.</li>
                                        <li className="bursary-unorderedList-description">The disbursement of SIM GE Bursary will be in the form of Interbank GIRO transfer / cheque, and will usually take place about three weeks to a month thereafter.</li>
                                        <li className="bursary-unorderedList-description">Please do update your bank account details and mailing address in SIMConnect so that payment can be credited directly into your bank account / mail to you accordingly to the address in SIMConnect if awarded.</li>
                                    </ul>
                                </IonText>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonCol>
            </IonRow>

            {/* Contact Information */}
            <IonRow className="bursary-toggle-container">
                <IonCol className="bursary-toggle-container">
                    <IonRow className="ion-justify-content-start bursary-inner-row">
                        <IonCol className="ion-align-self-center bursary-inner-col" size="10">
                            <IonTitle className="bursary-toggle-header">Contact Information</IonTitle>
                        </IonCol>
                        <IonCol size="2" className="ion-align-self-center">
                            <IonButton size="small" className="bursary-toggle-button" onClick={() => displayContactInformation()}><IonIcon ref={toggleShow7} icon={addCircle} slot="icon-only"/></IonButton>
                        </IonCol>
                    </IonRow>

                    <IonRow className="bursary-toggle-details-container" ref={contactInformation} hidden={true}>
                        <IonCol size="12">
                            <IonRow>
                                <IonText className="bursary-description">
                                    For enquiries, please drop us an email at <a href="mailto:bursary@sim.edu.sg">bursary@sim.edu.sg</a>.
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

export default SimGeBursary;
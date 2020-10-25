import { IonButton, IonCol, IonGrid, IonIcon, IonRouterLink, IonRow, IonText, IonTitle } from '@ionic/react';
import { addCircle, cloudDownloadOutline, removeCircle } from 'ionicons/icons';
import React, { useRef } from 'react';

import '../../css/Global.css';
import '../../css/StudentLife.css';

const SimGeScholarship: React.FC = () => {

    const categories = useRef<HTMLIonRowElement>(null);
    const eligibility = useRef<HTMLIonRowElement>(null);
    const valueOfScholarship = useRef<HTMLIonRowElement>(null);
    const application = useRef<HTMLIonRowElement>(null);
    const applicationDocumentsProcedures = useRef<HTMLIonRowElement>(null);
    const selectionProcess = useRef<HTMLIonRowElement>(null);
    const tenureOfScholarship = useRef<HTMLIonRowElement>(null);
    const termsAndConditions = useRef<HTMLIonRowElement>(null);

    const toggleShow1 = useRef<HTMLIonIconElement>(null);
    const toggleShow2 = useRef<HTMLIonIconElement>(null);
    const toggleShow3 = useRef<HTMLIonIconElement>(null);
    const toggleShow4 = useRef<HTMLIonIconElement>(null);
    const toggleShow5 = useRef<HTMLIonIconElement>(null);
    const toggleShow6 = useRef<HTMLIonIconElement>(null);
    const toggleShow7 = useRef<HTMLIonIconElement>(null);
    const toggleShow8 = useRef<HTMLIonIconElement>(null);

    const displayCategories = () => {
        categories.current!.hidden = !categories.current!.hidden;
        if(toggleShow1.current!.icon === addCircle) {
            toggleShow1.current!.icon = removeCircle;
        } else {
            toggleShow1.current!.icon = addCircle;
        }
    }

    const displayEligibility = () => {
        eligibility.current!.hidden = !eligibility.current!.hidden;
        if(toggleShow2.current!.icon === addCircle) {
            toggleShow2.current!.icon = removeCircle;
        } else {
            toggleShow2.current!.icon = addCircle;
        }
    }

    const displayValueOfScholarship = () => {
        valueOfScholarship.current!.hidden = !valueOfScholarship.current!.hidden;
        if(toggleShow3.current!.icon === addCircle) {
            toggleShow3.current!.icon = removeCircle;
        } else {
            toggleShow3.current!.icon = addCircle;
        }
    }

    const displayApplication = () => {
        application.current!.hidden = !application.current!.hidden;
        if(toggleShow4.current!.icon === addCircle) {
            toggleShow4.current!.icon = removeCircle;
        } else {
            toggleShow4.current!.icon = addCircle;
        }
    }

    const displayApplicationDocumentsProcedures = () => {
        applicationDocumentsProcedures.current!.hidden = !applicationDocumentsProcedures.current!.hidden;
        if(toggleShow5.current!.icon === addCircle) {
            toggleShow5.current!.icon = removeCircle;
        } else {
            toggleShow5.current!.icon = addCircle;
        }
    }

    const displaySelectionProcess = () => {
        selectionProcess.current!.hidden = !selectionProcess.current!.hidden;
        if(toggleShow6.current!.icon === addCircle) {
            toggleShow6.current!.icon = removeCircle;
        } else {
            toggleShow6.current!.icon = addCircle;
        }
    }

    const displayTenureOfScholarship = () => {
        tenureOfScholarship.current!.hidden = !tenureOfScholarship.current!.hidden;
        if(toggleShow7.current!.icon === addCircle) {
            toggleShow7.current!.icon = removeCircle;
        } else {
            toggleShow7.current!.icon = addCircle;
        }
    }

    const displayTermsAndConditions = () => {
        termsAndConditions.current!.hidden = !termsAndConditions.current!.hidden;
        if(toggleShow8.current!.icon === addCircle) {
            toggleShow8.current!.icon = removeCircle;
        } else {
            toggleShow8.current!.icon = addCircle;
        }
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
            <IonRow className="ion-justify-content-start scholarship-mainRow">
                <IonText className="scholarship-mainDescription">
                    The SIM Global Education Scholarship is awarded to outstanding local and international students to 
                    pursue Bachelor’s degree programmes at SIM Global Education (SIM GE).
                </IonText>
            </IonRow>

            {/* Toggling Parts */}

            {/* Categories of Scholarships */}
            <IonRow className="scholarship-toggle-container">
                <IonCol className="scholarship-toggle-container">
                    <IonRow className="ion-justify-content-start">
                        <IonCol className="ion-align-self-center" size="10">
                            <IonTitle className="scholarship-toggle-header">Categories of Scholarships</IonTitle>
                        </IonCol>
                        <IonCol size="2" className="ion-align-self-center">
                            <IonButton size="small" className="scholarship-toggle-button" onClick={() => displayCategories()}><IonIcon ref={toggleShow1} icon={addCircle} slot="icon-only"/></IonButton>
                        </IonCol>
                    </IonRow>

                    <IonRow className="scholarship-toggle-details-container" ref={categories} hidden={true}>
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
                            <IonButton size="small" className="scholarship-toggle-button" onClick={() => displayEligibility()}><IonIcon ref={toggleShow2} icon={addCircle} slot="icon-only"/></IonButton>
                        </IonCol>
                    </IonRow>

                    <IonRow className="scholarship-toggle-details-container" ref={eligibility} hidden={true}>
                        <IonCol size="12">
                            <IonRow>
                                <IonText className="scholarship-description">
                                    <ul className="scholarship-unorderedList">
                                        <li className="scholarship-unorderedList-description">Outstanding Singapore-Cambridge GCE ‘A’ Level, Local Polytechnic Diploma, IB Diploma or Year 12 equivalent qualifications</li>
                                        <li className="scholarship-unorderedList-description">An impressive community contribution and co-curricular activities involvement record</li>
                                        <li className="scholarship-unorderedList-description">Strong leadership, interpersonal and communication skills</li>
                                    </ul>
                                </IonText>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonCol>
            </IonRow>

            {/* Value of Scholarship */}
            <IonRow className="scholarship-toggle-container">
                <IonCol className="scholarship-toggle-container">
                    <IonRow className="ion-justify-content-start scholarship-inner-row">
                        <IonCol className="ion-align-self-center scholarship-inner-col" size="10">
                            <IonTitle className="scholarship-toggle-header">Value of Scholarship</IonTitle>
                        </IonCol>
                        <IonCol size="2" className="ion-align-self-center">
                            <IonButton size="small" className="scholarship-toggle-button" onClick={() => displayValueOfScholarship()}><IonIcon ref={toggleShow3} icon={addCircle} slot="icon-only"/></IonButton>
                        </IonCol>
                    </IonRow>

                    <IonRow className="scholarship-toggle-details-container" ref={valueOfScholarship} hidden={true}>
                        <IonCol size="12">
                            <IonRow>
                                <IonText className="scholarship-description">
                                    The award covers the following:
                                    <ul className="scholarship-unorderedList">
                                        <li className="scholarship-unorderedList-description">Course fees</li>
                                        <li className="scholarship-unorderedList-description">Examination fees</li>
                                        <li className="scholarship-unorderedList-description">Other compulsory fees</li>
                                        <li className="scholarship-unorderedList-description">Book allowance</li>
                                    </ul>
                                    There is no bond attached to the scholarship.
                                </IonText>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonCol>
            </IonRow>

            {/* Application */}
            <IonRow className="scholarship-toggle-container">
                <IonCol className="scholarship-toggle-container">
                    <IonRow className="ion-justify-content-start scholarship-inner-row">
                        <IonCol className="ion-align-self-center scholarship-inner-col" size="10">
                            <IonTitle className="scholarship-toggle-header">Application</IonTitle>
                        </IonCol>
                        <IonCol size="2" className="ion-align-self-center">
                            <IonButton size="small" className="scholarship-toggle-button" onClick={() => displayApplication()}><IonIcon ref={toggleShow4} icon={addCircle} slot="icon-only"/></IonButton>
                        </IonCol>
                    </IonRow>

                    <IonRow className="scholarship-toggle-details-container" ref={application} hidden={true}>
                        <IonCol size="12">
                            <IonRow>
                                <IonText className="scholarship-description">
                                    <p>There are two application periods per year:</p>
                                    <ul className="scholarship-unorderedList">
                                        <li className="scholarship-unorderedList-description">March</li>
                                        <li className="scholarship-unorderedList-description">September</li>
                                    </ul>
                                    <p>Applicants must separately seek admission to their programmes of choice and must be accepted for 
                                    admission before being awarded the scholarship.</p>
                                </IonText>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonCol>
            </IonRow>

            {/* Application Documents & Procedures */}
            <IonRow className="scholarship-toggle-container">
                <IonCol className="scholarship-toggle-container">
                    <IonRow className="ion-justify-content-start scholarship-inner-row">
                        <IonCol className="ion-align-self-center scholarship-inner-col" size="10">
                            <IonTitle className="scholarship-toggle-header">Application Documents & Procedures</IonTitle>
                        </IonCol>
                        <IonCol size="2" className="ion-align-self-center">
                            <IonButton size="small" className="scholarship-toggle-button" onClick={() => displayApplicationDocumentsProcedures()}><IonIcon ref={toggleShow5} icon={addCircle} slot="icon-only"/></IonButton>
                        </IonCol>
                    </IonRow>

                    <IonRow className="scholarship-toggle-details-container" ref={applicationDocumentsProcedures} hidden={true}>
                        <IonCol size="12">
                            <IonRow>
                                <IonText className="scholarship-description">
                                    <p>Interested applicants are required to submit the following documents in softcopies (scanned and zipped):</p>
                                    <ul className="scholarship-unorderedList">
                                        <li className="scholarship-unorderedList-description">Scholarship Application Form (The next SIM GE Scholarship application is in March 2021. Please check the website again for the application form)</li>
                                        <li className="scholarship-unorderedList-description">All official academic documents (from Secondary to Tertiary Level), in original language with English translation, if applicable.</li>
                                        <li className="scholarship-unorderedList-description">All co-curricular activity records (from Secondary to Tertiary Level)</li>
                                        <li className="scholarship-unorderedList-description">Documentary evidence of achievements and awards</li>
                                        <li className="scholarship-unorderedList-description">Testimonial(s) for industrial / professional attachments(s) / National Service (if applicable)</li>
                                        <li className="scholarship-unorderedList-description">Scholarship Essays (4 questions) (can be found in the Scholarship Application Form)</li>
                                        <li className="scholarship-unorderedList-description">September</li>
                                    </ul>
                                    <p>
                                    The collection of personal data such as the National Identification Document (NID) and other supporting documents are 
                                    required to facilitate the processing of applications, including verifications of the identities of applicants. 
                                    For information on SIM PDPA Policy, please refer to <IonRouterLink href="https://www.simge.edu.sg/contact-us/personal-data-protection-act/">https://www.simge.edu.sg/contact-us/personal-data-protection-act/</IonRouterLink>.
                                    </p>
                                    <p>
                                    Email your documents with the completed application form to <a href="mailto:scholarship@sim.edu.sg">scholarship@sim.edu.sg</a> before the closing deadline of the application period. 
                                    <br/>Please use "&lt;Scholarship Category&gt; – &lt;Most recent school/ university partner&gt; &lt;Most recent results (eg. cumulative average marks/ GPA/ listing of grades)&gt;" as the subject for your email.
                                    </p>
                                    Examples: <br/>
                                    <ul className="scholarship-unorderedList">
                                        <li className="scholarship-unorderedList-description">Sports – Temasek Polytechnic CGPA 2.5</li>
                                        <li className="scholarship-unorderedList-description">Academic – SIM CGPA 3.8</li>
                                        <li className="scholarship-unorderedList-description">Academic – Tampines Meridian Junior College H2 Grade 3Bs</li>
                                        <li className="scholarship-unorderedList-description">Arts – UOL Avg 55</li>
                                    </ul>
                                    <p>Please submit only one scholarship application per applicant.</p>
                                </IonText>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonCol>
            </IonRow>

            {/* Selection Process */}
            <IonRow className="scholarship-toggle-container">
                <IonCol className="scholarship-toggle-container">
                    <IonRow className="ion-justify-content-start scholarship-inner-row">
                        <IonCol className="ion-align-self-center scholarship-inner-col" size="10">
                            <IonTitle className="scholarship-toggle-header">Selection Process</IonTitle>
                        </IonCol>
                        <IonCol size="2" className="ion-align-self-center">
                            <IonButton size="small" className="scholarship-toggle-button" onClick={() => displaySelectionProcess()}><IonIcon ref={toggleShow6} icon={addCircle} slot="icon-only"/></IonButton>
                        </IonCol>
                    </IonRow>

                    <IonRow className="scholarship-toggle-details-container" ref={selectionProcess} hidden={true}>
                        <IonCol size="12">
                            <IonRow>
                                <IonText className="scholarship-description">
                                    <p>All shortlisted candidates are required to undergo an interview by the SIM Global Education 
                                    Scholarships Selection Panel. Only shortlisted candidates will be notified.
                                    </p>
                                    <p>
                                    The decision of SIM Global Education is final and we do not enter into any correspondence on the 
                                    award of the Scholarship (including the reasons for not awarding the Scholarship). We reserve the right 
                                    to vary the terms and conditions of any SIM Global Education Scholarship without prior notice.
                                    </p>
                                </IonText>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonCol>
            </IonRow>

            {/* Tenure of Scholarship */}
            <IonRow className="scholarship-toggle-container">
                <IonCol className="scholarship-toggle-container">
                    <IonRow className="ion-justify-content-start scholarship-inner-row">
                        <IonCol className="ion-align-self-center scholarship-inner-col" size="10">
                            <IonTitle className="scholarship-toggle-header">Tenure of Scholarship</IonTitle>
                        </IonCol>
                        <IonCol size="2" className="ion-align-self-center">
                            <IonButton size="small" className="scholarship-toggle-button" onClick={() => displayTenureOfScholarship()}><IonIcon ref={toggleShow7} icon={addCircle} slot="icon-only"/></IonButton>
                        </IonCol>
                    </IonRow>

                    <IonRow className="scholarship-toggle-details-container" ref={tenureOfScholarship} hidden={true}>
                        <IonCol size="12">
                            <IonRow>
                                <IonText className="scholarship-description">
                                    <p>
                                    The scholarship is tenable for the minimum period required to complete the 
                                    full course of study, as stipulated by the programme.
                                    </p>
                                    <IonGrid className="scholarship-tenure-container">
                                        <IonRow>
                                            <IonCol className="scholarship-tenure-col" id="tenure-programmeTitle" size="4" style={{padding: '1% 0%'}}>
                                                <IonText className="tenure-headings">Programmes</IonText>
                                            </IonCol>
                                            <IonCol className="scholarship-tenure-col" size="8" style={{padding: 0}}>
                                                <IonRow className="ion-justify-content-center" style={{padding: '1% 0%', borderBottom: '2px solid #C8C8C8'}}>
                                                    <IonText className="tenure-headings">Application Period</IonText>
                                                </IonRow>
                                                <IonRow>
                                                    <IonCol id="tenure-months">
                                                        <IonText className="tenure-headings">March</IonText>
                                                    </IonCol>
                                                    <IonCol id="tenure-months">
                                                        <IonText className="tenure-headings">September</IonText>
                                                    </IonCol>
                                                </IonRow>
                                            </IonCol>
                                        </IonRow>
                                        <IonRow>
                                            <IonCol className="scholarship-tenure-col">
                                                <IonText className="tenure-headings">All programmes except the SIM-UOL programmes</IonText>
                                            </IonCol>
                                            <IonCol className="scholarship-tenure-col">
                                                <IonText className="tenure-descriptions">The Scholarship Award will take effect from the semester starting in the second half of the same year (unless stated otherwise).</IonText>
                                            </IonCol>
                                            <IonCol className="scholarship-tenure-col">
                                                <IonText className="tenure-descriptions">The Scholarship Award will take effect from the semester starting in the first half of the next year (unless stated otherwise).</IonText>
                                            </IonCol>
                                        </IonRow>
                                        <IonRow>
                                            <IonCol className="scholarship-tenure-col">
                                                <IonText className="tenure-headings">UOL programmes with 1 year term</IonText>
                                            </IonCol>
                                            <IonCol className="scholarship-tenure-col">
                                                <IonText className="tenure-descriptions">The Scholarship Award will take effect from August/ September in the same year.</IonText>
                                            </IonCol>
                                            <IonCol className="scholarship-tenure-col">
                                                <IonText className="tenure-descriptions">The Scholarship Award will take effect from August/ September in the same year.</IonText>
                                            </IonCol>
                                        </IonRow>
                                        <IonRow>
                                            <IonCol className="scholarship-tenure-col">
                                                <IonText className="tenure-headings">UOL programmes with 6 month term</IonText>
                                            </IonCol>
                                            <IonCol className="scholarship-tenure-col">
                                                <IonText className="tenure-descriptions">The Scholarship Award will take effect from April in the same year.</IonText>
                                            </IonCol>
                                            <IonCol className="scholarship-tenure-col">
                                                <IonText className="tenure-descriptions">The Scholarship Award will take effect from October in the same year.</IonText>
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                </IonText>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonCol>
            </IonRow>

            {/* Terms & Conditions */}
            <IonRow className="scholarship-toggle-container">
                <IonCol className="scholarship-toggle-container">
                    <IonRow className="ion-justify-content-start scholarship-inner-row">
                        <IonCol className="ion-align-self-center scholarship-inner-col" size="10">
                            <IonTitle className="scholarship-toggle-header">Terms & Conditions</IonTitle>
                        </IonCol>
                        <IonCol size="2" className="ion-align-self-center">
                            <IonButton size="small" className="scholarship-toggle-button" onClick={() => displayTermsAndConditions()}><IonIcon ref={toggleShow8} icon={addCircle} slot="icon-only"/></IonButton>
                        </IonCol>
                    </IonRow>

                    <IonRow className="scholarship-toggle-details-container" ref={termsAndConditions} hidden={true}>
                        <IonCol size="12">
                            <IonRow>
                                <IonText className="scholarship-description">
                                    <ul className="scholarship-unorderedList">
                                        <li className="scholarship-unorderedList-description">Scholar is required to sit for all tests, assessments and examinations and obtain the Qualification within the minimum period required of study.</li>
                                        <li className="scholarship-unorderedList-description">Scholar is not allowed to change the Programme at any time.</li>
                                        <li className="scholarship-unorderedList-description">Scholar shall not take up or register or enrol in any diploma or degree course(s) without the prior written approval of the Sponsor.</li>
                                        <li className="scholarship-unorderedList-description">Scholar shall not, without the prior written approval of the Sponsor, hold the Scholarship Award concurrently with any other scholarship or tuition grant.</li>
                                        <li className="scholarship-unorderedList-description">Every scholar is expected to contribute to SIM GE / the community.</li>
                                        <li className="scholarship-unorderedList-description">Academic performance will be reviewed every semester.</li>
                                        <li className="scholarship-unorderedList-description">The Scholarship may be withdrawn at any time if, in the opinion of the Sponsor, the scholar’s progress or behaviour is deemed unsatisfactory.</li>
                                        <li className="scholarship-unorderedList-description">If for whatever reasons the Scholarship is terminated, the scholar shall be further liable to repay SIM GE all of the Sponsorship Award Benefits that have been paid by SIM GE.</li>
                                    </ul>
                                </IonText>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonCol>
            </IonRow>

            <IonRow id="scholarship-moreInfo">
                <IonText>For more information, please email: <a href="mailto:scholarship@sim.edu.sg">scholarship@sim.edu.sg</a></IonText>
            </IonRow>
            
        </IonGrid>
        </>
    );
};

export default SimGeScholarship;
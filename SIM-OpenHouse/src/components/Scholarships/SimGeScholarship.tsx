import { IonButton, IonCol, IonGrid, IonIcon, IonRouterLink, IonRow, IonText, IonTitle } from '@ionic/react';
import { addCircle, cloudDownloadOutline, removeCircle } from 'ionicons/icons';
import React, { useRef } from 'react';

import '../../css/Global.css';
import '../../css/StudentLife.css';
import { camalize } from '../../modules/convert';
import { Brochure } from '../../modules/map';

const SimGeScholarship: React.FC<{ brochure: Brochure, scholarships: any }> = (props) => {

    const scholarshipInfo = props.scholarships.filter((info: any) => { return info.segment === "SIM GE Scholarship" }).reduce((accu: any, curr: any) => (accu[camalize(curr.header)] = curr, accu), {});

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

    const displayValueOfScholarship = () => {
        valueOfScholarship.current!.hidden = !valueOfScholarship.current!.hidden;
        if (toggleShow3.current!.icon === addCircle) {
            toggleShow3.current!.icon = removeCircle;
        } else {
            toggleShow3.current!.icon = addCircle;
        }
    }

    const displayApplication = () => {
        application.current!.hidden = !application.current!.hidden;
        if (toggleShow4.current!.icon === addCircle) {
            toggleShow4.current!.icon = removeCircle;
        } else {
            toggleShow4.current!.icon = addCircle;
        }
    }

    const displayApplicationDocumentsProcedures = () => {
        applicationDocumentsProcedures.current!.hidden = !applicationDocumentsProcedures.current!.hidden;
        if (toggleShow5.current!.icon === addCircle) {
            toggleShow5.current!.icon = removeCircle;
        } else {
            toggleShow5.current!.icon = addCircle;
        }
    }

    const displaySelectionProcess = () => {
        selectionProcess.current!.hidden = !selectionProcess.current!.hidden;
        if (toggleShow6.current!.icon === addCircle) {
            toggleShow6.current!.icon = removeCircle;
        } else {
            toggleShow6.current!.icon = addCircle;
        }
    }

    const displayTenureOfScholarship = () => {
        tenureOfScholarship.current!.hidden = !tenureOfScholarship.current!.hidden;
        if (toggleShow7.current!.icon === addCircle) {
            toggleShow7.current!.icon = removeCircle;
        } else {
            toggleShow7.current!.icon = addCircle;
        }
    }

    const displayTermsAndConditions = () => {
        termsAndConditions.current!.hidden = !termsAndConditions.current!.hidden;
        if (toggleShow8.current!.icon === addCircle) {
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
                        <IonButton id="scholarship-FAQ-button" size="small" href={props.brochure.brochureUrl} target="_blank">FAQ Download <IonIcon slot="end" icon={cloudDownloadOutline} size="sm" /></IonButton>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-justify-content-start scholarship-mainRow">
                    <IonText className="scholarship-mainDescription">
                        The SIM Global Education Scholarship is awarded to outstanding local and international students to pursue Bachelor’s degree programmes at SIM Global Education (SIM GE).
                </IonText>
                </IonRow>

                {/* Toggling Parts */}

                {/* Categories of Scholarships */}
                {scholarshipInfo.categoriesOfScholarships !== undefined ? (
                    <IonRow className="scholarship-toggle-container">
                        <IonCol className="scholarship-toggle-container">
                            <IonRow className="ion-justify-content-start">
                                <IonCol className="ion-align-self-center" size="10">
                                    <IonTitle className="scholarship-toggle-header">{scholarshipInfo.categoriesOfScholarships.header}</IonTitle>
                                </IonCol>
                                <IonCol size="2" className="ion-align-self-center">
                                    <IonButton size="small" className="scholarship-toggle-button" onClick={() => displayCategories()}><IonIcon ref={toggleShow1} icon={addCircle} slot="icon-only" /></IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow className="scholarship-toggle-details-container" ref={categories} hidden={true}>
                                <IonCol size="12">
                                    {scholarshipInfo.categoriesOfScholarships.content.map((content: any, index: number) => (
                                        <div key={index}>
                                            <IonRow>
                                                <IonText className="scholarship-categories-header">{content.title}</IonText>
                                            </IonRow>
                                            <IonRow>
                                                <IonText className="scholarship-description">{content.description}</IonText>
                                            </IonRow>
                                        </div>
                                    ))}
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                ) : null
                }


                {/* Eligibility */}
                {scholarshipInfo.eligibility !== undefined ? (
                    <IonRow className="scholarship-toggle-container">
                        <IonCol className="scholarship-toggle-container">
                            <IonRow className="ion-justify-content-start scholarship-inner-row">
                                <IonCol className="ion-align-self-center scholarship-inner-col" size="10">
                                    <IonTitle className="scholarship-toggle-header">{scholarshipInfo.eligibility.header}</IonTitle>
                                </IonCol>
                                <IonCol size="2" className="ion-align-self-center">
                                    <IonButton size="small" className="scholarship-toggle-button" onClick={() => displayEligibility()}><IonIcon ref={toggleShow2} icon={addCircle} slot="icon-only" /></IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow className="scholarship-toggle-details-container" ref={eligibility} hidden={true}>
                                <IonCol size="12">
                                    <IonRow>
                                        <IonText className="scholarship-description">
                                            <ul className="scholarship-unorderedList">
                                                {scholarshipInfo.eligibility.content.map((li: string, index: number) => (
                                                    <li key={index} className="scholarship-unorderedList-description">{li}</li>
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

                {/* Value of Scholarship */}
                {scholarshipInfo.valueOfScholarship !== undefined ? (
                    <IonRow className="scholarship-toggle-container">
                        <IonCol className="scholarship-toggle-container">
                            <IonRow className="ion-justify-content-start scholarship-inner-row">
                                <IonCol className="ion-align-self-center scholarship-inner-col" size="10">
                                    <IonTitle className="scholarship-toggle-header">{scholarshipInfo.valueOfScholarship.header}</IonTitle>
                                </IonCol>
                                <IonCol size="2" className="ion-align-self-center">
                                    <IonButton size="small" className="scholarship-toggle-button" onClick={() => displayValueOfScholarship()}><IonIcon ref={toggleShow3} icon={addCircle} slot="icon-only" /></IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow className="scholarship-toggle-details-container" ref={valueOfScholarship} hidden={true}>
                                <IonCol size="12">
                                    <IonRow>
                                        <IonText className="scholarship-description">
                                            The award covers the following:
                                            <ul className="scholarship-unorderedList">
                                                {scholarshipInfo.valueOfScholarship.covers.map((li: string, index: number) => (
                                                    <li key={index} className="scholarship-unorderedList-description">{li}</li>
                                                ))}
                                            </ul>
                                        There is no bond attached to the scholarship.
                                </IonText>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                ) : null
                }

                {/* Application */}
                {scholarshipInfo.application !== undefined ? (
                    <IonRow className="scholarship-toggle-container">
                        <IonCol className="scholarship-toggle-container">
                            <IonRow className="ion-justify-content-start scholarship-inner-row">
                                <IonCol className="ion-align-self-center scholarship-inner-col" size="10">
                                    <IonTitle className="scholarship-toggle-header">{scholarshipInfo.application.header}</IonTitle>
                                </IonCol>
                                <IonCol size="2" className="ion-align-self-center">
                                    <IonButton size="small" className="scholarship-toggle-button" onClick={() => displayApplication()}><IonIcon ref={toggleShow4} icon={addCircle} slot="icon-only" /></IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow className="scholarship-toggle-details-container" ref={application} hidden={true}>
                                <IonCol size="12">
                                    <IonRow>
                                        <IonText className="scholarship-description">
                                            <p>There are {scholarshipInfo.application.applicationPeriods.length} application periods per year:</p>
                                            <ul className="scholarship-unorderedList">
                                                {scholarshipInfo.application.applicationPeriods.map((li: string, index: number) => (
                                                    <li key={index} className="scholarship-unorderedList-description">{li}</li>
                                                ))}
                                            </ul>
                                            <p>Applicants must separately seek admission to their programmes of choice and must be accepted for admission before being awarded the scholarship.</p>
                                        </IonText>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                ) : null
                }

                {/* Application Documents & Procedures */}
                {scholarshipInfo.applicationDocumentsProcedures !== undefined ? (
                    <IonRow className="scholarship-toggle-container">
                        <IonCol className="scholarship-toggle-container">
                            <IonRow className="ion-justify-content-start scholarship-inner-row">
                                <IonCol className="ion-align-self-center scholarship-inner-col" size="10">
                                    <IonTitle className="scholarship-toggle-header">{scholarshipInfo.applicationDocumentsProcedures.header}</IonTitle>
                                </IonCol>
                                <IonCol size="2" className="ion-align-self-center">
                                    <IonButton size="small" className="scholarship-toggle-button" onClick={() => displayApplicationDocumentsProcedures()}><IonIcon ref={toggleShow5} icon={addCircle} slot="icon-only" /></IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow className="scholarship-toggle-details-container" ref={applicationDocumentsProcedures} hidden={true}>
                                <IonCol size="12">
                                    <IonRow>
                                        <IonText className="scholarship-description">
                                            <p>Interested applicants are required to submit the following documents in softcopies (scanned and zipped):</p>
                                            <ul className="scholarship-unorderedList">
                                                {scholarshipInfo.applicationDocumentsProcedures.content.map((li: string, index: number) => (
                                                    <li key={index} className="scholarship-unorderedList-description">{li}</li>
                                                ))}
                                            </ul>
                                            <p>The collection of personal data such as the National Identification Document (NID) and other supporting documents are required to facilitate the processing of applications, including verifications of the identities of applicants. For information on SIM PDPA Policy, please refer to <IonRouterLink href={scholarshipInfo.applicationDocumentsProcedures.simPdpaPolicy}>{scholarshipInfo.applicationDocumentsProcedures.simPdpaPolicy}</IonRouterLink>.</p>
                                            <p>Email your documents with the completed application form to <a href={`mailto:${scholarshipInfo.applicationDocumentsProcedures.email}`}>{scholarshipInfo.applicationDocumentsProcedures.email}</a> before the closing deadline of the application period.<br />Please use "{scholarshipInfo.applicationDocumentsProcedures.emailFormat}" as the subject for your email.</p>
                                            Examples: <br />
                                            <ul className="scholarship-unorderedList">
                                                {scholarshipInfo.applicationDocumentsProcedures.examples.map((li: string, index: number) => (
                                                    <li key={index} className="scholarship-unorderedList-description">{li}</li>
                                                ))}
                                            </ul>
                                            <p>Please submit only one scholarship application per applicant.</p>
                                        </IonText>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                ) : null
                }

                {/* Selection Process */}
                {scholarshipInfo.selectionProcess !== undefined ? (
                    <IonRow className="scholarship-toggle-container">
                        <IonCol className="scholarship-toggle-container">
                            <IonRow className="ion-justify-content-start scholarship-inner-row">
                                <IonCol className="ion-align-self-center scholarship-inner-col" size="10">
                                    <IonTitle className="scholarship-toggle-header">{scholarshipInfo.selectionProcess.header}</IonTitle>
                                </IonCol>
                                <IonCol size="2" className="ion-align-self-center">
                                    <IonButton size="small" className="scholarship-toggle-button" onClick={() => displaySelectionProcess()}><IonIcon ref={toggleShow6} icon={addCircle} slot="icon-only" /></IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow className="scholarship-toggle-details-container" ref={selectionProcess} hidden={true}>
                                <IonCol size="12">
                                    <IonRow>
                                        <IonText className="scholarship-description">
                                            {scholarshipInfo.selectionProcess.description.split('\n').map((line: string, index: number) => (
                                                <p key={index}>{line}</p>
                                            ))}
                                        </IonText>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                ) : null
                }

                {/* Tenure of Scholarship */}
                {scholarshipInfo.tenureOfScholarship !== undefined ? (
                    <IonRow className="scholarship-toggle-container">
                        <IonCol className="scholarship-toggle-container">
                            <IonRow className="ion-justify-content-start scholarship-inner-row">
                                <IonCol className="ion-align-self-center scholarship-inner-col" size="10">
                                    <IonTitle className="scholarship-toggle-header">{scholarshipInfo.tenureOfScholarship.header}</IonTitle>
                                </IonCol>
                                <IonCol size="2" className="ion-align-self-center">
                                    <IonButton size="small" className="scholarship-toggle-button" onClick={() => displayTenureOfScholarship()}><IonIcon ref={toggleShow7} icon={addCircle} slot="icon-only" /></IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow className="scholarship-toggle-details-container" ref={tenureOfScholarship} hidden={true}>
                                <IonCol size="12">
                                    <IonRow>
                                        <IonText className="scholarship-description">
                                            <p>The scholarship is tenable for the minimum period required to complete the full course of study, as stipulated by the programme.</p>
                                            <IonGrid className="scholarship-tenure-container">
                                                <IonRow>
                                                    <IonCol className="scholarship-tenure-col" id="tenure-programmeTitle" size="4" style={{ padding: '1% 0%' }}>
                                                        <IonText className="tenure-headings">Programmes</IonText>
                                                    </IonCol>
                                                    <IonCol className="scholarship-tenure-col" size="8" style={{ padding: 0 }}>
                                                        <IonRow className="ion-justify-content-center" style={{ padding: '1% 0%', borderBottom: '2px solid #C8C8C8' }}>
                                                            <IonText className="tenure-headings">Application Period</IonText>
                                                        </IonRow>
                                                        <IonRow>
                                                            {scholarshipInfo.application !== undefined && scholarshipInfo.application.applicationPeriods.map((period: string, index: number) => (
                                                                <IonCol id="tenure-months" key={index}>
                                                                    <IonText className="tenure-headings">{period}</IonText>
                                                                </IonCol>
                                                            ))}
                                                        </IonRow>
                                                    </IonCol>
                                                </IonRow>
                                                {scholarshipInfo.tenureOfScholarship.content.map((info: any, index: number) => (
                                                    <IonRow key={index}>
                                                        <IonCol className="scholarship-tenure-col">
                                                            <IonText className="tenure-headings">{info.programmes}</IonText>
                                                        </IonCol>
                                                        {info.applicationPeriod.map((period: any, idx: number) => (
                                                            <IonCol key={idx} className="scholarship-tenure-col">
                                                                <IonText className="tenure-descriptions">{period.description}</IonText>
                                                            </IonCol>
                                                        ))}
                                                    </IonRow>
                                                ))}
                                            </IonGrid>
                                        </IonText>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                ) : null
                }

                {/* Terms & Conditions */}
                {scholarshipInfo.termsConditions !== undefined ? (
                    <IonRow className="scholarship-toggle-container">
                        <IonCol className="scholarship-toggle-container">
                            <IonRow className="ion-justify-content-start scholarship-inner-row">
                                <IonCol className="ion-align-self-center scholarship-inner-col" size="10">
                                    <IonTitle className="scholarship-toggle-header">{scholarshipInfo.termsConditions.header}</IonTitle>
                                </IonCol>
                                <IonCol size="2" className="ion-align-self-center">
                                    <IonButton size="small" className="scholarship-toggle-button" onClick={() => displayTermsAndConditions()}><IonIcon ref={toggleShow8} icon={addCircle} slot="icon-only" /></IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow className="scholarship-toggle-details-container" ref={termsAndConditions} hidden={true}>
                                <IonCol size="12">
                                    <IonRow>
                                        <IonText className="scholarship-description">
                                            <ul className="scholarship-unorderedList">
                                                {scholarshipInfo.termsConditions.content.map((li: string, index: number) => (
                                                    <li key={index} className="scholarship-unorderedList-description">{li}</li>
                                                ))}</ul>
                                        </IonText>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                ) : null
                }

                <IonRow id="scholarship-moreInfo">
                    <IonText>For more information, please email: {scholarshipInfo.applicationDocumentsProcedures !== undefined ? (
                        <a href={`mailto:${scholarshipInfo.applicationDocumentsProcedures.email}`}>{scholarshipInfo.applicationDocumentsProcedures.email}</a>
                    ) : null}</IonText>
                </IonRow>
            </IonGrid>
        </>
    );
};

export default SimGeScholarship;
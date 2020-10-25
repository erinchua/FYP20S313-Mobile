import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRouterLink, IonRow, IonTitle } from '@ionic/react';
import React, { useRef } from 'react';
import { addCircle, removeCircle } from 'ionicons/icons';

import '../../css/Global.css';
import '../../css/AdmissionApplication.css';
import TopNav from '../../components/TopNav';
import Step1 from '../../img/usefulInfo/application-icon-01.png';
import Step2 from '../../img/usefulInfo/OPSE_logo.jpg';
import Step3 from '../../img/usefulInfo/application-icon-02.png';
import Step4 from '../../img/usefulInfo/application-icon-03.png';
import Step5 from '../../img/usefulInfo/application-icon-04.png';


const AdmissionApplication: React.FC = () => {

    const info1 = useRef<HTMLIonRowElement>(null);
    const info2 = useRef<HTMLIonRowElement>(null);
    const info3 = useRef<HTMLIonRowElement>(null);
    const info4 = useRef<HTMLIonRowElement>(null);
    const info5 = useRef<HTMLIonRowElement>(null);
    const showIcon1 = useRef<HTMLIonIconElement>(null);
    const showIcon2 = useRef<HTMLIonIconElement>(null);
    const showIcon3 = useRef<HTMLIonIconElement>(null);
    const showIcon4 = useRef<HTMLIonIconElement>(null);
    const showIcon5 = useRef<HTMLIonIconElement>(null);

    const displayInfoCol1 = () => {
        info1.current!.hidden = !info1.current!.hidden;
        if (showIcon1.current!.icon === addCircle)
            showIcon1.current!.icon = removeCircle;
        else
            showIcon1.current!.icon = addCircle;
    };

    const displayInfoCol2 = () => {
        info2.current!.hidden = !info2.current!.hidden;
        if (showIcon2.current!.icon === addCircle)
            showIcon2.current!.icon = removeCircle;
        else
            showIcon2.current!.icon = addCircle;
    };

    const displayInfoCol3 = () => {
        info3.current!.hidden = !info3.current!.hidden;
        if (showIcon3.current!.icon === addCircle)
            showIcon3.current!.icon = removeCircle;
        else
            showIcon3.current!.icon = addCircle;
    };

    const displayInfoCol4 = () => {
        info4.current!.hidden = !info4.current!.hidden;
        if (showIcon4.current!.icon === addCircle)
            showIcon4.current!.icon = removeCircle;
        else
            showIcon4.current!.icon = addCircle;
    };

    const displayInfoCol5 = () => {
        info5.current!.hidden = !info5.current!.hidden;
        if (showIcon5.current!.icon === addCircle)
            showIcon5.current!.icon = removeCircle;
        else
            showIcon5.current!.icon = addCircle;
    };


    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Admission & Application" route='/u/usefulInfoMain' backarrow={ true } hamburger = { true }/>
            </IonHeader>

            <IonContent fullscreen={true}>
                <IonGrid id="admissionAppGrid">
                    <IonRow id="admissonAppTitleRow">
                        <IonTitle id="admissionAppTitle">How to Apply</IonTitle>
                    </IonRow>
                
                    {/* Admission & Application Steps */}
                    {/* Step 1 */}
                    <IonRow className="stepMainRow">
                        <IonCol size="12" sizeSm="12" className="stepMainCol">
                            <IonRow className="stepRow">
                                <IonCol sizeSm="12" className="stepTitle">Step 1</IonCol>
                            </IonRow>

                            <IonRow className="stepRow ion-justify-content-center">
                                <IonCol size="3" sizeSm="3" className="stepTitle ion-justify-content-center">
                                    <IonImg src={Step1} className="stepImg"></IonImg>
                                </IonCol>
                                
                                <IonCol size="9" sizeSm="9" className="stepInfo">
                                    Read through the <span><IonRouterLink className="labelUrlStyle" href="/u/usefulInfoMain/admissionApplication#additionalInfoTitleRow">Additional Information</IonRouterLink></span> section on this page. <br/>
                                    Prepare copies of supporting documents.
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>

                    {/* Step 2 */}
                    <IonRow className="stepMainRow">
                        <IonCol size="12" sizeSm="12" className="stepMainCol">
                            <IonRow className="stepRow">
                                <IonCol sizeSm="12" className="stepTitle">Step 2</IonCol>
                            </IonRow>

                            <IonRow className="stepRow ion-justify-content-center">
                                <IonCol sizeSm="12" className="stepTitle ion-justify-content-center">
                                    <IonRouterLink href="https://simconnect.simge.edu.sg">
                                        <IonImg src={Step2} className="stepImg"></IonImg>
                                    </IonRouterLink>
                                </IonCol>
                                
                                <IonCol size="9" sizeSm="9" className="stepInfo">
                                    <IonRouterLink className="labelUrlStyle" href="https://simconnect.simge.edu.sg">
                                        Tap here to start your application
                                    </IonRouterLink>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>

                    {/* Step 3 */}
                    <IonRow className="stepMainRow">
                        <IonCol size="12" sizeSm="12" className="stepMainCol">
                            <IonRow className="stepRow">
                                <IonCol sizeSm="12" className="stepTitle">Step 3</IonCol>
                            </IonRow>

                            <IonRow className="stepRow ion-justify-content-center">
                                <IonCol size="3" sizeSm="3" className="stepTitle ion-justify-content-center">
                                    <IonImg src={Step3} className="stepImg"></IonImg>
                                </IonCol>
                                
                                <IonCol size="9" sizeSm="9" className="stepInfo">
                                    Complete your application and payment of application fees.
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>

                    {/* Step 4 */}
                    <IonRow className="stepMainRow">
                        <IonCol size="12" sizeSm="12" className="stepMainCol">
                            <IonRow className="stepRow">
                                <IonCol sizeSm="12" className="stepTitle">Step 4</IonCol>
                            </IonRow>

                            <IonRow className="stepRow ion-justify-content-center">
                                <IonCol size="3" sizeSm="3" className="stepTitle ion-justify-content-center">
                                    <IonImg src={Step4} className="stepImg"></IonImg>
                                </IonCol>
                                
                                <IonCol size="9" sizeSm="9" className="stepInfo">
                                    Bring your original documents to SIM HQ for verification once the campus reopens.
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>

                    {/* Step 5 */}
                    <IonRow className="stepMainRow">
                        <IonCol size="12" sizeSm="12" className="stepMainCol">
                            <IonRow className="stepRow">
                                <IonCol sizeSm="12" className="stepTitle">Step 5</IonCol>
                            </IonRow>

                            <IonRow className="stepRow ion-justify-content-center">
                                <IonCol size="3" sizeSm="3" className="stepTitle ion-justify-content-center">
                                    <IonImg src={Step5} className="stepImg"></IonImg>
                                </IonCol>
                                
                                <IonCol size="9" sizeSm="9" className="stepInfo">
                                    Check your email for your application outcome.
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>

                    {/* Additional Info */}
                    <IonRow id="additionalInfoTitleRow">
                        <IonTitle id="additionalInfoTitle">Additional Info</IonTitle>
                    </IonRow>

                    {/* Before Applying */}
                    <IonRow className="additionalInfoHeaderRow">
                        <IonCol className="additionalInfoHeaderCol">
                            <IonRow className="additionalInfoHeaderInnerRow">
                                <IonCol size="10" sizeSm="10" style={{padding: "0"}}>
                                    <IonTitle className="additionalInfoHeader">Before Applying</IonTitle>
                                </IonCol>

                                <IonCol size="2" sizeSm="2"className="toggleAdmissionInfoBtnCol">
                                    <IonButton className="toggleAdmissionInfoBtn" onClick={displayInfoCol1} fill="clear" size="default">
                                        <IonIcon slot="icon-only" ref={showIcon1} icon={addCircle} />
                                    </IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol sizeSm="12" id="beforeApplyInfo" ref={info1} hidden={true}>
                                    <p>Ensure you have met the academic and English Language requirements for the programme.</p>
                                    <p>Ensure you have the scanned copies of the supporting documents (in PDF format) on hand for uploading and entry in the e-application form.</p>
                                    <p>Applications with incomplete, inaccurate information and not accompanied by supporting documents will NOT be processed and considered.</p>
                                    <p>Apply at <span><IonRouterLink className="labelUrlStyle" href="https://simconnect.simge.edu.sg">https://simconnect.simge.edu.sg</IonRouterLink> </span> 
                                            before the closing date.</p>
                                    <p>If you have forgotten your SIM login ID/password, please contact Student Recruitment at <span><IonRouterLink className="labelUrlStyle" href="study@sim.edu.sg">study@sim.edu.sg</IonRouterLink></span> or 6248 9746.</p>
                                    <p>For an international applicant applying to a full-time programme, you must submit an online Student’s Pass (STP) application form. Your Student’s Pass application is subjected to approval of the Singapore Immigration & Checkpoints Authority (ICA).</p>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>

                    {/* Supporting Documents */}
                    <IonRow className="additionalInfoHeaderRow">
                        <IonCol className="additionalInfoHeaderCol">
                            <IonRow className="additionalInfoHeaderInnerRow">
                                <IonCol size="10" sizeSm="10" style={{padding: "0"}}>
                                    <IonTitle className="additionalInfoHeader">Supporting Documents</IonTitle>
                                </IonCol>

                                <IonCol size="2" sizeSm="2"className="toggleAdmissionInfoBtnCol">
                                    <IonButton className="toggleAdmissionInfoBtn" onClick={displayInfoCol2} fill="clear" size="default">
                                        <IonIcon slot="icon-only" ref={showIcon2} icon={addCircle} />
                                    </IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol sizeSm="12" id="supportingDocInfo" ref={info2} hidden={true}>
                                    <ol className="orderedList">
                                        <li id="supportingDocInfoList">Educational certificates (e.g. ‘O’ and ‘A’ level certificates, diplomas, degree certificate, exam transcripts, etc). Translated and notarised copies are required if documents are not in English. By the application closing date, you must have attained the minimum qualification required for the programme.</li>
                                        <li id="supportingDocInfoList">NRIC or FIN/passport (for international applicants).</li>
                                        <li id="supportingDocInfoList">Passport-sized photograph. Your photo must be taken in the last 3 months. It is to be in JPEG format, 400 by 514 pixels, and file size of around 60KB.</li>
                                        <li id="supportingDocInfoList">Statement of purpose, CV and two reference letters (applicable for University of Warwick and University of Birmingham Postgraduate/Master programmes).</li>
                                    </ol>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>

                    {/* Application Fees */}
                    <IonRow className="additionalInfoHeaderRow">
                        <IonCol className="additionalInfoHeaderCol">
                            <IonRow className="additionalInfoHeaderInnerRow">
                                <IonCol size="10" sizeSm="10" style={{padding: "0"}}>
                                    <IonTitle className="additionalInfoHeader">Application Fees</IonTitle>
                                </IonCol>

                                <IonCol size="2" sizeSm="2"className="toggleAdmissionInfoBtnCol">
                                    <IonButton className="toggleAdmissionInfoBtn" onClick={displayInfoCol3} fill="clear" size="default">
                                        <IonIcon slot="icon-only" ref={showIcon3} icon={addCircle} />
                                    </IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol sizeSm="12" id="applicationFeeInfo" ref={info3} hidden={true}>
                                    <p>An application fee is payable for each application form that is submitted. This fee (inclusive of 7% GST) is non-refundable and non-transferable. The fee will be refunded fully only if the intake does not commence. Unpaid applications will not be processed.</p>
                                    <p>Local applicants: S$96.30. International applicants: S$481.50*</p>
                                    <p><i>*This does not include all fees related to Student’s Pass application.</i></p>
                                    <p>MasterCard / Visa credit card or eNETS can be used to pay application fee.</p>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>

                    {/* Verification of Documents */}
                    <IonRow className="additionalInfoHeaderRow">
                        <IonCol className="additionalInfoHeaderCol">
                            <IonRow className="additionalInfoHeaderInnerRow">
                                <IonCol size="10" sizeSm="10" style={{padding: "0"}}>
                                    <IonTitle className="additionalInfoHeader">Verification of Documents</IonTitle>
                                </IonCol>

                                <IonCol size="2" sizeSm="2"className="toggleAdmissionInfoBtnCol">
                                    <IonButton className="toggleAdmissionInfoBtn" onClick={displayInfoCol4} fill="clear" size="default">
                                        <IonIcon slot="icon-only" ref={showIcon4} icon={addCircle} />
                                    </IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol sizeSm="12" id="verifyDocInfo" ref={info4} hidden={true}>
                                    <p>SIM Campus is currently closed.</p>
                                    <p>Local applicants are encouraged to send in their OpenCerts file to SIM for verification.
                                    International applicants can mail in the original notarised documents to SIM for verification.
                                    </p>
                                    <p>Alternatively, applicants could also bring their original documents for verification at Student Recruitment Centre, SIM HQ Block A, Level 2, once the campus reopens or when classes commence in SIM.</p>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>

                    {/* Application Outcome */}
                    <IonRow className="additionalInfoHeaderRow">
                        <IonCol className="additionalInfoHeaderCol">
                            <IonRow className="additionalInfoHeaderInnerRow">
                                <IonCol size="10" sizeSm="10" style={{padding: "0"}}>
                                    <IonTitle className="additionalInfoHeader">
                                        <div className="ion-text-wrap">
                                            Application Outcome & Acceptance of Offer
                                        </div>
                                    </IonTitle>
                                </IonCol>

                                <IonCol size="2" sizeSm="2"className="toggleAdmissionInfoBtnCol">
                                    <IonButton className="toggleAdmissionInfoBtn" onClick={displayInfoCol5} fill="clear" size="default">
                                        <IonIcon slot="icon-only" ref={showIcon5} icon={addCircle} />
                                    </IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol sizeSm="12" id="applicationOutcomeInfo" ref={info5} hidden={true}>
                                    <p>Applicants will be informed by e-mail of the application outcome within one month before the course starts.</p>
                                    <p>When you have received the offer, you must go online to confirm the offer and accept the student contract document.</p>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                    
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default AdmissionApplication;

import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonPage, IonRouterLink, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';

import '../css/Global.css';
import '../css/AdmissionApplication.css';
import { addCircle } from 'ionicons/icons';
import Step1 from '../img/usefulInfo/application-icon-01.png'
import Step2 from '../img/usefulInfo/OPSE_logo.jpg'
import Step3 from '../img/usefulInfo/application-icon-02.png'
import Step4 from '../img/usefulInfo/application-icon-03.png'
import Step5 from '../img/usefulInfo/application-icon-04.png'

import TopNav from '../components/TopNav';
import Menu from '../components/Menu';


const AdmissionApplication: React.FC = () => {

    const [toggleInfoBtn, setToggleInfoBtn] = useState(false);

    return (
        <IonPage>
            <TopNav title="Admission & Application" route='/u/usefulInfoMain' backarrow={ true } hamburger = { true }/>

            <IonContent fullscreen={true}>
                <IonGrid id="admissionAppTitleGrid">
                    <IonRow id="admissonAppTitleRow">
                        <IonTitle id="admissionAppTitle">How to Apply</IonTitle>
                    </IonRow>
                
                    {/* Admission & Application Steps - All data will be stored in db but cannot be edited by admin*/}
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
                                    Read through the <span>Additional Information</span> section on this page. <br/>
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
                                    <IonRouterLink id="simConnnectUrl" href="https://simconnect.simge.edu.sg:488/psp/paadm/EMPLOYEE/HRMS/s/WEBLIB_EOPPB.ISCRIPT1.FieldFormula.Iscript_SM_Redirect?cmd=login&languageCd=ENG&ParameterName=Applicant&">
                                        <IonImg src={Step2} className="stepImg"></IonImg>
                                    </IonRouterLink>
                                </IonCol>
                                
                                <IonCol size="9" sizeSm="9" className="stepInfo">
                                    <IonRouterLink id="simConnnectUrl" href="https://simconnect.simge.edu.sg:488/psp/paadm/EMPLOYEE/HRMS/s/WEBLIB_EOPPB.ISCRIPT1.FieldFormula.Iscript_SM_Redirect?cmd=login&languageCd=ENG&ParameterName=Applicant&">
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

                    {/* Before Applying... */}
                    <IonRow className="additionalInfoHeaderRow">
                        <IonToolbar className="additionalInfoHeaderToolbar">
                            <IonTitle className="additionalInfoHeader">Before Applying...</IonTitle>

                            <IonButtons slot="end">
                                <IonButton>
                                    <IonIcon slot="icon-only" icon={addCircle} />
                                </IonButton>
                            </IonButtons>
                        </IonToolbar>
                        
                        {/* TBC: add the info row here */}
                        <IonCol sizeSm="12" id="beforeApplyInfo">
                            Text
                        </IonCol>
                    </IonRow>

                </IonGrid>
                
            </IonContent>
        </IonPage>
    );
};

export default AdmissionApplication;

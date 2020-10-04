import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRadio, IonRadioGroup, IonRouterLink, IonRow, IonSelect, IonSelectOption, IonTextarea, IonTitle } from '@ionic/react';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

import '../../css/Global.css';
import '../../css/CommonFaqs.css';
import { addCircle } from 'ionicons/icons';

import TopNav from '../../components/TopNav';
import Menu from '../../components/Menu';



const CommonFaqs: React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <TopNav title="Common FAQs" route='/u/usefulInfoMain' backarrow={ true } hamburger = { true }/>
            </IonHeader>

            <IonContent fullscreen={true}>
                <IonGrid id="faqGrid">
                    <IonRow id="faqTitleRow">
                        <IonTitle id="faqTitle">Open House FAQs</IonTitle>
                    </IonRow>

                    {/* Application Outcome */}
                    <IonRow className="faqHeaderRow">
                        <IonCol className="faqHeaderCol">
                            <IonRow className="faqHeaderInnerRow">
                                <IonCol size="10" sizeSm="10" style={{padding: "0"}}>
                                    <IonTitle className="faqInfoHeader">
                                        <div className="ion-text-wrap">
                                            Application Outcome & Acceptance of Offer
                                        </div>
                                    </IonTitle>
                                </IonCol>

                                {/* <IonCol size="2" sizeSm="2"className="toggleFaqInfoBtnCol">
                                    <IonButton className="toggleFaqInfoBtn" onClick={displayInfoCol} fill="clear" size="default">
                                        <IonIcon slot="icon-only" ref={showIcon} icon={addCircle} />
                                    </IonButton>
                                </IonCol> */}
                            </IonRow>

                            <IonRow>
                                {/* <IonCol sizeSm="12" id="applicationOutcomeInfo" ref={info} hidden={true}>
                                    <p>Applicants will be informed by e-mail of the application outcome within one month before the course starts.</p>
                                    <p>When you have received the offer, you must go online to confirm the offer and accept the student contract document.</p>
                                </IonCol> */}
                            </IonRow>
                        </IonCol>
                    </IonRow>
                    
                </IonGrid>
            </IonContent>

        </IonPage>
    );

};

export default CommonFaqs;
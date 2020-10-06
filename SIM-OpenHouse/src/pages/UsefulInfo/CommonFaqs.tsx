import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRadio, IonRadioGroup, IonRouterLink, IonRow, IonSelect, IonSelectOption, IonTextarea, IonTitle } from '@ionic/react';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

import '../../css/Global.css';
import '../../css/CommonFaqs.css';
import { addCircle, removeCircle } from 'ionicons/icons';

import TopNav from '../../components/TopNav';
import Menu from '../../components/Menu';


const CommonFaqs: React.FC = () => {
    const info = useRef<HTMLIonRowElement>(null);
    const showIcon = useRef<HTMLIonIconElement>(null);

    const displayInfoCol = () => {
        info.current!.hidden = !info.current!.hidden;
        if (showIcon.current!.icon == addCircle)
            showIcon.current!.icon = removeCircle;
        else
            showIcon.current!.icon = addCircle;
    };

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

                    {/* FAQ Accordion */}
                    <IonRow className="faqHeaderRow">
                        <IonCol className="faqHeaderCol">
                            <IonRow className="faqHeaderInnerRow">
                                <IonCol size="10" sizeSm="10" style={{padding: "0"}}>
                                    <IonTitle className="faqInfoHeader">
                                        <div className="ion-text-wrap">
                                           Question
                                        </div>
                                    </IonTitle>
                                </IonCol>

                                <IonCol size="2" sizeSm="2"className="toggleFaqInfoBtnCol">
                                    <IonButton className="toggleFaqInfoBtn" onClick={displayInfoCol} fill="clear" size="default">
                                        <IonIcon slot="icon-only" ref={showIcon} icon={addCircle} />
                                    </IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol sizeSm="12" className="faqInfo" ref={info} hidden={true}>
                                    <div className="ion-text-wrap">
                                        <p>Answer</p>
                                    </div>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                    
                </IonGrid>
            </IonContent>

        </IonPage>
    );

};

export default CommonFaqs;
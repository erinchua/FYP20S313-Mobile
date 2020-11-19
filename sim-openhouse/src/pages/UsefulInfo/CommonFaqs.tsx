import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import React, { useRef, useState, useEffect } from 'react';
import { addCircle, removeCircle } from 'ionicons/icons';

import '../../css/Global.css';
import '../../css/CommonFaqs.css';
import TopNav from '../../components/TopNav';
import { db } from '../../firebase'
import { Faq } from '../../modules/map'

const CommonFaqs: React.FC = () => {
    const [tab, setTab] = useState("openHouseFAQs");
    const [faqs, setFaqs] = useState({ openhouse: [], general: [] });

    const handleOpenHouseFAQs = () => {
        setTab("openHouseFAQs");
    };

    const handleGeneralFAQs = () => {
        setTab("generalFAQs");
    };
    const info = useRef<any>([]);
    const showIcon = useRef<any>([]);
    

    const displayInfoCol = (index:number) => {
        info.current[index]!.hidden = !info.current[index]!.hidden;
        if (showIcon.current[index]!.icon == addCircle)
            showIcon.current[index]!.icon = removeCircle;

        else
            showIcon.current[index]!.icon = addCircle;
    };

    //Adding each icon into their own ref.
    // const addtoIconRef = (el:HTMLIonIconElement)=>{
    //     if(el && !showIcon.current.includes(el))
    //     showIcon.current.push(el)
    // }

    //Adding each answer into their own ref.
    // const addtoRef = (el:HTMLIonIconElement)=>{
    //     if(el && !info.current.includes(el)){
    //         info.current.push(el)
    //         console.log("I am"+el)
    //     }
    //     else{

    //     }
    // }

    useEffect(() => {
        db.collection('CommonFAQ').get().then((snapshot) => {
            const openhouse: any = [];
            const general: any = [];

            snapshot.forEach((doc) => {
                const data = doc.data();

                if (data.faqType === "Openhouse")
                    openhouse.push(data);
                else
                    general.push(data);
            })
            setFaqs({ openhouse: openhouse, general: general });
        });
    }, []);

    

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Common FAQs" route='/u/usefulInfoMain' backarrow={true} hamburger={true} />

                <IonToolbar className="faqSegmentHeader">
                    <IonSegment scrollable value={tab} className="faqSegmentHeader">
                        <IonSegmentButton value="openHouseFAQs" className="faqSegmentBtn ion-text-wrap" id="openHouseFAQs" onClick={handleOpenHouseFAQs}>
                            Open House FAQs
                        </IonSegmentButton>
                        <IonSegmentButton value="generalFAQs" className="faqSegmentBtn ion-text-wrap" id="generalFAQs" onClick={handleGeneralFAQs}>
                            General FAQs
                        </IonSegmentButton>
                    </IonSegment>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen={true}>
                <IonGrid id="faqGrid">
                    {/* Open House FAQs */}
                    {tab === "openHouseFAQs" ? (
                        /* Open House FAQ Accordion */
                        <IonRow className="faqHeaderRow">
                            <IonCol className="faqHeaderCol">
                                {faqs.openhouse.map((faq: Faq,index ) => {
                                    return (
                                        <div key={index}>
                                            <IonRow className="faqHeaderInnerRow">
                                                <IonCol size="10" sizeSm="10" style={{ padding: "0" }}>
                                                    <IonTitle className="faqInfoHeader">
                                                        <div className="ion-text-wrap">{faq.faqQuestion}</div>
                                                    </IonTitle>
                                                </IonCol>

                                                <IonCol size="2" sizeSm="2" className="toggleFaqInfoBtnCol">
                                                    <IonButton className="toggleFaqInfoBtn" onClick={e=>{displayInfoCol(index)}} fill="clear" size="default">
                                                        <IonIcon slot="icon-only" ref={el=>showIcon.current[index] = el} icon={addCircle} />
                                                    </IonButton>
                                                </IonCol>
                                            </IonRow>

                                            <IonRow>
                                                <IonCol sizeSm="12" className="faqInfo" ref={el=> info.current[index] = el} hidden={true}>
                                                    <div className="ion-text-wrap">
                                                        <p>{faq.faqAnswer}</p>
                                                    </div>
                                                </IonCol>
                                            </IonRow>
                                        </div>
                                    )
                                })}
                            </IonCol>
                        </IonRow>
                    ) : null
                    }


                    {/* General FAQs */}
                    {tab === "generalFAQs" ? (
                        /* General FAQ Accordion */
                        < IonRow className="faqHeaderRow">
                            <IonCol className="faqHeaderCol">
                                {faqs.general.map((faq: Faq,index) => {
                                    return (<div key={faq.id}>
                                        <IonRow className="faqHeaderInnerRow">
                                            <IonCol size="10" sizeSm="10" style={{ padding: "0" }}>
                                                <IonTitle className="faqInfoHeader">
                                                    <div className="ion-text-wrap">{faq.faqQuestion}</div>
                                                </IonTitle>
                                            </IonCol>

                                            <IonCol size="2" sizeSm="2" className="toggleFaqInfoBtnCol">
                                                <IonButton className="toggleFaqInfoBtn" onClick={e=>{displayInfoCol(index)}} fill="clear" size="default">
                                                    <IonIcon slot="icon-only" ref={el=>showIcon.current[index] = el} icon={addCircle} />
                                                </IonButton>
                                            </IonCol>
                                        </IonRow>

                                        <IonRow>
                                            <IonCol sizeSm="12" className="faqInfo" ref={el=> info.current[index] = el} hidden={true}>
                                                <div className="ion-text-wrap">
                                                    <p>{faq.faqAnswer}</p>
                                                </div>
                                            </IonCol>
                                        </IonRow>
                                    </div>)
                                })}

                            </IonCol>
                        </IonRow>
                    ) : null
                    }

                </IonGrid>
            </IonContent>

        </IonPage >
    );

};

export default CommonFaqs;
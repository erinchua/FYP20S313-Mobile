import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import React, { useRef, useState, useEffect } from 'react';
import { addCircle, removeCircle } from 'ionicons/icons';

import '../../css/Global.css';
import '../../css/CommonFaqs.css';
import TopNav from '../../components/TopNav';
import { db } from '../../firebase'


const CommonFaqs: React.FC = () => {
    const [tab, setTab] = useState("openHouseFAQs");
    const [faq, setFaq] = useState([])

    const handleOpenHouseFAQs = () => {
        setTab("openHouseFAQs");
    };

    const handleGeneralFAQs = () => {
        setTab("generalFAQs");
    };


    const info = useRef<HTMLIonRowElement>(null);
    const showIcon = useRef<HTMLIonIconElement>(null);

    const displayInfoCol = () => {
        info.current!.hidden = !info.current!.hidden;
        if (showIcon.current!.icon == addCircle)
            showIcon.current!.icon = removeCircle;
        else
            showIcon.current!.icon = addCircle;
    };

    useEffect(() => {
        const faqs: any = []
        db.collection('CommonFAQ').get().then((snapshot) => {
            snapshot.forEach((doc) => {
                const data = doc.data()
                faqs.push(data)
            })
            setFaq(faqs)
        })
    }, [])
    const openhouseFaq = faq.filter((faq: any) => {
        return faq.faqType == 'openhouse'
    })

    const generalFaq = faq.filter((faq: any) => {
        return faq.faqType == 'general'
    })

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
                    {tab === "openHouseFAQs" ?
                        <>
                            {/* Open House FAQ Accordion */}
                            {openhouseFaq.map(({ id, faqQuestion, faqAnswer }) => {
                                return (
                                    <div key={id}>
                                        <IonRow className="faqHeaderRow">
                                            <IonCol className="faqHeaderCol">
                                                <IonRow className="faqHeaderInnerRow">
                                                    <IonCol size="10" sizeSm="10" style={{ padding: "0" }}>
                                                        <IonTitle className="faqInfoHeader">
                                                            <div className="ion-text-wrap">
                                                                {faqQuestion}
                                                            </div>
                                                        </IonTitle>
                                                    </IonCol>

                                                    <IonCol size="2" sizeSm="2" className="toggleFaqInfoBtnCol">
                                                        <IonButton className="toggleFaqInfoBtn" onClick={displayInfoCol} fill="clear" size="default">
                                                            <IonIcon slot="icon-only" ref={showIcon} icon={addCircle} />
                                                        </IonButton>
                                                    </IonCol>
                                                </IonRow>

                                                <IonRow>
                                                    <IonCol sizeSm="12" className="faqInfo" ref={info} hidden={true}>
                                                        <div className="ion-text-wrap">
                                                            <p>{faqAnswer}</p>
                                                        </div>
                                                    </IonCol>
                                                </IonRow>
                                            </IonCol>
                                        </IonRow>
                                    </div>
                                )
                            })}

                        </>
                        : null
                    }


                    {/* General FAQs */}
                    {tab === "generalFAQs" ?
                        <>
                            {/* General FAQ Accordion */}
                            <IonRow className="faqHeaderRow">
                                <IonCol className="faqHeaderCol">
                                    <IonRow className="faqHeaderInnerRow">
                                        <IonCol size="10" sizeSm="10" style={{ padding: "0" }}>
                                            <IonTitle className="faqInfoHeader">
                                                <div className="ion-text-wrap">
                                                    General Question
                                            </div>
                                            </IonTitle>
                                        </IonCol>

                                        <IonCol size="2" sizeSm="2" className="toggleFaqInfoBtnCol">
                                            <IonButton className="toggleFaqInfoBtn" onClick={displayInfoCol} fill="clear" size="default">
                                                <IonIcon slot="icon-only" ref={showIcon} icon={addCircle} />
                                            </IonButton>
                                        </IonCol>
                                    </IonRow>

                                    <IonRow>
                                        <IonCol sizeSm="12" className="faqInfo" ref={info} hidden={true}>
                                            <div className="ion-text-wrap">
                                                <p>General Answer</p>
                                            </div>
                                        </IonCol>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </>
                        : null
                    }

                </IonGrid>
            </IonContent>

        </IonPage>
    );

};

export default CommonFaqs;
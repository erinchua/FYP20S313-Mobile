import { IonCol, IonContent, IonGrid, IonPage, IonRouterLink, IonRow, IonTitle } from '@ionic/react';
import React, { useRef } from 'react';

import '../../css/Global.css';
import '../../css/ContactInfo.css';

import TopNav from '../../components/TopNav';
import Menu from '../../components/Menu';


const ContactInfo: React.FC = () => {
    
    return (
        <IonPage>
            <TopNav title="Contact Information" route='/u/usefulInfoMain' backarrow={ true } hamburger = { true }/>

            <IonContent fullscreen={true}>
                <IonGrid id="contactInfoGrid">
                    {/* General Enquiries */}
                    <IonRow className="contactInfoTitleRow">
                        <IonTitle className="contactInfoTitle">General Enquiries</IonTitle>
                    </IonRow>

                    <IonRow className="contactInfoDetailRow" style={{paddingTop: "3%"}}>
                        <IonCol size="5" sizeSm="5" className="contactInfoDetailCol">
                            <IonTitle className="contactInfoDetailTitle">Operating Hours:</IonTitle>
                        </IonCol>

                        <IonCol size="7" sizeSm="7" className="contactInfoDetailCol">
                            <IonRow className="contactInfoDetailInfo">8.30am to 5.30pm (Mon-Fri)</IonRow>
                            <IonRow className="contactInfoDetailInfo">8.30am to 12.30pm (Saturday)</IonRow>
                        </IonCol>
                    </IonRow>

                    <IonRow className="contactInfoDetailRow">
                        <IonCol size="5" sizeSm="5" className="contactInfoDetailCol">
                            <IonTitle className="contactInfoDetailTitle">Tel:</IonTitle>
                        </IonCol>

                        <IonCol size="7" sizeSm="7" className="contactInfoDetailCol">
                            <IonRow className="contactInfoDetailInfo">6468 8866</IonRow>
                        </IonCol>
                    </IonRow>

                    <IonRow className="contactInfoDetailRow">
                        <IonCol size="5" sizeSm="5" className="contactInfoDetailCol">
                            <IonTitle className="contactInfoDetailTitle">Email:</IonTitle>
                        </IonCol>

                        <IonCol size="7" sizeSm="7" className="contactInfoDetailCol" style={{paddingBottom: "3%"}}>
                            <IonRow className="contactInfoDetailInfo">
                                <IonRouterLink className="contactInfoDetailUrl" href="receptions@sim.edu.sg">receptions@sim.edu.sg</IonRouterLink>
                            </IonRow>
                        </IonCol>
                    </IonRow>

                    {/* Student Services Enquiries */}
                    <IonRow className="contactInfoTitleRow">
                        <IonTitle className="contactInfoTitle">Student Services Enquiries</IonTitle>
                    </IonRow>

                    <IonRow className="contactInfoDetailRow" style={{paddingTop: "3%"}}>
                        <IonCol size="5" sizeSm="5" className="contactInfoDetailCol">
                            <IonTitle className="contactInfoDetailTitle">Operating Hours:</IonTitle>
                        </IonCol>

                        <IonCol size="7" sizeSm="7" className="contactInfoDetailCol">
                            <IonRow className="contactInfoDetailInfo">8.30am to 5.30pm (Mon-Fri)</IonRow>
                            <IonRow className="contactInfoDetailInfo">9.00am to 1.00pm (Saturdays)</IonRow>
                            <IonRow className="contactInfoDetailInfo" style={{paddingTop: "3%"}}>Closed on public holidays and SIM / SIMPL shutdown days</IonRow>
                        </IonCol>
                    </IonRow>

                    <IonRow className="contactInfoDetailRow">
                        <IonCol size="5" sizeSm="5" className="contactInfoDetailCol">
                            <IonTitle className="contactInfoDetailTitle">Tel:</IonTitle>
                        </IonCol>

                        <IonCol size="7" sizeSm="7" className="contactInfoDetailCol">
                            <IonRow className="contactInfoDetailInfo">6248 9393</IonRow>
                        </IonCol>
                    </IonRow>

                    <IonRow className="contactInfoDetailRow" style={{paddingBottom: "3%"}}>
                        <IonCol size="5" sizeSm="5" className="contactInfoDetailCol">
                            <IonTitle className="contactInfoDetailTitle">Email:</IonTitle>
                        </IonCol>

                        <IonCol size="7" sizeSm="7" className="contactInfoDetailCol">
                            <IonRow className="contactInfoDetailInfo">
                                <IonRouterLink className="contactInfoDetailUrl" href="students@sim.edu.sg">students@sim.edu.sg</IonRouterLink>
                            </IonRow>
                        </IonCol>
                    </IonRow>

                    {/* Programmes Enquiries */}
                    <IonRow className="contactInfoTitleRow">
                        <IonTitle className="contactInfoTitle">Programmes Enquiries</IonTitle>
                    </IonRow>

                    <IonRow className="contactInfoDetailRow" style={{paddingTop: "3%"}}>
                        <IonCol size="5" sizeSm="5" className="contactInfoDetailCol">
                            <IonTitle className="contactInfoDetailTitle">Operating Hours:</IonTitle>
                        </IonCol>

                        <IonCol size="7" sizeSm="7" className="contactInfoDetailCol">
                            <IonRow className="contactInfoDetailInfo">8.30am to 5.30pm (Mon-Fri)</IonRow>
                            <IonRow className="contactInfoDetailInfo">9.00am to 1.00pm (Saturdays)</IonRow>
                            <IonRow className="contactInfoDetailInfo" style={{paddingTop: "3%"}}>Closed on public holidays and SIM shutdown days (Eve of Christmas Day, Eve of New Year’s Day and Eve of Chinese New Year)</IonRow>
                        </IonCol>
                    </IonRow>

                    <IonRow className="contactInfoDetailRow">
                        <IonCol size="5" sizeSm="5" className="contactInfoDetailCol">
                            <IonTitle className="contactInfoDetailTitle">Tel:</IonTitle>
                        </IonCol>

                        <IonCol size="7" sizeSm="7" className="contactInfoDetailCol">
                            <IonRow className="contactInfoDetailInfo">6248 9746</IonRow>
                        </IonCol>
                    </IonRow>

                    <IonRow className="contactInfoDetailRow" style={{paddingBottom: "3%"}}>
                        <IonCol size="5" sizeSm="5" className="contactInfoDetailCol">
                            <IonTitle className="contactInfoDetailTitle">Email:</IonTitle>
                        </IonCol>

                        <IonCol size="7" sizeSm="7" className="contactInfoDetailCol">
                            <IonRow className="contactInfoDetailInfo">
                                <IonRouterLink className="contactInfoDetailUrl" href="study@sim.edu.sg">study@sim.edu.sg</IonRouterLink>
                            </IonRow>
                        </IonCol>
                    </IonRow>

                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default ContactInfo;
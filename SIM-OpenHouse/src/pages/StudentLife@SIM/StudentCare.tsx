import { IonCol, IonContent, IonGrid, IonHeader, IonList, IonPage, IonRow, IonText, IonThumbnail } from '@ionic/react';
import React from 'react';

import '../../css/Global.css';
import '../../css/StudentLife.css';
import TopNav from '../../components/TopNav';
import cyclingTrip from '../../img/studentLife@SIM/sim008704.jpg';
import artJamming from '../../img/studentLife@SIM/sim008705.jpg';
import chekJawa from '../../img/studentLife@SIM/sim008706.jpg';
import studentWellnessCentre from '../../img/studentLife@SIM/studentWellnesCentre.png';
import wellnessAdvocates from '../../img/studentLife@SIM/wellnessAdvocates.png';
import peerSupport from '../../img/studentLife@SIM/peerSupport.png';
import counsellingService from '../../img/studentLife@SIM/counsellingService.png';

const StudentCare: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Student Care" route="/u/studentLife@SIM" backarrow={ true } hamburger={ true }/>
            </IonHeader>
            <IonContent fullscreen className="studentLife-content">
                <IonGrid id="studentCare-grid">
                    <IonRow id="studentCare-topHeader-container" className="ion-justify-content-start">
                        <IonText id="studentCare-topHeader-text">Work, play and live well</IonText>
                    </IonRow>
                    <IonRow>
                        <IonText id="studentCare-description">Healthy, well-balanced and effective individuals are more likely to do well in life. Student Care regularly organises programmes to encourage healthy living, wellness, stress management and the development of other soft skills that will boost your well-being.</IonText>
                    </IonRow>

                    {/* Trip's Image and Title */}
                    <IonRow className="ion-justify-content-center" id="studentCare-trip-container"> 
                        <IonCol size="4">
                            <IonRow className="ion-justify-content-center">
                                <IonThumbnail className="studentCare-tripThumbnail">
                                    <img src={cyclingTrip}/>
                                </IonThumbnail>
                            </IonRow>
                            <IonRow className="ion-justify-content-center">
                                <IonText className="studentCare-tripText">Cycling Trip</IonText>
                            </IonRow>
                        </IonCol>
                        <IonCol size="4">
                            <IonRow className="ion-justify-content-center">
                                <IonThumbnail className="studentCare-tripThumbnail">
                                    <img src={artJamming}/>
                                </IonThumbnail>
                            </IonRow>
                            <IonRow className="ion-justify-content-center">
                                <IonText className="studentCare-tripText">Art Jamming</IonText>
                            </IonRow>
                        </IonCol>
                        <IonCol size="4">
                            <IonRow className="ion-justify-content-center">
                                <IonThumbnail className="studentCare-tripThumbnail">
                                    <img src={chekJawa}/>
                                </IonThumbnail>
                            </IonRow>
                            <IonRow className="ion-justify-content-center">
                                <IonText className="studentCare-tripText">Nature Steps - Outing to Chek Jawa</IonText>
                            </IonRow>
                        </IonCol>
                    </IonRow>

                    {/* Student Wellness Centre */}
                    <IonList className="studentCare-list">
                        <IonGrid className="studentCare-details-grid">
                            <IonRow>
                                <IonCol size="4" className="ion-align-self-center">
                                    <IonThumbnail className="studentCare-thumbnail">
                                        <img src={studentWellnessCentre}/>
                                    </IonThumbnail>
                                </IonCol>
                                <IonCol size="8" className="ion-align-self-center">
                                    <IonRow>
                                        <IonText className="studentCare-details-heading">Student Wellness Centre</IonText>
                                    </IonRow>
                                    <IonRow>
                                        <IonText className="studentCare-details-description">
                                            Participate in activities and events at the Student Wellness Centre that help you to unwind and relax. 
                                            Learn more about wellness through our talks and workshops. 
                                            A library of wellness resource materials providing basic tips on physical, social, 
                                            emotional and mental wellness are also available for browsing.
                                        </IonText>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonList>

                    {/* Counselling Service */}
                    <IonList className="studentCare-list">
                        <IonGrid className="studentCare-details-grid">
                            <IonRow>
                                <IonCol size="4" className="ion-align-self-center">
                                    <IonThumbnail className="studentCare-thumbnail">
                                        <img src={counsellingService}/>
                                    </IonThumbnail>
                                </IonCol>
                                <IonCol size="8" className="ion-align-self-center">
                                    <IonRow>
                                        <IonText className="studentCare-details-heading">Counselling Service</IonText>
                                    </IonRow>
                                    <IonRow>
                                        <IonText className="studentCare-details-description">
                                            Seek professional help and guidance from a qualified counsellor at the Student Wellness Centre 
                                            if you are feeling overwhelmed or facing challenges such as managing your studies or adjusting 
                                            to a new environment.
                                        </IonText>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonList>

                    {/* SIM Peer Support */}
                    <IonList className="studentCare-list">
                        <IonGrid className="studentCare-details-grid">
                            <IonRow>
                                <IonCol size="4" className="ion-align-self-center">
                                    <IonThumbnail className="studentCare-thumbnail">
                                        <img src={peerSupport}/>
                                    </IonThumbnail>
                                </IonCol>
                                <IonCol size="8" className="ion-align-self-center">
                                    <IonRow>
                                        <IonText className="studentCare-details-heading">SIM Peer Support</IonText>
                                    </IonRow>
                                    <IonRow>
                                        <IonText className="studentCare-details-description">
                                            SIM Peer Mentors are passionate about helping fellow SIM GE students. 
                                            Besides being always ready to lend you a listening ear, SIM Peer Mentors also encourage 
                                            a culture of care and support and facilitate social integration on the campus.
                                        </IonText>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonList>

                    {/* SIM Wellness Advocates */}
                    <IonList className="studentCare-list">
                        <IonGrid className="studentCare-details-grid">
                            <IonRow>
                                <IonCol size="4" className="ion-align-self-center">
                                    <IonThumbnail className="studentCare-thumbnail">
                                        <img src={wellnessAdvocates}/>
                                    </IonThumbnail>
                                </IonCol>
                                <IonCol size="8" className="ion-align-self-center">
                                    <IonRow>
                                        <IonText className="studentCare-details-heading">SIM Wellness Advocates</IonText>
                                    </IonRow>
                                    <IonRow>
                                        <IonText className="studentCare-details-description">
                                            Learn to make healthy lifestyle choices from wellness initiatives and programmes organised by 
                                            SIM Wellness Advocates just for you. As agents of change championing the adoption of a healthy lifestyle, 
                                            SIM Wellness Advocates promote a healthy campus culture.
                                        </IonText>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonList>

                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default StudentCare;
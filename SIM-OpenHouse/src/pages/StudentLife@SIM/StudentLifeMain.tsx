import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRouterLink, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import '../../css/Global.css';
import '../../css/StudentLife.css';
import TopNav from '../../components/TopNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader, faHandHoldingHeart, faHandsHelping, faSwimmer } from '@fortawesome/free-solid-svg-icons';

const StudentLifeMain: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Student Life@SIM" route="/u/home" backarrow={ true } hamburger={ true }/>
            </IonHeader>
            <IonContent fullscreen className="studentLife-content">
                <IonGrid id="studentLifeMain-grid">
                    <IonRow className="ion-justify-content-around studentLifeMain-row">
                        <IonCol sizeSm="6" className="studentLifeMain-col">
                            <IonRouterLink href="/u/studentLife@SIM/clubs&councils@SIM">
                                <IonRow className="ion-justify-content-center">
                                    <FontAwesomeIcon className="studentLifeMain-icons" icon={faSwimmer} size="2x"/>
                                </IonRow>
                                <IonRow className="ion-justify-content-center">
                                    <IonText className="studentLifeMain-text">Clubs & Councils@SIM</IonText>
                                </IonRow>
                            </IonRouterLink>
                        </IonCol>
                        <IonCol sizeSm="6" className="studentLifeMain-col">
                            <IonRouterLink href="/u/studentLife@SIM/studentCare">
                                <IonRow className="ion-justify-content-center">
                                    <FontAwesomeIcon className="studentLifeMain-icons" icon={faHandHoldingHeart} size="2x"/>
                                </IonRow>
                                <IonRow className="ion-justify-content-center">
                                    <IonText className="studentLifeMain-text">Student Care</IonText>
                                </IonRow>
                            </IonRouterLink>
                        </IonCol>
                    </IonRow>

                    <IonRow className="ion-justify-content-around studentLifeMain-row">
                        <IonCol sizeSm="6" className="studentLifeMain-col">
                            <IonRouterLink href="/u/studentLife@SIM/scholarships">
                                <IonRow className="ion-justify-content-center">
                                    <FontAwesomeIcon className="studentLifeMain-icons" icon={faBookReader} size="2x"/>
                                </IonRow>
                                <IonRow className="ion-justify-content-center">
                                    <IonText className="studentLifeMain-text">Scholarships</IonText>
                                </IonRow>
                            </IonRouterLink>
                        </IonCol>
                        <IonCol sizeSm="6" className="studentLifeMain-col">
                            <IonRouterLink href="/u/studentLife@SIM/bursary">
                                <IonRow className="ion-justify-content-center">
                                    <FontAwesomeIcon className="studentLifeMain-icons" icon={faHandsHelping} size="2x"/>
                                </IonRow>
                                <IonRow className="ion-justify-content-center">
                                    <IonText className="studentLifeMain-text">Bursary</IonText>
                                </IonRow>
                            </IonRouterLink>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default StudentLifeMain;
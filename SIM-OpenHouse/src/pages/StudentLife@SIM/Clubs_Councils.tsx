import { IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRouterLink, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import '../../css/Global.css';
import '../../css/StudentLife.css';
import TopNav from '../../components/TopNav';
import arts_culture from '../../img/studentLife@SIM/arts_culture.png';
import international_students_clubs from '../../img/studentLife@SIM/internationalStudentsClubs.png';
import special_interest_clubs from '../../img/studentLife@SIM/specialInterestClubs.png';
import studentCouncils from '../../img/studentLife@SIM/studentCouncils.png';
import sports_fitness from '../../img/studentLife@SIM/sports&fitness.png';

const Clubs_Councils: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Clubs & Councils@SIM" route="/u/studentLife@SIM" backarrow={ true } hamburger={ true }/>
            </IonHeader>

            <IonContent fullscreen id="studentLifeMain-content">
                <IonGrid id="studentLifeMain-grid">
                    <IonRow className="ion-justify-content-around studentLifeMain-row">
                        <IonCol sizeSm="6" className="studentLifeMain-col">
                            <IonRouterLink routerLink="/u/studentLife@SIM/clubs&councils@SIM">
                                <IonRow className="ion-justify-content-center">
                                    <IonImg src={arts_culture} />
                                </IonRow>
                                <IonRow className="ion-justify-content-center">
                                    <IonText className="studentLifeMain-text">Arts & Culture</IonText>
                                </IonRow>
                            </IonRouterLink>
                        </IonCol>
                        <IonCol sizeSm="6" className="studentLifeMain-col">
                            <IonRouterLink routerLink="/u/studentLife@SIM/studentCare">
                                <IonRow className="ion-justify-content-center">
                                    <IonImg src={international_students_clubs} />
                                </IonRow>
                                <IonRow className="ion-justify-content-center">
                                    <IonText className="studentLifeMain-text">International Students Clubs</IonText>
                                </IonRow>
                            </IonRouterLink>
                        </IonCol>
                    </IonRow>

                    <IonRow className="ion-justify-content-around studentLifeMain-row">
                        <IonCol sizeSm="6">
                            <IonRouterLink routerLink="/u/studentLife@SIM/scholarships">
                                <IonRow className="ion-justify-content-center">
                                    <IonImg src={studentCouncils} />
                                </IonRow>
                                <IonRow className="ion-justify-content-center">
                                    <IonText className="studentLifeMain-text">Student Councils</IonText>
                                </IonRow>
                            </IonRouterLink>
                        </IonCol>
                        <IonCol sizeSm="6">
                            <IonRouterLink routerLink="/u/studentLife@SIM/bursary">
                                <IonRow className="ion-justify-content-center">
                                    <IonImg src={special_interest_clubs} />
                                </IonRow>
                                <IonRow className="ion-justify-content-center">
                                    <IonText className="studentLifeMain-text">Special Interest Clubs</IonText>
                                </IonRow>
                            </IonRouterLink>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-justify-content-around studentLifeMain-row">
                        <IonCol sizeSm="6">
                            <IonRouterLink routerLink="/u/studentLife@SIM/scholarships">
                                <IonRow className="ion-justify-content-center">
                                    <IonImg src={sports_fitness} />
                                </IonRow>
                                <IonRow className="ion-justify-content-center">
                                    <IonText className="studentLifeMain-text">Sports & Fitness</IonText>
                                </IonRow>
                            </IonRouterLink>
                        </IonCol>
                        <IonCol sizeSm="6"></IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Clubs_Councils;
import { IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRouterLink, IonRow, IonText } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import '../../css/Global.css';
import '../../css/StudentLife.css';
import TopNav from '../../components/TopNav';
import arts_culture from '../../img/studentLife@SIM/arts_culture.png';
import international_students_clubs from '../../img/studentLife@SIM/internationalStudentsClubs.png';
import special_interest_clubs from '../../img/studentLife@SIM/specialInterestClubs.png';
import studentCouncils from '../../img/studentLife@SIM/studentCouncils.png';
import sports_fitness from '../../img/studentLife@SIM/sports&fitness.png';
import { db } from '../../firebase';

const Clubs_Councils: React.FC<RouteComponentProps> = () => {

    const [clubCouncils, setClubCouncils] = useState([])

    useEffect(() => {
        const clubCouncils: any = []
        db.collection('ClubsAndCouncils').get().then((snapshot) => {
            snapshot.forEach((doc) => {
                const data = doc.data()
                clubCouncils.push(data)
            })
            setClubCouncils(clubCouncils)
        })
    }, [])

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Clubs & Councils@SIM" route="/u/studentLife@SIM" backarrow={true} hamburger={true} />
            </IonHeader>

            <IonContent fullscreen className="studentLife-content">
                <IonGrid id="clubsCouncils-grid">
                    <IonRow className="ion-justify-content-around clubsCouncils-row">
                        <IonCol sizeSm="6" className="clubsCouncils-col">
                            <IonRouterLink routerLink="/u/studentLife@SIM/clubs&councils@SIM/arts&culture">
                                <IonRow className="ion-justify-content-center">
                                    <IonImg src={arts_culture} className="clubsCouncils-img" />
                                </IonRow>
                                <IonRow className="ion-justify-content-center">
                                    <IonText className="clubsCouncils-text">Arts & Culture</IonText>
                                </IonRow>
                            </IonRouterLink>
                        </IonCol>
                        <IonCol sizeSm="6" className="clubsCouncils-col">
                            <IonRouterLink routerLink="/u/studentLife@SIM/clubs&councils@SIM/internationalStudentsClubs">
                                <IonRow className="ion-justify-content-center">
                                    <IonImg src={international_students_clubs} className="clubsCouncils-img" />
                                </IonRow>
                                <IonRow className="ion-justify-content-center">
                                    <IonText className="clubsCouncils-text">International Students Clubs</IonText>
                                </IonRow>
                            </IonRouterLink>
                        </IonCol>
                    </IonRow>

                    <IonRow className="ion-justify-content-around clubsCouncils-row">
                        <IonCol sizeSm="6" className="clubsCouncils-col">
                            <IonRouterLink routerLink="/u/studentLife@SIM/clubs&councils@SIM/studentCouncils">
                                <IonRow className="ion-justify-content-center">
                                    <IonImg src={studentCouncils} className="clubsCouncils-img" />
                                </IonRow>
                                <IonRow className="ion-justify-content-center">
                                    <IonText className="clubsCouncils-text">Student Councils</IonText>
                                </IonRow>
                            </IonRouterLink>
                        </IonCol>
                        <IonCol sizeSm="6" className="clubsCouncils-col">
                            <IonRouterLink routerLink="/u/studentLife@SIM/clubs&councils@SIM/specialInterestClubs">
                                <IonRow className="ion-justify-content-center">
                                    <IonImg src={special_interest_clubs} className="clubsCouncils-img" />
                                </IonRow>
                                <IonRow className="ion-justify-content-center">
                                    <IonText className="clubsCouncils-text">Special Interest Clubs</IonText>
                                </IonRow>
                            </IonRouterLink>
                        </IonCol>
                    </IonRow>

                    <IonRow className="ion-justify-content-around clubsCouncils-row">
                        <IonCol sizeSm="6" className="clubsCouncils-col">
                            <IonRouterLink routerLink="/u/studentLife@SIM/clubs&councils@SIM/sports&fitness">
                                <IonRow className="ion-justify-content-center">
                                    <IonImg src={sports_fitness} className="clubsCouncils-img" />
                                </IonRow>
                                <IonRow className="ion-justify-content-center">
                                    <IonText className="clubsCouncils-text">Sports & Fitness</IonText>
                                </IonRow>
                            </IonRouterLink>
                        </IonCol>
                        <IonCol sizeSm="6" className="clubsCouncils-col"></IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Clubs_Councils;
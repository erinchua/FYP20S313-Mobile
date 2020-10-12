import { IonCol, IonContent, IonGrid, IonHeader, IonList, IonPage, IonRow, IonText, IonThumbnail } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';

import '../../css/Global.css';
import '../../css/StudentLife.css';
import TopNav from '../../components/TopNav';
import { db } from '../../firebase';

interface Clubs_Councils_Details_Props extends RouteComponentProps<{
    id: string;
}> { }

const Clubs_Councils_Details: React.FC<Clubs_Councils_Details_Props> = ({ match }) => {

    const [clubName, setClubName] = useState([
        'Arts & Culture',
        'International Students Clubs',
        'Student Councils',
        'Special Interest Clubs',
        'Sports & Fitness'
    ]);

    const [clubCouncils, setClubCouncils] = useState([])

    const artCulture = clubCouncils.filter((club: any) => {
        return club.categoryType == 'Arts & Culture'
    })
    const internationalStud = clubCouncils.filter((club: any) => {
        return club.categoryType == 'InternationalStudent'
    })
    const studCouncil = clubCouncils.filter((club: any) => {
        return club.categoryType == 'StudentCouncil'
    })
    const specialInterest = clubCouncils.filter((club: any) => {
        return club.categoryType == 'SpecialInterest'
    })
    const sportFitness = clubCouncils.filter((club: any) => {
        return club.categoryType == 'SportsFitness'
    })

    useEffect(() => {
        fetchData()
    },
        [])
    const fetchData = async () => {

        const clubCouncils: any = []
        await db.collection('ClubsAndCouncils').get().then((snapshot) => {
            snapshot.forEach((doc) => {
                const data = doc.data()
                clubCouncils.push(data)
            })
            setClubCouncils(clubCouncils)
        })

    }


    return (
        <IonPage>
            <IonHeader>
                {match.params.id === 'arts&culture' ?
                    <TopNav title={clubName[0]} route="/u/studentLife@SIM/clubs&councils@SIM" backarrow={true} hamburger={true} /> : ''
                }
                {match.params.id === 'internationalStudentsClubs' ?
                    <TopNav title={clubName[1]} route="/u/studentLife@SIM/clubs&councils@SIM" backarrow={true} hamburger={true} /> : ''
                }
                {match.params.id === 'studentCouncils' ?
                    <TopNav title={clubName[2]} route="/u/studentLife@SIM/clubs&councils@SIM" backarrow={true} hamburger={true} /> : ''
                }
                {match.params.id === 'specialInterestClubs' ?
                    <TopNav title={clubName[3]} route="/u/studentLife@SIM/clubs&councils@SIM" backarrow={true} hamburger={true} /> : ''
                }
                {match.params.id === 'sports&fitness' ?
                    <TopNav title={clubName[4]} route="/u/studentLife@SIM/clubs&councils@SIM" backarrow={true} hamburger={true} /> : ''
                }
            </IonHeader>

            <IonContent fullscreen className="studentLife-content">

                {/* Arts & Culture */}
                {match.params.id === 'arts&culture' ?
                    <>
                        {artCulture.map((club: any) => {
                            return (
                                <div>
                                    <IonList className="clubsCouncils-list">
                                        <IonGrid className="clubsCouncils-details-grid">
                                            <IonRow>
                                                <IonCol size="4" className="ion-align-self-center">
                                                    <IonThumbnail className="clubsCouncils-thumbnail">
                                                        <img src={club.clubsAndCouncilsLogo} alt={club.clubsAndCouncilTitle} />
                                                    </IonThumbnail>
                                                </IonCol>
                                                <IonCol size="8" className="ion-align-self-center">
                                                    <IonRow>
                                                        <IonText className="clubsCouncils-details-heading">{club.clubsAndCouncilTitle}</IonText>
                                                    </IonRow>
                                                    <IonRow>
                                                        <IonText className="clubsCouncils-details-description">{club.clubsAndCouncilDescription}</IonText>
                                                    </IonRow>
                                                </IonCol>
                                            </IonRow>
                                        </IonGrid>
                                    </IonList>
                                </div>
                            )
                        })}

                    </> : ''
                }

                {/* International Students Clubs */}
                {match.params.id === 'internationalStudentsClubs' ?
                    <>
                        {internationalStud.map((club: any) => {
                            return (
                                <div>
                                    <IonList className="clubsCouncils-list">
                                        <IonGrid className="clubsCouncils-details-grid">
                                            <IonRow>
                                                <IonCol size="4" className="ion-align-self-center">
                                                    <IonThumbnail className="clubsCouncils-thumbnail">
                                                        <img src={club.clubsAndCouncilsLogo} alt={club.clubsAndCouncilTitle} />
                                                    </IonThumbnail>
                                                </IonCol>
                                                <IonCol size="8" className="ion-align-self-center">
                                                    <IonRow>
                                                        <IonText className="clubsCouncils-details-heading">{club.clubsAndCouncilTitle}</IonText>
                                                    </IonRow>
                                                    <IonRow>
                                                        <IonText className="clubsCouncils-details-description">{club.clubsAndCouncilDescription}</IonText>
                                                    </IonRow>
                                                </IonCol>
                                            </IonRow>
                                        </IonGrid>
                                    </IonList>
                                </div>
                            )
                        })}
                    </> : ''
                }

                {/* Student Councils */}
                {match.params.id === 'studentCouncils' ?
                    <>
                        {studCouncil.map((club: any) => {
                            return (
                                <div>
                                    <IonList className="clubsCouncils-list">
                                        <IonGrid className="clubsCouncils-details-grid">
                                            <IonRow>
                                                <IonCol size="4" className="ion-align-self-center">
                                                    <IonThumbnail className="clubsCouncils-thumbnail">
                                                        <img src={club.clubsAndCouncilsLogo} alt={club.clubsAndCouncilTitle} />
                                                    </IonThumbnail>
                                                </IonCol>
                                                <IonCol size="8" className="ion-align-self-center">
                                                    <IonRow>
                                                        <IonText className="clubsCouncils-details-heading">{club.clubsAndCouncilTitle}</IonText>
                                                    </IonRow>
                                                    <IonRow>
                                                        <IonText className="clubsCouncils-details-description">{club.clubsAndCouncilDescription}</IonText>
                                                    </IonRow>
                                                </IonCol>
                                            </IonRow>
                                        </IonGrid>
                                    </IonList>
                                </div>
                            )
                        })}
                    </> : ''
                }

                {/* Special Interest Clubs */}
                {match.params.id === 'specialInterestClubs' ?
                    <>
                        {specialInterest.map((club: any) => {
                            return (
                                <div>
                                    <IonList className="clubsCouncils-list">
                                        <IonGrid className="clubsCouncils-details-grid">
                                            <IonRow>
                                                <IonCol size="4" className="ion-align-self-center">
                                                    <IonThumbnail className="clubsCouncils-thumbnail">
                                                        <img src={club.clubsAndCouncilsLogo} alt={club.clubsAndCouncilTitle} />
                                                    </IonThumbnail>
                                                </IonCol>
                                                <IonCol size="8" className="ion-align-self-center">
                                                    <IonRow>
                                                        <IonText className="clubsCouncils-details-heading">{club.clubsAndCouncilTitle}</IonText>
                                                    </IonRow>
                                                    <IonRow>
                                                        <IonText className="clubsCouncils-details-description">{club.clubsAndCouncilDescription}</IonText>
                                                    </IonRow>
                                                </IonCol>
                                            </IonRow>
                                        </IonGrid>
                                    </IonList>
                                </div>
                            )
                        })}

                    </> : ''
                }

                {/* Sports & Fitness */}
                {match.params.id === 'sports&fitness' ?
                    <>
                        {sportFitness.map((club: any) => {
                            return (
                                <div>
                                    <IonList className="clubsCouncils-list">
                                        <IonGrid className="clubsCouncils-details-grid">
                                            <IonRow>
                                                <IonCol size="4" className="ion-align-self-center">
                                                    <IonThumbnail className="clubsCouncils-thumbnail">
                                                        <img src={club.clubsAndCouncilsLogo} alt={club.clubsAndCouncilTitle} />
                                                    </IonThumbnail>
                                                </IonCol>
                                                <IonCol size="8" className="ion-align-self-center">
                                                    <IonRow>
                                                        <IonText className="clubsCouncils-details-heading">{club.clubsAndCouncilTitle}</IonText>
                                                    </IonRow>
                                                    <IonRow>
                                                        <IonText className="clubsCouncils-details-description">{club.clubsAndCouncilDescription}</IonText>
                                                    </IonRow>
                                                </IonCol>
                                            </IonRow>
                                        </IonGrid>
                                    </IonList>
                                </div>
                            )
                        })}

                    </> : ''
                }
            </IonContent>
        </IonPage>
    );
};

export default Clubs_Councils_Details;
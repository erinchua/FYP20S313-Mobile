import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonPage, IonRow, IonSlide, IonSlides, IonText, IonTitle } from '@ionic/react';
import React, { useRef, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import '../../css/Global.css';
import '../../css/CourseComparator.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Grenoble from '../../img/study@SIM/GrenobleEcoleDeManagement.png';
import LaTrobe from '../../img/study@SIM/LaTrobeUniversity.png';
import RMIT from '../../img/study@SIM/RMITUniversity.png';
import SIMGE from '../../img/study@SIM/SimGE.png';
import Buffalo from '../../img/study@SIM/UniversityAtBuffalo.png';
import Birmingham from '../../img/study@SIM/UniversityOfBirmingham.png';
import London from '../../img/study@SIM/UniversityOfLondon.png';
import Manchester from '../../img/study@SIM/UniversityOfManchester.png';
import Stirling from '../../img/study@SIM/UniversityOfStirling.png';
import Sydney from '../../img/study@SIM/UniversityOfSydney.png';
import Warwick from '../../img/study@SIM/UniversityOfWarwick.png';
import Wollongong from '../../img/study@SIM/UniversityOfWollongong.png';

import TopNav from '../../components/TopNav';
import Menu from '../../components/Menu';


interface CourseComparator_Props extends RouteComponentProps<{
    discipline: string;
    compareCourse: string;
}> { }

const CourseComparator: React.FC<CourseComparator_Props> = ({ match }) => {

    return (
        <IonPage>
            <IonHeader>
                {match.params.discipline === 'artSocialSciences' ?
                    <TopNav title="Compare Programmes" route='/u/study@SIMMain/artSocialSciences' backarrow={ true } hamburger = { true }/>
                    :''
                }

                {match.params.discipline === 'business' ?
                    <TopNav title="Compare Programmes" route='/u/study@SIMMain/business' backarrow={ true } hamburger = { true }/>
                    :''
                }

                {match.params.discipline === 'itComputerScience' ?
                    <TopNav title="Compare Programmes" route='/u/study@SIMMain/itComputerScience' backarrow={ true } hamburger = { true }/>
                    :''
                }

                {match.params.discipline === 'nursing' ?
                    <TopNav title="Compare Programmes" route='/u/study@SIMMain/nursing' backarrow={ true } hamburger = { true }/>
                    :''
                }

                {match.params.discipline === 'speciality' ?
                    <TopNav title="Compare Programmes" route='/u/study@SIMMain/speciality' backarrow={ true } hamburger = { true }/>
                    :''
                }
            </IonHeader>

            <IonContent fullscreen={true}>
                {match.params.discipline === 'artSocialSciences' ?
                    <IonGrid id="courseComparatorGrid">
                        <IonRow className="courseComparatorRow" class="ion-align-items-center" > 
                            <div className="horizontalScroll">  
                                {/* Title Col */}
                                <IonCol size="4" sizeSm="4" className="courseComparatorTitleCol" class="ion-text-center">
                                    <IonTitle className="courseComparatorTitle">
                                        <div className="ion-text-wrap">Programme</div>
                                    </IonTitle>
                                </IonCol>
                                
                                {/* Programmes added */}
                                {/* Prog Col */}
                                <IonCol size="4" sizeSm="4" className="courseComparatorProgCol">
                                    {/* Uni Img */}
                                    <IonRow class="ion-align-items-center">
                                        <IonCol class="ion-text-center">
                                            <img src={Buffalo} className="courseComparatorUniImg"></img>
                                        </IonCol>
                                    </IonRow>

                                    {/* Programme Name */}
                                    <IonRow class="ion-align-items-center">
                                        <IonCol class="ion-text-center">
                                            <IonText className="courseComparatorProgName">
                                                <div className="ion-text-wrap">Bachelor of Arts (Communication & Economics)</div>
                                            </IonText>
                                        </IonCol>
                                    </IonRow>
                                </IonCol>

                                {/* Prog Col */}
                                <IonCol size="4" sizeSm="4" className="courseComparatorProgCol">
                                    {/* Uni Img */}
                                    <IonRow class="ion-align-items-center">
                                        <IonCol class="ion-text-center">
                                            <img src={Buffalo} className="courseComparatorUniImg"></img>
                                        </IonCol>
                                    </IonRow>

                                    {/* Programme Name */}
                                    <IonRow class="ion-align-items-center">
                                        <IonCol class="ion-text-center">
                                            <IonText className="courseComparatorProgName">
                                                <div className="ion-text-wrap">Bachelor of Arts (Communication & Economics)</div>
                                            </IonText>
                                        </IonCol>
                                    </IonRow>
                                </IonCol>

                                {/* Prog Col */}
                                <IonCol size="4" sizeSm="4" className="courseComparatorProgCol">
                                    {/* Uni Img */}
                                    <IonRow class="ion-align-items-center">
                                        <IonCol class="ion-text-center">
                                            <img src={Buffalo} className="courseComparatorUniImg"></img>
                                        </IonCol>
                                    </IonRow>

                                    {/* Programme Name */}
                                    <IonRow class="ion-align-items-center">
                                        <IonCol class="ion-text-center">
                                            <IonText className="courseComparatorProgName">
                                                <div className="ion-text-wrap">Bachelor of Arts (Communication & Economics)</div>
                                            </IonText>
                                        </IonCol>
                                    </IonRow>
                                </IonCol>                            
                            </div>

                        </IonRow>

                    </IonGrid>

                    :''
                }


            </IonContent>
        </IonPage>
    );
};

export default CourseComparator;
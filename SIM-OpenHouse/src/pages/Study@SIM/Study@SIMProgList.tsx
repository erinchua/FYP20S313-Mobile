import { IonBadge, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useRef, useState } from 'react';

import '../../css/Global.css';
import '../../css/Study@SIMProgList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
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


const StudySIMProgList: React.FC = () => {
    const [progCompareNo, setProgCompareNo] = useState(0);

    const countCompareCourse = () => {
        console.log("Before: " + progCompareNo);
    };

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Study@SIM" route='/u/home' backarrow={ true } hamburger = { true }/>

                <IonToolbar id="studySIMProgListHeaderToolbar">
                    <IonGrid style={{padding: "0"}}>
                        <IonRow id="studySIMProgListHeaderRow" class="ion-align-items-center">
                            <IonCol size="6" sizeSm="6" class="ion-text-left" className="studySIMProgListCol" style={{paddingLeft: "3%"}}>
                                <IonTitle className="studyProgListTitle">
                                    <div className="ion-text-wrap">Programme Discipline Here</div>
                                </IonTitle>
                            </IonCol>

                            <IonCol size="4" sizeSm="4" class="ion-text-right" className="studySIMProgListCol">
                                <IonButton id="compareBtn" fill="clear">
                                    <IonLabel className="compareLabel">Compare</IonLabel>
                                    <IonBadge id="compareBadge">{progCompareNo}</IonBadge>
                                </IonButton>
                            </IonCol>

                            <IonCol size="2" sizeSm="2" class="ion-text-center" className="studySIMProgListCol">
                                <IonButton id="filterBtn" fill="clear">
                                    <FontAwesomeIcon className="filterIcon" size="lg" icon={faFilter} />
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonHeader>

            

            <IonContent fullscreen={true} id="studySIMProgListContent">
                <IonGrid id="studySIMProgListGrid">
                    {/* Programme List */}
                    <IonRow className="studySIMProgListRow" class="ion-align-items-center">
                        <IonCol size="4" sizeSm="4" class="ion-text-center">
                            <img src={Grenoble} id="studyProgUniImg"></img>
                        </IonCol>

                        <IonCol size="8" sizeSm="8" className="studySIMProgListColDetails" class="ion-text-left">
                            {/* Programme Title */}
                            <IonRow className="progCourseRow">
                                <IonTitle id="progCourseTitle">
                                    <div className="ion-text-wrap">MSc Management in International Business</div>
                                </IonTitle>
                            </IonRow>

                            {/* Awarding Uni */}
                            <IonRow className="progCourseRow">
                                <IonCol size="4" sizeSm="4" class="ion-text-left" className="progCourseAwardingUniCol">
                                    <IonLabel id="progCourseAwardingUniLabel">
                                        <div className="ion-text-wrap">Awarded by:</div>
                                    </IonLabel>
                                </IonCol>

                                <IonCol size="8" sizeSm="8" class="ion-text-left" className="progCourseAwardingUniCol">
                                    <IonLabel id="progCourseAwardingUniName">
                                        <div className="ion-text-wrap">Grenoble Ecole de Management</div>
                                    </IonLabel>
                                </IonCol>
                            </IonRow>

                            <IonRow className="progCompareBtnRow">
                                <IonCol size="12" sizeSm="12" class="ion-text-right" className="progCompareBtnCol">
                                    <IonButton id="progCompareBtn" size="small" type="submit" onClick={countCompareCourse}>Compare</IonButton>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                    

                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default StudySIMProgList;
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonPage, IonRow, IonTitle } from '@ionic/react';
import React, { useRef } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import '../../css/Global.css';
import '../../css/Study@SIMProgInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { addCircle, removeCircle } from 'ionicons/icons';

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

interface StudySIMProgInfo_Props extends RouteComponentProps<{
    category: string
    discipline: string;
    id: string;
}> { }

const StudySIMProgInfo: React.FC<StudySIMProgInfo_Props> = ({ match }) => {
    { console.log("ProgInfo has entered!") }


    /* Programme Overview Toggle */
    const info1 = useRef<HTMLIonRowElement>(null);
    const showIcon1 = useRef<HTMLIonIconElement>(null);

    const displayInfoCol1 = () => {
        info1.current!.hidden = !info1.current!.hidden;
        if (showIcon1.current!.icon === addCircle)
            showIcon1.current!.icon = removeCircle;
        else
            showIcon1.current!.icon = addCircle;
    };

    /* Application Period Toggle */
    const info2 = useRef<HTMLIonRowElement>(null);
    const showIcon2 = useRef<HTMLIonIconElement>(null);

    const displayInfoCol2 = () => {
        info2.current!.hidden = !info2.current!.hidden;
        if (showIcon2.current!.icon === addCircle)
            showIcon2.current!.icon = removeCircle;
        else
            showIcon2.current!.icon = addCircle;
    };

    /* Programme Structure Toggle */
    const info3 = useRef<HTMLIonRowElement>(null);
    const showIcon3 = useRef<HTMLIonIconElement>(null);

    const displayInfoCol3 = () => {
        info3.current!.hidden = !info3.current!.hidden;
        if (showIcon3.current!.icon === addCircle)
            showIcon3.current!.icon = removeCircle;
        else
            showIcon3.current!.icon = addCircle;
    };

    /* Overseas Opportunity Toggle */
    const info4 = useRef<HTMLIonRowElement>(null);
    const showIcon4 = useRef<HTMLIonIconElement>(null);

    const displayInfoCol4 = () => {
        info4.current!.hidden = !info4.current!.hidden;
        if (showIcon4.current!.icon === addCircle)
            showIcon4.current!.icon = removeCircle;
        else
            showIcon4.current!.icon = addCircle;
    };

    /* Intake Months Toggle */
    const info5 = useRef<HTMLIonRowElement>(null);
    const showIcon5 = useRef<HTMLIonIconElement>(null);

    const displayInfoCol5 = () => {
        info5.current!.hidden = !info5.current!.hidden;
        if (showIcon5.current!.icon === addCircle)
            showIcon5.current!.icon = removeCircle;
        else
            showIcon5.current!.icon = addCircle;
    };

    /* Duration Toggle */
    const info6 = useRef<HTMLIonRowElement>(null);
    const showIcon6 = useRef<HTMLIonIconElement>(null);

    const displayInfoCol6 = () => {
        info6.current!.hidden = !info6.current!.hidden;
        if (showIcon6.current!.icon === addCircle)
            showIcon6.current!.icon = removeCircle;
        else
            showIcon6.current!.icon = addCircle;
    };

    /* Mode of Study Toggle */
    const info7 = useRef<HTMLIonRowElement>(null);
    const showIcon7 = useRef<HTMLIonIconElement>(null);

    const displayInfoCol7 = () => {
        info7.current!.hidden = !info7.current!.hidden;
        if (showIcon7.current!.icon === addCircle)
            showIcon7.current!.icon = removeCircle;
        else
            showIcon7.current!.icon = addCircle;
    };


    return (
        <IonPage>
            <IonHeader>
                {match.params.discipline === 'artSocialSciences' ?
                    <TopNav title="Programme Info" route='/u/study@SIMMain/artSocialSciences' backarrow={true} hamburger={true} />
                    : ''
                }

                {match.params.discipline === 'business' ?
                    <TopNav title="Programme Info" route='/u/study@SIMMain/business' backarrow={true} hamburger={true} />
                    : ''
                }

                {match.params.discipline === 'itComputerScience' ?
                    <TopNav title="Programme Info" route='/u/study@SIMMain/itComputerScience' backarrow={true} hamburger={true} />
                    : ''
                }

                {match.params.discipline === 'nursing' ?
                    <TopNav title="Programme Info" route='/u/study@SIMMain/nursing' backarrow={true} hamburger={true} />
                    : ''
                }

                {match.params.discipline === 'speciality' ?
                    <TopNav title="Programme Info" route='/u/study@SIMMain/speciality' backarrow={true} hamburger={true} />
                    : ''
                }
            </IonHeader>

            <IonContent>
                {match.params.id === 'study@SIMProgInfo' ?
                    <IonGrid id="studySIMProgInfoGrid">
                        <IonRow className="studySIMProgInfoRow" class="ion-align-items-center">
                            <IonCol size="3" sizeSm="3" class="ion-text-center">
                                <img src={Grenoble} className="studyProgInfoUniImg"></img>
                            </IonCol>

                            <IonCol size="7" sizeSm="7" className="studySIMProgInfoHeaderCol" class="ion-text-left">
                                {/* Programme Title */}
                                <IonRow className="progCourseInfoRow">
                                    <IonTitle className="progCourseInfoTitle">
                                        <div className="ion-text-wrap">MSc Management in International Business</div>
                                    </IonTitle>
                                </IonRow>

                                {/* Awarding Uni */}
                                <IonRow className="progCourseInfoRow">
                                    <IonCol size="4" sizeSm="4" class="ion-text-left" className="progCourseInfoAwardingUniCol">
                                        <IonLabel className="progCourseInfoAwardingUniLabel">
                                            <div className="ion-text-wrap">Awarded by:</div>
                                        </IonLabel>
                                    </IonCol>

                                    <IonCol size="8" sizeSm="8" class="ion-text-left" className="progCourseInfoAwardingUniCol">
                                        <IonLabel className="progCourseInfoAwardingUniName">
                                            <div className="ion-text-wrap">Grenoble Ecole de Management</div>
                                        </IonLabel>
                                    </IonCol>
                                </IonRow>
                            </IonCol>

                            {/* Download Btn */}
                            <IonCol size="2" sizeSm="2" class="ion-text-center">
                                <IonButton type="submit" fill="clear" className="dlProgInfoBtn">
                                    <FontAwesomeIcon size="lg" icon={faDownload} />
                                </IonButton>
                            </IonCol>
                        </IonRow>

                        {/* Programme Info Accordion */}
                        {/* Programme Overview */}
                        <IonRow className="progCourseInfoHeaderRow">
                            <IonCol className="progCourseInfoHeaderCol">
                                <IonRow className="progCourseInfoHeaderInnerRow">
                                    <IonCol size="10" sizeSm="10" style={{ padding: "0" }}>
                                        <IonTitle className="progCourseInfoHeader">
                                            <div className="ion-text-wrap">
                                                Programme Overview
                                        </div>
                                        </IonTitle>
                                    </IonCol>

                                    <IonCol size="2" sizeSm="2" className="toggleProgCourseInfoBtnCol">
                                        <IonButton className="toggleProgCourseInfoBtn" onClick={displayInfoCol1} fill="clear" size="default">
                                            <IonIcon slot="icon-only" ref={showIcon1} icon={addCircle} />
                                        </IonButton>
                                    </IonCol>
                                </IonRow>

                                <IonRow>
                                    <IonCol sizeSm="12" className="progCourseInfoDetails" ref={info1} hidden={true}>
                                        <div className="ion-text-wrap">
                                            <p>Programme Overview Answer</p>
                                        </div>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>

                        {/* Application Period */}
                        <IonRow className="progCourseInfoHeaderRow">
                            <IonCol className="progCourseInfoHeaderCol">
                                <IonRow className="progCourseInfoHeaderInnerRow">
                                    <IonCol size="10" sizeSm="10" style={{ padding: "0" }}>
                                        <IonTitle className="progCourseInfoHeader">
                                            <div className="ion-text-wrap">
                                                Application Period
                                        </div>
                                        </IonTitle>
                                    </IonCol>

                                    <IonCol size="2" sizeSm="2" className="toggleProgCourseInfoBtnCol">
                                        <IonButton className="toggleProgCourseInfoBtn" onClick={displayInfoCol2} fill="clear" size="default">
                                            <IonIcon slot="icon-only" ref={showIcon2} icon={addCircle} />
                                        </IonButton>
                                    </IonCol>
                                </IonRow>

                                <IonRow>
                                    <IonCol sizeSm="12" className="progCourseInfoDetails" ref={info2} hidden={true}>
                                        <div className="ion-text-wrap">
                                            <p>Application Period Answer</p>
                                        </div>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>

                        {/* Programme Structure */}
                        <IonRow className="progCourseInfoHeaderRow">
                            <IonCol className="progCourseInfoHeaderCol">
                                <IonRow className="progCourseInfoHeaderInnerRow">
                                    <IonCol size="10" sizeSm="10" style={{ padding: "0" }}>
                                        <IonTitle className="progCourseInfoHeader">
                                            <div className="ion-text-wrap">
                                                Programme Structure
                                        </div>
                                        </IonTitle>
                                    </IonCol>

                                    <IonCol size="2" sizeSm="2" className="toggleProgCourseInfoBtnCol">
                                        <IonButton className="toggleProgCourseInfoBtn" onClick={displayInfoCol3} fill="clear" size="default">
                                            <IonIcon slot="icon-only" ref={showIcon3} icon={addCircle} />
                                        </IonButton>
                                    </IonCol>
                                </IonRow>

                                <IonRow>
                                    <IonCol sizeSm="12" className="progCourseInfoDetails" ref={info3} hidden={true}>
                                        <div className="ion-text-wrap">
                                            <p>Programme Structure Answer</p>
                                        </div>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>

                        {/* Overseas Opportunity */}
                        <IonRow className="progCourseInfoHeaderRow">
                            <IonCol className="progCourseInfoHeaderCol">
                                <IonRow className="progCourseInfoHeaderInnerRow">
                                    <IonCol size="10" sizeSm="10" style={{ padding: "0" }}>
                                        <IonTitle className="progCourseInfoHeader">
                                            <div className="ion-text-wrap">
                                                Overseas Opportunity
                                        </div>
                                        </IonTitle>
                                    </IonCol>

                                    <IonCol size="2" sizeSm="2" className="toggleProgCourseInfoBtnCol">
                                        <IonButton className="toggleProgCourseInfoBtn" onClick={displayInfoCol4} fill="clear" size="default">
                                            <IonIcon slot="icon-only" ref={showIcon4} icon={addCircle} />
                                        </IonButton>
                                    </IonCol>
                                </IonRow>

                                <IonRow>
                                    <IonCol sizeSm="12" className="progCourseInfoDetails" ref={info4} hidden={true}>
                                        <div className="ion-text-wrap">
                                            <p>Overseas Opportunity Answer</p>
                                        </div>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>

                        {/* Intake Months */}
                        <IonRow className="progCourseInfoHeaderRow">
                            <IonCol className="progCourseInfoHeaderCol">
                                <IonRow className="progCourseInfoHeaderInnerRow">
                                    <IonCol size="10" sizeSm="10" style={{ padding: "0" }}>
                                        <IonTitle className="progCourseInfoHeader">
                                            <div className="ion-text-wrap">
                                                Intake Month(s)
                                        </div>
                                        </IonTitle>
                                    </IonCol>

                                    <IonCol size="2" sizeSm="2" className="toggleProgCourseInfoBtnCol">
                                        <IonButton className="toggleProgCourseInfoBtn" onClick={displayInfoCol5} fill="clear" size="default">
                                            <IonIcon slot="icon-only" ref={showIcon5} icon={addCircle} />
                                        </IonButton>
                                    </IonCol>
                                </IonRow>

                                <IonRow>
                                    <IonCol sizeSm="12" className="progCourseInfoDetails" ref={info5} hidden={true}>
                                        <div className="ion-text-wrap">
                                            <p>Intake Month(s) Answer</p>
                                        </div>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>

                        {/* Duration */}
                        <IonRow className="progCourseInfoHeaderRow">
                            <IonCol className="progCourseInfoHeaderCol">
                                <IonRow className="progCourseInfoHeaderInnerRow">
                                    <IonCol size="10" sizeSm="10" style={{ padding: "0" }}>
                                        <IonTitle className="progCourseInfoHeader">
                                            <div className="ion-text-wrap">
                                                Duration
                                        </div>
                                        </IonTitle>
                                    </IonCol>

                                    <IonCol size="2" sizeSm="2" className="toggleProgCourseInfoBtnCol">
                                        <IonButton className="toggleProgCourseInfoBtn" onClick={displayInfoCol6} fill="clear" size="default">
                                            <IonIcon slot="icon-only" ref={showIcon6} icon={addCircle} />
                                        </IonButton>
                                    </IonCol>
                                </IonRow>

                                <IonRow>
                                    <IonCol sizeSm="12" className="progCourseInfoDetails" ref={info6} hidden={true}>
                                        <div className="ion-text-wrap">
                                            <p>Duration Answer</p>
                                        </div>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>

                        {/* Mode of Study */}
                        <IonRow className="progCourseInfoHeaderRow">
                            <IonCol className="progCourseInfoHeaderCol">
                                <IonRow className="progCourseInfoHeaderInnerRow">
                                    <IonCol size="10" sizeSm="10" style={{ padding: "0" }}>
                                        <IonTitle className="progCourseInfoHeader">
                                            <div className="ion-text-wrap">
                                                Mode of Study
                                        </div>
                                        </IonTitle>
                                    </IonCol>

                                    <IonCol size="2" sizeSm="2" className="toggleProgCourseInfoBtnCol">
                                        <IonButton className="toggleProgCourseInfoBtn" onClick={displayInfoCol7} fill="clear" size="default">
                                            <IonIcon slot="icon-only" ref={showIcon7} icon={addCircle} />
                                        </IonButton>
                                    </IonCol>
                                </IonRow>

                                <IonRow>
                                    <IonCol sizeSm="12" className="progCourseInfoDetails" ref={info7} hidden={true}>
                                        <div className="ion-text-wrap">
                                            <p>Mode of Study Answer</p>
                                        </div>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>

                    </IonGrid>
                    : ''
                }

            </IonContent>
        </IonPage>
    );
};

export default StudySIMProgInfo;
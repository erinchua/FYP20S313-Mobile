import { IonAlert, IonBadge, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonPage, IonPopover, IonRouterLink, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useRef, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import '../../css/Global.css';
import '../../css/Study@SIMProgList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faFilter } from '@fortawesome/free-solid-svg-icons';
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
import CompareProgPopoverContent from '../../components/Study@SIM/CompareProgPopover';


interface StudySIMProgList_Props extends RouteComponentProps<{
    discipline: string;
}> { }

const StudySIMProgList: React.FC<StudySIMProgList_Props> = ({ match }) => {
    const [disciplineName, setDisciplineName] = useState([
        'Art & Social Sciences',
        'Business',
        'IT & Computer Science',
        'Nursing',
        'Speciality'
    ]);

    const [progCompareNo, setProgCompareNo] = useState(0);
    const [compareProg, setCompareProg] = useState(false);
    
    {/* Adding programme for comparison - Need to be generated dynamically */}
    const compareProgramme = () => {
        if (compareProg == false) {
            setProgCompareNo(progCompareNo + 1);
            setCompareProg(true);
        } 
        if (compareProg == true) {
            setProgCompareNo(progCompareNo - 1);
            setCompareProg(false);
        }
    };

    {/* Display Popover */}
    const [showCompareProgPopover, setShowCompareProgPopover] = useState<{open: boolean, event: Event | undefined}>({
        open: false,
        event: undefined,
    });

    {/* "If no prog is added to compare" Alert */}
    const [showCompareProgAlert, setShowCompareProgAlert] = useState(false);

    return (
        <React.Fragment>
            <IonAlert
                isOpen={showCompareProgAlert}
                onDidDismiss={() => setShowCompareProgAlert(false)}
                cssClass='alertBox'
                mode='md'
                message={'You may compare up to 3 programmes at a time by tapping on the Compare button of the programme(s).'}
                buttons={['OK']}
            ></IonAlert>


            <IonPage>
                <IonHeader>
                    <TopNav title="Study@SIM" route='/u/study@SIMMain' backarrow={ true } hamburger = { true }/>
                    
                    <IonToolbar id="studySIMProgListHeaderToolbar">
                        <IonGrid style={{padding: "0"}}>
                            <IonRow id="studySIMProgListHeaderRow" class="ion-align-items-center">
                                <IonCol size="6" sizeSm="6" class="ion-text-left" className="studySIMProgListCol" style={{paddingLeft: "3%"}}>
                                    <IonTitle className="studyProgListTitle">
                                        {match.params.discipline === 'artSocialSciences' ?
                                            <div className="ion-text-wrap">{disciplineName[0]}</div>
                                            :''
                                        }

                                        {match.params.discipline === 'business' ?
                                            <div className="ion-text-wrap">{disciplineName[1]}</div>
                                            :''
                                        }

                                        {match.params.discipline === 'itComputerScience' ?
                                            <div className="ion-text-wrap">{disciplineName[2]}</div>
                                            :''
                                        }

                                        {match.params.discipline === 'nursing' ?
                                            <div className="ion-text-wrap">{disciplineName[3]}</div>
                                            :''
                                        }

                                        {match.params.discipline === 'speciality' ?
                                            <div className="ion-text-wrap">{disciplineName[4]}</div>                                            
                                            : ''
                                        }

                                    </IonTitle>
                                </IonCol>

                                <IonCol size="4" sizeSm="4" class="ion-text-right" className="studySIMProgListCol">
                                    <IonButton id="compareBtn" fill="clear" onClick={(e) => {
                                        if (progCompareNo == 0) {
                                            setShowCompareProgAlert(true);
                                        } else {
                                            setShowCompareProgPopover({open: true, event: e.nativeEvent})
                                        }
                                    }
                                    }>
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
                        {/* Art & Social Sciences Programme List */}
                        {match.params.discipline === 'artSocialSciences' ?
                        <>
                            <IonRow className="studySIMProgListRow" class="ion-align-items-center">
                                <IonCol size="4" sizeSm="4" class="ion-text-center">
                                    <img src={Grenoble} className="studyProgUniImg"></img>
                                </IonCol>

                                <IonCol size="8" sizeSm="8" className="studySIMProgListColDetails" class="ion-text-left">
                                    {/* Programme Title */}
                                    <IonRow className="progCourseRow">
                                        <IonRouterLink id="progCourseTitleLink" href="/u/study@SIMMain/artSocialSciences/study@SIMProgInfo">
                                            <IonTitle className="progCourseTitle">
                                                <div className="ion-text-wrap">MSc Management in International Business</div>
                                            </IonTitle>
                                        </IonRouterLink>
                                    </IonRow>

                                    {/* Awarding Uni */}
                                    <IonRow className="progCourseRow">
                                        <IonCol size="4" sizeSm="4" class="ion-text-left" className="progCourseAwardingUniCol">
                                            <IonLabel className="progCourseAwardingUniLabel">
                                                <div className="ion-text-wrap">Awarded by:</div>
                                            </IonLabel>
                                        </IonCol>

                                        <IonCol size="8" sizeSm="8" class="ion-text-left" className="progCourseAwardingUniCol">
                                            <IonLabel className="progCourseAwardingUniName">
                                                <div className="ion-text-wrap">Grenoble Ecole de Management</div>
                                            </IonLabel>
                                        </IonCol>
                                    </IonRow>

                                    <IonRow className="progCompareBtnRow">
                                        <IonCol size="12" sizeSm="12" class="ion-text-right" className="progCompareBtnCol">
                                            {compareProg ?
                                                <IonButton className="progCompareBtnSelected" size="small" type="submit" onClick={compareProgramme}>Compared
                                                    <FontAwesomeIcon style={{paddingLeft: "3%"}} icon={faCheck} />
                                                </IonButton>
                                                : 
                                                (<IonButton className="progCompareBtn" size="small" type="submit" onClick={compareProgramme}>Compare</IonButton>)
                                            }

                                        </IonCol>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </>
                        : ''
                        }

                        {/* Business Programme List */}
                        {match.params.discipline === 'business' ?
                        <>
                            <IonRow className="studySIMProgListRow" class="ion-align-items-center">
                                <IonCol size="4" sizeSm="4" class="ion-text-center">
                                    <img src={Grenoble} className="studyProgUniImg"></img>
                                </IonCol>

                                <IonCol size="8" sizeSm="8" className="studySIMProgListColDetails" class="ion-text-left">
                                    {/* Programme Title */}
                                    <IonRow className="progCourseRow">
                                        <IonRouterLink className="progCourseTitleLink" href="/u/study@SIMMain/business/study@SIMProgInfo">
                                            <IonTitle className="progCourseTitle">
                                                <div className="ion-text-wrap">MSc Management in International Business</div>
                                            </IonTitle>
                                        </IonRouterLink>
                                    </IonRow>

                                    {/* Awarding Uni */}
                                    <IonRow className="progCourseRow">
                                        <IonCol size="4" sizeSm="4" class="ion-text-left" className="progCourseAwardingUniCol">
                                            <IonLabel className="progCourseAwardingUniLabel">
                                                <div className="ion-text-wrap">Awarded by:</div>
                                            </IonLabel>
                                        </IonCol>

                                        <IonCol size="8" sizeSm="8" class="ion-text-left" className="progCourseAwardingUniCol">
                                            <IonLabel className="progCourseAwardingUniName">
                                                <div className="ion-text-wrap">Grenoble Ecole de Management</div>
                                            </IonLabel>
                                        </IonCol>
                                    </IonRow>

                                    <IonRow className="progCompareBtnRow">
                                        <IonCol size="12" sizeSm="12" class="ion-text-right" className="progCompareBtnCol">
                                            {compareProg ?
                                                <IonButton className="progCompareBtnSelected" size="small" type="submit" onClick={compareProgramme}>Compared
                                                    <FontAwesomeIcon style={{paddingLeft: "3%"}} icon={faCheck} />
                                                </IonButton>
                                                : 
                                                (<IonButton className="progCompareBtn" size="small" type="submit" onClick={compareProgramme}>Compare</IonButton>)
                                            }

                                        </IonCol>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </>
                        : ''
                        }

                        {/* IT & Computer Science Programme List */}
                        {match.params.discipline === 'itComputerScience' ?
                        <>
                            <IonRow className="studySIMProgListRow" class="ion-align-items-center">
                                <IonCol size="4" sizeSm="4" class="ion-text-center">
                                    <img src={Grenoble} className="studyProgUniImg"></img>
                                </IonCol>

                                <IonCol size="8" sizeSm="8" className="studySIMProgListColDetails" class="ion-text-left">
                                    {/* Programme Title */}
                                    <IonRow className="progCourseRow">
                                        <IonRouterLink id="progCourseTitleLink" href="/u/study@SIMMain/itComputerScience/study@SIMProgInfo">
                                            <IonTitle className="progCourseTitle">
                                                <div className="ion-text-wrap">MSc Management in International Business</div>
                                            </IonTitle>
                                        </IonRouterLink>
                                    </IonRow>

                                    {/* Awarding Uni */}
                                    <IonRow className="progCourseRow">
                                        <IonCol size="4" sizeSm="4" class="ion-text-left" className="progCourseAwardingUniCol">
                                            <IonLabel className="progCourseAwardingUniLabel">
                                                <div className="ion-text-wrap">Awarded by:</div>
                                            </IonLabel>
                                        </IonCol>

                                        <IonCol size="8" sizeSm="8" class="ion-text-left" className="progCourseAwardingUniCol">
                                            <IonLabel className="progCourseAwardingUniName">
                                                <div className="ion-text-wrap">Grenoble Ecole de Management</div>
                                            </IonLabel>
                                        </IonCol>
                                    </IonRow>

                                    <IonRow className="progCompareBtnRow">
                                        <IonCol size="12" sizeSm="12" class="ion-text-right" className="progCompareBtnCol">
                                            {compareProg ?
                                                <IonButton className="progCompareBtnSelected" size="small" type="submit" onClick={compareProgramme}>Compared
                                                    <FontAwesomeIcon style={{paddingLeft: "3%"}} icon={faCheck} />
                                                </IonButton>
                                                : 
                                                (<IonButton className="progCompareBtn" size="small" type="submit" onClick={compareProgramme}>Compare</IonButton>)
                                            }

                                        </IonCol>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </>
                        : ''
                        }

                        {/* Nursing Programme List */}
                        {match.params.discipline === 'nursing' ?
                        <>
                            <IonRow className="studySIMProgListRow" class="ion-align-items-center">
                                <IonCol size="4" sizeSm="4" class="ion-text-center">
                                    <img src={Grenoble} className="studyProgUniImg"></img>
                                </IonCol>

                                <IonCol size="8" sizeSm="8" className="studySIMProgListColDetails" class="ion-text-left">
                                    {/* Programme Title */}
                                    <IonRow className="progCourseRow">
                                        <IonRouterLink id="progCourseTitleLink" href="/u/study@SIMMain/nursing/study@SIMProgInfo">
                                            <IonTitle className="progCourseTitle">
                                                <div className="ion-text-wrap">MSc Management in International Business</div>
                                            </IonTitle>
                                        </IonRouterLink>
                                    </IonRow>

                                    {/* Awarding Uni */}
                                    <IonRow className="progCourseRow">
                                        <IonCol size="4" sizeSm="4" class="ion-text-left" className="progCourseAwardingUniCol">
                                            <IonLabel className="progCourseAwardingUniLabel">
                                                <div className="ion-text-wrap">Awarded by:</div>
                                            </IonLabel>
                                        </IonCol>

                                        <IonCol size="8" sizeSm="8" class="ion-text-left" className="progCourseAwardingUniCol">
                                            <IonLabel className="progCourseAwardingUniName">
                                                <div className="ion-text-wrap">Grenoble Ecole de Management</div>
                                            </IonLabel>
                                        </IonCol>
                                    </IonRow>

                                    <IonRow className="progCompareBtnRow">
                                        <IonCol size="12" sizeSm="12" class="ion-text-right" className="progCompareBtnCol">
                                            {compareProg ?
                                                <IonButton className="progCompareBtnSelected" size="small" type="submit" onClick={compareProgramme}>Compared
                                                    <FontAwesomeIcon style={{paddingLeft: "3%"}} icon={faCheck} />
                                                </IonButton>
                                                : 
                                                (<IonButton className="progCompareBtn" size="small" type="submit" onClick={compareProgramme}>Compare</IonButton>)
                                            }

                                        </IonCol>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </>
                        : ''
                        }

                        {/* Speciality Programme List */}
                        {match.params.discipline === 'speciality' ?
                        <>
                            <IonRow className="studySIMProgListRow" class="ion-align-items-center">
                                <IonCol size="4" sizeSm="4" class="ion-text-center">
                                    <img src={Grenoble} className="studyProgUniImg"></img>
                                </IonCol>

                                <IonCol size="8" sizeSm="8" className="studySIMProgListColDetails" class="ion-text-left">
                                    {/* Programme Title */}
                                    <IonRow className="progCourseRow">
                                        <IonRouterLink id="progCourseTitleLink" href="/u/study@SIMMain/speciality/study@SIMProgInfo">
                                            <IonTitle className="progCourseTitle">
                                                <div className="ion-text-wrap">MSc Management in International Business</div>
                                            </IonTitle>
                                        </IonRouterLink>
                                    </IonRow>

                                    {/* Awarding Uni */}
                                    <IonRow className="progCourseRow">
                                        <IonCol size="4" sizeSm="4" class="ion-text-left" className="progCourseAwardingUniCol">
                                            <IonLabel className="progCourseAwardingUniLabel">
                                                <div className="ion-text-wrap">Awarded by:</div>
                                            </IonLabel>
                                        </IonCol>

                                        <IonCol size="8" sizeSm="8" class="ion-text-left" className="progCourseAwardingUniCol">
                                            <IonLabel className="progCourseAwardingUniName">
                                                <div className="ion-text-wrap">Grenoble Ecole de Management</div>
                                            </IonLabel>
                                        </IonCol>
                                    </IonRow>

                                    <IonRow className="progCompareBtnRow">
                                        <IonCol size="12" sizeSm="12" class="ion-text-right" className="progCompareBtnCol">
                                            {compareProg ?
                                                <IonButton className="progCompareBtnSelected" size="small" type="submit" onClick={compareProgramme}>Compared
                                                    <FontAwesomeIcon style={{paddingLeft: "3%"}} icon={faCheck} />
                                                </IonButton>
                                                : 
                                                (<IonButton className="progCompareBtn" size="small" type="submit" onClick={compareProgramme}>Compare</IonButton>)
                                            }

                                        </IonCol>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </>
                        : ''
                        }
                    
                    </IonGrid>
                    
                    {/* Compare Programme Popover */}
                    <IonPopover id="compareProgPopover" 
                        cssClass='compareProgPopover' 
                        isOpen={showCompareProgPopover.open} 
                        event={showCompareProgPopover.event} 
                        onDidDismiss={e => setShowCompareProgPopover({open: false, event: undefined})}
                    >
                        <CompareProgPopoverContent removeProg={()=>(console.log('Add removeProg function here'))} removeAllProg={()=>(console.log('Add removeAllProg function here'))} viewResults={()=>(console.log('Add viewResults function here'))}/>              
                    </IonPopover>
                    
                </IonContent>
                
            </IonPage>
        </React.Fragment>
    );
};

export default StudySIMProgList;
import { IonButton, IonCol, IonFooter, IonGrid, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useRef, useState } from 'react';

import '../../css/Global.css';
import '../../css/CompareProgPopover.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
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

const CompareProgPopoverContent: React.FC<{
    removeProg: any;
    removeAllProg: any;
    viewResults: any;
}> = props => {

    return (
        <>
            <IonGrid id="compareProgPopoverGrid">
                {/* Added Programme In Popover*/}
                <IonRow className="compareProgPopoverMainRow">
                    <IonItemSliding>
                        <IonItem className="compareProgPopoverItem" lines="none">
                            <IonRow class="ion-align-items-center">
                                <IonCol size="4" sizeSm="4" class="ion-text-center">
                                    <img src={Grenoble} className="studyProgUniImg"></img>
                                </IonCol>

                                <IonCol size="8" sizeSm="8" className="studySIMProgListColDetails" class="ion-text-left">
                                    {/* Programme Title */}
                                    <IonRow className="progCourseRow">
                                        <IonTitle className="progCourseTitle">
                                            <div className="ion-text-wrap">MSc Management in International Business</div>
                                        </IonTitle>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </IonItem>

                        {/* Slider to remove programme */}
                        <IonItemOptions side="end">
                            <IonItemOption onClick={props.removeProg} className="compareProgPopoverSlider">
                                <FontAwesomeIcon icon={faTimes} />
                            </IonItemOption>
                        </IonItemOptions>
                    </IonItemSliding>
                </IonRow>

                {/* Compare Programme Popover Btn Row */}
                <IonRow id="compareProgPopoverBtnRow">              
                    <IonFooter className="ion-no-border">
                        <IonToolbar id="compareProgPopoverBtnToolbar" class="ion-align-items-center">
                            <IonRow class="ion-align-items-center" style={{width: "100%"}}>
                                <IonCol size="6" sizeSm="6" class="ion-text-center" style={{padding: "0"}}>
                                    <IonButton id="removeAllProgBtn" fill="outline" onClick={props.removeAllProg}>CLEAR ALL</IonButton>
                                </IonCol>

                                <IonCol size="6" sizeSm="6" class="ion-text-center" style={{padding: "0"}}>
                                    <IonButton id="viewResultsBtn" onClick={props.viewResults} href="/u/study@SIMMain/courseComparator">VIEW RESULTS</IonButton>
                                </IonCol>
                            </IonRow>
                        </IonToolbar>
                    </IonFooter>
                </IonRow>  

            </IonGrid>
        </>
    );
};

export default CompareProgPopoverContent;
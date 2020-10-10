import { IonButton, IonCol, IonFooter, IonGrid, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useRef, useState } from 'react';

import '../../css/Global.css';
import '../../css/CompareProgPopoverContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Grenoble from '../../img/study@SIM/GrenobleEcoleDeManagement.png';

const CompareProgPopoverContent: React.FC<{
    removeProg: any;
    removeAllProg: any;
    viewResults: any;
    params: any;
    href: any;
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
                                {props.params ?
                                    <>
                                    <IonButton id="viewResultsBtn" onClick={props.viewResults} href={props.href}>VIEW RESULTS</IonButton>
                                    </>
                                    :''
                                }
                                
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
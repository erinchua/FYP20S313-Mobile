import { IonButton, IonCol, IonFooter, IonGrid, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom'
import '../../css/Global.css';
import '../../css/CompareProgPopoverContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Programme } from '../../pages/Study@SIM/Study@SIMProgInfo'

const CompareProgPopoverContent: React.FC<{
    compareProgList: Programme[]
    removeProg: (programme: Programme) => void
    removeAllProg: (programmes: Programme[]) => void
    viewResults: (programmes: Programme[]) => void
    href: string;
}> = props => {

    return (
        <>
            <IonGrid id="compareProgPopoverGrid">
                {typeof props.compareProgList !== 'undefined' ? props.compareProgList.map((programme) => {
                    return (<div key={programme.id}>

                        {/* Added Programme In Popover*/}
                        <IonRow className="compareProgPopoverMainRow">
                            <IonItemSliding>
                                <IonItem className="compareProgPopoverItem" lines="none">
                                    <IonRow class="ion-align-items-center">
                                        <IonCol size="4" sizeSm="4" class="ion-text-center">
                                            <img src={programme.uniLogo} alt={programme.programmeTitle} className="studyProgUniImg"></img>
                                        </IonCol>

                                        <IonCol size="8" sizeSm="8" className="studySIMProgListColDetails" class="ion-text-left">
                                            {/* Programme Title */}
                                            <IonRow className="progCourseRow">
                                                <IonTitle className="progCourseTitle">
                                                    <div className="ion-text-wrap">{programme.programmeTitle}</div>
                                                </IonTitle>
                                            </IonRow>
                                        </IonCol>
                                    </IonRow>
                                </IonItem>

                                {/* Slider to remove programme */}
                                <IonItemOptions side="end">
                                    <IonItemOption onClick={e => props.removeProg(programme)} className="compareProgPopoverSlider">
                                        <FontAwesomeIcon icon={faTimes} />
                                    </IonItemOption>
                                </IonItemOptions>
                            </IonItemSliding>
                        </IonRow>

                    </div>)
                }) : ''}

                {/* Compare Programme Popover Btn Row */}
                <IonRow id="compareProgPopoverBtnRow">
                    <IonFooter className="ion-no-border">
                        <IonToolbar id="compareProgPopoverBtnToolbar" class="ion-align-items-center">
                            <IonRow class="ion-align-items-center" style={{ width: "100%" }}>
                                <IonCol size="6" sizeSm="6" class="ion-text-center" style={{ padding: "0" }}>
                                    <IonButton id="removeAllProgBtn" onClick={e => props.removeAllProg(props.compareProgList)} fill="outline" >CLEAR ALL</IonButton>
                                </IonCol>

                                <IonCol size="6" sizeSm="6" class="ion-text-center" style={{ padding: "0" }}>
                                    {props.href ?
                                        <>
                                            <Link to={{ pathname: `${props.href}`, state: props.compareProgList }}>
                                                <IonButton id="viewResultsBtn" >VIEW RESULTS</IonButton>
                                            </Link>
                                        </>
                                        : ''
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
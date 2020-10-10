import { IonCol, IonGrid, IonRow, IonText, IonTitle } from '@ionic/react';
import React from 'react';

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


const CourseComparatorDetails: React.FC = () => {

    return (
        <IonGrid id="courseComparatorGrid">
            <IonRow className="courseComparatorRowScroll" >
                <IonCol style={{padding: "0"}}>

                    {/* Row 1: Programme */}
                    <IonRow className="courseComparatorRow" class="ion-align-items-center"> 
                        {/* Header */}
                        <IonCol size="4" sizeSm="4" className="courseComparatorTitleCol" class="ion-text-center">
                            <IonTitle className="courseComparatorTitle">
                                <div className="ion-text-wrap">Programme</div>
                            </IonTitle>
                        </IonCol>
                            
                        {/* Prog Col 1*/}
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

                        {/* Prog Col 2*/}
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
                    </IonRow>
                        

                    {/* Row 2: About The Programme */}
                    <IonRow className="courseComparatorRow" class="ion-align-items-center"> 
                        {/* Header */}
                        <IonCol size="4" sizeSm="4" className="courseComparatorTitleCol" class="ion-text-center">
                            <IonTitle className="courseComparatorTitle">
                                <div className="ion-text-wrap">About The Programme</div>
                            </IonTitle>
                        </IonCol>
                            
                        {/* Prog Col 1*/}
                        <IonCol size="4" sizeSm="4" className="courseComparatorProgCol">
                            {/* About Prog Text */}
                            <IonText className="courseComparatorAbtProgText">
                                <div className="ion-text-wrap">About The Programme Info</div>
                            </IonText>
                        </IonCol>

                        {/* Prog Col 2*/}
                        <IonCol size="4" sizeSm="4" className="courseComparatorProgCol">
                            {/* About Prog Text */}
                            <IonText className="courseComparatorAbtProgText">
                                <div className="ion-text-wrap">About The Programme Info</div>
                            </IonText>
                        </IonCol>
                    </IonRow>


                    {/* Row 3: Application Period */}
                    <IonRow className="courseComparatorRow" class="ion-align-items-center"> 
                        {/* Header */}
                        <IonCol size="4" sizeSm="4" className="courseComparatorTitleCol" class="ion-text-center">
                            <IonTitle className="courseComparatorTitle">
                                <div className="ion-text-wrap">Application Period</div>
                            </IonTitle>
                        </IonCol>
                            
                        {/* Prog Col 1*/}
                        <IonCol size="4" sizeSm="4" className="courseComparatorProgCol">
                            {/* About Prog Text */}
                            <IonText className="courseComparatorAbtProgText">
                                <div className="ion-text-wrap">Application Period Info</div>
                            </IonText>
                        </IonCol>

                        {/* Prog Col 2*/}
                        <IonCol size="4" sizeSm="4" className="courseComparatorProgCol">
                            {/* About Prog Text */}
                            <IonText className="courseComparatorAbtProgText">
                                <div className="ion-text-wrap">Application Period Info</div>
                            </IonText>
                        </IonCol>
                    </IonRow>
                    

                    {/* Row 4: Programme Structure */}
                    <IonRow className="courseComparatorRow" class="ion-align-items-center"> 
                        {/* Header */}
                        <IonCol size="4" sizeSm="4" className="courseComparatorTitleCol" class="ion-text-center">
                            <IonTitle className="courseComparatorTitle">
                                <div className="ion-text-wrap">Programme Structure</div>
                            </IonTitle>
                        </IonCol>
                            
                        {/* Prog Col 1*/}
                        <IonCol size="4" sizeSm="4" className="courseComparatorProgCol">
                            {/* About Prog Text - Coursework */}
                            <IonRow class="ion-align-items-center">
                                <IonCol size="12" sizeSm="12" class="ion-text-center" style={{padding:"0"}}>
                                    <IonText className="courseComparatorAbtProgText">
                                        {/* text in span to be retrieved from db*/}
                                        <div className="ion-text-wrap">
                                            <b>Coursework: </b><span>Yes</span>
                                        </div>
                                    </IonText>
                                </IonCol>
                            </IonRow>

                            {/* About Prog Text - Examination */}
                            <IonRow class="ion-align-items-center" style={{paddingTop: "2%"}}>
                                <IonCol size="12" sizeSm="12" class="ion-text-center" style={{padding:"0"}}>
                                    <IonText className="courseComparatorAbtProgText">
                                        {/* text in span to be retrieved from db*/}
                                        <div className="ion-text-wrap">
                                            <b>Examination: </b><span>Yes</span>
                                        </div>
                                    </IonText>
                                </IonCol>
                            </IonRow>
                        </IonCol>

                        {/* Prog Col 2*/}
                        <IonCol size="4" sizeSm="4" className="courseComparatorProgCol">
                            {/* About Prog Text - Coursework */}
                            <IonRow class="ion-align-items-center">
                                <IonCol size="12" sizeSm="12" class="ion-text-center" style={{padding:"0"}}>
                                    <IonText className="courseComparatorAbtProgText">
                                        {/* text in span to be retrieved from db*/}
                                        <div className="ion-text-wrap">
                                            <b>Coursework: </b><span>Yes</span>
                                        </div>
                                    </IonText>
                                </IonCol>
                            </IonRow>

                            {/* About Prog Text - Examination */}
                            <IonRow class="ion-align-items-center" style={{paddingTop: "2%"}}>
                                <IonCol size="12" sizeSm="12" class="ion-text-center" style={{padding:"0"}}>
                                    <IonText className="courseComparatorAbtProgText">
                                        {/* text in span to be retrieved from db*/}
                                        <div className="ion-text-wrap">
                                            <b>Examination: </b><span>Yes</span>
                                        </div>
                                    </IonText>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>


                    {/* Row 5: Overseas Opportunity */}
                    <IonRow className="courseComparatorRow" class="ion-align-items-center"> 
                        {/* Header */}
                        <IonCol size="4" sizeSm="4" className="courseComparatorTitleCol" class="ion-text-center">
                            <IonTitle className="courseComparatorTitle">
                                <div className="ion-text-wrap">Overseas Opportunity</div>
                            </IonTitle>
                        </IonCol>
                            
                        {/* Prog Col 1*/}
                        <IonCol size="4" sizeSm="4" className="courseComparatorProgCol">
                            {/* About Prog Text - Exchange */}
                            <IonRow class="ion-align-items-center">
                                <IonCol size="12" sizeSm="12" class="ion-text-center" style={{padding:"0"}}>
                                    <IonText className="courseComparatorAbtProgText">
                                        {/* text in span to be retrieved from db*/}
                                        <div className="ion-text-wrap">
                                            <b>Exchange: </b><span>Yes</span>
                                        </div>
                                    </IonText>
                                </IonCol>
                            </IonRow>

                            {/* About Prog Text - Transfer */}
                            <IonRow class="ion-align-items-center" style={{paddingTop: "2%"}}>
                                <IonCol size="12" sizeSm="12" class="ion-text-center" style={{padding:"0"}}>
                                    <IonText className="courseComparatorAbtProgText">
                                        {/* text in span to be retrieved from db*/}
                                        <div className="ion-text-wrap">
                                            <b>Transfer: </b><span>Yes</span>
                                        </div>
                                    </IonText>
                                </IonCol>
                            </IonRow>
                        </IonCol>

                        {/* Prog Col 2*/}
                        <IonCol size="4" sizeSm="4" className="courseComparatorProgCol">
                            {/* About Prog Text - Exchange */}
                            <IonRow class="ion-align-items-center">
                                <IonCol size="12" sizeSm="12" class="ion-text-center" style={{padding:"0"}}>
                                    <IonText className="courseComparatorAbtProgText">
                                        {/* text in span to be retrieved from db*/}
                                        <div className="ion-text-wrap">
                                            <b>Exchange: </b><span>Yes</span>
                                        </div>
                                    </IonText>
                                </IonCol>
                            </IonRow>

                            {/* About Prog Text - Transfer */}
                            <IonRow class="ion-align-items-center" style={{paddingTop: "2%"}}>
                                <IonCol size="12" sizeSm="12" class="ion-text-center" style={{padding:"0"}}>
                                    <IonText className="courseComparatorAbtProgText">
                                        {/* text in span to be retrieved from db*/}
                                        <div className="ion-text-wrap">
                                            <b>Transfer: </b><span>Yes</span>
                                        </div>
                                    </IonText>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>


                    {/* Row 6: Intake Months */}
                    <IonRow className="courseComparatorRow" class="ion-align-items-center"> 
                        {/* Header */}
                        <IonCol size="4" sizeSm="4" className="courseComparatorTitleCol" class="ion-text-center">
                            <IonTitle className="courseComparatorTitle">
                                <div className="ion-text-wrap">Intake Month(s)</div>
                            </IonTitle>
                        </IonCol>
                            
                        {/* Prog Col 1*/}
                        <IonCol size="4" sizeSm="4" className="courseComparatorProgCol">
                            {/* About Prog Text */}
                            <IonText className="courseComparatorAbtProgText">
                                <div className="ion-text-wrap">Intake Months Info</div>
                            </IonText>
                        </IonCol>

                        {/* Prog Col 2*/}
                        <IonCol size="4" sizeSm="4" className="courseComparatorProgCol">
                            {/* About Prog Text */}
                            <IonText className="courseComparatorAbtProgText">
                                <div className="ion-text-wrap">Intake Months Info</div>
                            </IonText>
                        </IonCol>
                    </IonRow>


                    {/* Row 7: Duration */}
                    <IonRow className="courseComparatorRow" class="ion-align-items-center"> 
                        {/* Header */}
                        <IonCol size="4" sizeSm="4" className="courseComparatorTitleCol" class="ion-text-center">
                            <IonTitle className="courseComparatorTitle">
                                <div className="ion-text-wrap">Duration</div>
                            </IonTitle>
                        </IonCol>
                            
                        {/* Prog Col 1*/}
                        <IonCol size="4" sizeSm="4" className="courseComparatorProgCol">
                            {/* About Prog Text */}
                            <IonText className="courseComparatorAbtProgText">
                                <div className="ion-text-wrap">Duration Info</div>
                            </IonText>
                        </IonCol>

                        {/* Prog Col 2*/}
                        <IonCol size="4" sizeSm="4" className="courseComparatorProgCol">
                            {/* About Prog Text */}
                            <IonText className="courseComparatorAbtProgText">
                                <div className="ion-text-wrap">Duration Info</div>
                            </IonText>
                        </IonCol>
                    </IonRow>


                    {/* Row 8: Mode Of Study */}
                    <IonRow className="courseComparatorRow" class="ion-align-items-center"> 
                        {/* Header */}
                        <IonCol size="4" sizeSm="4" className="courseComparatorTitleCol" class="ion-text-center">
                            <IonTitle className="courseComparatorTitle">
                                <div className="ion-text-wrap">Mode Of Study</div>
                            </IonTitle>
                        </IonCol>
                            
                        {/* Prog Col 1*/}
                        <IonCol size="4" sizeSm="4" className="courseComparatorProgCol">
                            {/* About Prog Text */}
                            <IonText className="courseComparatorAbtProgText">
                                <div className="ion-text-wrap">Mode Of Study Info</div>
                            </IonText>
                        </IonCol>

                        {/* Prog Col 2*/}
                        <IonCol size="4" sizeSm="4" className="courseComparatorProgCol">
                            {/* About Prog Text */}
                            <IonText className="courseComparatorAbtProgText">
                                <div className="ion-text-wrap">Mode Of Study Info</div>
                            </IonText>
                        </IonCol>
                    </IonRow>

                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default CourseComparatorDetails;
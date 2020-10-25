import { IonCol, IonGrid, IonRow, IonText, IonTitle } from '@ionic/react';
import React from 'react';

import '../../css/Global.css';
import '../../css/CourseComparator.css';
import Buffalo from '../../img/study@SIM/UniversityAtBuffalo.png';
import { Programme, } from '../../pages/Study@SIM/Study@SIMProgInfo'
import ProgrammeTalks from '../../pages/OpenHouseProgrammes/ProgrammeTalks';


const CourseComparatorDetails: React.FC<{

    programmes: Programme[]
}> = (props) => {

    const { programmes } = props
    return (
        <IonGrid id="courseComparatorGrid">
            <IonRow className="courseComparatorRowScroll" >
                <IonCol style={{ padding: "0" }}>

                    {/* Row 1: Programme */}
                    <IonRow className="courseComparatorRow" class="ion-align-items-center">
                        {/* Header */}
                        <IonCol size="4" sizeSm="4" className="courseComparatorTitleCol" class="ion-text-center">
                            <IonTitle className="courseComparatorTitle">
                                <div className="ion-text-wrap">Programme</div>
                            </IonTitle>
                        </IonCol>

                        {/* Prog Columns for progTitle in row1 for each programme*/}
                        {typeof programmes !== 'undefined' ? programmes.map((programme) => {
                            return (<div>
                                <IonCol size="4" sizeSm="4" className="courseComparatorProgCol">
                                    {/* Uni Img */}
                                    <IonRow class="ion-align-items-center">
                                        <IonCol class="ion-text-center">
                                            <img src={programme.uniLogo} alt={programme.programmeTitle} className="courseComparatorUniImg"></img>
                                        </IonCol>
                                    </IonRow>

                                    {/* Programme Name */}
                                    <IonRow class="ion-align-items-center">

                                        <IonCol class="ion-text-center">
                                            <IonText className="courseComparatorProgName">

                                                <div className="ion-text-wrap">{programme.programmeTitle}</div>
                                            </IonText>
                                        </IonCol>

                                    </IonRow>
                                </IonCol>
                            </div>)
                        }) : ''}

                    </IonRow>


                    {/* Row 2: About The Programme */}
                    <IonRow className="courseComparatorRow" class="ion-align-items-center">
                        {/* Header */}
                        <IonCol size="4" sizeSm="4" className="courseComparatorTitleCol" class="ion-text-center">
                            <IonTitle className="courseComparatorTitle">
                                <div className="ion-text-wrap">About The Programme</div>
                            </IonTitle>
                        </IonCol>
                        {/* Prog Column for overview in row2 for each programme*/}
                        {typeof programmes !== 'undefined' ? programmes.map((programme) => {
                            return (<div>
                                <IonCol size="4" sizeSm="4" className="courseComparatorProgCol">
                                    {/* About Prog Text */}
                                    <IonText className="courseComparatorAbtProgText">
                                        <div className="ion-text-wrap">
                                            {programme.programOverview ? programme.programOverview.map((overview) => {
                                                return (<p>{overview}</p>
                                                )
                                            }) : ''}
                                        </div>
                                    </IonText>
                                </IonCol>
                            </div>)
                        }) : ''}

                    </IonRow>


                    {/* Row 3: Application Period */}
                    <IonRow className="courseComparatorRow" class="ion-align-items-center">
                        {/* Header */}
                        <IonCol size="4" sizeSm="4" className="courseComparatorTitleCol" class="ion-text-center">
                            <IonTitle className="courseComparatorTitle">
                                <div className="ion-text-wrap">Application Period</div>
                            </IonTitle>
                        </IonCol>

                        {/* Prog column for Application Period in Row 3 for each programme*/}
                        {typeof programmes !== 'undefined' ? programmes.map((programme) => {
                            return (<div>
                                <IonCol size="4" sizeSm="4" className="courseComparatorProgCol">
                                    {/* About Prog Text */}
                                    <IonText className="courseComparatorAbtProgText">
                                        <div className="ion-text-wrap"> {Array.isArray(programme.applicationPeriod) ? programme.applicationPeriod.map((overview: any, index: any) => {
                                            return (<div key={overview + index}>
                                                <p>{overview.intake}</p>
                                                <p>{overview.period}</p>
                                            </div>)
                                        })

                                            : ''}</div>
                                    </IonText>
                                </IonCol>
                            </div>)
                        }) : ''}


                    </IonRow>


                    {/* Row 4: Programme Structure */}
                    <IonRow className="courseComparatorRow" class="ion-align-items-center">
                        {/* Header */}
                        <IonCol size="4" sizeSm="4" className="courseComparatorTitleCol" class="ion-text-center">
                            <IonTitle className="courseComparatorTitle">
                                <div className="ion-text-wrap">Programme Structure</div>
                            </IonTitle>
                        </IonCol>

                        {/* Prog Columns for progStructure in row 4 for each programme*/}
                        {typeof programmes !== 'undefined' ? programmes.map((programme) => {
                            return (<div>
                                <IonCol size="4" sizeSm="4" className="courseComparatorProgCol">
                                    {/* About Prog Text - Coursework */}
                                    <IonRow class="ion-align-items-center">
                                        <IonCol size="12" sizeSm="12" class="ion-text-center" style={{ padding: "0" }}>
                                            <IonText className="courseComparatorAbtProgText">
                                                {/* text in span to be retrieved from db*/}
                                                <div className="ion-text-wrap">
                                                    <b>Coursework: </b><span>{programme.programmeStructure.coursework ? 'Yes' : 'No'}</span>
                                                </div>
                                            </IonText>
                                        </IonCol>
                                    </IonRow>

                                    {/* About Prog Text - Examination */}
                                    <IonRow class="ion-align-items-center" style={{ paddingTop: "2%" }}>
                                        <IonCol size="12" sizeSm="12" class="ion-text-center" style={{ padding: "0" }}>
                                            <IonText className="courseComparatorAbtProgText">
                                                {/* text in span to be retrieved from db*/}
                                                <div className="ion-text-wrap">
                                                    <b>Examination: </b><span>{programme.programmeStructure.examination ? 'Yes' : 'No'}</span>
                                                </div>
                                            </IonText>
                                        </IonCol>
                                    </IonRow>
                                </IonCol>
                            </div>)
                        }) : ''}

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
                        {typeof programmes !== 'undefined' ? programmes.map((programme) => {
                            return (<div><IonCol size="4" sizeSm="4" className="courseComparatorProgCol">
                                {/* About Prog Text - Exchange */}
                                <IonRow class="ion-align-items-center">
                                    <IonCol size="12" sizeSm="12" class="ion-text-center" style={{ padding: "0" }}>
                                        <IonText className="courseComparatorAbtProgText">
                                            {/* text in span to be retrieved from db*/}
                                            <div className="ion-text-wrap">
                                                <b>Exchange: </b><span>Yes</span>
                                            </div>
                                        </IonText>
                                    </IonCol>
                                </IonRow>

                                {/* About Prog Text - Transfer */}
                                <IonRow class="ion-align-items-center" style={{ paddingTop: "2%" }}>
                                    <IonCol size="12" sizeSm="12" class="ion-text-center" style={{ padding: "0" }}>
                                        <IonText className="courseComparatorAbtProgText">
                                            {/* text in span to be retrieved from db*/}
                                            <div className="ion-text-wrap">
                                                <b>Transfer: </b><span>Yes</span>
                                            </div>
                                        </IonText>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                            </div>)
                        }) : ''}

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
                        {typeof programmes !== 'undefined' ? programmes.map((programme: Programme) => {
                            return (<div>
                                <IonCol size="4" sizeSm="4" className="courseComparatorProgCol">
                                    {/* About Prog Text */}
                                    <IonText className="courseComparatorAbtProgText">
                                        <div className="ion-text-wrap">{typeof programme.intakeMonths.partTime !== 'undefined' && programme.intakeMonths.partTime !== '' ? <p>Part-Time: {programme.intakeMonths.partTime}</p> : <p>Part Time: NIL</p>}
                                            {typeof programme.intakeMonths.fullTime !== 'undefined' && programme.intakeMonths.fullTime !== "" ? <p>Full-Time: {programme.intakeMonths.fullTime}</p> : <p>Full Time: NIL</p>}</div>
                                    </IonText>
                                </IonCol>
                            </div>)
                        }) : ''}


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
                        {typeof programmes !== 'undefined' ? programmes.map((programme) => {
                            return (<div>
                                <IonCol size="4" sizeSm="4" className="courseComparatorProgCol">
                                    {/* About Prog Text */}
                                    <IonText className="courseComparatorAbtProgText">
                                        <div className="ion-text-wrap">
                                            {typeof programme.duration.partTime !== 'undefined' && programme.duration.partTime !== '' ? <p>Part-Time: {programme.duration.partTime}</p> : <p>Part Time: NIL</p>}
                                            {typeof programme.duration.fullTime !== 'undefined' && programme.duration.fullTime !== '' ? <p>Full-Time: {programme.duration.fullTime}</p> : <p>Full Time: NIL</p>}
                                        </div>
                                    </IonText>
                                </IonCol>
                            </div>)
                        }) : ''}



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
                        {typeof programmes !== 'undefined' ? programmes.map((programme) => {
                            return (<div>
                                <IonCol size="4" sizeSm="4" className="courseComparatorProgCol">
                                    {/* About Prog Text */}
                                    <IonText className="courseComparatorAbtProgText">
                                        <div className="ion-text-wrap">
                                            {typeof programme.modeOfStudy.partTime !== 'undefined' ? <p>Part Time: {programme.modeOfStudy.partTime ? 'True' : 'False'}</p> : ''}
                                            {typeof programme.modeOfStudy.fullTime !== 'undefined' ? <p>Full Time: {programme.modeOfStudy.fullTime ? 'True' : 'False'}</p> : ''}

                                        </div>
                                    </IonText>
                                </IonCol>
                            </div>)
                        }) : ''}

                    </IonRow>

                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default CourseComparatorDetails;
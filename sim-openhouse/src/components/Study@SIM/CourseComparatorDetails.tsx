import { IonCol, IonGrid, IonRow, IonText, IonTitle } from '@ionic/react';
import React from 'react';

import '../../css/Global.css';
import '../../css/CourseComparator.css';
import { Programme, } from '../../pages/Study@SIM/Study@SIMProgInfo'


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
                            return (
                                <IonCol size="4" sizeSm="4" className="courseComparatorProgCol" key={programme.id + "row1"}>
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
                            )
                        })
                            : ''
                        }

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
                            return (
                                <IonCol size="4" sizeSm="4" className="courseComparatorProgCol" key={programme.id + "row2"}>
                                    {/* About Prog Text */}
                                    <IonText className="courseComparatorAbtProgText">
                                        <div className="ion-text-wrap">
                                            {programme.programOverview ? programme.programOverview.map((overview, index) => {
                                                return (<p key={overview + index}>{overview}</p>
                                                )
                                            }) : ''}
                                        </div>
                                    </IonText>
                                </IonCol>
                            )
                        })
                            : ''
                        }

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
                            return (
                                <IonCol size="4" sizeSm="4" className="courseComparatorProgCol" key={programme.id + "row3"}>
                                    {/* About Prog Text */}
                                    <IonText className="courseComparatorAbtProgText">
                                        <div className="ion-text-wrap"> {Array.isArray(programme.applicationPeriod) ? programme.applicationPeriod.map((overview: any, index: any) => {
                                            return (<div key={overview + index}>
                                                <p>{overview.intake}</p>
                                                {overview.period.split('\n').map((line: string) => {
                                                    return (<p key={line}>{line}</p>)
                                                })}

                                            </div>)
                                        })

                                            : ''}</div>
                                    </IonText>
                                </IonCol>
                            )
                        })
                            : ''
                        }
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
                            return (
                                <IonCol size="4" sizeSm="4" className="courseComparatorProgCol" key={programme.id + "row4"}>
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
                            )
                        })
                            : ''
                        }

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
                            return (
                                <IonCol size="4" sizeSm="4" className="courseComparatorProgCol" key={programme.id + "row5"}>
                                    {/* About Prog Text - Exchange */}
                                    <IonRow class="ion-align-items-center">
                                        <IonCol size="12" sizeSm="12" class="ion-text-center" style={{ padding: "0" }}>
                                            <IonText className="courseComparatorAbtProgText">
                                                {/* text in span to be retrieved from db*/}
                                                <div className="ion-text-wrap">
                                                    <b>Exchange: </b><span>{programme.overseaOpportunity.exchange ? 'Yes' : 'No'}</span>
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
                                                    <b>Transfer: </b><span>{programme.overseaOpportunity.transfer ? 'Yes' : 'No'}</span>
                                                </div>
                                            </IonText>
                                        </IonCol>
                                    </IonRow>
                                </IonCol>
                            )
                        })
                            : ''
                        }

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
                            return (
                                <IonCol size="4" sizeSm="4" className="courseComparatorProgCol" key={programme.id + "row6"}>
                                    {/* About Prog Text */}
                                    <IonText className="courseComparatorAbtProgText">
                                        <div className="ion-text-wrap">
                                            {typeof programme.intakeMonths.partTime !== 'undefined' && programme.intakeMonths.partTime !== '' ?
                                                <p><b>Part-Time:</b> <br />{programme.intakeMonths.partTime}</p>
                                                : <p><b>Part Time:</b> NIL</p>
                                            }

                                            {typeof programme.intakeMonths.fullTime !== 'undefined' && programme.intakeMonths.fullTime !== "" ?
                                                <p><b>Full-Time:</b> <br />{programme.intakeMonths.fullTime}</p>
                                                : <p><b>Full Time:</b> NIL</p>
                                            }
                                        </div>
                                    </IonText>
                                </IonCol>
                            )
                        })
                            : ''
                        }

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
                            return (
                                <IonCol size="4" sizeSm="4" className="courseComparatorProgCol" key={programme.id + "row7"}>
                                    {/* About Prog Text */}
                                    <IonText className="courseComparatorAbtProgText">
                                        <div className="ion-text-wrap">
                                            {typeof programme.duration.partTime !== 'undefined' && programme.duration.partTime !== '' ?
                                                <p><b>Part-Time:</b> {programme.duration.partTime}</p>
                                                : <p><b>Part Time:</b> NIL</p>
                                            }

                                            {typeof programme.duration.fullTime !== 'undefined' && programme.duration.fullTime !== '' ?
                                                <p><b>Full-Time:</b> {programme.duration.fullTime}</p>
                                                : <p><b>Full Time:</b> NIL</p>
                                            }
                                        </div>
                                    </IonText>
                                </IonCol>
                            )
                        })
                            : ''
                        }

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
                            return (
                                <IonCol size="4" sizeSm="4" className="courseComparatorProgCol" key={programme.id + "row8"}>
                                    {/* About Prog Text */}
                                    <IonText className="courseComparatorAbtProgText">
                                        <div className="ion-text-wrap">
                                            {typeof programme.modeOfStudy.partTime !== 'undefined' ?
                                                <p><b>Part Time:</b> {programme.modeOfStudy.partTime ? 'Yes' : 'No'}</p>
                                                : ''
                                            }

                                            {typeof programme.modeOfStudy.fullTime !== 'undefined' ?
                                                <p><b>Full Time:</b> {programme.modeOfStudy.fullTime ? 'Yes' : 'No'}</p>
                                                : ''
                                            }

                                        </div>
                                    </IonText>
                                </IonCol>
                            )
                        })
                            : ''
                        }

                    </IonRow>

                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default CourseComparatorDetails;
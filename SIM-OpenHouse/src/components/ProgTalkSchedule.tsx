import { IonGrid, IonRow, IonCol, IonButton, IonRouterLink, IonAlert } from '@ionic/react';
import React, { useReducer, useRef, useState } from 'react';

import '../css/Global.css';
import '../css/ProgrammeTalks.css'

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProgTalkSchedule: React.FC<{
    day1: any; 
    day2: any;
}> = props => {

    const [registerSuccess, setRegisterSuccess] = useState(false);
    const [registerFail, setRegisterFail] = useState(false);

    const displayRegisterAlert = () => {
        {/* Logic to check if there is another existing programme in My Schedule that is the same day & timing 
         of the programme the user wants to add*/}
        
        {/* if (exist) {
             setRegisterSuccess(true);
             setRegisterSuccess(false);
         } else {
             setRegisterFail(true);
            setRegisterSuccess(false);
        } */}

        {/* set state to disable the + btn in else {} */}
    };
            


    return (
        <>
            <IonAlert
                isOpen={registerSuccess}
                onDidDismiss={() => setRegisterSuccess(false)}
                cssClass='alertBox'
                mode='md'
                header={'Successfully Registered'}
                message={'You have successfully registered for the programme talk and it has been successfully added to My Schedule.'}
                buttons={['Close']}
             ></IonAlert>

            <IonAlert
                isOpen={registerFail}
                onDidDismiss={() => setRegisterFail(false)}
                cssClass='alertBox'
                mode='md'
                header={'Registration Unsuccessful'}
                message={'There exists an open house programme in your scheduler at this timing. Please remove the existing programme from your scheduler first!'}
                buttons={['Close']}
             ></IonAlert>

            <IonGrid className="progTalk-TableGrid">
                <IonRow className="ion-justify-content-center progTalk-TableHeader">
                    <IonCol size-sizeSm="3" className="progTalk-Data ion-text-wrap">Programme Talk</IonCol>
                    <IonCol size-sizeSm="3" className="progTalk-Data ion-text-wrap">Awarding University</IonCol>
                    <IonCol size-sizeSm="2" className="progTalk-Data ion-text-wrap">Time</IonCol>
                    <IonCol size-sizeSm="2" className="progTalk-Data ion-text-wrap">Venue</IonCol>
                    <IonCol size-sizeSm="2" className="progTalk-Data ion-text-wrap">Add to My Schedule</IonCol>
                </IonRow>

                {props.day1 === 'day1' ? 
                    <IonRow className="ion-justify-content-center" id="progTalk-DataRow">
                        <IonCol size-sizeSm="3" className="progTalk-Data progTalk-DataInfo ion-text-wrap progName">
                            <IonRouterLink href="progTalkInfo" id="uniLink" >
                                University of Wollongong - Computer Science Undergraduate Programme Talk
                            </IonRouterLink>    
                        </IonCol>
                        
                        <IonCol size-sizeSm="3" className="progTalk-Data progTalk-DataInfo ion-text-wrap" id="awardingUni">University of Wollongong</IonCol>
                        <IonCol size-sizeSm="2" className="progTalk-Data progTalk-DataInfo ion-text-wrap" id="talkTime">10:00 AM to 11:00 AM</IonCol>
                        <IonCol size-sizeSm="2" className="progTalk-Data progTalk-DataInfo ion-text-wrap" id="talkVenue">SIM HQ BLK A LT A.2.08</IonCol>
                        <IonCol size-sizeSm="2" className="progTalk-Data progTalk-DataInfo ion-text-wrap" id="addCol">
                            <IonButton className="progTalk-DataBtn" id="addBtn" size="small" style={{marginTop: "-5%", marginBottom: "-5%"}} onClick={displayRegisterAlert}>
                                <FontAwesomeIcon icon={faPlus} size="lg"/>
                            </IonButton>
                        </IonCol>
                    </IonRow> : '' 
                }

                {props.day2 === 'day2' ? 
                    <IonRow className="ion-justify-content-center" id="progTalk-DataRow">
                        <IonCol size-sizeSm="3" className="progTalk-Data progTalk-DataInfo ion-text-wrap progName">
                            <IonRouterLink href="ProgTalkInfo" id="uniLink">
                                University of London - Computer Science Undergraduate Programme Talk
                            </IonRouterLink>    
                        </IonCol>
                        
                        <IonCol size-sizeSm="3" className="progTalk-Data progTalk-DataInfo ion-text-wrap" id="awardingUni">University of London</IonCol>
                        <IonCol size-sizeSm="2" className="progTalk-Data progTalk-DataInfo ion-text-wrap" id="talkTime">10:00 AM to 11:00 AM</IonCol>
                        <IonCol size-sizeSm="2" className="progTalk-Data progTalk-DataInfo ion-text-wrap" id="talkVenue">SIM HQ BLK B LT B.2.01</IonCol>
                        <IonCol size-sizeSm="2" className="progTalk-Data progTalk-DataInfo ion-text-wrap" id="addCol">
                            <IonButton className="progTalk-DataBtn" id="addBtn" size="small" style={{marginTop: "-5%", marginBottom: "-5%"}} onClick={displayRegisterAlert}>
                                <FontAwesomeIcon icon={faPlus} size="lg"/>
                            </IonButton>
                        </IonCol>
                    </IonRow> : '' 
                }
            </IonGrid>
        </>
    );
};

export default ProgTalkSchedule;
import { IonGrid, IonRow, IonCol, IonButton, IonRouterLink, IonAlert } from '@ionic/react';
import React, { useState } from 'react';
import firebase from 'firebase';

import '../css/Global.css';
import '../css/ProgrammeTalks.css'

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { db } from '../firebase';
import { useAuth } from '../auth';

const ProgTalkSchedule: React.FC<{
    day1: any;
    day2: any;
    programmeTalk: any;
    openhouseDates: any;

}> = props => {
    const { userID } = useAuth();

    const programmeTalkDay1 = props.programmeTalk
        .filter((talk: any) => {
            return talk.date == props.openhouseDates[0]
        })

    const programmeTalkDay2 = props.programmeTalk
        .filter((talk: any) => {
            return talk.date == props.openhouseDates[1]
        })

    {/* Register Alert */ }
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const [registerFail, setRegisterFail] = useState(false);

    const displayRegisterAlert = () => {
        {/* Logic to check if there is another existing programme in My Schedule that is the same day & timing 
          of the programme the user wants to add*/}

        {/* if (exist) {
             setRegisterSuccess(true);
             setRegisterFail(false);
         } else {
             setRegisterFail(true);
            setRegisterSuccess(false);
        } */}

        {/* set state to disable the + btn in else {} */ }
    };

    const addToSchedule = (programmeTalk: any) => {
        try {
            // make check for schedule conflict then below
            db.collection('PersonalScheduler').doc(userID).update({
                registeredProgrammes: firebase.firestore.FieldValue.arrayUnion({
                    openhouseProgrammeID: programmeTalk.id,
                    openhouseProgrammeName: programmeTalk.talkName,
                    openhouseProgrammeDateTimeStart: programmeTalk.startTime,
                    openhouseProgrammeDateTimeEnd: programmeTalk.endTime,
                    openhouseProgrammeVenue: programmeTalk.venue
                })
            })
            displayRegisterAlert();
        } catch (e) {
            console.log(e);
        }
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
                    <IonCol sizeSm="3" className="progTalk-DataHeader ion-text-wrap">Programme Talk</IonCol>
                    <IonCol sizeSm="3" className="progTalk-DataHeader ion-text-wrap">Awarding University</IonCol>
                    <IonCol sizeSm="2" className="progTalk-DataHeader ion-text-wrap">Time</IonCol>
                    <IonCol sizeSm="2" className="progTalk-DataHeader ion-text-wrap">Venue</IonCol>
                    <IonCol sizeSm="2" className="progTalk-DataHeader ion-text-wrap">Add to My Schedule</IonCol>
                </IonRow>

                {props.day1 === 'day1' ?
                    programmeTalkDay1.map((programmeTalk: any) => {
                        return (
                            <IonRow className="ion-justify-content-center" id="progTalk-DataRow" key={programmeTalk.id}>
                                <IonCol sizeSm="3" className="progTalk-DataInfo ion-text-wrap progName">
                                    <IonRouterLink href="progTalkInfo" id="uniLink" >
                                        {programmeTalk.talkName}
                                    </IonRouterLink>
                                </IonCol>

                                <IonCol sizeSm="3" className="progTalk-DataInfo ion-text-wrap" id="awardingUni">{programmeTalk.awardingUni} </IonCol>
                                <IonCol sizeSm="2" className="progTalk-DataInfo ion-text-wrap" id="talkTime">{programmeTalk.startTime + " to " + programmeTalk.endTime}</IonCol>
                                <IonCol sizeSm="2" className="progTalk-DataInfo ion-text-wrap" id="talkVenue">{programmeTalk.venue}</IonCol>
                                <IonCol sizeSm="2" className="progTalk-DataInfo ion-text-wrap" id="addCol">
                                    <IonButton className="progTalk-DataBtn" id="addBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => addToSchedule(programmeTalk)}>
                                        <FontAwesomeIcon icon={faPlus} size="lg" />
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        )
                    }) : ''
                }

                {props.day2 === 'day2' ?
                    programmeTalkDay2.map((programmeTalk: any) => {
                        return (
                            <IonRow className="ion-justify-content-center" id="progTalk-DataRow" key={programmeTalk.id}>
                                <IonCol sizeSm="3" className="progTalk-DataInfo ion-text-wrap progName">
                                    <IonRouterLink href="ProgTalkInfo" id="uniLink">
                                        {programmeTalk.talkName}
                                    </IonRouterLink>
                                </IonCol>

                                <IonCol sizeSm="3" className="progTalk-DataInfo ion-text-wrap" id="awardingUni">{programmeTalk.awardingUni}</IonCol>
                                <IonCol sizeSm="2" className="progTalk-DataInfo ion-text-wrap" id="talkTime">{programmeTalk.startTime + " to " + programmeTalk.endTime}</IonCol>
                                <IonCol sizeSm="2" className="progTalk-DataInfo ion-text-wrap" id="talkVenue">{programmeTalk.venue}</IonCol>
                                <IonCol sizeSm="2" className="progTalk-DataInfo ion-text-wrap" id="addCol">
                                    <IonButton className="progTalk-DataBtn" id="addBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => addToSchedule(programmeTalk)}>
                                        <FontAwesomeIcon icon={faPlus} size="lg" />
                                    </IonButton>
                                </IonCol>
                            </IonRow>)
                    }) : ''
                }
            </IonGrid>
        </>
    );
};

export default ProgTalkSchedule;
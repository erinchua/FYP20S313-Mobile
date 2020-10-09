import { IonGrid, IonRow, IonCol, IonButton, IonRouterLink, IonAlert, IonLoading } from '@ionic/react';
import React, { useState } from 'react';
import firebase from 'firebase';
import { sync } from 'ionicons/icons';

import '../../css/Global.css';
import '../../css/ProgrammeTalks.css'

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { db } from '../../firebase';
import { useAuth } from '../../auth';
import {Link} from 'react-router-dom';
import { conflictCheck } from '../../checker';

const ProgTalkSchedule: React.FC<{
    day1: any;
    day2: any;
    programmeTalk: any;
    openhouseDates: any;
}> = props => {
    const { userID } = useAuth();

    {/* Register Alert */ }
    //const [registerSuccess, setRegisterSuccess] = useState(false);
    //const [registerFail, setRegisterFail] = useState(false);
    const [alert, setAlert] = useState({ registerSuccess: false, registerFail: false, loading: false });

    const programmeTalkDay1 = props.programmeTalk
        .filter((talk: any) => {
            return talk.date == props.openhouseDates[0]
        })

    const programmeTalkDay2 = props.programmeTalk
        .filter((talk: any) => {
            return talk.date == props.openhouseDates[1]
        })

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

    const addToSchedule = async (programmeTalk: any) => {
        try {
            conflictCheck(programmeTalk, userID);
            // make check for schedule conflict then below
            setAlert({ registerSuccess: false, registerFail: false, loading: true });
            await db.collection('PersonalScheduler').doc(userID).update({
                registeredProgrammes: firebase.firestore.FieldValue.arrayUnion(programmeTalk.id)
            });
            setAlert({ registerSuccess: true, registerFail: false, loading: false });
        } catch (e) {
            setAlert({ registerSuccess: false, registerFail: false, loading: false });
            console.log(e);
        }
    };

    return (
        <>
            <IonAlert
                isOpen={alert.registerSuccess}
                onDidDismiss={() => setAlert({ registerSuccess: false, registerFail: false, loading: false })}
                cssClass='alertBox'
                mode='md'
                header={'Successfully Registered'}
                message={'You have successfully registered for the programme talk and it has been successfully added to My Schedule.'}
                buttons={['Close']}
            ></IonAlert>

            <IonAlert
                isOpen={alert.registerFail}
                onDidDismiss={() => setAlert({ registerSuccess: false, registerFail: false, loading: false })}
                cssClass='alertBox'
                mode='md'
                header={'Registration Unsuccessful'}
                message={'There exists an open house programme in your scheduler at this timing. Please remove the existing programme from your scheduler first!'}
                buttons={['Close']}
            ></IonAlert>

            <IonGrid className="progTalk-TableGrid">
                <IonRow className="ion-justify-content-center progTalk-TableHeader">
                    <IonCol size="3" sizeSm="3" className="progTalk-DataHeader ion-text-wrap">Programme Talk</IonCol>
                    <IonCol size="3" sizeSm="3" className="progTalk-DataHeader ion-text-wrap">Awarding University</IonCol>
                    <IonCol size="2" sizeSm="2" className="progTalk-DataHeader ion-text-wrap">Time</IonCol>
                    <IonCol size="2" sizeSm="2" className="progTalk-DataHeader ion-text-wrap">Venue</IonCol>
                    <IonCol size="2" sizeSm="2" className="progTalk-DataHeader ion-text-wrap">Add to My Schedule</IonCol>
                </IonRow>

                {props.day1 === 'day1' ?
                    programmeTalkDay1.map((programmeTalk: any) => {
                        return (
                            <IonRow className="ion-justify-content-center" id="progTalk-DataRow" key={programmeTalk.id}>
                                <IonCol sizeSm="3" className="progTalk-DataInfo ion-text-wrap progName">
                                <Link to={`/programmeTalks/progTalkInfo/${programmeTalk.id}`}  id="uniLink">{programmeTalk.talkName}</Link>
                                   
                                        
                                
                                </IonCol>

                                <IonCol size="3" sizeSm="3" className="progTalk-DataInfo ion-text-wrap" id="awardingUni">{programmeTalk.awardingUni} </IonCol>
                                <IonCol size="2" sizeSm="2" className="progTalk-DataInfo ion-text-wrap" id="talkTime">{programmeTalk.startTime + " to " + programmeTalk.endTime}</IonCol>
                                <IonCol size="2" sizeSm="2" className="progTalk-DataInfo ion-text-wrap" id="talkVenue">{programmeTalk.venue}</IonCol>
                                <IonCol size="2" sizeSm="2" className="progTalk-DataInfo ion-text-wrap" id="addCol">
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
                                <Link to={`/programmeTalks/progTalkInfo/${programmeTalk.id}`}  id="uniLink">{programmeTalk.talkName}</Link>

                                </IonCol>

                                <IonCol size="3" sizeSm="3" className="progTalk-DataInfo ion-text-wrap" id="awardingUni">{programmeTalk.awardingUni}</IonCol>
                                <IonCol size="2" sizeSm="2" className="progTalk-DataInfo ion-text-wrap" id="talkTime">{programmeTalk.startTime + " to " + programmeTalk.endTime}</IonCol>
                                <IonCol size="2" sizeSm="2" className="progTalk-DataInfo ion-text-wrap" id="talkVenue">{programmeTalk.venue}</IonCol>
                                <IonCol size="2" sizeSm="2" className="progTalk-DataInfo ion-text-wrap" id="addCol">
                                    <IonButton className="progTalk-DataBtn" id="addBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => addToSchedule(programmeTalk)}>
                                        <FontAwesomeIcon icon={faPlus} size="lg" />
                                    </IonButton>
                                </IonCol>
                            </IonRow>)
                    }) : ''
                }
            </IonGrid>
            <IonLoading isOpen={alert.loading} />
        </>
    );
};

export default ProgTalkSchedule;
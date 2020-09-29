import { IonGrid, IonRow, IonCol, IonButton, IonRouterLink, IonAlert } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { auth, db } from "../firebase";
import { TalkSchedule, toTalkSchedule } from '../openHouseProg';

import '../css/Global.css';
import '../css/ProgrammeTalks.css'

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProgTalkSchedule: React.FC<{ day1: any; day2: any; }> = props => {
    const [talks, setTalks] = useState<TalkSchedule[]>([]);

    useEffect(() => {
        return db.collection('ProgrammesTalks').onSnapshot(({ docs }) => setTalks(docs.map(toTalkSchedule)));
    }, []);

    console.log(talks);

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
            


    const [programmeTalkDay1, setProgrammeTalkDay1] = useState<any[]>([]);
    const [programmeTalkDay2, setProgrammeTalkDay2] = useState<any[]>([]);

    useEffect(() => {
        db.collection("ProgrammeTalks")
            .where("date", "==", "21-Nov-2020")
            .get()
            .then((snapshot) => {
                const programmeTalk: any = [];
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    programmeTalk.push(data);
                });
                setProgrammeTalkDay1(programmeTalk);
            })
            .catch((error) => console.log(error));

        db.collection("ProgrammeTalks")
            .where("date", "==", "22-Nov-2020")
            .get()
            .then((snapshot) => {
                const programmeTalk: any = [];
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    programmeTalk.push(data);
                });
                setProgrammeTalkDay2(programmeTalk);
            })
            .catch((error) => console.log(error));

    }, []);
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
                    programmeTalkDay1.map((programmeTalk: any) => {
                        return (
                            <IonRow className="ion-justify-content-center" id="progTalk-DataRow">
                                <IonCol size-sizeSm="3" className="progTalk-Data progTalk-DataInfo ion-text-wrap progName">
                                    <IonRouterLink href="progTalkInfo" id="uniLink" >
                                        {programmeTalk.talkName}
                                    </IonRouterLink>
                                </IonCol>

                                <IonCol size-sizeSm="3" className="progTalk-Data progTalk-DataInfo ion-text-wrap" id="awardingUni">{programmeTalk.awardingUni} </IonCol>
                                <IonCol size-sizeSm="2" className="progTalk-Data progTalk-DataInfo ion-text-wrap" id="talkTime">{programmeTalk.startTime + " to " + programmeTalk.endTime}</IonCol>
                                <IonCol size-sizeSm="2" className="progTalk-Data progTalk-DataInfo ion-text-wrap" id="talkVenue">{programmeTalk.venue}</IonCol>
                                <IonCol size-sizeSm="2" className="progTalk-Data progTalk-DataInfo ion-text-wrap" id="addCol">
                                    <IonButton className="progTalk-DataBtn" id="addBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }}>
                                        <FontAwesomeIcon icon={faPlus} size="lg" />
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        )
                    })
                    : ''}



                {props.day2 === 'day2' ?
                    programmeTalkDay2.map((programmeTalk: any) => {
                        return (
                            <IonRow className="ion-justify-content-center" id="progTalk-DataRow">
                                <IonCol size-sizeSm="3" className="progTalk-Data progTalk-DataInfo ion-text-wrap progName">
                                    <IonRouterLink href="ProgTalkInfo" id="uniLink">
                                        {programmeTalk.talkName}
                                    </IonRouterLink>
                                </IonCol>

                                <IonCol size-sizeSm="3" className="progTalk-Data progTalk-DataInfo ion-text-wrap" id="awardingUni">{programmeTalk.awardingUni}</IonCol>
                                <IonCol size-sizeSm="2" className="progTalk-Data progTalk-DataInfo ion-text-wrap" id="talkTime">{programmeTalk.startTime + " to " + programmeTalk.endTime}</IonCol>
                                <IonCol size-sizeSm="2" className="progTalk-Data progTalk-DataInfo ion-text-wrap" id="talkVenue">{programmeTalk.venue}</IonCol>
                                <IonCol size-sizeSm="2" className="progTalk-Data progTalk-DataInfo ion-text-wrap" id="addCol">
                                    <IonButton className="progTalk-DataBtn" id="addBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }}>
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
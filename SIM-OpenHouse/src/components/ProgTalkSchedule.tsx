import { IonGrid, IonRow, IonCol, IonButton, IonRouterLink } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { auth, db } from "../firebase";


import '../css/Global.css';
import '../css/ProgrammeTalks.css'

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProgTalkSchedule: React.FC<{
    day1: any;
    day2: any;
    openhouseDates: any;
}> = props => {

    const [programmeTalkDay1, setProgrammeTalkDay1] = useState<any[]>([]);
    const [programmeTalkDay2, setProgrammeTalkDay2] = useState<any[]>([]);
    console.log("Openhouse dates: " + props.openhouseDates)
    useEffect(() => {
        db.collection("ProgrammeTalks")
            .where("date", "==", props.openhouseDates[0])
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
            .where("date", "==", props.openhouseDates[1])
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

    }, [props.openhouseDates]);
    return (
        <>
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
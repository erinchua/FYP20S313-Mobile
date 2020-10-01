import { IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import React from 'react';

import '../css/Global.css';
import '../css/ProgrammeTalks.css'

import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProgTalkLiveTalks: React.FC<{
    day1: any;
    day2: any;
    liveTalk: any
    openhouseDates: any
}> = props => {


    const liveTalkDay1 = props.liveTalk.filter((talk: any) => {
        return talk.date == props.openhouseDates[0]
    })

    const liveTalkDay2 = props.liveTalk.filter((talk: any) => {
        return talk.date == props.openhouseDates[1]
    })

    return (
        <>
            <IonGrid className="progTalk-TableGrid">
                <IonRow className="ion-justify-content-center progTalk-TableHeader">
                    <IonCol size-sizeSm="3" className="progTalk-DataHeader ion-text-wrap">Programme Talk</IonCol>
                    <IonCol size-sizeSm="3" className="progTalk-DataHeader ion-text-wrap">Awarding University</IonCol>
                    <IonCol size-sizeSm="2" className="progTalk-DataHeader ion-text-wrap">Time</IonCol>
                    <IonCol size-sizeSm="2" className="progTalk-DataHeader ion-text-wrap">Venue</IonCol>
                    <IonCol size-sizeSm="2" className="progTalk-DataHeader ion-text-wrap">View Stream</IonCol>
                </IonRow>

                {props.day1 === 'day1' ?
                    liveTalkDay1.map((programmeTalk: any) => {
                        return (
                            <IonRow className="ion-justify-content-center" id="progTalkSchedule-DataRow">
                                <IonCol size-sizeSm="3" className="progTalk-DataInfo ion-text-wrap progName">
                                    {programmeTalk.talkName}
                                </IonCol>

                                <IonCol size-sizeSm="3" className="progTalk-DataInfo ion-text-wrap" id="awardingUni">{programmeTalk.awardingUni} </IonCol>
                                <IonCol size-sizeSm="2" className="progTalk-DataInfo ion-text-wrap" id="talkTime">{programmeTalk.startTime + " to " + programmeTalk.endTime}</IonCol>
                                <IonCol size-sizeSm="2" className="progTalk-DataInfo ion-text-wrap" id="talkVenue">{programmeTalk.venue}</IonCol>
                                <IonCol size-sizeSm="2" className="progTalk-DataInfo ion-text-wrap" id="addCol">
                                    <IonButton className="progTalk-DataBtn" id="addBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }}>
                                        <FontAwesomeIcon icon={faVideo} size="lg" />
                                    </IonButton>
                                </IonCol>
                            </IonRow>)
                    }) : ''
                }

                {props.day2 === 'day2' ?
                    liveTalkDay2.map((programmeTalk: any) => {
                        return (
                            <IonRow className="ion-justify-content-center" id="progTalk-DataRow">
                                <IonCol size-sizeSm="3" className="progTalk-DataInfo ion-text-wrap progName">
                                    {programmeTalk.talkName}
                                </IonCol>

                                <IonCol size-sizeSm="3" className="progTalk-DataInfo ion-text-wrap" id="awardingUni">{programmeTalk.awardingUni} </IonCol>
                                <IonCol size-sizeSm="2" className="progTalk-DataInfo ion-text-wrap" id="talkTime">{programmeTalk.startTime + " to " + programmeTalk.endTime}</IonCol>
                                <IonCol size-sizeSm="2" className="progTalk-DataInfo ion-text-wrap" id="talkVenue">{programmeTalk.venue}</IonCol>
                                <IonCol size-sizeSm="2" className="progTalk-DataInfo ion-text-wrap" id="addCol">
                                    <IonButton className="progTalk-DataBtn" id="addBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }}>
                                        <FontAwesomeIcon icon={faVideo} size="lg" />
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        )
                    })
                    : ''
                }
            </IonGrid>
        </>
    );
};

export default ProgTalkLiveTalks;
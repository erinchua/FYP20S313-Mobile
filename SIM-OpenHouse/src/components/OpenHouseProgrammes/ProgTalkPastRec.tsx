import { IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import React from 'react';

import '../../css/Global.css';
import '../../css/ProgrammeTalks.css'

import { faFileVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProgTalkPastRec: React.FC<{ day1: any, day2: any, recordedTalk: any, openhouseDates: any }> = props => {
    
    const recordedTalkDay1 = props.recordedTalk.filter((talk: any) => { return talk.date == props.openhouseDates[0] })
    const recordedTalkDay2 = props.recordedTalk.filter((talk: any) => { return talk.date == props.openhouseDates[1] })

    return (
        <>
            <IonGrid className="progTalk-TableGrid">
                <IonRow className="ion-justify-content-center progTalk-TableHeader">
                    <IonCol size="4" sizeSm="4" className="progTalk-DataHeader ion-text-wrap">Programme Talk</IonCol>
                    <IonCol size="4" sizeSm="4" className="progTalk-DataHeader ion-text-wrap">Awarding University</IonCol>
                    <IonCol size="4" sizeSm="4" className="progTalk-DataHeader ion-text-wrap">View Recording</IonCol>
                </IonRow>

                {props.day1 === 'day1' ?
                    recordedTalkDay1.map((programmeTalk: any) => {
                        return (
                            <IonRow className="ion-justify-content-center" id="progTalk-DataRow" key={programmeTalk.id}>
                                <IonCol size="4" sizeSm="4" className="progTalk-DataInfo ion-text-wrap progName">{programmeTalk.talkName}</IonCol>
                                <IonCol size="4" sizeSm="4" className="progTalk-DataInfo ion-text-wrap" id="awardingUni">{programmeTalk.awardingUni}</IonCol>
                                <IonCol size="4" sizeSm="4" className="progTalk-DataInfo ion-text-wrap" id="addCol">
                                    <IonButton onClick={e => { e.preventDefault(); window.open(programmeTalk.link, '_blank') }} className="progTalk-DataBtn" id="addBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }}>
                                        <FontAwesomeIcon icon={faFileVideo} size="lg" />
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        )
                    })
                    : ''
                }

                {props.day2 === 'day2' ?
                    recordedTalkDay2.map((programmeTalk: any) => {
                        return (
                            <IonRow className="ion-justify-content-center" id="progTalk-DataRow" key={programmeTalk.id}>
                                <IonCol size="4" sizeSm="4" className="progTalk-DataInfo ion-text-wrap progName">{programmeTalk.talkName}</IonCol>
                                <IonCol size="4" sizeSm="4" className="progTalk-DataInfo ion-text-wrap" id="awardingUni">{programmeTalk.awardingUni}</IonCol>
                                <IonCol size="4" sizeSm="4" className="progTalk-DataInfo ion-text-wrap" id="addCol">
                                    <IonButton onClick={e => { e.preventDefault(); window.open(programmeTalk.link, '_blank') }} className="progTalk-DataBtn" id="addBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }}>
                                        <FontAwesomeIcon icon={faFileVideo} size="lg" />
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

export default ProgTalkPastRec;
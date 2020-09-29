import { IonGrid, IonRow, IonCol, IonButton, IonRouterLink } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { auth, db } from "../firebase";


import '../css/Global.css';
import '../css/ProgrammeTalks.css'

import { faFileVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProgTalkPastRec: React.FC<{
    day1: any;
    day2: any;
}> = props => {
    const [programmeTalkDay1, setProgrammeTalkDay1] = useState<any[]>([]);
    const [programmeTalkDay2, setProgrammeTalkDay2] = useState<any[]>([]);

    useEffect(() => {
        db.collection("ProgrammeTalks")
            .where("date", "==", "21-Nov-2020")
            .where("hasRecording", "==", true)
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
            .where("hasRecording", "==", true)
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
            <IonGrid className="progTalk-TableGrid">
                <IonRow className="ion-justify-content-center progTalk-TableHeader">
                    <IonCol size-sizeSm="4" className="progTalk-Data ion-text-wrap">Programme Talk</IonCol>
                    <IonCol size-sizeSm="4" className="progTalk-Data ion-text-wrap">Awarding University</IonCol>
                    <IonCol size-sizeSm="4" className="progTalk-Data ion-text-wrap">View Recording</IonCol>
                </IonRow>

                {props.day1 === 'day1' ?
                    programmeTalkDay1.map((programmeTalk) => {
                        return (
                            <IonRow className="ion-justify-content-center" id="progTalk-DataRow">
                                <IonCol size-sizeSm="4" className="progTalk-Data progTalk-DataInfo ion-text-wrap progName">
                                    {programmeTalk.talkName}

                                </IonCol>
                                <IonCol size-sizeSm="4" className="progTalk-Data progTalk-DataInfo ion-text-wrap" id="awardingUni">{programmeTalk.awardingUni}</IonCol>
                                <IonCol size-sizeSm="4" className="progTalk-Data progTalk-DataInfo ion-text-wrap" id="addCol">
                                    <IonButton className="progTalk-DataBtn" id="addBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }}>
                                        <FontAwesomeIcon icon={faFileVideo} size="lg" />
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        )
                    })
                    : ''
                }

                {props.day2 === 'day2' ?
                    programmeTalkDay2.map((programmeTalk) => {
                        return (
                            <IonRow className="ion-justify-content-center" id="progTalk-DataRow">
                                <IonCol size-sizeSm="4" className="progTalk-Data progTalk-DataInfo ion-text-wrap progName">
                                    {programmeTalk.talkName}
                                </IonCol>
                                <IonCol size-sizeSm="4" className="progTalk-Data progTalk-DataInfo ion-text-wrap" id="awardingUni">{programmeTalk.awardingUni}</IonCol>
                                <IonCol size-sizeSm="4" className="progTalk-Data progTalk-DataInfo ion-text-wrap" id="addCol">
                                    <IonButton className="progTalk-DataBtn" id="addBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }}>
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
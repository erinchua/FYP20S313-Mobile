import { IonGrid, IonRow, IonCol, IonButton, IonAlert, IonLoading } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../../css/Global.css';
import '../../css/ProgrammeTalks.css'
import { db } from '../../firebase';
import { useAuth } from '../../modules/auth';
import { toDateObject } from '../../modules/convert';

const ProgTalkSchedule: React.FC<{
    day1: any;
    day2: any;
    programmeTalk: any;
    openhouseDates: any;
}> = props => {
    const { userID } = useAuth();
    const [alert, setAlert] = useState({ registerSuccess: false, registerFail: false, loading: false });

    const programmeTalkDay1 = props.programmeTalk
        .filter((talk: any) => {
            return talk.date == props.openhouseDates[0]
        })

    const programmeTalkDay2 = props.programmeTalk
        .filter((talk: any) => {
            return talk.date == props.openhouseDates[1]
        })

    const addToSchedule = async (programme: any) => {
        try {
            setAlert({ registerSuccess: false, registerFail: false, loading: true });

            await db.collection('PersonalScheduler').doc(userID).get().then((snapshot: any) => {
                const registered = snapshot.data().registeredProgrammes;
                
                if (registered != null) {
                    if (registered.length > 0) {
                        let check = false;

                        registered.forEach((item: any) => {
                        //for (let item of registered) {
                            const itemType = item.split("-");

                            switch (itemType[0]) {
                                case "talk":
                                    db.collection('ProgrammeTalks').doc(item).onSnapshot((doc: any) => {

                                        if (programme.date == doc.data().date) {

                                            const progStart = toDateObject(programme.date, programme.startTime), progEnd = toDateObject(programme.date, programme.endTime);
                                            const itemStart = toDateObject(doc.data().date, doc.data().startTime), itemEnd = toDateObject(doc.data().date, doc.data().endTime);

                                            if ((progStart >= itemStart && progStart < itemEnd) || (progEnd > itemStart && progEnd <= itemEnd)) {
                                                check = true;
                                            }
                                        }
                                    });

                                    break;

                                case "tour":
                                    db.collection('GuidedTours').doc(item).onSnapshot((doc: any) => {

                                        if (programme.date == doc.data().date) {

                                            const progStart = toDateObject(programme.date, programme.startTime), progEnd = toDateObject(programme.date, programme.endTime);
                                            const itemStart = toDateObject(doc.data().date, doc.data().startTime), itemEnd = toDateObject(doc.data().date, doc.data().endTime);

                                            if ((progStart >= itemStart && progStart < itemEnd) || (progEnd > itemStart && progEnd <= itemEnd)) {
                                                check = true;
                                            }
                                        }
                                    });
                                    
                                    break;

                                case "performance":
                                    db.collection('Performances').doc(item).onSnapshot((doc: any) => {

                                        if (programme.date == doc.data().date) {

                                            const progStart = toDateObject(programme.date, programme.startTime), progEnd = toDateObject(programme.date, programme.endTime);
                                            const itemStart = toDateObject(doc.data().date, doc.data().startTime), itemEnd = toDateObject(doc.data().date, doc.data().endTime);

                                            if ((progStart >= itemStart && progStart < itemEnd) || (progEnd > itemStart && progEnd <= itemEnd)) {
                                                check = true;
                                            }
                                        }
                                    });
                                    
                                    break;

                                default:
                            }
                        });

                        setTimeout(async () => {
                            if (check) {
                                setAlert({ registerSuccess: false, registerFail: true, loading: false });
                            } else {
                                await db.collection('PersonalScheduler').doc(userID).update({
                                    registeredProgrammes: firebase.firestore.FieldValue.arrayUnion(programme.id)
                                });
                                setAlert({ registerSuccess: true, registerFail: false, loading: false });
                            };

                            check = false;
                        }, 500);

                    } else {
                        db.collection('PersonalScheduler').doc(userID).update({
                            registeredProgrammes: firebase.firestore.FieldValue.arrayUnion(programme.id)
                        });
                        setAlert({ registerSuccess: true, registerFail: false, loading: false });
                    }

                } else {
                    db.collection('PersonalScheduler').doc(userID).update({
                        registeredProgrammes: firebase.firestore.FieldValue.arrayUnion(programme.id)
                    });
                    setAlert({ registerSuccess: true, registerFail: false, loading: false });
                }
            });

        } catch (e) {
            setAlert({ registerSuccess: false, registerFail: false, loading: false });
            return console.log(e);
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
                                <IonCol size="3" sizeSm="3" className="progTalk-DataInfo ion-text-wrap progName">
                                    <Link id="uniLink" to={`/programmeTalks/progTalkInfo/${programmeTalk.id}`}>{programmeTalk.talkName}</Link>
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
                                    <Link id="uniLink" to={`/programmeTalks/progTalkInfo/${programmeTalk.id}`}>{programmeTalk.talkName}</Link>
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
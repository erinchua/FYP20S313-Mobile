import { IonGrid, IonRow, IonCol, IonButton, IonRouterLink, IonAlert, IonLoading } from '@ionic/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sync } from 'ionicons/icons';
import firebase from 'firebase';

import '../../css/Global.css';
import '../../css/ProgrammeTalks.css'

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { db } from '../../firebase';
import { useAuth } from '../../auth';

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

    const addToSchedule = async (programme: any) => {
        try {
            setAlert({ registerSuccess: false, registerFail: false, loading: true });

            await db.collection('PersonalScheduler').doc(userID).get().then((snapshot: any) => {
                const registered = snapshot.data().registeredProgrammes;
                
                if (registered != null) {
                    if (registered.length > 0) {
                        
                        for (let item of registered) {
                            const itemType = item.split("-");
            
                            switch (itemType[0]) {
                                case "talk":
                                    return db.collection('ProgrammeTalks').doc(item).onSnapshot((doc: any) => {

                                        if (programme.date == doc.data().date) {

                                            let progStart = Number(programme.startTime.split(":")[0]), progEnd = Number(programme.endTime.split(":")[0]);
                                            let itemStart = Number(doc.data().startTime.split(":")[0]), itemEnd = Number(doc.data().endTime.split(":")[0]);

                                            if (programme.startTime.slice(-2, programme.startTime.length) == "PM") progStart += 12;
                                            if (programme.endTime.slice(-2, programme.startTime.length) == "PM") progStart += 12;
                                            if (doc.data().startTime.slice(-2, doc.data().startTime.length) == "PM") progStart += 12;
                                            if (doc.data().endTime.slice(-2, doc.data().endTime.length) == "PM") progStart += 12;
            
                                            if ((progStart >= itemStart && progStart < itemEnd) || (progEnd > itemStart && progEnd <= itemEnd)) {
                                                setAlert({ registerSuccess: false, registerFail: true, loading: false });
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

                                case "tour":
                                    return db.collection('GuidedTours').doc(item).onSnapshot((doc: any) => {

                                        if (programme.date == doc.data().date) {

                                            let progStart = Number(programme.startTime.split(":")[0]), progEnd = Number(programme.endTime.split(":")[0]);
                                            let itemStart = Number(doc.data().startTime.split(":")[0]), itemEnd = Number(doc.data().endTime.split(":")[0]);

                                            if (programme.startTime.slice(-2, programme.startTime.length) == "PM") progStart += 12;
                                            if (programme.endTime.slice(-2, programme.startTime.length) == "PM") progStart += 12;
                                            if (doc.data().startTime.slice(-2, doc.data().startTime.length) == "PM") progStart += 12;
                                            if (doc.data().endTime.slice(-2, doc.data().endTime.length) == "PM") progStart += 12;
            
                                            if ((progStart >= itemStart && progStart < itemEnd) || (progEnd > itemStart && progEnd <= itemEnd)) {
                                                setAlert({ registerSuccess: false, registerFail: true, loading: false });
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

                                case "performance":
                                    return db.collection('Performances').doc(item).onSnapshot((doc: any) => {

                                        if (programme.date == doc.data().date) {

                                            let progStart = Number(programme.startTime.split(":")[0]), progEnd = Number(programme.endTime.split(":")[0]);
                                            let itemStart = Number(doc.data().startTime.split(":")[0]), itemEnd = Number(doc.data().endTime.split(":")[0]);

                                            if (programme.startTime.slice(-2, programme.startTime.length) == "PM") progStart += 12;
                                            if (programme.endTime.slice(-2, programme.startTime.length) == "PM") progStart += 12;
                                            if (doc.data().startTime.slice(-2, doc.data().startTime.length) == "PM") progStart += 12;
                                            if (doc.data().endTime.slice(-2, doc.data().endTime.length) == "PM") progStart += 12;
            
                                            if ((progStart >= itemStart && progStart < itemEnd) || (progEnd > itemStart && progEnd <= itemEnd)) {
                                                setAlert({ registerSuccess: false, registerFail: true, loading: false });
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

                                default:
                                    setAlert({ registerSuccess: true, registerFail: false, loading: false });
                            }

                            if (!alert.registerSuccess) {
                                break;
                            }
                        }


                        {/* registered.forEach((item: any) => {
                            const itemType = item.split("-");
                            console.log("-----------------------------------------------------------")
                            console.log(item)
                            console.log("-----------------------------------------------------------")
            
                            switch (itemType[0]) {
                                case "talk":
                                    return db.collection('ProgrammeTalks').doc(item).onSnapshot((doc: any) => {
                                        //console.log(doc.data().startTime.slice(-2, doc.data().startTime.length))
                                        console.log("date", programmeTalk.date, doc.data().date)
                                        if (programmeTalk.date == doc.data().date) {
                                            //console.log(true)
                                            let progStart = Number(programmeTalk.startTime.split(":")[0]), progEnd = Number(programmeTalk.endTime.split(":")[0]);
                                            let itemStart = Number(doc.data().startTime.split(":")[0]), itemEnd = Number(doc.data().endTime.split(":")[0]);
                                            //console.log(progStart, itemStart)
                                            if (programmeTalk.startTime.slice(-2, programmeTalk.startTime.length) == "PM") progStart += 12;
                                            if (programmeTalk.endTime.slice(-2, programmeTalk.startTime.length) == "PM") progStart += 12;
                                            if (doc.data().startTime.slice(-2, doc.data().startTime.length) == "PM") progStart += 12;
                                            if (doc.data().endTime.slice(-2, doc.data().endTime.length) == "PM") progStart += 12;
            
                                            //console.log("progStart", progStart)
                                            //console.log("progEnd", progEnd)
                                            //console.log("itemStart", itemStart)
                                            //console.log("itenEnd", itemEnd)
            
                                            if ((progStart >= itemStart && progStart < itemEnd) || (progEnd > itemStart && progEnd <= itemEnd)) {
                                                console.log("conflict", true)
                                                console.log("conflict", programmeTalk.id, doc.data().id)
                                                //isConflict = true;
                                                int = 1
                                                //return;
                                            } else {
                                                console.log("conflict", false)
                                                console.log("conflict", programmeTalk.id, doc.data().id)
                                                //isConflict = false;
                                                int = 0
                                                console.log("conflict test 1", int)

                                                db.collection('PersonalScheduler').doc(userID).update({
                                                    registeredProgrammes: firebase.firestore.FieldValue.arrayUnion(programmeTalk.id)
                                                });
                                                //return;
                                            }
                                        } else {
                                            //isConflict = false;
                                            int = 0
                                            //console.log("asdsdadsd")
                                            //return;
                                            db.collection('PersonalScheduler').doc(userID).update({
                                                registeredProgrammes: firebase.firestore.FieldValue.arrayUnion(programmeTalk.id)
                                            });
                                        }
                                    });
                                case "tour":
                                    //return db.collection('GuidedTours').doc(item).onSnapshot(doc => {});
                                case "performance":
                                    //return db.collection('Performances').doc(item).onSnapshot(doc => {});
                                default:
                                    console.log("default")
                            }
                        }); */}


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

            if (alert.registerSuccess) {
                // disable button
            }

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
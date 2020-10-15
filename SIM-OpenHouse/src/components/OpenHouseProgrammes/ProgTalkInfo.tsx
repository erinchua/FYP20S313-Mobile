import { IonGrid, IonRow, IonCol, IonButton, IonPage, IonContent, IonAlert, IonHeader } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import firebase from 'firebase';

import '../../css/Global.css';
import '../../css/ProgrammeTalks.css';
import TopNav from '../TopNav';
import { db } from '../../firebase';
import { useAuth } from '../../modules/auth';
import { toDateObject } from '../../modules/convert';

interface RouteParams extends RouteComponentProps<{
    id: string;
}> { }

const ProgTalkInfo: React.FC<RouteParams> = ({match}) => {
    const { userID } = useAuth();

    const [alert, setAlert] = useState({ registerSuccess: false, registerFail: false, loading: false });
    const [buttonDisabled, setButtonDisabled] = useState(false);

    {/*Programme Talk selected */}
    const [programmeTalk,setProgrammeTalk] = useState([]);

    const fetchData = async () =>{
        const talkRef = db.collection('ProgrammeTalks').doc(match.params.id);
        const doc: any =  (await talkRef.get()).data();
        setProgrammeTalk(doc);
    };

    useEffect(() => {
        fetchData();
        db.collection('PersonalScheduler').doc(userID).get().then((snapshot: any) => {
            const registered = snapshot.data().registeredProgrammes;
            
            if (registered != null) {
                if (registered.length > 0) {

                    registered.forEach((item: any) => {
                        if (item === match.params.id)
                            setButtonDisabled(true);
                    });
                }
            }
        });
    }, []);

    const addToSchedule = async (programme: any) => {
        try {
            setAlert({ registerSuccess: false, registerFail: false, loading: true });

            await db.collection('PersonalScheduler').doc(userID).get().then((snapshot: any) => {
                const registered = snapshot.data().registeredProgrammes;
                
                if (registered != null) {
                    if (registered.length > 0) {
                        let check = false;

                        registered.forEach((item: any) => {
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
        <React.Fragment>
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

            <IonPage>
                <IonHeader>
                    <TopNav title="Programme Talks" route="/u/openHouseMain/programmeTalks" backarrow={ true } hamburger={ true } />
                </IonHeader>
                
                <IonContent fullscreen className="progTalkIonContent">
                    <IonGrid id="progTalkInfoGrid">
                        {/* Programme Talk */}
                        <IonRow>
                            <IonCol size="4" sizeSm="4" className="progTalkInfoHeader">
                                Programme Talk:
                            </IonCol>

                            <IonCol size="8" sizeSm="8" className="progTalkInfoData">
                                {programmeTalk.talkName}
                            </IonCol>
                        </IonRow>

                        {/* Awarding Uni */}
                        <IonRow>
                            <IonCol size="4" sizeSm="4" className="progTalkInfoHeader">
                                Awarding University:
                            </IonCol>

                            <IonCol size="8" sizeSm="8" className="progTalkInfoData">
                                {programmeTalk.awardingUni}
                            </IonCol>
                        </IonRow>

                        {/* Date */}
                        <IonRow>
                            <IonCol size="4" sizeSm="4" className="progTalkInfoHeader">
                                Date:
                            </IonCol>

                            <IonCol size="8" sizeSm="8" className="progTalkInfoData">
                                {programmeTalk.date}
                            </IonCol>
                        </IonRow>

                        {/* Time */}
                        <IonRow>
                            <IonCol size="4" sizeSm="4" className="progTalkInfoHeader">
                                Time:
                            </IonCol>

                            <IonCol size="8" sizeSm="8" className="progTalkInfoData">
                                {programmeTalk.startTime+" to "+programmeTalk.endTime}
                            </IonCol>
                        </IonRow>

                        {/* Venue */}
                        <IonRow>
                            <IonCol size="4" sizeSm="4" className="progTalkInfoHeader">
                                Venue:
                            </IonCol>

                            <IonCol size="8" sizeSm="8" className="progTalkInfoData">
                                {programmeTalk.venue}
                            </IonCol>
                        </IonRow>

                        <IonRow class="ion-justify-content-center" style={{marginTop:"10%"}}>
                            <IonButton size="large" id="registerProgTalkBtn" type="submit" onClick={() => addToSchedule(programmeTalk)} disabled={buttonDisabled}>REGISTER</IonButton>
                        </IonRow>
                    </IonGrid>
                    

                </IonContent>
            </IonPage>
        </React.Fragment>
    );
};

export default ProgTalkInfo;
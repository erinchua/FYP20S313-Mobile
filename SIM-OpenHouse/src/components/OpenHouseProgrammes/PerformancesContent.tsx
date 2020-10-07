import { IonGrid, IonRow, IonCol, IonButton, IonAlert, IonLoading } from '@ionic/react';
import React, { useState } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from 'firebase';

import '../../css/Global.css';
import '../../css/OpenHouseActivities.css'
import { db } from '../../firebase';
import { useAuth } from '../../auth';

const PerformancesContent: React.FC<{ day1: any; day2: any; performances: any; openhouseDates: any }> = props => {
    const { userID } = useAuth();
    const [alert, setAlert] = useState({ registerSuccess: false, registerFail: false, loading: false });

    const performanceDay1 = props.performances.filter((performance: any) => {
        return performance.date == props.openhouseDates[0]
    })
    const performanceDay2 = props.performances.filter((performance: any) => {
        return performance.date == props.openhouseDates[1]
    })

    const addToSchedule = async (programmeTalk: any) => {
        try {
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

            <IonGrid id="performancesContent-tableGrid">
                <IonRow id="performancesContent-tableHeader" className="ion-justify-content-center">
                    <IonCol className="performancesContent-Header ion-text-wrap">Performance</IonCol>
                    <IonCol className="performancesContent-Header ion-text-wrap">Time</IonCol>
                    <IonCol className="performancesContent-Header ion-text-wrap">Venue</IonCol>
                    <IonCol className="performancesContent-Header ion-text-wrap">Add to My Schedule</IonCol>
                </IonRow>
                {props.day1 === 'day1' ?
                    performanceDay1.map((performance: any) => {
                        return (
                            <IonRow className="ion-justify-content-center" key={performance.id}>
                                <IonCol className="performancesContent-Data ion-text-wrap">{performance.performanceName}</IonCol>
                                <IonCol className="performancesContent-Data ion-text-wrap">{performance.startTime + " to " + performance.endTime}</IonCol>
                                <IonCol className="performancesContent-Data ion-text-wrap">{performance.venue}</IonCol>
                                <IonCol className="performancesContent-Data ion-text-wrap">
                                    <IonButton className="performancesContent-DataBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => addToSchedule(performance)}>
                                        <FontAwesomeIcon icon={faPlus} size="lg" />
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        )
                    })
                    : ''
                }
                {props.day2 === 'day2' ?
                    performanceDay2.map((performance: any) => {
                        return (
                            <IonRow className="ion-justify-content-center" key={performance.id}>
                                <IonCol className="performancesContent-Data ion-text-wrap">{performance.performanceName}</IonCol>
                                <IonCol className="performancesContent-Data ion-text-wrap">{performance.startTime + " to " + performance.endTime}</IonCol>
                                <IonCol className="performancesContent-Data ion-text-wrap">{performance.venue}</IonCol>
                                <IonCol className="performancesContent-Data ion-text-wrap">
                                    <IonButton className="performancesContent-DataBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => addToSchedule(performance)}>
                                        <FontAwesomeIcon icon={faPlus} size="lg" />
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        )
                    })
                    : ''
                }
            </IonGrid>
            <IonLoading isOpen={alert.loading} />
        </>
    );

};

export default PerformancesContent;
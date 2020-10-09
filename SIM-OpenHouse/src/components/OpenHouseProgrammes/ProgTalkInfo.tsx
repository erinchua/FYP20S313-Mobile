import { IonGrid, IonRow, IonCol, IonButton, IonPage, IonContent, IonAlert, IonHeader } from '@ionic/react';
import React, { useState,useEffect } from 'react';
import {RouteComponentProps} from 'react-router'
import '../../css/Global.css';
import '../../css/ProgrammeTalks.css'
import { db } from '../../firebase';

import TopNav from '../TopNav';

interface RouteParams extends RouteComponentProps<{
    id: string;
}> { }

const ProgTalkInfo: React.FC<RouteParams> = ({match}) => {

    {/* Register Alert */}
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const [registerFail, setRegisterFail] = useState(false);

    {/*Programme Talk selected */}
    const [programmeTalk,setProgrammeTalk] = useState([])

    const fetchData = async () =>{

        const talkRef = db.collection('ProgrammeTalks').doc(match.params.id)
        const doc :any =  (await talkRef.get()).data()
        setProgrammeTalk(doc)
    }
    useEffect(()=>{
        fetchData()
        
    },[])

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

        {/* set state to disable the + btn in else {} */}
    };

    return (
        <React.Fragment>
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
                            <IonButton size="large" id="registerProgTalkBtn" type="submit" onClick={displayRegisterAlert}>REGISTER</IonButton>
                        </IonRow>
                    </IonGrid>
                    

                </IonContent>
            </IonPage>
        </React.Fragment>
    );
};

export default ProgTalkInfo;
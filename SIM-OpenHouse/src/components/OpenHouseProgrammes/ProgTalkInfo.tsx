import { IonGrid, IonRow, IonCol, IonButton, IonPage, IonContent, IonAlert } from '@ionic/react';
import React, { useState } from 'react';

import '../../css/Global.css';
import '../../css/ProgrammeTalks.css'

import TopNav from '../TopNav';

const ProgTalkInfo: React.FC<{
    progTalk: string; 
    awardingUni: string;
    date: Date;
    time: string;
    venue: string;
}> = props => {
    
    {/* Register Alert */}
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const [registerFail, setRegisterFail] = useState(false);

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
                <TopNav title="Programme Talks" route="/u/openHouseMain/programmeTalks" backarrow={ true } hamburger={ true } />
            
                <IonContent fullscreen className="progTalkIonContent">
                    <IonGrid id="progTalkInfoGrid">
                        {/* Programme Talk */}
                        <IonRow>
                            <IonCol sizeSm="4" className="progTalkInfoHeader">
                                Programme Talk:
                            </IonCol>

                            <IonCol sizeSm="8" className="progTalkInfoData">
                                Sample
                                <p>{props.progTalk}</p>
                            </IonCol>
                        </IonRow>

                        {/* Awarding Uni */}
                        <IonRow>
                            <IonCol sizeSm="4" className="progTalkInfoHeader">
                                Awarding University:
                            </IonCol>

                            <IonCol sizeSm="8" className="progTalkInfoData">
                                Sample
                                <p>{props.awardingUni}</p>
                            </IonCol>
                        </IonRow>

                        {/* Date */}
                        <IonRow>
                            <IonCol sizeSm="4" className="progTalkInfoHeader">
                                Date:
                            </IonCol>

                            <IonCol sizeSm="8" className="progTalkInfoData">
                                Sample
                                <p>{props.date}</p>
                            </IonCol>
                        </IonRow>

                        {/* Time */}
                        <IonRow>
                            <IonCol sizeSm="4" className="progTalkInfoHeader">
                                Time:
                            </IonCol>

                            <IonCol sizeSm="8" className="progTalkInfoData">
                                Sample
                                <p>{props.time}</p>
                            </IonCol>
                        </IonRow>

                        {/* Venue */}
                        <IonRow>
                            <IonCol sizeSm="4" className="progTalkInfoHeader">
                                Venue:
                            </IonCol>

                            <IonCol sizeSm="8" className="progTalkInfoData">
                                Sample
                                <p>{props.venue}</p>
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
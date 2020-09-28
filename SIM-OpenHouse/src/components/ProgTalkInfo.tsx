import { IonGrid, IonRow, IonCol, IonButton, IonRouterLink, IonPage, IonContent, IonAlert } from '@ionic/react';
import React, { useState } from 'react';

import '../css/Global.css';
import '../css/ProgrammeTalks.css'

import TopNav from './TopNav';

const ProgTalkInfo: React.FC<{
    progTalk: string; 
    awardingUni: string;
    date: Date;
    time: string;
    venue: string;
}> = props => {
    
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const [registerFail, setRegisterFail] = useState(false);


    return (
        <React.Fragment>
            <IonAlert
                isOpen={registerSuccess}
                onDidDismiss={() => setRegisterSuccess(false)}
                cssClass='alert-css'
                mode='md'
                header={'Successfully Registered'}
                message={'You have successfully registered for the programme talk and it has been successfully added to My Schedule.'}
                buttons={['Close']}
             ></IonAlert>

            <IonAlert
                isOpen={registerFail}
                onDidDismiss={() => setRegisterFail(false)}
                cssClass='alert-css'
                mode='md'
                header={'Registration Unsuccessful'}
                message={'There exists an open house programme in your scheduler at this time. Please remove the existing programme from your scheduler first!'}
                buttons={['Close']}
             ></IonAlert>

            <IonPage>
                <TopNav title="Programme Talks" route="/u/openHouseMain/programmeTalks" backarrow={ true } hamburger={ true } />
            
                <IonContent fullscreen className="progTalkIonContent">
                    <IonGrid id="progTalkInfoGrid">
                        {/* Programme Talk */}
                        <IonRow>
                            <IonCol size-sizeSm="4" className="progTalkInfoHeader">
                                Programme Talk:
                            </IonCol>

                            <IonCol size-sizeSm="8" className="progTalkInfoData">
                                Sample
                                <p>{props.progTalk}</p>
                            </IonCol>
                        </IonRow>

                        {/* Awarding Uni */}
                        <IonRow>
                            <IonCol size-sizeSm="4" className="progTalkInfoHeader">
                                Awarding University:
                            </IonCol>

                            <IonCol size-sizeSm="8" className="progTalkInfoData">
                                Sample
                                <p>{props.awardingUni}</p>
                            </IonCol>
                        </IonRow>

                        {/* Date */}
                        <IonRow>
                            <IonCol size-sizeSm="4" className="progTalkInfoHeader">
                                Date:
                            </IonCol>

                            <IonCol size-sizeSm="8" className="progTalkInfoData">
                                Sample
                                <p>{props.date}</p>
                            </IonCol>
                        </IonRow>

                        {/* Time */}
                        <IonRow>
                            <IonCol size-sizeSm="4" className="progTalkInfoHeader">
                                Time:
                            </IonCol>

                            <IonCol size-sizeSm="8" className="progTalkInfoData">
                                Sample
                                <p>{props.time}</p>
                            </IonCol>
                        </IonRow>

                        {/* Venue */}
                        <IonRow>
                            <IonCol size-sizeSm="4" className="progTalkInfoHeader">
                                Venue:
                            </IonCol>

                            <IonCol size-sizeSm="8" className="progTalkInfoData">
                                Sample
                                <p>{props.venue}</p>
                            </IonCol>
                        </IonRow>

                        <IonRow class="ion-justify-content-center" style={{marginTop:"10%"}}>
                            <IonButton size="large" id="registerProgTalkBtn" type="submit">REGISTER</IonButton>
                        </IonRow>
                    </IonGrid>
                    

                </IonContent>
            </IonPage>
        </React.Fragment>
    );
};

export default ProgTalkInfo;
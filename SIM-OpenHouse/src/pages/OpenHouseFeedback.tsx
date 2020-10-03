import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonItem, IonLabel, IonList, IonPage, IonRadio, IonRadioGroup, IonRouterLink, IonRow, IonSelect, IonSelectOption, IonTextarea, IonTitle } from '@ionic/react';
import React, { useRef } from 'react';

import '../css/Global.css';
import '../css/OpenHouseFeedback.css';

import TopNav from '../components/TopNav';
import Menu from '../components/Menu';
import { useForm } from 'react-hook-form';
import { text } from '@fortawesome/fontawesome-svg-core';


const OpenHouseFeedback: React.FC = () => {

    const { register, handleSubmit, errors } = useForm();


    return (
        <IonPage>
            <TopNav title="Open House Feedback Form" route='/u/usefulInfoMain' backarrow={ true } hamburger = { true }/>

            <IonContent fullscreen={true} className="openHouseFeedbackIonContent">
                <IonGrid id="openHouseFeedbackGrid">
                    <IonRow id="openHouseFeedbackMainTitleRow">
                        <IonCol style={{padding: "0"}}>
                            <IonRow id="openHouseFeedbackMainTitle">SIM Open House Feedback</IonRow>
                            <IonRow id="openHouseFeedbackSubtitle">We'll love to hear from you!</IonRow>
                        </IonCol>
                    </IonRow>

                    {/* Attended Open House Date */}
                    <IonRow className="openHouseFeedbackTitleRow">
                        <IonTitle className="openHouseFeedbackTitle">Attended Open House Date *</IonTitle>
                    </IonRow>

                    <IonRow id="attendedDateRow">
                        <IonCol size="12" sizeSm="12" style={{padding: "0"}}>
                            <IonItem id="attendedDateItem" lines="none">
                                <IonSelect id="attendedDateSelect" name="attendedDate" placeholder="Select Date" ref={register({ required: true })}>
                                    <IonSelectOption value="day1" class="attendedDateSelectOption">21 November 2020</IonSelectOption>
                                    <IonSelectOption value="day2" class="attendedDateSelectOption">22 November 2020</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                        </IonCol>
                    </IonRow>

                    {/* Nature of Feedback */}
                    <IonRow className="openHouseFeedbackTitleRow">
                        <IonTitle className="openHouseFeedbackTitle">Nature of Feedback *</IonTitle>
                    </IonRow>

                    <IonRow id="feedbackNatureRow">
                        <IonCol size="12" sizeSm="12" style={{padding: "0"}}>
                            <IonItem id="feedbackNatureMainItem">
                                <IonRadioGroup id="feedbackNatureRadioGroup" name="feedbackNature" ref={register({ required: true })}>
                                    <IonItem id="feedbackNatureItem" lines="none">
                                        <IonLabel>Compliment</IonLabel>
                                        <IonRadio slot="start" value="compliment" className="feedbackNatureRadio">Compliment</IonRadio>
                                    </IonItem>

                                    <IonItem id="feedbackNatureItem" lines="none">
                                        <IonLabel>Complaint</IonLabel>
                                        <IonRadio slot="start" value="complaint" className="feedbackNatureRadio">Complaint</IonRadio>
                                    </IonItem>

                                    <IonItem id="feedbackNatureItem" lines="none">
                                        <IonLabel>Suggestion</IonLabel>
                                        <IonRadio slot="start" value="suggestion" className="feedbackNatureRadio">Suggestion</IonRadio>
                                    </IonItem>
                                </IonRadioGroup>
                            </IonItem>
                        </IonCol>
                    </IonRow>

                    {/* Feedback/ Comments */}
                    <IonRow className="openHouseFeedbackTitleRow">
                        <IonTitle className="openHouseFeedbackTitle">Your Feedback/ Comments *</IonTitle>
                    </IonRow>

                    <IonRow>
                        <IonTextarea id="feedbackTextarea" name="feedbackTextarea" required wrap="hard" rows={10} inputmode="text" placeholder="Type your feedback/ comments here..." ref={register({ required: true })}></IonTextarea>
                    </IonRow>

                    <IonRow class="ion-justify-content-center" style={{marginTop:"5%", marginBottom:"3%"}}>
                        <IonButton size="large" id="feedbackBtn" type="submit">SUBMIT</IonButton>
                    </IonRow>

                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default OpenHouseFeedback;
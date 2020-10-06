import { IonAlert, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonPage, IonRadio, IonRadioGroup, IonRow, IonSelect, IonSelectOption, IonTextarea, IonTitle } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import '../../css/Global.css';
import '../../css/OpenHouseFeedback.css';

import TopNav from '../../components/TopNav';
import Menu from '../../components/Menu';


const OpenHouseFeedback: React.FC = () => {

    const { register, handleSubmit, errors, getValues, reset } = useForm();
    const [submitFeedbackSuccess, setSubmitFeedbackSuccess] = useState(false);

    const onSubmit = (data: any) => {
        const attendedDate = getValues("attendedDate");
        const feedbackNature = getValues("feedbackNature");
        const feedbackTextarea = getValues("feedbackTextarea");

        if ((attendedDate !== "" && feedbackNature !== "" && feedbackTextarea !== "") && 
        (attendedDate !== null && feedbackNature !== null && feedbackTextarea !== null)) {
            console.log("Date: " + attendedDate);
            console.log("Feedback Nature: " + feedbackNature);
            console.log("Feedback: " + feedbackTextarea);
            
            setSubmitFeedbackSuccess(true);
        }
    };


    return (
        <React.Fragment>
            <IonAlert
                isOpen={submitFeedbackSuccess}
                onDidDismiss={() => setSubmitFeedbackSuccess(false)}
                cssClass='alertBox'
                mode='md'
                header={'Your feedback has been successfully sent!'}
                message={'Thank you for your feedback!'}
                buttons={[
                    {
                        text: 'Close',
                        handler: () => {
                            reset({
                                attendedDate: null,
                                feedbackNature: null,
                                feedbackTextarea: null
                            });
                        }
                    }
                ]}
            ></IonAlert>

            <IonPage>
                <IonHeader>
                    <TopNav title="Open House Feedback Form" route='/u/usefulInfoMain' backarrow={ true } hamburger = { true }/>
                </IonHeader>
                
                <IonContent fullscreen={true} className="openHouseFeedbackIonContent">
                    <IonGrid id="openHouseFeedbackGrid">
                        <form onSubmit={handleSubmit(onSubmit)}>
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
                                            <IonSelectOption value="day1" className="attendedDateSelectOption">21 November 2020</IonSelectOption>
                                            <IonSelectOption value="day2" className="attendedDateSelectOption">22 November 2020</IonSelectOption>
                                        </IonSelect>
                                    </IonItem>
                                    {errors.attendedDate && errors.attendedDate.type === "required" && <p className="errorMsg">Attended open house date is required!</p>}
                                    
                                </IonCol>
                            </IonRow>

                            {/* Nature of Feedback */}
                            <IonRow className="openHouseFeedbackTitleRow">
                                <IonTitle className="openHouseFeedbackTitle">Nature of Feedback *</IonTitle>
                            </IonRow>

                            <IonRow id="feedbackNatureRow">
                                <IonCol size="12" sizeSm="12" style={{padding: "0"}}>
                                    <IonItem id="feedbackNatureMainItem" lines="none">
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
                                    {errors.feedbackNature && errors.feedbackNature.type === "required" && <p className="errorMsg">Nature of feedback is required!</p>}

                                </IonCol>
                            </IonRow>

                            {/* Feedback/ Comments */}
                            <IonRow className="openHouseFeedbackTitleRow">
                                <IonTitle className="openHouseFeedbackTitle">Your Feedback/ Comments *</IonTitle>
                            </IonRow>

                            <IonRow>
                                <IonTextarea id="feedbackTextarea" name="feedbackTextarea" wrap="hard" rows={8} inputmode="text" placeholder="Type your feedback/ comments here..." ref={register({ required: true })}></IonTextarea>
                            </IonRow>
                            {errors.feedbackTextarea && errors.feedbackTextarea.type === "required" && <p className="errorMsg">Your feedback/ comment is required!</p>}

                            <IonRow class="ion-justify-content-center" style={{marginTop:"5%", marginBottom:"3%"}}>
                                <IonButton size="large" id="feedbackBtn" type="submit" onClick={onSubmit}>SUBMIT</IonButton>
                            </IonRow>
                        </form>
                    </IonGrid>
                </IonContent>
            </IonPage>
        </React.Fragment>
    );
};

export default OpenHouseFeedback;
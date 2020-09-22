import { IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonGrid, 
    IonRow, 
    IonCol, 
    IonIcon, 
    IonButtons, 
    IonButton, 
    IonItem, 
    IonInput } from '@ionic/react';
import React from 'react';
import '../css/ForgetPassword1.css';
import '../css/Global.css';
import { arrowBackOutline } from 'ionicons/icons';
import { useForm, Controller } from "react-hook-form";
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'


const ForgetPassword1: React.FC = () => {
    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = (data: any) => {
        console.log("Submitted");
        console.log(data);
    };


    return (
      <IonPage>
        <IonHeader>
          <IonToolbar id="topBar">
            <IonButtons slot="start">
                <IonButton routerLink="/main" onClick={() => {reset()}}>
                    <IonIcon id="back_button" slot="icon-only" icon={arrowBackOutline} />
                </IonButton>
            </IonButtons>

            <IonTitle id="title">
                Forget Password?  
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* Screen Content*/}
        <IonContent fullscreen style={{display: "flex"}}>
            <IonGrid>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <IonRow class="ion-justify-content-center">
                        <IonCol></IonCol>
                        <IonCol size="6" style={{textAlign: "center"}}>
                            <FontAwesomeIcon id="registeredEmail_logo" size="5x" icon={faPaperPlane} />
                        </IonCol>
                        <IonCol></IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol></IonCol>
                        <IonCol size="10">
                            <p id="text1"><b>Please enter your registered Email ID</b></p>
                            <p id="text2">We will send a verification code to your registered email ID.</p>
                            <IonItem>
                                <IonInput id="emailID" type="email" placeholder="Email ID" name="emailID" 
                                ref={register({
                                    required: "Email ID is required!",
                                    pattern: {
                                      value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                      message: "Invalid Email ID!"
                                    }
                                  })}>
                                </IonInput>
                            </IonItem>
                            <p id="errorMsg">
                                <span>
                                    {errors.emailID && errors.emailID.message}
                                </span>
                            </p>
                        </IonCol>
                        <IonCol></IonCol>
                    </IonRow>

                    <IonRow class="ion-justify-content-center" style={{marginTop:"10%"}}>
                        <IonButton size="large" className="otpBtn" type="submit">SEND CODE</IonButton>
                    </IonRow>
                </form>
            </IonGrid>
        </IonContent>
      </IonPage>
    );
  };
  
  export default ForgetPassword1;
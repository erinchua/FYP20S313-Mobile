import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonButton, IonItem, IonInput, IonHeader } from '@ionic/react';
import React from 'react';
import { useForm } from "react-hook-form";
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

import '../../css/ForgetPassword1.css';
import '../../css/Global.css';
import TopNav from '../../components/TopNav';
import { auth } from '../../firebase';


const ForgetPassword1: React.FC = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data: any) => {
        auth.sendPasswordResetEmail(data.emailID).then(() => {
            //alert for verification email sent
            console.log("Email sent");
        }).catch(err => { return console.log(err) });
    };

    return (
      <IonPage>
        <IonHeader>
            <TopNav title="Forget Password?" route="/main" backarrow={ true } hamburger = { false }/>
        </IonHeader>
        
        <IonContent fullscreen>
            <IonGrid className="forgetPwdGrid">
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
                        <IonButton size="large" className="otpBtn" type="submit" onClick={onSubmit}>SEND CODE</IonButton>
                    </IonRow>
                </form>
            </IonGrid>
        </IonContent>
      </IonPage>
    );
  };
  
  export default withRouter(ForgetPassword1);
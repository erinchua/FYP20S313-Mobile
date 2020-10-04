import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonIcon, IonButton, IonItem, IonInput, IonHeader } from '@ionic/react';
import React from 'react';
import { useForm } from "react-hook-form";
//import ReactCodeInput from 'react-verification-code-input';

import '../../css/ForgetPassword2.css';
import '../../css/Global.css';
import { keypadOutline } from 'ionicons/icons';

import TopNav from '../../components/TopNav';


const ForgetPassword2: React.FC = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data: any) => {
        console.log("Submitted");
        console.log(data);
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
                                <IonIcon id="key_logo" icon={keypadOutline} />
                            </IonCol>
                            <IonCol></IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol></IonCol>
                            <IonCol size="10">
                                <p id="text1"><b>Please enter the verification code</b></p>
                                <p id="text2">The verification code has been sent to your registered email ID.</p>
                                <IonItem>
                                    <IonInput id="codeID" type="text" placeholder="Verification Code" name="codeID" maxlength={6}                          
                                    ref={register({
                                        required: "Verification code is required!"
                                    })}>
                                    </IonInput>
                                </IonItem>
                                <p id="errorMsg">
                                    <span>
                                        {errors.codeID && errors.codeID.message}
                                    </span>
                                </p>
                            </IonCol>
                            <IonCol></IonCol>
                        </IonRow>

                        <IonRow class="ion-justify-content-center" style={{marginTop:"10%"}}>
                            <IonButton size="large" className="otpBtn" type="submit">DONE</IonButton>
                        </IonRow>
                    </form>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
  };
  
  export default ForgetPassword2;
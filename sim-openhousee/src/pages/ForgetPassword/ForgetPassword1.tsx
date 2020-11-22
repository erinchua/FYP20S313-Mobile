import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonButton, IonItem, IonInput, IonHeader, IonAlert } from '@ionic/react';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

import '../../css/ForgetPassword1.css';
import '../../css/Global.css';
import TopNav from '../../components/TopNav';
import { auth } from '../../firebase';


const ForgetPassword1: React.FC = () => {
    const { register, handleSubmit, errors, reset } = useForm();
    const [sendEmailSuccess, setSendEmailSuccess] = useState(false);

    const onSubmit = async (data: any) => {
        try {
            if (data.emailID) {
                await auth.sendPasswordResetEmail(data.emailID).then(() => {
                    setSendEmailSuccess(true);
                });
            } else {
                throw data;
            }
        } catch (e) {
            return console.log(e);
        }
    };

    return (
        <React.Fragment>
            {/* Email Verified */}
            {sendEmailSuccess == true &&
                <IonAlert
                    isOpen={sendEmailSuccess}
                    onDidDismiss={() => setSendEmailSuccess(false)}
                    cssClass='alertBox'
                    mode='md'
                    header={'Forgot Password'}
                    message={'If the email you have entered exists in our system, you will receive the link to reset your password shortly!'}
                    buttons={[
                        {
                            text: 'Ok',
                            handler: () => {
                                reset({
                                    emailID: null
                                });
                            }
                        }
                    ]}
                ></IonAlert>
            }

            <IonPage>
                <IonHeader>
                    <TopNav title="Forget Password?" route="/main" backarrow={true} hamburger={false} />
                </IonHeader>

                <IonContent fullscreen>
                    <IonGrid className="forgetPwdGrid">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <IonRow class="ion-justify-content-center">
                                <IonCol></IonCol>
                                <IonCol size="6" style={{ textAlign: "center" }}>
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

                            <IonRow class="ion-justify-content-center" style={{ marginTop: "10%" }}>
                                <IonButton size="large" className="otpBtn" type="submit">SEND EMAIL</IonButton>
                            </IonRow>
                        </form>
                    </IonGrid>
                </IonContent>
            </IonPage>
        </React.Fragment>
    );
};

export default withRouter(ForgetPassword1);
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonIcon, IonButton, IonItem, IonInput, IonList,
    IonAlert, IonHeader } from '@ionic/react';
import React, {useRef, useState} from 'react';
import { useForm } from "react-hook-form";
import {useHistory} from 'react-router-dom';

import '../../css/ForgetPassword3.css';
import '../../css/Global.css';
import { shieldCheckmarkOutline } from 'ionicons/icons';

import { auth } from '../../firebase';

import TopNav from '../../components/TopNav';


const ForgetPassword3: React.FC = () => {
    const { register, handleSubmit, errors, watch, reset, getValues } = useForm();

    const onSubmit = (data: any) => {
        //console.log("Submitted");
        //console.log(data);
        const code: any = new URLSearchParams(window.location.search).get('oobCode');
        auth.confirmPasswordReset(code, data.newPassword).catch(err => { return console.log(err) });
    };

    const newPassword = useRef({});
    newPassword.current = watch("newPassword", "");

    const history = useHistory();

    {/*For alert */}
    const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);
    const [resetPasswordFail, setResetPasswordFail] = useState(false);

    const displayAlert = () => {
        const newPassword = getValues("newPassword");
        const confirmNewPassword = getValues("confirmNewPassword");
        if ((newPassword !== "" || confirmNewPassword !== "") && (confirmNewPassword === newPassword)){
            setResetPasswordSuccess(true);
            return console.log("Match");
        }
        else {
            setResetPasswordFail(true);
            return console.log("Error");
        }
    };

    const proceedToLogin = () => {
        setResetPasswordSuccess(false);
        history.push("/login");
    };

    return (
        <React.Fragment>
            <IonAlert
                isOpen={resetPasswordSuccess}
                onDidDismiss={proceedToLogin}
                cssClass='alertBox'
                header={'Reset Password Successful'}
                message={'Your password has been reset successfully. Please login again.'}
                buttons={['Close']}
             ></IonAlert>

            <IonAlert
                isOpen={resetPasswordFail}
                onDidDismiss = {() => setResetPasswordFail(false)}
                cssClass='alertBox'
                header={'Error'}
                message={'Please fill up the required fields first!'}
                buttons={['Okay']}
             ></IonAlert>

            <IonPage>
                <IonHeader>
                    <TopNav title="Reset Password" route="/main" backarrow={ true } hamburger = { false }/>
                </IonHeader>
                
                <IonContent fullscreen>
                    <IonGrid className="forgetPwdGrid">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <IonRow class="ion-justify-content-center">
                                <IonCol></IonCol>
                                <IonCol size="6" style={{textAlign: "center"}}>
                                    <IonIcon id="shield_logo" icon={shieldCheckmarkOutline} />
                                </IonCol>
                                <IonCol></IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol></IonCol>
                                <IonCol size="10">
                                    <IonList>
                                    <p id="text1"><b>Please enter your new password</b></p>
                                    <IonItem>
                                        <IonInput id="newPasswordID" type="password" placeholder="New Password" name="newPassword" ref={register({ required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.,/<>#^~`@$!%*?&])[A-Za-z\d.,/<>#~`^@$!%*?&]{8,}$/ })}></IonInput>
                                    </IonItem>
                                    {errors.newPassword && errors.newPassword.type === "required" && <div className="errorMessage">Please type your new password!</div>}
                                    {errors.newPassword && errors.newPassword.type === "minLength" && <div className="errorMessage">Password has to be at least 8 characters and must contain 1 uppercase, 1 lowercase, 1 number and 1 special character</div>}
                                    {errors.newPassword && errors.newPassword.type === "pattern" && <div className="errorMessage">Password has to be at least 8 characters and must contain 1 uppercase, 1 lowercase, 1 number and 1 special character</div>}
                                
                                    <IonItem>
                                        <IonInput id="confirmNewPasswordID" type="password" placeholder="Confirm New Password" name="confirmNewPassword" ref={register({ required: true, validate: (value) => value === newPassword.current })}></IonInput>
                                    </IonItem>
                                    {errors.confirmNewPassword && errors.confirmNewPassword.type === "required" && <div className="errorMessage">Please confirm your password!</div>}
                                    {errors.confirmNewPassword && errors.confirmNewPassword.type === "validate" && <div className="errorMessage">Passwords do not match!</div>}
                                    
                                    </IonList>
                                </IonCol>
                                <IonCol></IonCol>
                            </IonRow>

                            <IonRow class="ion-justify-content-center" style={{marginTop:"5%"}}>
                                <IonButton size="large" id="resetPwdBtn" type="submit" onClick={displayAlert}>RESET PASSWORD</IonButton>
                            </IonRow>
                        </form>
                    </IonGrid>
                </IonContent>
            </IonPage>
    </React.Fragment>
    );
  };
  
  export default ForgetPassword3;
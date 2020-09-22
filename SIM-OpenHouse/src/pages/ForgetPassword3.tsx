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
    IonInput, 
    IonLabel, 
    IonList,
    IonAlert } from '@ionic/react';
import React, {useRef, useState} from 'react';
import '../css/ForgetPassword3.css';
import '../css/Global.css';
import { arrowBackOutline, shieldCheckmarkOutline } from 'ionicons/icons';
import { useForm, Controller } from "react-hook-form";


const ForgetPassword3: React.FC = () => {
    const { register, handleSubmit, errors, watch, reset, getValues } = useForm();

    const onSubmit = (data: any) => {
        console.log("Submitted");
        console.log(data);
    };

    const newPassword = useRef({});
    newPassword.current = watch("newPassword", "");

    {/*For alert */}
    const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);

    const displayAlert = () => {
        const newPassword = getValues("newPassword");
        const confirmNewPassword = getValues("confirmNewPassword");
        if ((newPassword !== "" || confirmNewPassword !== "") && (confirmNewPassword === newPassword)){
            setResetPasswordSuccess(true);
            console.log("Match");
        }

        console.log("Error");
    };

    return (
        <React.Fragment>
            <IonAlert
                isOpen={resetPasswordSuccess}
                onDidDismiss={() => setResetPasswordSuccess(false)}
                cssClass='alertBox'
                header={'Reset Password Successful'}
                message={'Your password has been reset successfully. Please login again.'}
                buttons={['Close']}
             ></IonAlert>

            <IonPage>
                <IonHeader>
                <IonToolbar id="topBar">
                    <IonButtons slot="start">
                        <IonButton routerLink="/main" onClick={() => {reset()}}>
                            <IonIcon id="back_button" slot="icon-only" icon={arrowBackOutline} />
                        </IonButton>
                    </IonButtons>

                    <IonTitle id="title">
                        Reset Password 
                    </IonTitle>
                </IonToolbar>
                </IonHeader>

<<<<<<< Updated upstream
                    <IonRow>
                        <IonCol></IonCol>
                        <IonCol size="10">
                            <IonList>
                            <p id="text1"><b>Please enter your new password</b></p>
                            <IonItem>
                                <IonInput id="newPasswordID" type="password" placeholder="New Password" name="newPassword" ref={register({ required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.,/<>#^~`@$!%*?&])[A-Za-z\d.,/<>#~`^@$!%*?&]{8,}$/ })}></IonInput>
                            </IonItem>
                            {errors.newPassword && errors.newPassword.type === "required" && <div className="errorMessage">Password is required!</div>}
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
=======
                {/* Screen Content*/}
                <IonContent fullscreen style={{display: "flex"}}>
                    <IonGrid>
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
                                    {errors.newPassword && errors.newPassword.type === "required" && <div className="errorMessage">Password is required!</div>}
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
>>>>>>> Stashed changes

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
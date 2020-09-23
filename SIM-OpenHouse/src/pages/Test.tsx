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
    IonList, 
    IonAlert } from '@ionic/react';
import React, {useRef, useState} from 'react';
import '../css/Global.css';
import '../css/Test.css';
import { arrowBackOutline, shieldCheckmarkOutline } from 'ionicons/icons';
import { useForm, Controller } from "react-hook-form";
import TestControl from '../components/TestControl';
import TestCom from '../components/TestCom';
import ReactCodeInput from 'react-verification-code-input';

{/*import { useHistory } from 'react-router-dom';*/}
 


const Test: React.FC = () => {
    const { register, handleSubmit, errors, watch, reset, getValues } = useForm();

    const onSubmit = (data: any) => {
        console.log("Submitted");
        console.log(data);
    };

    const newPassword = useRef({});
    newPassword.current = watch("newPassword", "");

    const newPasswordRef = useRef<HTMLIonInputElement>(null);
    const confirmNewPasswordRef = useRef<HTMLIonInputElement>(null);

    const validatePassword = () => {};
    const [showAlert, setShowAlert] = useState(false);
    const [showAlert2, setShowAlert2] = useState(false);

    const [test1, setTest1] = useState<string>();
    const [test2, setTest2] = useState<string>();
    
    const display = () => {
        const values1 = getValues("input1");
        const values2 = getValues("input2");
        if (values1 !== "" || values2 !== "") {
            setShowAlert(true);
            console.log(values1, values2);
            setTest1(values1);
            setTest2(values2);
            return;
        }    
        setShowAlert2(true);
        console.log("Fields are empty!");
    };

    return (
        <React.Fragment>
            <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                cssClass='alert-css'
                mode='md'
                header={'Have Value'}
                subHeader={'Subtitle'}
                message={'This is an alert message.'}
                buttons={['Close']}
             ></IonAlert>

             <IonAlert
                isOpen={showAlert2}
                onDidDismiss={() => setShowAlert2(false)}
                cssClass='my-custom-class'
                header={'No Value'}
                message={'This is an alert message.'}
                buttons={['Okay']}
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
        
                {/* Screen Content*/}
                <IonContent fullscreen style={{display: "flex"}}>
                    <IonGrid>
                        <form>
                            <input name="input1" ref={register} />
                            <input name="input2" ref={register} />

                            <button
                                type="button"
                                onClick={display}>
                                Get Values
                            </button>

                            {display && (
                                <>
                                    <div>
                                        <h1>Value 1: {test1}</h1>
                                        <h1>Value 2: {test2}</h1>
                                    </div>
                                </>
                            )}
                            
                        </form>

                        {/*<form onSubmit={handleSubmit(onSubmit)}>
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
                            <IonRow class="ion-justify-content-center">
                            </IonRow>
        
                            <IonRow class="ion-justify-content-center" style={{marginTop:"5%"}}>
                                <IonButton size="large" id="resetPwdBtn" type="submit" onClick={() => {
                                    setShowAlert2(true);
                                    const values=getValues();
                                }}>RESET PASSWORD</IonButton>
                            </IonRow>
                        </form>*/}
                    </IonGrid>
                </IonContent>
            </IonPage>
        </React.Fragment>
    );
  }

export default Test;
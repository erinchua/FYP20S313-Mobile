import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonContent,
  IonDatetime,
  IonGrid,
  IonHeader,
  IonInput,
  IonLabel,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonIcon,
  IonItem, 
  IonCheckbox
} from '@ionic/react';
import React, { useRef, useState } from "react";
import { useForm, Controller, useFormContext } from 'react-hook-form';
import { arrowBackOutline } from 'ionicons/icons';

import '../css/Global.css';
import '../css/Registration.css';

const Registration: React.FC = () => {
  const { register, handleSubmit, errors, watch } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form submitted");
    console.log(data);
  };

  const password = useRef({});
  password.current = watch("password", "");

  const [checked, setChecked] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar id="toolBar">
          <IonButtons slot="start">
            <IonButton routerLink="/main">
              <IonIcon slot="icon-only" icon={arrowBackOutline} id="backBtn" />
            </IonButton>
          </IonButtons>

          <IonTitle id="title">Registration</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonInput className="inputField" type="text" placeholder="First Name" name="firstName" ref={register({ required: true, minLength: 3, pattern: /^[A-Za-z]+$/i })}></IonInput>
                {errors.firstName && errors.firstName.type === "required" && <div className="errorMessage">First name is required!</div>}
                {errors.firstName && errors.firstName.type === "minLength" && <div className="errorMessage">First name has to be more than 2 characters</div>}
                {errors.firstName && errors.firstName.type === "pattern" && <div className="errorMessage">Please enter a valid First Name</div>}
              </IonCol>
              <IonCol>
                <IonInput className="inputField" type="text" placeholder="Last Name" name="lastName" ref={register({ required: true, minLength: 3, pattern: /^[A-Za-z]+$/i })}></IonInput>
                {errors.lastName && errors.lastName.type === "required" && <div className="errorMessage">Last name is required!</div>}
                {errors.lastName && errors.lastName.type === "minLength" && <div className="errorMessage">Last name has to be more than 2 characters</div>}
                {errors.lastName && errors.lastName.type === "pattern" && <div className="errorMessage">Please enter a valid Last Name</div>}
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput className="inputField" type="email" placeholder="Email" name="email" ref={register({ required: true, pattern:  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}></IonInput>
                {errors.email && errors.email.type === "required" && <div className="errorMessage">Email is required!</div>}
                {errors.email && errors.email.type === "pattern" && <div className="errorMessage">Please enter a valid Email</div>}
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput className="inputField" type="tel" placeholder="Contact Number" name="contactNo" ref={register({ required: true, minLength: 8, maxLength: 8, pattern: /(6|8|9)\d{7}/ })}></IonInput>
                {errors.contactNo && errors.contactNo.type === "required" && <div className="errorMessage">Contact number is required!</div>}
                {errors.contactNo && errors.contactNo.type === "minLength" && <div className="errorMessage">Contact number consist of only 8 digits</div>}
                {errors.contactNo && errors.contactNo.type === "maxLength" && <div className="errorMessage">Contact number consist of only 8 digits</div>}
                {errors.contactNo && errors.contactNo.type === "pattern" && <div className="errorMessage">Please enter a valid Contact Number</div>}
              </IonCol>
              <IonCol>
                <IonDatetime className="inputField" displayFormat="DD-MM-YYYY" placeholder="D.O.B" name="dob" ref={register({ required: true })}></IonDatetime>
                {errors.dob && errors.dob.type === "required" && <div className="errorMessage">Date of Birth is required!</div>}
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel id="highestQualificationLabel">Highest Qualification</IonLabel>
                  <IonSelect placeholder="Please select" name="highestQualification" ref={register({ required: true })}>
                    <IonSelectOption value="aLevel">'A' Level</IonSelectOption>
                    <IonSelectOption value="oLevel">'O' Level</IonSelectOption>
                    <IonSelectOption value="degree">Degree</IonSelectOption>
                    <IonSelectOption value="Diploma">Diploma</IonSelectOption>
                  </IonSelect>
                </IonItem>
                {errors.highestQualification && errors.highestQualification.type === "required" && <div className="errorMessage">Highest Qualification is required!</div>}
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput className="inputField" type="text" placeholder="Nationality" name="nationality" ref={register({ required: true, pattern: /^[A-Za-z]+$/i, minLength: 3 })}></IonInput>
                {errors.nationality && errors.nationality.type === "required" && <div className="errorMessage">Nationality is required!</div>}
                {errors.nationality && errors.nationality.type === "pattern" && <div className="errorMessage">Please enter a valid Nationality</div>}
                {errors.nationality && errors.nationality.type === "minLength" && <div className="errorMessage">Please enter a valid Nationality</div>}
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput className="inputField" type="password" placeholder="Password" name="password" ref={register({ required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ })}></IonInput>
                {errors.password && errors.password.type === "required" && <div className="errorMessage">Password is required!</div>}
                {errors.password && errors.password.type === "minLength" && <div className="errorMessage">Password has to be at least 8 characters and must contain 1 uppercase, 1 lowercase, 1 number and 1 special character</div>}
                {errors.password && errors.password.type === "pattern" && <div className="errorMessage">Password has to be at least 8 characters and must contain 1 uppercase, 1 lowercase, 1 number and 1 special character</div>}
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput className="inputField" type="password" placeholder="Confirm Password" name="confirmPassword" ref={register({ required: true, validate: value => value === password.current })}></IonInput>
                {errors.confirmPassword && errors.confirmPassword.type === "required" && <div className="errorMessage">Confirm Password is required!</div>}
                {errors.confirmPassword && errors.confirmPassword.type === "validate" && <div className="errorMessage">Password does not match!</div>}
              </IonCol>
            </IonRow>
            <IonRow>
              <IonItem>
                  <IonCheckbox slot="start" checked={checked} onIonChange={e => setChecked(e.detail.checked)} name="privacyCheckbox"></IonCheckbox>
                  <IonLabel style={{fontSize: "80%"}} className="ion-text-wrap" color="dark">I agree with SIM's Terms of Use and Privary Policy and thereby give my consent to receive marketing communications from SIM.{console.log(checked)}</IonLabel> 
              </IonItem>
              {errors.privaryCheckbox && errors.privaryCheckbox.type === "validate" && <div className="errorMessage">*Terms of Use and Privary Policy checkbox not checked</div>}
            </IonRow>

            <IonRow class="ion-justify-content-center">
              <IonButton id="registrationBtn" type="submit">REGISTER</IonButton>
            </IonRow>
          </IonGrid>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Registration;

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
} from "@ionic/react";
import React from "react";
import { useForm } from "react-hook-form";

import "../css/Registration.css";

const Registration: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: any) => {
    console.log("i am submitted");
    console.log(data);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registration</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonCard>
          <IonCardHeader>Registration Form</IonCardHeader>
          <IonCardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonInput
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      ref={register({ required: "First name is required." })}
                    ></IonInput>
                    {errors.firstName && errors.firstName.message}
                  </IonCol>{" "}
                  <IonCol>
                    <IonInput
                      placeholder="Last Name"
                      name="lastname"
                      ref={register({ required: "Last name is required." })}
                    ></IonInput>
                    {errors.lastname && errors.lastname.message}
                  </IonCol>
                </IonRow>

                <IonRow>
                  {" "}
                  <IonCol>
                    <IonInput
                      placeholder="Email"
                      name="email"
                      ref={register({
                        required: "Email is required.",
                        pattern: {
                          value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "Invalid email address.",
                        },
                      })}
                    ></IonInput>
                    {errors.email && <span>{errors.email.message}</span>}
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol>
                    <IonInput
                      placeholder="Mobile No"
                      name="phoneNo"
                      ref={register({
                        required: "Phone no is required.",
                        pattern: {
                          value: /(6|8|9)\d{7}/,
                          message: "Invalid phone number.",
                        },
                      })}
                    ></IonInput>
                    {errors.phoneNo && <span>{errors.phoneNo.message} </span>}
                  </IonCol>{" "}
                  <IonCol>
                    <IonDatetime
                      displayFormat="DD MMM YYYY"
                      placeholder="DOB"
                      name="dob"
                      ref={register({ required: "DOB is required" })}
                    >
                      {" "}
                    </IonDatetime>
                    {errors.dob && <span>{errors.dob.message}</span>}
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonLabel>Highest Qualification *</IonLabel>
                  </IonCol>
                  <IonCol>
                    <IonSelect
                      placeholder="Select One"
                      name="highestQualification"
                      ref={register({
                        required: "Highest Qualification is required.",
                      })}
                    >
                      <IonSelectOption>GCE'N'/'O' Level</IonSelectOption>
                      <IonSelectOption>Nitec/Higher Nitec</IonSelectOption>
                      <IonSelectOption>Diploma</IonSelectOption>
                      <IonSelectOption>JC</IonSelectOption>
                    </IonSelect>
                    {errors.highestQualification && (
                      <span>{errors.highestQualification.message}</span>
                    )}
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonInput
                      placeholder="Nationality"
                      name="nationality"
                      ref={register({ required: "nationality is required." })}
                    ></IonInput>
                    {errors.nationality && (
                      <span>{errors.nationality.message}</span>
                    )}
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonInput
                      placeholder="Password"
                      type="password"
                      name="password"
                      ref={register({
                        required: "Password is required.",
                        minLength: {
                          value: 6,
                          message:
                            "Password should be at least 6 characters long.",
                        },
                      })}
                    ></IonInput>
                    {errors.password && <span>{errors.password.message}</span>}
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonInput
                      placeholder="Confirm Password"
                      type="password"
                      name="confirmPassword"
                      ref={register({
                        required: "This field is required.",
                        minLength: {
                          value: 6,
                          message:
                            "Password should be at least 6 characters long.",
                        },
                      })}
                    ></IonInput>
                    {errors.confirmPassword && (
                      <span>{errors.confirmPassword.message}</span>
                    )}
                  </IonCol>
                </IonRow>
              </IonGrid>
              <IonRow>
                <IonCol>
                  <IonButton type="submit">Register</IonButton>
                </IonCol>
                <IonCol>
                  <IonButton>Reset Form</IonButton>
                </IonCol>
              </IonRow>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Registration;

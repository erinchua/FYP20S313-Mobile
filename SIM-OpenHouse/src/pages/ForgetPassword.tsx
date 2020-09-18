import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonIcon, IonButtons, IonButton, IonItem, IonInput } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import '../css/ForgetPassword.css';
import '../css/Global.css';
import { arrowBackOutline } from 'ionicons/icons';
import registeredEmail from '../img/forgetPassword/registeredEmail.png';

const ForgetPassword: React.FC = () => {
    {/*do here */}

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar id="topBar">
            <IonButtons slot="start">
                <IonButton>
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
                <IonRow class="ion-justify-content-center">
                    <IonCol></IonCol>
                    <IonCol size="6">
                        <img src={registeredEmail}></img>
                    </IonCol>
                    <IonCol></IonCol>
                </IonRow>

                <IonRow>
                    <IonCol></IonCol>
                    <IonCol size="10">
                        <p id="text1"><b>Please enter your registered Email ID.</b></p>
                        <p id="text2">We will send a verification code to your registered email ID.</p>
                        <IonItem>
                            <IonInput placeholder="Email ID"></IonInput>
                        </IonItem>
                    </IonCol>
                    <IonCol></IonCol>
                </IonRow>

                <IonRow class="ion-justify-content-center" style={{marginTop:"10%"}}>
                    <IonButton size="large" id="nextBtn">NEXT</IonButton>
                </IonRow>
            </IonGrid>
        </IonContent>
      </IonPage>
    );
  };
  
  export default ForgetPassword;
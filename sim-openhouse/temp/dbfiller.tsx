import { IonButton, IonContent, IonHeader, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonRouterLink, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './css/Home.css';
import { db } from '../src/firebase';

const DocInserter: React.FC = () => {
  const insertDoc = () => {
    db.collection("Programmes").add({
      academicLevel: "",
      awardedBy: "",
      discipline: "",
      entryQualification: "",
      modeOfStudy: [""],
      programmeTitle: "",
      subDiscipline: "",
    }).then(doc => {
      console.log("Added:",doc.id)
    })
  };

  return (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Insert Document</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen className="ion-padding">
      <IonButton expand="block" color="medium" onClick={insertDoc}>Insert Document</IonButton>
      <IonText></IonText>
    </IonContent>
  </IonPage>
)};

export default DocInserter;

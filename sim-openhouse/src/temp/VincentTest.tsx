import { IonContent, IonInput, IonButton, IonItem, IonLabel, IonHeader, IonPage, IonTitle, IonToolbar, IonSegmentButton, IonSegment } from "@ionic/react";
import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import "../css/Home.css";
import { auth, db } from "../firebase";
import CreateClubAndCouncil from "./CreateClubAndCouncil";
import ViewClubAndCouncil from "./ViewClubAndCouncil";
import ViewContactInfo from "./ViewContactInfo";

//<script src="../Resource/qrcode.min.js"></script>;

const VincentTest: React.FC = () => {
  /*  useEffect(() => {
    const fetchData = async () => {
      const data = await db
        .collection("ContactInfo")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            console.log(doc);
          });
        });
    };
    fetchData();
  }, []); */

  /* console.log(
    contacts.map((contact) => {
      contact.data();
    })
  ); */

  /*  const qrcode = new QRCode(document.getElementById("qrcode")); */

  const generateQR = () => {
    //qrcode.makeCode(qrdata);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>QRTest</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        {/* <IonInput
          value={qrdata}
          type="text"
          id="qr-data"
          onIonChange={(e: any) => {
            setQRdata(e.detail.value);
          }}
        ></IonInput> */}
        <IonButton onClick={generateQR}> Generate QR </IonButton>
        <div>
          <QRCode value="ThomasLee@gmail.com,Thomas,Lee" />{" "}
        </div>

        {/* <CreateClubAndCouncil /> */}
        {/* <ViewClubAndCouncil categoryType="InternationalStudent"></ViewClubAndCouncil> */}
        <ViewContactInfo></ViewContactInfo>
      </IonContent>
    </IonPage>
  );
};

export default VincentTest;

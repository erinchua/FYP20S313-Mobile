import { IonContent, IonInput, IonButton, IonItem, IonLabel, IonHeader, IonPage, IonTitle, IonToolbar, IonSegmentButton, IonSegment } from "@ionic/react";
import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import "../css/Home.css";
import { auth, db } from "../firebase";
//<script src="../Resource/qrcode.min.js"></script>;

const VincentTest: React.FC = () => {
  const [contacts, setContact] = useState<any[]>([]);

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
  useEffect(() => {
    db.collection("ContactInfo")
      .get()
      .then((snapshot) => {
        const contact: any = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          contact.push(data);
        });
        setContact(contact);
      })
      .catch((error) => console.log(error));
  }, []);

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
        <ul>
          {contacts.map((contact) => {
            return (
              <div>
                <li>{contact.enquiryType} </li>
                <li>{contact.operatingHours} </li>
                <li>{contact.contactNo} </li>
                <li>{contact.email} </li>
              </div>
            );
          })}
        </ul>
      </IonContent>
    </IonPage>
  );
};

export default VincentTest;

import { IonContent, IonInput, IonButton, IonItem, IonLabel, IonHeader, IonPage, IonTitle, IonToolbar, IonSegmentButton, IonSegment, IonCheckbox } from "@ionic/react";
import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import "../css/Home.css";
import { auth, db } from "../firebase";
// import CreateClubAndCouncil from "./CreateClubAndCouncil";
import ViewClubAndCouncil from "./ViewClubAndCouncil";
import ViewContactInfo from "./ViewContactInfo";
import ViewProgrammeTalk from "./ViewProgrammeTalk";

//<script src="../Resource/qrcode.min.js"></script>;

const VincentTest: React.FC = () => {

  const [programmes, setProgrammes] = useState<any>([])
  const [checkedFilter, setCheckFilter] = useState<string[]>([])

  const handleToggle = (value: string) => {
    const currentIndex = checkedFilter.indexOf(value)
    const newCheckedFilter = [...checkedFilter]

    if (currentIndex === -1) {
      newCheckedFilter.push(value)
    } else {
      newCheckedFilter.splice(currentIndex, 1)
    }

    setCheckFilter(newCheckedFilter)
    // console.log('New filters are' + newCheckedFilter)
    // filterProgrammes(newCheckedFilter)

  }

  const filterProgrammes = (filters: string[]) => {
    const newProgrammes: any = []
    filters.map(filter => {
      let programme = []
      if (filter == 'partTime') {
        programme = programmes.filter((programme: { modeOfStudy: { partTime: boolean; }; }) => { return programme.modeOfStudy.partTime == true })
        console.log('I am partTime' + programme)
        newProgrammes.push(programme)
      }
      else if (filter == 'fullTime') {
        programme = programmes.filter((programme: { modeOfStudy: { fullTime: boolean; }; }) => { return programme.modeOfStudy.fullTime == true })
        console.log('I am fullTime' + programme)
        newProgrammes.push(programme)
      }
      else if (filter == 'fullPartTime') {
        programme = programmes.filter((programme: { modeOfStudy: { fullTime: boolean; partTime: boolean }; }) => { return programme.modeOfStudy.fullTime == true && programme.modeOfStudy.partTime == true })
        console.log('I am fullPartTime' + programme)
        newProgrammes.push(programme)
      }
    })
    console.log('newprogrammes are' + newProgrammes)
    setProgrammes(newProgrammes)
  }
  useEffect(() => {
    const programmes: any = []
    const fetchData = async () => {
      const data = await db
        .collection("TestProgrammes")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            const data = doc.data()
            programmes.push(data)
          });
          setProgrammes(programmes)
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    filterProgrammes(checkedFilter)

  }, [checkedFilter]);

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
      {      console.log("programmes are" + JSON.stringify(programmes))}
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
        {/* <ViewContactInfo></ViewContactInfo> */}
        {/* <ViewProgrammeTalk date="21-Nov-2020"></ViewProgrammeTalk> */}

        {/* {programmes.map(({ programOverview = [], applicationPeriod = [], programmeStructure = [], overseaOpportunity = [], intakeMonths = [], duration = [] }) => {
          return (
            <div>
              {programOverview.map((item) => {
                return (
                  <li>{item}</li>
                )
              })}
              <li>Jan 2021 Intake: {applicationPeriod.jan2021}</li>
              <li>Coursework: {programmeStructure.coursework ? 'Yes' : 'No'}</li>
              <li>Examination: {programmeStructure.examination ? 'Yes' : 'No'}</li>
              <li>Exchange: {overseaOpportunity.exchange ? 'Yes' : 'No'}</li>
              <li>Transfer: {overseaOpportunity.transfer ? 'Yes' : 'No'}</li>
              <li>Intake Months Part Time: {intakeMonths.partTime}</li>
              <li>Duration Part Time: {duration.partTime}</li>
              <br />
            </div>
          )

        })
        } */}
        <p>Full time & Part time</p>
        <IonCheckbox onIonChange={e => handleToggle(e.detail.value)} value='fullPartTime' checked={checkedFilter.indexOf('fullPartTime') === -1 ? false : true}></IonCheckbox>
        <br />
        <p>Full time</p>
        <IonCheckbox onIonChange={e => handleToggle(e.detail.value)} value='fullTime' checked={checkedFilter.indexOf('fullTime') === -1 ? false : true}></IonCheckbox>
        <br />
        <p>Part time</p>
        <IonCheckbox onIonChange={e => handleToggle(e.detail.value)} value='partTime' checked={checkedFilter.indexOf('partTime') === -1 ? false : true}></IonCheckbox>
        <br />

         if(programmes.length){programmes.map((programme: any) => {
          return (
            <div>
              <li>{programme.programmeTitle}</li>
              <li>{programme.awardedBy}</li>
              <li>{programme.modeOfStudy.fullTime ? 'Full-Time' : ''}</li>
              <li>{programme.modeOfStudy.partTime ? 'Part-Time' : ''}</li>
              <br />
            </div>
          )
        })}
      </IonContent>
    </IonPage>
  );
};

export default VincentTest;

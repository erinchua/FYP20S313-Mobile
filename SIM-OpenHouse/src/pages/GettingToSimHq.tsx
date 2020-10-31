import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRouterLink, IonRow, IonText, IonTitle } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faCar, faParking, faTrain } from '@fortawesome/free-solid-svg-icons';

import '../css/GettingToSimHq.css';
import '../css/Global.css';
import TopNav from '../components/TopNav';
import { db } from '../firebase';

const GettingToSimHq: React.FC = () => {

    const [car, setCar] = useState({ byCar: "", carparkInfo: "" });
    const [bus, setBus] = useState([]);
    const [mrt, setMrt] = useState([]);

    useEffect(() => {
        db.collection('CampusLocation').get().then(snaps => {
            snaps.forEach(doc => {
                const data = doc.data();

                if (doc.id === "car") {
                    setCar({ byCar: data.carDescription, carparkInfo: data.carParkingDescription });
                }

                if (doc.id === "bus") {
                    const busInfo: any = [];

                    for (let i = 0; i < Object.keys(data).length; i++) {
                        if (Object.keys(data)[i] !== "id") {
                            const busArr = [];
                            const buses = data[Object.keys(data)[i]].buses;
                            const description = data[Object.keys(data)[i]].description;

                            for (let i = 0; i < Object.keys(buses).length; i++) {
                                busArr.push(buses[Object.keys(buses)[i]]);
                            }

                            busInfo.push({ description: description, buses: busArr.join(", ") });
                        }
                    }

                    setBus(busInfo);
                }
                if (doc.id === "mrt") {
                    const mrtInfo: any = [];

                    for (let i = 0; i < Object.keys(data).length; i++) {
                        if (Object.keys(data)[i] !== "id") {
                            const mrtArr = [];
                            const stations = data[Object.keys(data)[i]].stations;
                            const description = data[Object.keys(data)[i]].description;

                            for (let i = 0; i < Object.keys(stations).length; i++) {
                                mrtArr.push(stations[Object.keys(stations)[i]]);
                            }

                            mrtInfo.push({ description: description, stations: mrtArr.join(", ") });
                        }
                    }

                    setMrt(mrtInfo);
                }
            });
        });
    }, [])
    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Getting To SIM HQ" route="/u/home" backarrow={true} hamburger={true} />
            </IonHeader>
            <IonContent fullscreen id="gettingToSimHq-content">
                <IonGrid className="gettingToSimHqGrid">
                    <IonRow>
                        <div style={{ width: "100%" }}>
                            <iframe width="100%" height="250" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=461%20Clementi%20Rd,%20Singapore%20599491+(Singapore%20Institute%20of%20Management)&amp;t=k&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </div>
                    </IonRow>
                    <IonRow className="gettingToSimHq-heading-row">
                        <IonTitle className="gettingToSimHq-title"><FontAwesomeIcon className="gettingToSimHq-titleIcon" icon={faCar} size="lg" />By Car</IonTitle>
                    </IonRow>
                    <IonRow>
                        <IonText className="gettingToSimHq-description">{car.byCar}</IonText>
                    </IonRow>
                    <IonRow className="gettingToSimHq-heading-row">
                        <IonTitle className="gettingToSimHq-title"><FontAwesomeIcon className="gettingToSimHq-titleIcon" icon={faBus} size="lg" />By Bus</IonTitle>
                    </IonRow>
                    <IonRow>
                        <IonGrid className="gettingToSimHq-tableGrid">
                            <IonRow className="gettingToSimHq-tableRow">
                                <IonCol className="gettingToSimHq-tableHeading ion-text-wrap">Location</IonCol>
                                <IonCol className="gettingToSimHq-tableHeading ion-text-wrap">Bus Number</IonCol>
                            </IonRow>
                            {bus.map((info: any, index) => {
                                return (
                                    <IonRow className="gettingToSimHq-tableRow" key={index}>
                                        <IonCol className="gettingToSimHq-table-LeftData ion-text-wrap">{info.description}</IonCol>
                                        <IonCol className="gettingToSimHq-table-RightData ion-text-wrap">{info.buses}</IonCol>
                                    </IonRow>
                                )
                            })}
                        </IonGrid>
                    </IonRow>
                    <IonRow className="gettingToSimHq-heading-row">
                        <IonTitle className="gettingToSimHq-title"><FontAwesomeIcon className="gettingToSimHq-titleIcon" icon={faTrain} size="lg" />By MRT</IonTitle>
                    </IonRow>
                    <IonRow>
                        <IonGrid className="gettingToSimHq-tableGrid">
                            <IonRow className="gettingToSimHq-tableRow">
                                <IonCol className="gettingToSimHq-tableHeading ion-text-wrap">MRT Line</IonCol>
                                <IonCol className="gettingToSimHq-tableHeading ion-text-wrap">Nearest MRT</IonCol>
                            </IonRow>
                            {mrt.map((info: any, index) => {
                                return (
                                    <IonRow className="gettingToSimHq-tableRow" key={index}>
                                        <IonCol className="gettingToSimHq-table-LeftData ion-text-wrap">{info.description}</IonCol>
                                        <IonCol className="gettingToSimHq-table-RightData ion-text-wrap">{info.stations}</IonCol>
                                    </IonRow>
                                )
                            })}
                        </IonGrid>
                    </IonRow>
                    <IonRow className="gettingToSimHq-heading-row">
                        <IonTitle className="gettingToSimHq-title"><FontAwesomeIcon className="gettingToSimHq-titleIcon" icon={faParking} size="lg" />Car Park Info</IonTitle>
                    </IonRow>
                    <IonRow>
                        <IonText className="gettingToSimHq-description">
                            {/* (With effect from 1 February 2017) <br />
                            Applicable to all white lots within SIM HQ car park <br />
                            Charges: Cars - $1.28 (inclusive of GST), based on 30-minute block charging <br />
                            Operating Hours: 6.00am to 11.59pm (Daily including weekends. Closed on Public Holidays) <br />
                            Grace Period: 15 minutes <br />
                            <br /> */}
                            {car.carparkInfo.split('\n').map(line => <span key={line}>{line}<br /></span>)}<br />
                            <IonRouterLink id="gettingToSimHq-link" href="https://www.google.com/maps/dir//SIM+Global+Education+Singapore/@1.3730975,103.8407254,12z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x31da1080893304bd:0xc889e76f4e447e42!3e0">Get here now</IonRouterLink>
                        </IonText>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default GettingToSimHq;
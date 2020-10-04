import { IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonSlide, IonSlides } from '@ionic/react';
import React, { useState, useEffect } from 'react';

import '../css/Global.css';
import '../css/CampusFacilitiesMap.css';

import blkA from '../img/campusFacilities/blkA.png';
import blkB from '../img/campusFacilities/blkB.png';
import blkC from '../img/campusFacilities/blkC.png';
import blkD from '../img/campusFacilities/blkD.png';

import TopNav from '../components/TopNav';
import Menu from '../components/Menu';
import { db } from '../firebase';

const CampusFacilitiesMap: React.FC = () => {

    const slideOpts = {
        initialSlide: 0,
        speed: 400,
        loop: true
    };

    const [campusFacilities, setCampusFacilities] = useState([]);
    const facilitiesBlkA = campusFacilities.filter((facility: any) => { return facility.blockName == 'A' })
    const facilitiesBlkB = campusFacilities.filter((facility: any) => { return facility.blockName == 'B' })
    const facilitiesBlkC = campusFacilities.filter((facility: any) => { return facility.blockName == 'C' })
    const facilitiesBlkD = campusFacilities.filter((facility: any) => { return facility.blockName == 'D' })


    useEffect(() => {
        db.collection('CampusFacilities')
            .get()
            .then((snapshot) => {
                const facilities: any = []
                snapshot.forEach((doc) => {
                    const data = doc.data()
                    facilities.push(data)
                })
                setCampusFacilities(facilities)
            })

    }, [])

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Campus Facilities Map" route='/u/home' backarrow={true} hamburger={true} />
            </IonHeader>
            
            <IonContent fullscreen={true} className="campusFacilMapIonContent">

                <IonSlides pager={true} options={slideOpts} id="campusFacilSlides">
                    {/* Block A */}
                    <IonSlide className="slide">
                        <IonGrid className="slideGridRowCol" style={{paddingBottom: "10%"}}>
                            <IonRow className="slideGridRowCol">
                                <IonCol size-sizeSm="12" className="imgCol slideGridRowCol">
                                    <IonImg src={blkA} alt="Blk A" className="campusFacilImg"></IonImg>
                                </IonCol>
                            </IonRow>

                            <IonRow className="slideGridRowCol">
                                <IonCol sizeSm="12" className="slideGridRowCol blkTitleRow">
                                    <h4 className="blkTitle">Block A</h4>
                                </IonCol>
                            </IonRow>

                            <IonRow className="campusFacilTableHeaderRow">
                                <IonCol size-sizeSm="6" className="campusFacilTableHeader" style={{ borderRight: "1px solid #dddddd" }}>
                                    Facility
                                </IonCol>

                                <IonCol sizeSm="6" className="campusFacilTableHeader">
                                    Location
                                </IonCol>
                            </IonRow>

                            {/* Rows below to be generated dynamically along with the data*/}
                            {facilitiesBlkA.map((facility: any) => {
                                return (
                                    <IonRow className="campusFacilTableRow" id="campusFacilDataRowA" key={facility.id}>
                                        <IonCol size-sizeSm="6" className="campusFacilTableData ion-text-wrap" style={{ borderRight: "1px solid #dddddd" }}>
                                            <span id="facilNameData">{facility.facilityName}</span>
                                        </IonCol>

                                        <IonCol size-sizeSm="6" className="campusFacilTableData ion-text-wrap">
                                            <span id="facilLocationData">{facility.location}</span>
                                        </IonCol>
                                    </IonRow>
                                )
                            })}

                        </IonGrid>
                    </IonSlide>

                    {/* Block B */}
                    <IonSlide className="slide">
                        <IonGrid className="slideGridRowCol">
                            <IonRow className="slideGridRowCol">
                                <IonCol size-sizeSm="12" className="imgCol slideGridRowCol">
                                    <IonImg src={blkB} alt="Blk B" className="campusFacilImg"></IonImg>
                                </IonCol>
                            </IonRow>

                            <IonRow className="slideGridRowCol">
                                <IonCol sizeSm="12" className="slideGridRowCol blkTitleRow">
                                    <h4 className="blkTitle">Block B</h4>
                                </IonCol>
                            </IonRow>

                            <IonRow className="campusFacilTableHeaderRow">
                                <IonCol size-sizeSm="6" className="campusFacilTableHeader" style={{ borderRight: "1px solid #dddddd" }}>
                                    Facility
                                </IonCol>

                                <IonCol sizeSm="6" className="campusFacilTableHeader">
                                    Location
                                </IonCol>
                            </IonRow>

                            {/* Rows below to be generated dynamically along with the data*/}
                            {facilitiesBlkB.map((facility: any) => {
                                return (
                                    <IonRow className="campusFacilTableRow" id="campusFacilDataRowB" key={facility.id}>
                                        <IonCol size-sizeSm="6" className="campusFacilTableData ion-text-wrap" style={{ borderRight: "1px solid #dddddd" }}>
                                            <span id="facilNameData">{facility.facilityName}</span>
                                        </IonCol>

                                        <IonCol size-sizeSm="6" className="campusFacilTableData ion-text-wrap">
                                            <span id="facilLocationData">{facility.location}</span>
                                        </IonCol>
                                    </IonRow>
                                )
                            })}

                        </IonGrid>
                    </IonSlide>

                    {/* Block C */}
                    <IonSlide className="slide">
                        <IonGrid className="slideGridRowCol">
                            <IonRow className="slideGridRowCol">
                                <IonCol size-sizeSm="12" className="imgCol slideGridRowCol">
                                    <IonImg src={blkC} alt="Blk C" className="campusFacilImg"></IonImg>
                                </IonCol>
                            </IonRow>

                            <IonRow className="slideGridRowCol">
                                <IonCol sizeSm="12" className="slideGridRowCol blkTitleRow">
                                    <h4 className="blkTitle">Block C</h4>
                                </IonCol>
                            </IonRow>

                            <IonRow className="campusFacilTableHeaderRow">
                                <IonCol size-sizeSm="6" className="campusFacilTableHeader" style={{ borderRight: "1px solid #dddddd" }}>
                                    Facility
                                </IonCol>

                                <IonCol sizeSm="6" className="campusFacilTableHeader">
                                    Location
                                </IonCol>
                            </IonRow>

                            {/* Rows below to be generated dynamically along with the data*/}
                            {
                                facilitiesBlkC.map((facility: any) => {
                                    return (
                                        <IonRow className="campusFacilTableRow" id="campusFacilDataRowC" key={facility.id}>
                                            <IonCol size-sizeSm="6" className="campusFacilTableData ion-text-wrap" style={{ borderRight: "1px solid #dddddd" }}>
                                                <span id="facilNameData">{facility.facilityName}</span>
                                            </IonCol>

                                            <IonCol size-sizeSm="6" className="campusFacilTableData ion-text-wrap">
                                                <span id="facilLocationData">{facility.location}</span>
                                            </IonCol>
                                        </IonRow>
                                    )


                                })
                            }

                        </IonGrid>
                    </IonSlide>

                    {/* Block D */}
                    <IonSlide className="slide">
                        <IonGrid className="slideGridRowCol">
                            <IonRow className="slideGridRowCol">
                                <IonCol size-sizeSm="12" className="imgCol slideGridRowCol">
                                    <IonImg src={blkD} alt="Blk D" className="campusFacilImg"></IonImg>
                                </IonCol>
                            </IonRow>

                            <IonRow className="slideGridRowCol">
                                <IonCol sizeSm="12" className="slideGridRowCol blkTitleRow">
                                    <h4 className="blkTitle">Block D</h4>
                                </IonCol>
                            </IonRow>

                            <IonRow className="campusFacilTableHeaderRow">
                                <IonCol size-sizeSm="6" className="campusFacilTableHeader" style={{ borderRight: "1px solid #dddddd" }}>
                                    Facility
                                </IonCol>

                                <IonCol sizeSm="6" className="campusFacilTableHeader">
                                    Location
                                </IonCol>
                            </IonRow>

                            {/* Rows below to be generated dynamically along with the data*/}
                            {facilitiesBlkD.map((facility: any) => {
                                return (
                                    <IonRow className="campusFacilTableRow" id="campusFacilDataRowD" key={facility.id}>
                                        <IonCol size-sizeSm="6" className="campusFacilTableData ion-text-wrap" style={{ borderRight: "1px solid #dddddd" }}>
                                            <span id="facilNameData">{facility.facilityName}</span>
                                        </IonCol>

                                        <IonCol size-sizeSm="6" className="campusFacilTableData ion-text-wrap">
                                            <span id="facilLocationData">{facility.location}</span>
                                        </IonCol>
                                    </IonRow>
                                )
                            })}

                        </IonGrid>
                    </IonSlide>
                </IonSlides>
            </IonContent>
        </IonPage>
    );
};

export default CampusFacilitiesMap;
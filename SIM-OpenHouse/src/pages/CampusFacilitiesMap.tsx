import { IonCol, IonContent, IonGrid, IonImg, IonPage, IonRow, IonSlide, IonSlides } from '@ionic/react';
import React from 'react';

import '../css/Global.css';
import '../css/CampusFacilitiesMap.css';

import blkA from '../img/campusFacilities/blkA.png';
import blkB from '../img/campusFacilities/blkB.png';
import blkC from '../img/campusFacilities/blkC.png';
import blkD from '../img/campusFacilities/blkD.png';

import TopNav from '../components/TopNav';
import Menu from '../components/Menu';

const CampusFacilitiesMap: React.FC = () => {

    const slideOpts = {
        initialSlide: 0,
        speed: 400,
        loop: true
    };

    return (
        <IonPage>
            <TopNav title="Campus Facilities Map" route='/u/home' backarrow={ true } hamburger = { true }/>
            
            <IonContent fullscreen={true} className="campusFacilMapIonContent">
                
                <IonSlides pager={true} options={slideOpts} id="campusFacilSlides">
                    {/* Block A */}
                    <IonSlide className="slide">
                        <IonGrid className="slideGridRowCol">
                            <IonRow className="slideGridRowCol">
                                <IonCol size-sizeSm="12" className="imgCol slideGridRowCol">
                                    <IonImg src={ blkA } alt="Blk A" className="campusFacilImg"></IonImg>
                                </IonCol>
                            </IonRow>

                            <IonRow className="slideGridRowCol">
                                <IonCol size-sizeSm="12" className="slideGridRowCol blkTitleRow">
                                    <h4 className="blkTitle">Block A</h4>
                                </IonCol>
                            </IonRow>

                            <IonRow className="campusFacilTableHeaderRow">
                                <IonCol size-sizeSm="6" className="campusFacilTableHeader" style={{borderRight: "1px solid #dddddd"}}>
                                    Facility
                                </IonCol>

                                <IonCol size-sizeSm="6" className="campusFacilTableHeader">
                                    Location
                                </IonCol>
                            </IonRow>

                            {/* Rows below to be generated dynamically along with the data*/}
                            <IonRow className="campusFacilTableRow" id="campusFacilDataRowA">
                                <IonCol size-sizeSm="6" className="campusFacilTableData ion-text-wrap" style={{borderRight: "1px solid #dddddd"}}>
                                    <span id="facilNameData">Library</span>
                                </IonCol>

                                <IonCol size-sizeSm="6" className="campusFacilTableData ion-text-wrap">
                                    <span id="facilLocationData">Blk A, Level 1</span>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonSlide>

                    {/* Block B */}
                    <IonSlide className="slide">
                        <IonGrid className="slideGridRowCol">
                            <IonRow className="slideGridRowCol">
                                <IonCol size-sizeSm="12" className="imgCol slideGridRowCol">
                                    <IonImg src={ blkB } alt="Blk B" className="campusFacilImg"></IonImg>
                                </IonCol>
                            </IonRow>

                            <IonRow className="slideGridRowCol">
                                <IonCol size-sizeSm="12" className="slideGridRowCol blkTitleRow">
                                    <h4 className="blkTitle">Block B</h4>
                                </IonCol>
                            </IonRow>

                            <IonRow className="campusFacilTableHeaderRow">
                                <IonCol size-sizeSm="6" className="campusFacilTableHeader" style={{borderRight: "1px solid #dddddd"}}>
                                    Facility
                                </IonCol>

                                <IonCol size-sizeSm="6" className="campusFacilTableHeader">
                                    Location
                                </IonCol>
                            </IonRow>

                            {/* Rows below to be generated dynamically along with the data*/}
                            <IonRow className="campusFacilTableRow" id="campusFacilDataRowB">
                                <IonCol size-sizeSm="6" className="campusFacilTableData ion-text-wrap" style={{borderRight: "1px solid #dddddd"}}>
                                    <span id="facilNameData">4 Multi-Purpose Halls</span>
                                </IonCol>

                                <IonCol size-sizeSm="6" className="campusFacilTableData ion-text-wrap">
                                    <span id="facilLocationData">Blk B</span>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonSlide>

                    {/* Block C */}
                    <IonSlide className="slide">
                        <IonGrid className="slideGridRowCol">
                            <IonRow className="slideGridRowCol">
                                <IonCol size-sizeSm="12" className="imgCol slideGridRowCol">
                                    <IonImg src={ blkC } alt="Blk C" className="campusFacilImg"></IonImg>
                                </IonCol>
                            </IonRow>

                            <IonRow className="slideGridRowCol">
                                <IonCol size-sizeSm="12" className="slideGridRowCol blkTitleRow">
                                    <h4 className="blkTitle">Block C</h4>
                                </IonCol>
                            </IonRow>

                            <IonRow className="campusFacilTableHeaderRow">
                                <IonCol size-sizeSm="6" className="campusFacilTableHeader" style={{borderRight: "1px solid #dddddd"}}>
                                    Facility
                                </IonCol>

                                <IonCol size-sizeSm="6" className="campusFacilTableHeader">
                                    Location
                                </IonCol>
                            </IonRow>

                            {/* Rows below to be generated dynamically along with the data*/}
                            <IonRow className="campusFacilTableRow" id="campusFacilDataRowC">
                                <IonCol size-sizeSm="6" className="campusFacilTableData ion-text-wrap" style={{borderRight: "1px solid #dddddd"}}>
                                    <span id="facilNameData">Student Wellness Centre</span>
                                </IonCol>

                                <IonCol size-sizeSm="6" className="campusFacilTableData ion-text-wrap">
                                    <span id="facilLocationData">Blk C, Level 2</span>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonSlide>

                    {/* Block D */}
                    <IonSlide className="slide">
                        <IonGrid className="slideGridRowCol">
                            <IonRow className="slideGridRowCol">
                                <IonCol size-sizeSm="12" className="imgCol slideGridRowCol">
                                    <IonImg src={ blkD } alt="Blk D" className="campusFacilImg"></IonImg>
                                </IonCol>
                            </IonRow>

                            <IonRow className="slideGridRowCol">
                                <IonCol size-sizeSm="12" className="slideGridRowCol blkTitleRow">
                                    <h4 className="blkTitle">Block D</h4>
                                </IonCol>
                            </IonRow>

                            <IonRow className="campusFacilTableHeaderRow">
                                <IonCol size-sizeSm="6" className="campusFacilTableHeader" style={{borderRight: "1px solid #dddddd"}}>
                                    Facility
                                </IonCol>

                                <IonCol size-sizeSm="6" className="campusFacilTableHeader">
                                    Location
                                </IonCol>
                            </IonRow>

                            {/* Rows below to be generated dynamically along with the data*/}
                            <IonRow className="campusFacilTableRow" id="campusFacilDataRowD">
                                <IonCol size-sizeSm="6" className="campusFacilTableData ion-text-wrap" style={{borderRight: "1px solid #dddddd"}}>
                                    <span id="facilNameData">Tennis Courts</span>
                                </IonCol>

                                <IonCol size-sizeSm="6" className="campusFacilTableData ion-text-wrap">
                                    <span id="facilLocationData">Blk D, Level 4</span>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonSlide>
                </IonSlides>
            </IonContent>
        </IonPage>
    );
};

export default CampusFacilitiesMap;
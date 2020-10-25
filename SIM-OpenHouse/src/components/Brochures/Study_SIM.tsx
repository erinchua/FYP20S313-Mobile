import { IonButton, IonCol, IonGrid, IonIcon, IonImg, IonRow, IonTitle } from '@ionic/react';
import React, { useRef } from 'react';

import '../../css/Global.css';
import '../../css/Brochures.css';
import { addCircle, removeCircle } from 'ionicons/icons';
import fullTimeProspectus from '../../img/brochure/full-time-prospectus.jpg';
import partTimeProspectus from '../../img/brochure/part-time-prospectus.jpg';
import simGeDipGrad from '../../img/brochure/SIMGE-Diploma-Certificate.jpg';
import simGeGrad from '../../img/brochure/SIMGE-Graduate.jpg'; 
import london1 from '../../img/brochure/London-BachelorOfSci.jpg';
import londonProfAccountancy from '../../img/brochure/London-ProfessionalAccountancy.jpg';
import london2 from '../../img/brochure/London-BachelorOfSci.jpg';
import londonInternationalFoundProg from '../../img/brochure/London-InternationFoundationProg.jpg';
import londonMaster from '../../img/brochure/London-MasterOfSci.jpg';
import BirminghamBachelor from '../../img/brochure/Birmingham-BachelorOfSci.jpg';
import BirminghamMasterBA from '../../img/brochure/Birmingham-MasterOfBA.jpg';
import BirminghamMasterSci from '../../img/brochure/Birmingham-MasterOfSci.jpg';
import StirlingBachelor from '../../img/brochure/Stirling-BachelorOfArts.jpg';
import Buffalo from '../../img/brochure/Buffalo.jpg';
import LaTrobe from '../../img/brochure/LaTrobe.jpg';
import RmitBachelorOfBusiness from '../../img/brochure/RMIT-BachelorOfBusiness.jpg';
import RmitBachelorOfCommunication from '../../img/brochure/RMIT-BachelorOfCommunication.jpg';
import RmitBachelorOfDesign from '../../img/brochure/RMIT-BachelorOfDesign.jpg';
import RmitBachelorOfAppliedSci from '../../img/brochure/RMIT-BachelorOfAppliedSci.jpg';
import RmitConstructionManagement from '../../img/brochure/RMIT-ConstructionManagement.jpg';
import Sydney from '../../img/brochure/Sydney.jpg';
import WollongongComSci from '../../img/brochure/Wollongong-BachelorOfComSci.jpg';
import WollongongPsySci from '../../img/brochure/Wollongong-BachelorOfPsySci.jpg';
import WarwickProject from '../../img/brochure/Warwick-Project.jpg';
import WarwickCyber from '../../img/brochure/Warwick-Cyber.jpg';
import WarwickBusiness from '../../img/brochure/Warwick-Business.jpg';

const Study_SIM: React.FC = () => {

    const prospectus = useRef<HTMLIonRowElement>(null);
    const simGe = useRef<HTMLIonRowElement>(null);
    const uniOfLondon = useRef<HTMLIonRowElement>(null);
    const uniOfBirmingham = useRef<HTMLIonRowElement>(null);
    const uniOfStirling = useRef<HTMLIonRowElement>(null);
    const uniAtBuffalo = useRef<HTMLIonRowElement>(null);
    const laTrobeUni = useRef<HTMLIonRowElement>(null);
    const rmitUni = useRef<HTMLIonRowElement>(null);
    const uniOfSydney = useRef<HTMLIonRowElement>(null);
    const uniOfWollongong = useRef<HTMLIonRowElement>(null);
    const grenobleEcole = useRef<HTMLIonRowElement>(null);
    const uniOfWarwick = useRef<HTMLIonRowElement>(null);

    const toggleShow1 = useRef<HTMLIonIconElement>(null);
    const toggleShow2 = useRef<HTMLIonIconElement>(null);
    const toggleShow3 = useRef<HTMLIonIconElement>(null);
    const toggleShow4 = useRef<HTMLIonIconElement>(null);
    const toggleShow5 = useRef<HTMLIonIconElement>(null);
    const toggleShow6 = useRef<HTMLIonIconElement>(null);
    const toggleShow7 = useRef<HTMLIonIconElement>(null);
    const toggleShow8 = useRef<HTMLIonIconElement>(null);
    const toggleShow9 = useRef<HTMLIonIconElement>(null);
    const toggleShow10 = useRef<HTMLIonIconElement>(null);
    const toggleShow11 = useRef<HTMLIonIconElement>(null);
    const toggleShow12 = useRef<HTMLIonIconElement>(null);

    const displayProspectus = () => {
        prospectus.current!.hidden = !prospectus.current!.hidden;
        if(toggleShow1.current!.icon === addCircle) {
            toggleShow1.current!.icon = removeCircle;
        } else {
            toggleShow1.current!.icon = addCircle;
        }
    }
    
    const displaySimGe = () => {
        simGe.current!.hidden = !simGe.current!.hidden;
        if(toggleShow2.current!.icon === addCircle) {
            toggleShow2.current!.icon = removeCircle;
        } else {
            toggleShow2.current!.icon = addCircle;
        }
    }

    const displayUniOfLondon = () => {
        uniOfLondon.current!.hidden = !uniOfLondon.current!.hidden;
        if(toggleShow3.current!.icon === addCircle) {
            toggleShow3.current!.icon = removeCircle;
        } else {
            toggleShow3.current!.icon = addCircle;
        }
    }

    const displayUniOfBirmingham = () => {
        uniOfBirmingham.current!.hidden = !uniOfBirmingham.current!.hidden;
        if(toggleShow4.current!.icon === addCircle) {
            toggleShow4.current!.icon = removeCircle;
        } else {
            toggleShow4.current!.icon = addCircle;
        }
    }

    const displayUniOfStirling = () => {
        uniOfStirling.current!.hidden = !uniOfStirling.current!.hidden;
        if(toggleShow5.current!.icon === addCircle) {
            toggleShow5.current!.icon = removeCircle;
        } else {
            toggleShow5.current!.icon = addCircle;
        }
    }

    const displayUniAtBuffalo = () => {
        uniAtBuffalo.current!.hidden = !uniAtBuffalo.current!.hidden;
        if(toggleShow6.current!.icon === addCircle) {
            toggleShow6.current!.icon = removeCircle;
        } else {
            toggleShow6.current!.icon = addCircle;
        }
    }

    const displayLaTrobeUni = () => {
        laTrobeUni.current!.hidden = !laTrobeUni.current!.hidden;
        if(toggleShow7.current!.icon === addCircle) {
            toggleShow7.current!.icon = removeCircle;
        } else {
            toggleShow7.current!.icon = addCircle;
        }
    }

    const displayRmitUni = () => {
        rmitUni.current!.hidden = !rmitUni.current!.hidden;
        if(toggleShow8.current!.icon === addCircle) {
            toggleShow8.current!.icon = removeCircle;
        } else {
            toggleShow8.current!.icon = addCircle;
        }
    }

    const displayUniOfSydney = () => {
        uniOfSydney.current!.hidden = !uniOfSydney.current!.hidden;
        if(toggleShow9.current!.icon === addCircle) {
            toggleShow9.current!.icon = removeCircle;
        } else {
            toggleShow9.current!.icon = addCircle;
        }
    }

    const displayUniOfWollongong = () => {
        uniOfWollongong.current!.hidden = !uniOfWollongong.current!.hidden;
        if(toggleShow10.current!.icon === addCircle) {
            toggleShow10.current!.icon = removeCircle;
        } else {
            toggleShow10.current!.icon = addCircle;
        }
    }

    const displayGrenobleEcole = () => {
        grenobleEcole.current!.hidden = !grenobleEcole.current!.hidden;
        if(toggleShow11.current!.icon === addCircle) {
            toggleShow11.current!.icon = removeCircle;
        } else {
            toggleShow11.current!.icon = addCircle;
        }
    }

    const displayUniOfWarwick = () => {
        uniOfWarwick.current!.hidden = !uniOfWarwick.current!.hidden;
        if(toggleShow12.current!.icon === addCircle) {
            toggleShow12.current!.icon = removeCircle;
        } else {
            toggleShow12.current!.icon = addCircle;
        }
    }

    return (
        <>
            <IonGrid id="brochures-grid">
                <IonRow className="brochures-toggle-container">
                    <IonCol className="brochures-toggle-container">
                        <IonRow className="ion-justify-content-start brochures-inner-row">
                            <IonCol className="ion-align-self-center" size="10">
                                <IonTitle className="brochures-toggle-header">Prospectus</IonTitle>
                                <IonTitle className="brochures-toggle-subHeader">For Singaporeans & Permanent Residents</IonTitle>
                            </IonCol>
                            <IonCol size="2" className="ion-align-self-center">
                                <IonButton size="small" className="brochures-toggle-button" onClick={() => displayProspectus()}><IonIcon ref={toggleShow1} icon={addCircle} slot="icon-only"/></IonButton>
                            </IonCol>
                        </IonRow>

                        <IonRow className="brochures-toggle-details-container" ref={prospectus} hidden={true}>
                            <IonCol size="12">
                                <IonRow>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonImg className="brochures-coverImg" src={fullTimeProspectus}/>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonImg className="brochures-coverImg" src={partTimeProspectus}/>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download Prospectus</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download Part-Time Prospectus</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonCol>
                </IonRow>

                <IonRow id="brochures-titleRow">
                    <IonTitle id="brochures-title">Programme Brochures</IonTitle>
                </IonRow>

                {/* SIM Global Education */}
                <IonRow className="brochures-toggle-container">
                    <IonCol className="brochures-toggle-container">
                        <IonRow className="ion-justify-content-start brochures-inner-row">
                            <IonCol className="ion-align-self-center" size="10">
                                <IonTitle className="brochuresProg-toggle-header">SIM Global Education</IonTitle>
                            </IonCol>
                            <IonCol size="2" className="ion-align-self-center">
                                <IonButton size="small" className="brochures-toggle-button" onClick={() => displaySimGe()}><IonIcon ref={toggleShow2} icon={addCircle} slot="icon-only"/></IonButton>
                            </IonCol>
                        </IonRow>

                        <IonRow className="brochures-toggle-details-container" ref={simGe} hidden={true}>
                            <IonCol size="12">
                                <IonRow>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonImg className="brochures-coverImg" src={simGeDipGrad}/>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonImg className="brochures-coverImg" src={simGeGrad}/>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6" >
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonCol>
                </IonRow>

                {/* University of London */}
                <IonRow className="brochures-toggle-container">
                    <IonCol className="brochures-toggle-container">
                        <IonRow className="ion-justify-content-start brochures-inner-row">
                            <IonCol className="ion-align-self-center" size="10">
                                <IonTitle className="brochuresProg-toggle-header">University of London</IonTitle>
                            </IonCol>
                            <IonCol size="2" className="ion-align-self-center">
                                <IonButton size="small" className="brochures-toggle-button" onClick={() => displayUniOfLondon()}><IonIcon ref={toggleShow3} icon={addCircle} slot="icon-only"/></IonButton>
                            </IonCol>
                        </IonRow>

                        <IonRow className="brochures-toggle-details-container" ref={uniOfLondon} hidden={true}>
                            <IonCol size="12">
                                <IonRow>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonImg className="brochures-coverImg" src={london1}/>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonImg className="brochures-coverImg" src={londonProfAccountancy}/>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6" >
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>

                                <IonRow>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonImg className="brochures-coverImg" src={london2}/>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonImg className="brochures-coverImg" src={londonInternationalFoundProg}/>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6" >
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>

                                <IonRow>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonImg className="brochures-coverImg" src={londonMaster}/>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6" >
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonCol>
                </IonRow>

                {/* University of Birmingham */}
                <IonRow className="brochures-toggle-container">
                    <IonCol className="brochures-toggle-container">
                        <IonRow className="ion-justify-content-start brochures-inner-row">
                            <IonCol className="ion-align-self-center" size="10">
                                <IonTitle className="brochuresProg-toggle-header">University of Birmingham</IonTitle>
                            </IonCol>
                            <IonCol size="2" className="ion-align-self-center">
                                <IonButton size="small" className="brochures-toggle-button" onClick={() => displayUniOfBirmingham()}><IonIcon ref={toggleShow4} icon={addCircle} slot="icon-only"/></IonButton>
                            </IonCol>
                        </IonRow>

                        <IonRow className="brochures-toggle-details-container" ref={uniOfBirmingham} hidden={true}>
                            <IonCol size="12">
                                <IonRow>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonImg className="brochures-coverImg" src={BirminghamBachelor}/>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonImg className="brochures-coverImg" src={BirminghamMasterBA}/>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6" >
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                                
                                <IonRow>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonImg className="brochures-coverImg" src={BirminghamMasterSci}/>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6" >
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonCol>
                </IonRow>

                {/* University of Stirling */}
                <IonRow className="brochures-toggle-container">
                    <IonCol className="brochures-toggle-container">
                        <IonRow className="ion-justify-content-start brochures-inner-row">
                            <IonCol className="ion-align-self-center" size="10">
                                <IonTitle className="brochuresProg-toggle-header">University of Stirling</IonTitle>
                            </IonCol>
                            <IonCol size="2" className="ion-align-self-center">
                                <IonButton size="small" className="brochures-toggle-button" onClick={() => displayUniOfStirling()}><IonIcon ref={toggleShow5} icon={addCircle} slot="icon-only"/></IonButton>
                            </IonCol>
                        </IonRow>

                        <IonRow className="brochures-toggle-details-container" ref={uniOfStirling} hidden={true}>
                            <IonCol size="12">
                                <IonRow>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonImg className="brochures-coverImg" src={StirlingBachelor}/>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6" >
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonCol>
                </IonRow>

                {/* University at Buffalo */}
                <IonRow className="brochures-toggle-container">
                    <IonCol className="brochures-toggle-container">
                        <IonRow className="ion-justify-content-start brochures-inner-row">
                            <IonCol className="ion-align-self-center" size="10">
                                <IonTitle className="brochuresProg-toggle-header">University at Buffalo</IonTitle>
                            </IonCol>
                            <IonCol size="2" className="ion-align-self-center">
                                <IonButton size="small" className="brochures-toggle-button" onClick={() => displayUniAtBuffalo()}><IonIcon ref={toggleShow6} icon={addCircle} slot="icon-only"/></IonButton>
                            </IonCol>
                        </IonRow>

                        <IonRow className="brochures-toggle-details-container" ref={uniAtBuffalo} hidden={true}>
                            <IonCol size="12">
                                <IonRow>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonImg className="brochures-coverImg" src={Buffalo}/>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6" >
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonCol>
                </IonRow>

                {/* La Trobe University */}
                <IonRow className="brochures-toggle-container">
                    <IonCol className="brochures-toggle-container">
                        <IonRow className="ion-justify-content-start brochures-inner-row">
                            <IonCol className="ion-align-self-center" size="10">
                                <IonTitle className="brochuresProg-toggle-header">La Trobe University</IonTitle>
                            </IonCol>
                            <IonCol size="2" className="ion-align-self-center">
                                <IonButton size="small" className="brochures-toggle-button" onClick={() => displayLaTrobeUni()}><IonIcon ref={toggleShow7} icon={addCircle} slot="icon-only"/></IonButton>
                            </IonCol>
                        </IonRow>

                        <IonRow className="brochures-toggle-details-container" ref={laTrobeUni} hidden={true}>
                            <IonCol size="12">
                                <IonRow>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonImg className="brochures-coverImg" src={LaTrobe}/>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6" >
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonCol>
                </IonRow>

                {/* RMIT University */}
                <IonRow className="brochures-toggle-container">
                    <IonCol className="brochures-toggle-container">
                        <IonRow className="ion-justify-content-start brochures-inner-row">
                            <IonCol className="ion-align-self-center" size="10">
                                <IonTitle className="brochuresProg-toggle-header">RMIT University</IonTitle>
                            </IonCol>
                            <IonCol size="2" className="ion-align-self-center">
                                <IonButton size="small" className="brochures-toggle-button" onClick={() => displayRmitUni()}><IonIcon ref={toggleShow8} icon={addCircle} slot="icon-only"/></IonButton>
                            </IonCol>
                        </IonRow>

                        <IonRow className="brochures-toggle-details-container" ref={rmitUni} hidden={true}>
                            <IonCol size="12">
                                <IonRow>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonImg className="brochures-coverImg" src={RmitBachelorOfBusiness}/>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonImg className="brochures-coverImg" src={RmitBachelorOfCommunication}/>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6" >
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>

                                <IonRow>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonImg className="brochures-coverImg" src={RmitBachelorOfDesign}/>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonImg className="brochures-coverImg" src={RmitBachelorOfAppliedSci}/>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6" >
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>

                                <IonRow>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonImg className="brochures-coverImg" src={RmitConstructionManagement}/>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6" >
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonCol>
                </IonRow>

                {/* The University of Sydney */}
                <IonRow className="brochures-toggle-container">
                    <IonCol className="brochures-toggle-container">
                        <IonRow className="ion-justify-content-start brochures-inner-row">
                            <IonCol className="ion-align-self-center" size="10">
                                <IonTitle className="brochuresProg-toggle-header">The University of Sydney</IonTitle>
                            </IonCol>
                            <IonCol size="2" className="ion-align-self-center">
                                <IonButton size="small" className="brochures-toggle-button" onClick={() => displayUniOfSydney()}><IonIcon ref={toggleShow9} icon={addCircle} slot="icon-only"/></IonButton>
                            </IonCol>
                        </IonRow>

                        <IonRow className="brochures-toggle-details-container" ref={uniOfSydney} hidden={true}>
                            <IonCol size="12">
                                <IonRow>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonImg className="brochures-coverImg" src={Sydney}/>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6" >
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonCol>
                </IonRow>

                {/* University of Wollongong */}
                <IonRow className="brochures-toggle-container">
                    <IonCol className="brochures-toggle-container">
                        <IonRow className="ion-justify-content-start brochures-inner-row">
                            <IonCol className="ion-align-self-center" size="10">
                                <IonTitle className="brochuresProg-toggle-header">University of Wollongong</IonTitle>
                            </IonCol>
                            <IonCol size="2" className="ion-align-self-center">
                                <IonButton size="small" className="brochures-toggle-button" onClick={() => displayUniOfWollongong()}><IonIcon ref={toggleShow10} icon={addCircle} slot="icon-only"/></IonButton>
                            </IonCol>
                        </IonRow>

                        <IonRow className="brochures-toggle-details-container" ref={uniOfWollongong} hidden={true}>
                            <IonCol size="12">
                                <IonRow>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonImg className="brochures-coverImg" src={WollongongComSci}/>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonImg className="brochures-coverImg" src={WollongongPsySci}/>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download Prospectus</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download Part-Time Prospectus</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonCol>
                </IonRow>

                {/* Grenoble Ecole de Management */}
                <IonRow className="brochures-toggle-container">
                    <IonCol className="brochures-toggle-container">
                        <IonRow className="ion-justify-content-start brochures-inner-row">
                            <IonCol className="ion-align-self-center" size="10">
                                <IonTitle className="brochuresProg-toggle-header">Grenoble Ecole de Management</IonTitle>
                            </IonCol>
                            <IonCol size="2" className="ion-align-self-center">
                                <IonButton size="small" className="brochures-toggle-button" onClick={() => displayGrenobleEcole()}><IonIcon ref={toggleShow11} icon={addCircle} slot="icon-only"/></IonButton>
                            </IonCol>
                        </IonRow>

                        <IonRow className="brochures-toggle-details-container" ref={grenobleEcole} hidden={true}>
                            <IonCol size="12">
                                <IonRow>
                                    <IonCol className="ion-align-self-center" id="noBrochures">There is no brochure</IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonCol>
                </IonRow>

                {/* The University of Warwick */}
                <IonRow className="brochures-toggle-container">
                    <IonCol className="brochures-toggle-container">
                        <IonRow className="ion-justify-content-start brochures-inner-row">
                            <IonCol className="ion-align-self-center" size="10">
                                <IonTitle className="brochuresProg-toggle-header">The University of Warwick</IonTitle>
                            </IonCol>
                            <IonCol size="2" className="ion-align-self-center">
                                <IonButton size="small" className="brochures-toggle-button" onClick={() => displayUniOfWarwick()}><IonIcon ref={toggleShow12} icon={addCircle} slot="icon-only"/></IonButton>
                            </IonCol>
                        </IonRow>

                        <IonRow className="brochures-toggle-details-container" ref={uniOfWarwick} hidden={true}>
                            <IonCol size="12">
                                <IonRow>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonImg className="brochures-coverImg" src={WarwickProject}/>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonImg className="brochures-coverImg" src={WarwickCyber}/>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6" >
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                                
                                <IonRow>
                                    <IonCol size="6">
                                        <IonRow className="ion-justify-content-center">
                                            <IonImg className="brochures-coverImg" src={WarwickBusiness}/>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6" >
                                        <IonRow className="ion-justify-content-center">
                                            <IonButton fill="outline" className="brochures-prospectus-button"><div className="ion-text-wrap">Download</div></IonButton>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol size="6">
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonCol>
                </IonRow>

            </IonGrid>
        </>
    );
};

export default Study_SIM;
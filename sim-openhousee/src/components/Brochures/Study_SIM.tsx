import { IonButton, IonCol, IonGrid, IonIcon, IonImg, IonRow, IonTitle } from '@ionic/react';
import React, { useRef } from 'react';

import '../../css/Global.css';
import '../../css/Brochures.css';
import { addCircle, removeCircle } from 'ionicons/icons';
import { Brochure } from '../../modules/map';

const Study_SIM: React.FC<{ brochures: Brochure[] }> = (props) => {

    const progBrochures = props.brochures.filter(broc => { return broc.id.split("-")[0].toLowerCase() !== "study" });

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
                                    {progBrochures.map(broc => (
                                        broc.id.split("-")[0] === "prospect" ? (
                                            <IonCol size="6" key={broc.id}>
                                                <IonRow className="ion-justify-content-center">
                                                    <IonImg className="brochures-coverImg" src={broc.imageUrl}/>
                                                </IonRow>
                                                <IonRow className="ion-justify-content-center">
                                                    <IonButton fill="outline" className="brochures-prospectus-button" href={broc.brochureUrl} target="_blank"><div className="ion-text-wrap">Download Prospectus</div></IonButton>
                                                </IonRow>
                                            </IonCol>
                                        ) : null
                                    ))}
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
                                    {progBrochures.map(broc => (
                                        broc.description.split("-")[0].toLowerCase() === "sim" ? (
                                            <IonCol size="6" key={broc.id}>
                                                <IonRow className="ion-justify-content-center">
                                                    <IonImg className="brochures-coverImg" src={broc.imageUrl}/>
                                                </IonRow>
                                                <IonRow className="ion-justify-content-center">
                                                    <IonButton fill="outline" className="brochures-prospectus-button" href={broc.brochureUrl} target="_blank"><div className="ion-text-wrap">Download</div></IonButton>
                                                </IonRow>
                                            </IonCol>
                                        ) : null
                                    ))}
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
                                    {progBrochures.map(broc => (
                                        broc.description.split("-")[0].toLowerCase() === "uol" ? (
                                            <IonCol size="6" key={broc.id}>
                                                <IonRow className="ion-justify-content-center">
                                                    <IonImg className="brochures-coverImg" src={broc.imageUrl}/>
                                                </IonRow>
                                                <IonRow className="ion-justify-content-center">
                                                    <IonButton fill="outline" className="brochures-prospectus-button" href={broc.brochureUrl} target="_blank"><div className="ion-text-wrap">Download</div></IonButton>
                                                </IonRow>
                                            </IonCol>
                                        ) : null
                                    ))}
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
                                    {progBrochures.map(broc => (
                                        broc.description.split("-")[0].toLowerCase() === "uob" ? (
                                            <IonCol size="6" key={broc.id}>
                                                <IonRow className="ion-justify-content-center">
                                                    <IonImg className="brochures-coverImg" src={broc.imageUrl}/>
                                                </IonRow>
                                                <IonRow className="ion-justify-content-center">
                                                    <IonButton fill="outline" className="brochures-prospectus-button" href={broc.brochureUrl} target="_blank"><div className="ion-text-wrap">Download</div></IonButton>
                                                </IonRow>
                                            </IonCol>
                                        ) : null
                                    ))}
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
                                    {progBrochures.map(broc => (
                                        broc.description.split("-")[0].toLowerCase() === "stirling" ? (
                                            <IonCol size="6" key={broc.id}>
                                                <IonRow className="ion-justify-content-center">
                                                    <IonImg className="brochures-coverImg" src={broc.imageUrl}/>
                                                </IonRow>
                                                <IonRow className="ion-justify-content-center">
                                                    <IonButton fill="outline" className="brochures-prospectus-button" href={broc.brochureUrl} target="_blank"><div className="ion-text-wrap">Download</div></IonButton>
                                                </IonRow>
                                            </IonCol>
                                        ) : null
                                    ))}
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
                                    {progBrochures.map(broc => (
                                        broc.description.split("-")[0].toLowerCase() === "ub" ? (
                                            <IonCol size="6" key={broc.id}>
                                                <IonRow className="ion-justify-content-center">
                                                    <IonImg className="brochures-coverImg" src={broc.imageUrl}/>
                                                </IonRow>
                                                <IonRow className="ion-justify-content-center">
                                                    <IonButton fill="outline" className="brochures-prospectus-button" href={broc.brochureUrl} target="_blank"><div className="ion-text-wrap">Download</div></IonButton>
                                                </IonRow>
                                            </IonCol>
                                        ) : null
                                    ))}
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
                                    {progBrochures.map(broc => (
                                        broc.description.split("-")[0].toLowerCase() === "ltu" ? (
                                            <IonCol size="6" key={broc.id}>
                                                <IonRow className="ion-justify-content-center">
                                                    <IonImg className="brochures-coverImg" src={broc.imageUrl}/>
                                                </IonRow>
                                                <IonRow className="ion-justify-content-center">
                                                    <IonButton fill="outline" className="brochures-prospectus-button" href={broc.brochureUrl} target="_blank"><div className="ion-text-wrap">Download</div></IonButton>
                                                </IonRow>
                                            </IonCol>
                                        ) : null
                                    ))}
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
                                    {progBrochures.map(broc => (
                                        broc.description.split("-")[0].toLowerCase() === "rmit" ? (
                                            <IonCol size="6" key={broc.id}>
                                                <IonRow className="ion-justify-content-center">
                                                    <IonImg className="brochures-coverImg" src={broc.imageUrl}/>
                                                </IonRow>
                                                <IonRow className="ion-justify-content-center">
                                                    <IonButton fill="outline" className="brochures-prospectus-button" href={broc.brochureUrl} target="_blank"><div className="ion-text-wrap">Download</div></IonButton>
                                                </IonRow>
                                            </IonCol>
                                        ) : null
                                    ))}
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
                                    {progBrochures.map(broc => (
                                        broc.description.split("-")[0].toLowerCase() === "usyd" ? (
                                            <IonCol size="6" key={broc.id}>
                                                <IonRow className="ion-justify-content-center">
                                                    <IonImg className="brochures-coverImg" src={broc.imageUrl}/>
                                                </IonRow>
                                                <IonRow className="ion-justify-content-center">
                                                    <IonButton fill="outline" className="brochures-prospectus-button" href={broc.brochureUrl} target="_blank"><div className="ion-text-wrap">Download</div></IonButton>
                                                </IonRow>
                                            </IonCol>
                                        ) : null
                                    ))}
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
                                    {progBrochures.map(broc => (
                                        broc.description.split("-")[0].toLowerCase() === "uow" ? (
                                            <IonCol size="6" key={broc.id}>
                                                <IonRow className="ion-justify-content-center">
                                                    <IonImg className="brochures-coverImg" src={broc.imageUrl}/>
                                                </IonRow>
                                                <IonRow className="ion-justify-content-center">
                                                    <IonButton fill="outline" className="brochures-prospectus-button" href={broc.brochureUrl} target="_blank"><div className="ion-text-wrap">Download</div></IonButton>
                                                </IonRow>
                                            </IonCol>
                                        ) : null
                                    ))}
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
                                    {progBrochures.map(broc => (
                                        broc.description.split("-")[0].toLowerCase() === "warwick" ? (
                                            <IonCol size="6" key={broc.id}>
                                                <IonRow className="ion-justify-content-center">
                                                    <IonImg className="brochures-coverImg" src={broc.imageUrl}/>
                                                </IonRow>
                                                <IonRow className="ion-justify-content-center">
                                                    <IonButton fill="outline" className="brochures-prospectus-button" href={broc.brochureUrl} target="_blank"><div className="ion-text-wrap">Download</div></IonButton>
                                                </IonRow>
                                            </IonCol>
                                        ) : null
                                    ))}
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
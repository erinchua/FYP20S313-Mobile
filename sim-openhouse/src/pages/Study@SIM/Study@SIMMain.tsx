import { IonCol, IonContent, IonGrid, IonHeader, IonItem, IonPage, IonRow, IonSelect, IonSelectOption, IonText, IonTitle } from '@ionic/react';
import React, { useState } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faBriefcase, faDesktop, faUserNurse } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

import '../../css/Global.css';
import '../../css/Study@SIMMain.css';
import TopNav from '../../components/TopNav';

const StudySIMMain: React.FC<RouteComponentProps> = () => {
    const [studySIMProgSelect, setStudySIMProgSelect] = useState<string>('Bachelor');

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Study@SIM" route='/u/home' backarrow={true} hamburger={true} />
            </IonHeader>

            <IonContent fullscreen={true}>
                <IonGrid id="studySIMMainGrid">
                    <IonRow class="ion-align-items-center" className="studySIMMainRow">
                        <IonCol class="ion-text-center">
                            <IonRow>
                                <IonTitle className="studySIMMainTitle">I am looking for</IonTitle>
                            </IonRow>

                            <IonItem className="studySIMSelectRow">
                                <IonSelect id="studySIMProgSelect" name="studySIMProgSelect" value={studySIMProgSelect} onIonChange={(e) => setStudySIMProgSelect(e.detail.value)}>
                                    <IonSelectOption value="Diploma" className="studySIMProgSelectOption">Diploma Programmes</IonSelectOption>
                                    <IonSelectOption value="Bachelor" className="studySIMProgSelectOption">Undergraduate Programmes</IonSelectOption>
                                    <IonSelectOption value="Masters" className="studySIMProgSelectOption">Postgraduate/ Masters Programmes</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                        </IonCol>
                    </IonRow>

                    {/* Diploma Programmes */}
                    {studySIMProgSelect === "Diploma" &&
                        <>
                            <IonRow className="ion-justify-content-around studyMainRow">
                                <IonCol sizeSm="6" className="studyMainCol">
                                    <Link className='studySIMMainLink' to={`/u/study@SIMMain/business/${studySIMProgSelect}`}>
                                        <IonRow className="ion-justify-content-center">
                                            <FontAwesomeIcon className="studySIMMainIcons" size="2x" icon={faBriefcase} />
                                        </IonRow>

                                        <IonRow className="ion-justify-content-center">
                                            <IonText className="studySIMMainText">Business</IonText>
                                        </IonRow>
                                    </Link>
                                </IonCol>

                                <IonCol sizeSm="6" className="studyMainCol">
                                    <Link className='studySIMMainLink' to={{ pathname: `/u/study@SIMMain/IT & Computer Science/${studySIMProgSelect}` }}>
                                        <IonRow className="ion-justify-content-center">
                                            <FontAwesomeIcon className="studySIMMainIcons" size="2x" icon={faDesktop} />
                                        </IonRow>

                                        <IonRow className="ion-justify-content-center">
                                            <IonText className="studySIMMainText">IT & Computer Science</IonText>
                                        </IonRow>
                                    </Link>
                                </IonCol>
                            </IonRow>

                            <IonRow className="ion-justify-content-around studyMainRow">
                                <IonCol sizeSm="6" className="studyMainCol">
                                    <Link className='studySIMMainLink' to={`/u/study@SIMMain/Specialty/${studySIMProgSelect}`}>

                                        <IonRow className="ion-justify-content-center">
                                            <FontAwesomeIcon className="studySIMMainIcons" size="2x" icon={faStar} />
                                        </IonRow>

                                        <IonRow className="ion-justify-content-center">
                                            <IonText className="studySIMMainText">Specialty</IonText>
                                        </IonRow>

                                    </Link>
                                </IonCol>

                                <IonCol sizeSm="6" className="studyMainCol"></IonCol>
                            </IonRow>
                        </>
                    }

                    {/* Undergraduate Programmes */}
                    {studySIMProgSelect === "Bachelor" &&
                        <>
                            <IonRow className="ion-justify-content-around studyMainRow">
                                <IonCol sizeSm="6" className="studyMainCol">
                                    <Link className='studySIMMainLink' to={`/u/study@SIMMain/Arts & Social Sciences/${studySIMProgSelect}`}>
                                        <IonRow className="ion-justify-content-center">
                                            <FontAwesomeIcon className="studySIMMainIcons" size="2x" icon={faPaintBrush} />
                                        </IonRow>

                                        <IonRow className="ion-justify-content-center">
                                            <IonText className="studySIMMainText">Arts & Social Sciences</IonText>
                                        </IonRow>
                                    </Link>
                                </IonCol>

                                <IonCol sizeSm="6" className="studyMainCol">
                                    <Link className='studySIMMainLink' to={`/u/study@SIMMain/Business/${studySIMProgSelect}`}>
                                        <IonRow className="ion-justify-content-center">
                                            <FontAwesomeIcon className="studySIMMainIcons" size="2x" icon={faBriefcase} />
                                        </IonRow>

                                        <IonRow className="ion-justify-content-center">
                                            <IonText className="studySIMMainText">Business</IonText>
                                        </IonRow>
                                    </Link>
                                </IonCol>
                            </IonRow>

                            <IonRow className="ion-justify-content-around studyMainRow">
                                <IonCol sizeSm="6" className="studyMainCol">
                                    <Link className='studySIMMainLink' to={`/u/study@SIMMain/IT & Computer Science/${studySIMProgSelect}`}>
                                        <IonRow className="ion-justify-content-center">
                                            <FontAwesomeIcon className="studySIMMainIcons" size="2x" icon={faDesktop} />
                                        </IonRow>

                                        <IonRow className="ion-justify-content-center">
                                            <IonText className="studySIMMainText">IT & Computer Science</IonText>
                                        </IonRow>
                                    </Link>
                                </IonCol>

                                <IonCol sizeSm="6" className="studyMainCol">
                                    <Link className='studySIMMainLink' to={`/u/study@SIMMain/Nursing/${studySIMProgSelect}`}>
                                        <IonRow className="ion-justify-content-center">
                                            <FontAwesomeIcon className="studySIMMainIcons" size="2x" icon={faUserNurse} />
                                        </IonRow>

                                        <IonRow className="ion-justify-content-center">
                                            <IonText className="studySIMMainText">Nursing</IonText>
                                        </IonRow>
                                    </Link>
                                </IonCol>
                            </IonRow>

                            <IonRow className="ion-justify-content-around studyMainRow">
                                <IonCol sizeSm="6" className="studyMainCol">
                                    <Link className='studySIMMainLink' to={`/u/study@SIMMain/Specialty/${studySIMProgSelect}`}>
                                        <IonRow className="ion-justify-content-center">
                                            <FontAwesomeIcon className="studySIMMainIcons" size="2x" icon={faStar} />
                                        </IonRow>

                                        <IonRow className="ion-justify-content-center">
                                            <IonText className="studySIMMainText">Specialty</IonText>
                                        </IonRow>
                                    </Link>
                                </IonCol>

                                <IonCol sizeSm="6" className="studyMainCol"></IonCol>
                            </IonRow>
                        </>
                    }

                    {/* Post Grad/ Masters Programmes */}
                    {studySIMProgSelect === "Masters" &&
                        <>
                            <IonRow className="ion-justify-content-around studyMainRow">
                                <IonCol sizeSm="6" className="studyMainCol">
                                    <Link className='studySIMMainLink' to={`/u/study@SIMMain/Arts & Social Sciences/${studySIMProgSelect}`}>
                                        <IonRow className="ion-justify-content-center">
                                            <FontAwesomeIcon className="studySIMMainIcons" size="2x" icon={faPaintBrush} />
                                        </IonRow>

                                        <IonRow className="ion-justify-content-center">
                                            <IonText className="studySIMMainText">Arts & Social Sciences</IonText>
                                        </IonRow>
                                    </Link>
                                </IonCol>

                                <IonCol sizeSm="6" className="studyMainCol">
                                    <Link className='studySIMMainLink' to={`/u/study@SIMMain/Business/${studySIMProgSelect}`}>
                                        <IonRow className="ion-justify-content-center">
                                            <FontAwesomeIcon className="studySIMMainIcons" size="2x" icon={faBriefcase} />
                                        </IonRow>

                                        <IonRow className="ion-justify-content-center">
                                            <IonText className="studySIMMainText">Business</IonText>
                                        </IonRow>
                                    </Link>
                                </IonCol>
                            </IonRow>

                            <IonRow className="ion-justify-content-around studyMainRow">
                                <IonCol sizeSm="6" className="studyMainCol">
                                    <Link className='studySIMMainLink' to={`/u/study@SIMMain/IT & Computer Science/${studySIMProgSelect}`}>
                                        <IonRow className="ion-justify-content-center">
                                            <FontAwesomeIcon className="studySIMMainIcons" size="2x" icon={faDesktop} />
                                        </IonRow>

                                        <IonRow className="ion-justify-content-center">
                                            <IonText className="studySIMMainText">IT & Computer Science</IonText>
                                        </IonRow>
                                    </Link >
                                </IonCol>

                                <IonCol sizeSm="6" className="studyMainCol"></IonCol>
                            </IonRow>
                        </>
                    }

                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default StudySIMMain;
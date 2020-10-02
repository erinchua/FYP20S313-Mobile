import { IonCol, IonContent, IonGrid, IonPage, IonRouterLink, IonRow, IonText } from '@ionic/react';
import React from 'react';

import '../css/Global.css';
import '../css/UsefulInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faCommentAlt, faFileAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import TopNav from '../components/TopNav';
import Menu from '../components/Menu';


const UsefulInfoMain: React.FC = () => {

    return (
        <IonPage>
            <TopNav title="Useful Info" route='/u/home' backarrow={ true } hamburger = { true }/>

            <IonContent fullscreen={true}>
                <IonGrid id="usefulInfoGrid">
                    <IonRow className="ion-justify-content-around mainRow">
                        <IonCol size-sizeSm="6" className="mainCol">
                            <IonRouterLink routerLink="/u/usefulInfoMain/admissionApplication">
                                <IonRow className="ion-justify-content-center">
                                    <FontAwesomeIcon className="usefulInfoIcons" size="2x" icon={faFileAlt} />
                                </IonRow>

                                <IonRow className="ion-justify-content-center">
                                    <IonText className="usefulInfoText">Admission & Application</IonText>
                                </IonRow>
                            </IonRouterLink>
                        </IonCol>

                        <IonCol size-sizeSm="6" className="mainCol">
                            <IonRouterLink routerLink="/u/usefulInfoMain/contactInfo">
                                <IonRow className="ion-justify-content-center">
                                    <FontAwesomeIcon className="usefulInfoIcons" size="2x" icon={faAddressBook} />
                                </IonRow>

                                <IonRow className="ion-justify-content-center">
                                    <IonText className="usefulInfoText">Contact Information</IonText>
                                </IonRow>
                            </IonRouterLink>
                        </IonCol>
                    </IonRow>

                    <IonRow className="ion-justify-content-around mainRow">
                        <IonCol size-sizeSm="6" className="mainCol">
                            <IonRouterLink routerLink="/u/usefulInfoMain/openHouseFeedback">
                                <IonRow className="ion-justify-content-center">
                                    <FontAwesomeIcon className="usefulInfoIcons" size="2x" icon={faCommentAlt} />
                                </IonRow>

                                <IonRow className="ion-justify-content-center">
                                    <IonText className="usefulInfoText">Open House Feedback Form</IonText>
                                </IonRow>
                            </IonRouterLink>
                        </IonCol>

                        <IonCol size-sizeSm="6" className="mainCol">
                            <IonRouterLink routerLink="/u/usefulInfoMain/commonFAQs">
                                <IonRow className="ion-justify-content-center">
                                    <FontAwesomeIcon className="usefulInfoIcons" size="2x" icon={faQuestionCircle} />
                                </IonRow>

                                <IonRow className="ion-justify-content-center">
                                    <IonText className="usefulInfoText">Common FAQs</IonText>
                                </IonRow>
                            </IonRouterLink>
                        </IonCol>
                    </IonRow>


                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default UsefulInfoMain;

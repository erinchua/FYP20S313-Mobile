import { IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRouterLink, IonRow, IonSlide, IonSlides, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import '../css/Global.css';
import '../css/AdmissionApplication.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faCommentAlt, faFileAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import TopNav from '../components/TopNav';
import Menu from '../components/Menu';


const admissionApplication: React.FC = () => {

    return (
        <IonPage>
            <TopNav title="Admission & Application" route='/u/usefulInfoMain' backarrow={ true } hamburger = { true }/>

            <IonContent fullscreen={true}>
                <IonGrid id="admissionAppTitleGrid">
                    <IonRow id="admissonAppTitleRow">
                        <IonTitle id="admissionAppTitle">How to Apply</IonTitle>
                    </IonRow>
                
                    <IonRow>
                        
                    </IonRow>
                </IonGrid>
                
            </IonContent>
        </IonPage>
    );
};

export default admissionApplication;

import { IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonGrid, 
    IonRow, 
    IonCol, 
    IonIcon, 
    IonButtons, 
    IonButton, 
    IonItem, 
    IonInput, 
    IonList, 
    IonAlert, IonMenu, IonSplitPane, IonItemDivider, IonLabel, IonMenuButton } from '@ionic/react';
import React, {useRef, useState} from 'react';
import '../css/Global.css';
import '../css/Test.css';
import { arrowBackOutline, shieldCheckmarkOutline } from 'ionicons/icons';
import { useForm, Controller } from "react-hook-form";
import TestControl from '../components/TestControl';
import TestCom from '../components/TestCom';
import ReactCodeInput from 'react-verification-code-input';
import { faReadme } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faCalendarAlt, faComments, faBell, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faHome, faMapSigns, faMapMarkedAlt, faInfoCircle, faPhotoVideo, faBookOpen, faHands, faCog, faQrcode, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TopNav from '../components/TopNav';

{/*import { useHistory } from 'react-router-dom';*/}
 

const Test: React.FC = () => {
    const { register, handleSubmit, errors, watch, reset, getValues } = useForm();

    const onSubmit = (data: any) => {
        console.log("Submitted");
        console.log(data);
    };

    const newPassword = useRef({});
    newPassword.current = watch("newPassword", "");

    const newPasswordRef = useRef<HTMLIonInputElement>(null);
    const confirmNewPasswordRef = useRef<HTMLIonInputElement>(null);

    const validatePassword = () => {};
    const [showAlert, setShowAlert] = useState(false);
    const [showAlert2, setShowAlert2] = useState(false);

    const [test1, setTest1] = useState<string>();
    const [test2, setTest2] = useState<string>();
    
    const display = () => {
        const values1 = getValues("input1");
        const values2 = getValues("input2");
        if (values1 !== "" || values2 !== "") {
            setShowAlert(true);
            console.log(values1, values2);
            setTest1(values1);
            setTest2(values2);
            return;
        }    
        setShowAlert2(true);
        console.log("Fields are empty!");
    };

    return (
        <React.Fragment>
            <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                cssClass='alert-css'
                mode='md'
                header={'Have Value'}
                subHeader={'Subtitle'}
                message={'This is an alert message.'}
                buttons={['Close']}
             ></IonAlert>

             <IonAlert
                isOpen={showAlert2}
                onDidDismiss={() => setShowAlert2(false)}
                cssClass='my-custom-class'
                header={'No Value'}
                message={'This is an alert message.'}
                buttons={['Okay']}
             ></IonAlert>

            <IonContent fullscreen>
                <IonSplitPane contentId="main">
                    {/*--  the side menu  --*/}
                    <IonMenu contentId="main" side="end" menuId="menuID">
                        <IonContent id="menuContent" className="menuContent" scrollEvents={true} scrollY={true}>
                                <IonList className="menuList">
                                    <IonItem className="menuItem clickable ion-activatable" lines="none" routerLink="/u/home">                     
                                        <FontAwesomeIcon className="menuIcon" size="lg" icon={faHome} />
                                        <IonLabel className="menuLabel">Home</IonLabel>
                                    </IonItem>
                                    <IonItem className="menuItem clickable ion-activatable" lines="none" routerLink="/u/openHouseMain">
                                        <FontAwesomeIcon className="menuIcon" size="lg" icon={faCalendar} />
                                        <IonLabel className="menuLabel">Open House Programmes</IonLabel>
                                    </IonItem>
                                    <IonItem className="menuItem clickable ion-activatable" lines="none">
                                        <FontAwesomeIcon className="menuIcon" size="lg" icon={faCalendarAlt} />
                                        <IonLabel className="menuLabel">My Schedule</IonLabel>
                                    </IonItem>
                                    <IonItem className="menuItem clickable ion-activatable" lines="none">
                                        <FontAwesomeIcon className="menuIcon" size="lg" icon={faComments} />
                                        <IonLabel className="menuLabel">Forum</IonLabel>
                                    </IonItem>
                                    <IonItem className="menuItem clickable ion-activatable" lines="none">
                                        <FontAwesomeIcon className="menuIcon" size="lg" icon={faMapSigns} />
                                        <IonLabel className="menuLabel">Campus Facilitiies Map</IonLabel>
                                    </IonItem>
                                    <IonItem className="menuItem clickable ion-activatable" lines="none">
                                        <FontAwesomeIcon className="menuIcon" size="lg" icon={faMapMarkedAlt} />
                                        <IonLabel className="menuLabel">Getting to SIM HQ</IonLabel>
                                    </IonItem>
                                    <IonItem className="menuItem clickable ion-activatable" lines="none">
                                        <FontAwesomeIcon className="menuIcon" size="lg" icon={faInfoCircle} />
                                        <IonLabel className="menuLabel">Useful Info</IonLabel>
                                    </IonItem>
                                    <IonItem className="menuItem clickable ion-activatable" lines="none">
                                        <FontAwesomeIcon className="menuIcon" size="lg" icon={faPhotoVideo} />
                                        <IonLabel className="menuLabel">Social Media</IonLabel>
                                    </IonItem>
                                    <IonItem className="menuItem clickable ion-activatable" lines="none">
                                        <FontAwesomeIcon className="menuIcon" size="lg" icon={faBookOpen} />
                                        <IonLabel className="menuLabel">Study@SIM</IonLabel>
                                    </IonItem>
                                    <IonItem className="menuItem clickable ion-activatable" lines="none">
                                        <FontAwesomeIcon className="menuIcon" size="lg" icon={faHands} />
                                        <IonLabel className="menuLabel">Student Life@SIM</IonLabel>
                                    </IonItem>
                                    <IonItem className="menuItem clickable ion-activatable" lines="none">
                                        <FontAwesomeIcon className="menuIcon" size="lg" icon={faBell} />
                                        <IonLabel className="menuLabel">Announcements</IonLabel>
                                    </IonItem>
                                    <IonItem className="menuItem clickable ion-activatable" lines="none">
                                        <FontAwesomeIcon className="menuIcon" size="lg" icon={faReadme} />
                                        <IonLabel className="menuLabel">Brochures</IonLabel>
                                    </IonItem>
                                    
                                    <IonItemDivider id="divider"></IonItemDivider>

                                    <IonItem className="menuItem clickable ion-activatable" lines="none">
                                        <FontAwesomeIcon className="menuIcon" size="lg" icon={faUserCircle} />
                                        <IonLabel className="menuLabel">My Profile</IonLabel>
                                    </IonItem>
                                    <IonItem className="menuItem clickable ion-activatable" lines="none">
                                        <FontAwesomeIcon className="menuIcon" size="lg" icon={faCog} />
                                        <IonLabel className="menuLabel">Settings</IonLabel>
                                    </IonItem>
                                    <IonItem className="menuItem clickable ion-activatable" lines="none">
                                        <FontAwesomeIcon className="menuIcon" size="lg" icon={faQrcode} />
                                        <IonLabel className="menuLabel">QR Scanner</IonLabel>
                                    </IonItem>
                                    <IonItem className="menuItem clickable ion-activatable" lines="none">
                                        <FontAwesomeIcon className="menuIcon" size="lg" icon={faSignOutAlt} />
                                        <IonLabel className="menuLabel">Logout</IonLabel>
                                    </IonItem>
                                </IonList>
                            </IonContent>
                    </IonMenu>

                    {/*-- the main content --*/}
                    <IonPage id="main">
                        <TopNav title="Home" route='/u/home' backarrow={ false } hamburger = { true }/>
                        <IonMenuButton menu="menuID"></IonMenuButton>
                        <h2>Content here</h2>
                    </IonPage>
                </IonSplitPane>
            </IonContent>
             

            {/* <IonPage>
                <IonHeader>
                    <IonToolbar id="topBar">
                    <IonButtons slot="start">
                        <IonButton routerLink="/main" onClick={() => {reset()}}>
                            <IonIcon id="back_button" slot="icon-only" icon={arrowBackOutline} />
                        </IonButton>
                    </IonButtons>
        
                    <IonTitle id="title">
                        Reset Password 
                    </IonTitle>
                    </IonToolbar>
                </IonHeader>
        
                {/* Screen Content*/}
                {/*<IonContent fullscreen style={{display: "flex"}}>
                    <IonGrid>
                        <form>
                            <input name="input1" ref={register} />
                            <input name="input2" ref={register} />

                            <button
                                type="button"
                                onClick={display}>
                                Get Values
                            </button>

                            {display && (
                                <>
                                    <div>
                                        <h1>Value 1: {test1}</h1>
                                        <h1>Value 2: {test2}</h1>
                                    </div>
                                </>
                            )}
                            
                        </form>

                    </IonGrid>
                </IonContent>
            </IonPage> */}
        </React.Fragment>
    );
  }

export default Test;
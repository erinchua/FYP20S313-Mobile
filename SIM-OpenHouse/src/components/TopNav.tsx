import React, { useState, useContext } from 'react';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonIcon, IonMenuButton, IonMenuToggle, IonContent, IonItem, IonItemDivider, IonLabel, IonList, IonMenu} from '@ionic/react';
import '../css/TopNav.css';
import '../css/Global.css';
import { arrowBackOutline } from 'ionicons/icons';
import { useAuth } from '../auth';
import { auth } from '../firebase';
import Menu from './Menu';
import { faReadme } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faCalendarAlt, faComments, faBell, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faHome, faMapSigns, faMapMarkedAlt, faInfoCircle, faPhotoVideo, faBookOpen, faHands, faCog, faQrcode, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';
import { NavContext } from '@ionic/react';

const TopNav: React.FC<{
    title: string; 
    route: any;
    backarrow: boolean;
    hamburger: boolean;
}> = props => {

    const { loggedIn } = useAuth();
    const { navigate } = useContext(NavContext);
    // const backarrow = true;

    const handleLogout = async () => {
        await auth.signOut();
        sessionStorage.clear();
        navigate('/main');

    };

    const handleMenu = () => {
        console.log("Im working");
    };

    return(
        <>
            <IonHeader>
                <IonToolbar className="topNav">
                    { props.backarrow ?
                    <IonButtons slot="start">
                        <IonButton routerLink={props.route}>
                            <IonIcon className="back_button" slot="icon-only" icon={arrowBackOutline} />
                        </IonButton>
                    </IonButtons> : ''
                    }
                    { props.hamburger ?
                    <IonButtons slot="primary">
                        <IonMenuToggle>
                            <IonMenuButton className="menuBtn" auto-hide="false" menu="first"></IonMenuButton>
                        </IonMenuToggle>
                    </IonButtons> : ''    
                    }            

                    <IonTitle className="title">{props.title}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <Menu />

            {/* <IonMenu side="end" contentId="menuContent" menuId="first" id="menuID">
                <IonContent id="menuContent" className="menuContent" scrollEvents={true} scrollY={true}>
                    <IonList className="menuList">
                        <IonItem className="menuItem" button lines="none" href="/u/home">                     
                            <FontAwesomeIcon className="menuIcon" size="lg" icon={faHome} />
                            <IonLabel className="menuLabel">Home</IonLabel>
                        </IonItem>
                        <IonItem className="menuItem" button lines="none" href="/u/openHouseMain">
                            <FontAwesomeIcon className="menuIcon" size="lg" icon={faCalendar} />
                            <IonLabel className="menuLabel">Open House Programmes</IonLabel>
                        </IonItem>
                        <IonItem className="menuItem" button lines="none" href="/u/mySchedule">
                            <FontAwesomeIcon className="menuIcon" size="lg" icon={faCalendarAlt} />
                            <IonLabel className="menuLabel">My Schedule</IonLabel>
                        </IonItem>
                        <IonItem className="menuItem" button lines="none">
                            <FontAwesomeIcon className="menuIcon" size="lg" icon={faComments} />
                            <IonLabel className="menuLabel">Forum</IonLabel>
                        </IonItem>
                        <IonItem className="menuItem" button lines="none">
                            <FontAwesomeIcon className="menuIcon" size="lg" icon={faMapSigns} />
                            <IonLabel className="menuLabel">Campus Facilitiies Map</IonLabel>
                        </IonItem>
                        <IonItem className="menuItem" button lines="none">
                            <FontAwesomeIcon className="menuIcon" size="lg" icon={faMapMarkedAlt} />
                            <IonLabel className="menuLabel">Getting to SIM HQ</IonLabel>
                        </IonItem>
                        <IonItem className="menuItem" button lines="none">
                            <FontAwesomeIcon className="menuIcon" size="lg" icon={faInfoCircle} />
                            <IonLabel className="menuLabel">Useful Info</IonLabel>
                        </IonItem>
                        <IonItem className="menuItem" button lines="none">
                            <FontAwesomeIcon className="menuIcon" size="lg" icon={faPhotoVideo} />
                            <IonLabel className="menuLabel">Social Media</IonLabel>
                        </IonItem>
                        <IonItem className="menuItem" button lines="none">
                            <FontAwesomeIcon className="menuIcon" size="lg" icon={faBookOpen} />
                            <IonLabel className="menuLabel">Study@SIM</IonLabel>
                        </IonItem>
                        <IonItem className="menuItem" button lines="none">
                            <FontAwesomeIcon className="menuIcon" size="lg" icon={faHands} />
                            <IonLabel className="menuLabel">Student Life@SIM</IonLabel>
                        </IonItem>
                        <IonItem className="menuItem" button lines="none">
                            <FontAwesomeIcon className="menuIcon" size="lg" icon={faBell} />
                            <IonLabel className="menuLabel">Announcements</IonLabel>
                        </IonItem>
                        <IonItem className="menuItem" button lines="none">
                            <FontAwesomeIcon className="menuIcon" size="lg" icon={faReadme} />
                            <IonLabel className="menuLabel">Brochures</IonLabel>
                        </IonItem>
                        
                        <IonItemDivider id="divider"></IonItemDivider>

                        <IonItem className="menuItem" button lines="none">
                            <FontAwesomeIcon className="menuIcon" size="lg" icon={faUserCircle} />
                            <IonLabel className="menuLabel">My Profile</IonLabel>
                        </IonItem>
                        <IonItem className="menuItem" button lines="none">
                            <FontAwesomeIcon className="menuIcon" size="lg" icon={faCog} />
                            <IonLabel className="menuLabel">Settings</IonLabel>
                        </IonItem>
                        <IonItem className="menuItem" button lines="none">
                            <FontAwesomeIcon className="menuIcon" size="lg" icon={faQrcode} />
                            <IonLabel className="menuLabel">QR Scanner</IonLabel>
                        </IonItem>
                        <IonItem className="menuItem" button type="submit" lines="none" onClick={ handleMenu }>
                            <FontAwesomeIcon className="menuIcon" size="lg" icon={faSignOutAlt} />
                            <IonLabel className="menuLabel">Logout</IonLabel>
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonMenu> */}
        </>
    );
}

export default TopNav;
import React, { useContext, useState } from 'react';
import { IonMenu,
    IonContent, 
    IonItem, 
    IonList, 
    IonLabel, 
    IonItemDivider} from '@ionic/react';
import '../css/Menu.css';
import '../css/Global.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCalendar, faCalendarAlt, faComments, faMapSigns, faMapMarkedAlt, faInfoCircle,
    faPhotoVideo, faBookOpen, faHands, faBell, faUserCircle, faCog, faQrcode, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { faReadme } from '@fortawesome/free-brands-svg-icons';
import { auth } from '../firebase';
import { NavContext } from '@ionic/react';

const Menu: React.FC = props => {

    const { navigate } = useContext(NavContext);
    
    const handleLogout = async () => {
        await auth.signOut();
        sessionStorage.clear();
        navigate('/main');
    };

    return(
        <IonMenu side="end" contentId="menuContent" menuId="first" id="menuID">
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
                    <IonItem className="menuItem clickable ion-activatable" lines="none" onClick={ handleLogout }>
                        <FontAwesomeIcon className="menuIcon" size="lg" icon={faSignOutAlt} />
                        <IonLabel className="menuLabel">Logout</IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonMenu>
    );
}

export default Menu;
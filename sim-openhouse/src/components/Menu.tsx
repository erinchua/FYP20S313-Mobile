import { IonMenu, IonContent, IonItem, IonList, IonLabel, IonFooter, IonToolbar } from '@ionic/react';
import React from 'react';
import { menuController } from "@ionic/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCalendar, faCalendarAlt, faBell, faUserCircle, faCog, faQrcode, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faReadme } from '@fortawesome/free-brands-svg-icons';

import '../css/Menu.css';
import '../css/Global.css';
import { auth } from "../firebase";

const Menu: React.FC = () => {

    const handleLogout = async () => {
        menuController.close();
        await auth.signOut();
        sessionStorage.clear();
    };

    return(
        <IonMenu swipeGesture={false} side="end" contentId="menuContent" menuId="mainMenu" id="menuID" className="mainMenu">             
            <IonContent id="menuContent" className="menuContent" scrollEvents={true}>
                <IonList className="menuList">
                    <IonItem className="menuItem clickable ion-activatable" lines="none" routerLink="/u/home">                     
                        <FontAwesomeIcon className="menuIcon" size="lg" icon={faHome} />
                        <IonLabel className="menuLabel">Home</IonLabel>
                    </IonItem>
                    <IonItem className="menuItem clickable ion-activatable" lines="none" routerLink="/u/openHouseMain">
                        <FontAwesomeIcon className="menuIcon" size="lg" icon={faCalendar} />
                        <IonLabel className="menuLabel">Open House Programmes</IonLabel>
                    </IonItem>
                    <IonItem className="menuItem clickable ion-activatable" lines="none" routerLink="/u/mySchedule">
                        <FontAwesomeIcon className="menuIcon" size="lg" icon={faCalendarAlt} />
                        <IonLabel className="menuLabel">My Schedule</IonLabel>
                    </IonItem>
                    <IonItem className="menuItem clickable ion-activatable" lines="none" routerLink="/u/brochures">
                        <FontAwesomeIcon className="menuIcon" size="lg" icon={faReadme} />
                        <IonLabel className="menuLabel">Brochures</IonLabel>
                    </IonItem>
                    <IonItem className="menuItem clickable ion-activatable" lines="none" routerLink="/u/announcements">
                        <FontAwesomeIcon className="menuIcon" size="lg" icon={faBell} />
                        <IonLabel className="menuLabel">Announcements</IonLabel>
                    </IonItem>
                    <IonItem className="menuItem clickable ion-activatable" lines="none" routerLink="/u/myProfile">
                        <FontAwesomeIcon className="menuIcon" size="lg" icon={faUserCircle} />
                        <IonLabel className="menuLabel">My Profile</IonLabel>
                    </IonItem>
                    <IonItem className="menuItem clickable ion-activatable" lines="none" routerLink="/u/settings">
                        <FontAwesomeIcon className="menuIcon" size="lg" icon={faCog} />
                        <IonLabel className="menuLabel">Settings</IonLabel>
                    </IonItem>
                    <IonItem className="menuItem clickable ion-activatable" lines="none" routerLink="/u/QRScan">
                        <FontAwesomeIcon className="menuIcon" size="lg" icon={faQrcode} />
                        <IonLabel className="menuLabel">QR Scanner</IonLabel>
                    </IonItem>
                </IonList>
                
            </IonContent>

            <IonFooter className="ion-no-border">
                <IonToolbar id="mainMenuToolbar">
                    <IonItem className="menuItem clickable ion-activatable" lines="none" onClick={ handleLogout }>
                        <FontAwesomeIcon className="menuIcon" size="lg" icon={faSignOutAlt} />
                        <IonLabel className="menuLabel">Logout</IonLabel>
                    </IonItem>
                </IonToolbar>
            </IonFooter>
            
            
        </IonMenu>
    );
}

export default Menu;
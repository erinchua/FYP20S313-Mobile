import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonIcon, IonMenuButton} from '@ionic/react';
import '../css/TopNav.css';
import '../css/Global.css';
import { arrowBackOutline } from 'ionicons/icons';

const TopNavMenu: React.FC<{title: string; route: any}> = props => {

    return(
        <IonHeader>
            <IonToolbar className="topNav">
                <IonButtons slot="start">
                    <IonButton routerDirection="back" routerLink={props.route}>
                        <IonIcon className="back_button" slot="icon-only" icon={arrowBackOutline} />
                    </IonButton>
                </IonButtons>
                <IonButtons slot="primary">
                    <IonMenuButton className="menuBtn" auto-hide="false"></IonMenuButton>
                </IonButtons>

                <IonTitle className="title">{props.title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
}

export default TopNavMenu;
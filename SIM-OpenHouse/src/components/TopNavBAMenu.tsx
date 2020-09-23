import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonIcon, IonMenuButton, IonMenuToggle, IonContent} from '@ionic/react';
import '../css/TopNav.css';
import '../css/Global.css';
import { arrowBackOutline } from 'ionicons/icons';

const TopNavBAMenu: React.FC<{
    title: string; 
    route: any;
}> = props => {

    return(
        <IonHeader>
            <IonToolbar className="topNav">
                <IonButtons slot="start">
                    <IonButton routerDirection="back" routerLink={props.route}>
                        <IonIcon className="back_button" slot="icon-only" icon={arrowBackOutline} />
                    </IonButton>
                </IonButtons>

                <IonButtons slot="primary">
                    <IonMenuToggle>
                        <IonMenuButton className="menuBtn" auto-hide="false" menu="menuID"></IonMenuButton>
                    </IonMenuToggle>
                </IonButtons>                

                <IonTitle className="title">{props.title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
}

export default TopNavBAMenu;
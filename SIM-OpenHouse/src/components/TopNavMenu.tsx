import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonIcon, IonMenuButton} from '@ionic/react';
import '../css/TopNav.css';
import '../css/Global.css';

const TopNavMenu: React.FC<{title: string}> = props => {

    return(
        <IonHeader>
            <IonToolbar className="topNav">
                <IonButtons slot="primary">
                    <IonMenuButton className="menuBtn" auto-hide="false"></IonMenuButton>
                </IonButtons>

                <IonTitle className="title">{props.title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
}

export default TopNavMenu;
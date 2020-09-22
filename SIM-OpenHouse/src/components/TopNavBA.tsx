import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonIcon, IonMenuButton} from '@ionic/react';
import '../css/TopNav.css';
import '../css/Global.css';
import { arrowBackOutline } from 'ionicons/icons';

const TopNavBA: React.FC<{title: string;}> = props => {

    return(
        <IonTitle className="title">{props.title}</IonTitle>
    );
}

export default TopNavBA;
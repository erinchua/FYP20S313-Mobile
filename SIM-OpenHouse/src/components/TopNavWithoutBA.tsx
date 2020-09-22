import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonIcon, IonMenuButton} from '@ionic/react';
import '../css/TopNavWithoutBA.css';
import '../css/Global.css';
import { arrowBackOutline } from 'ionicons/icons';

const TopNavWithoutBA: React.FC<{title: string}> = props => {

    return(
        <IonHeader>
            <IonToolbar className="topNav">
                <IonButtons slot="primary">
                    <IonMenuButton auto-hide="false"></IonMenuButton>
                </IonButtons>

                <IonTitle className="title">{props.title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
}

export default TopNavWithoutBA;
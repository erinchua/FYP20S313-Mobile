import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonIcon, IonMenuButton} from '@ionic/react';
import '../css/TopNav.css';
import '../css/Global.css';
import { arrowBackOutline } from 'ionicons/icons';
import { useForm } from 'react-hook-form';

const TopNavBA: React.FC<{
    title: string;
    route: any;
}> = props => {

    const { reset } = useForm();

    return(
        <IonHeader>
            <IonToolbar className="topNav">
                <IonButtons slot="start">
                    <IonButton routerDirection="back" routerLink={props.route} onClick={() => {reset()}}>
                        <IonIcon className="back_button" slot="icon-only" icon={arrowBackOutline} />
                    </IonButton>
                </IonButtons>       

                <IonTitle className="title">{props.title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
}

export default TopNavBA;
import { IonToolbar, IonButtons, IonButton, IonTitle, IonIcon, IonMenuButton } from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { arrowBackOutline } from 'ionicons/icons';

import '../css/TopNav.css';
import '../css/Global.css';


const TopNav: React.FC<{
    title: String;
    route: string;
    backarrow: Boolean;
    hamburger: Boolean;
}> = props => {

    return (
        <>
            <IonToolbar className="topNav">
                {props.backarrow ?
                    <IonButtons slot="start">
                        <Link to={{ pathname: `${props.route}` }}>
                            <IonButton>
                                <IonIcon className="back_button" slot="icon-only" icon={arrowBackOutline} />
                            </IonButton>
                        </Link>
                    </IonButtons> : ''
                }
                {props.hamburger ?
                    <IonButtons slot="primary">
                        <IonMenuButton className="menuBtn" auto-hide="true" menu="mainMenu"></IonMenuButton>
                    </IonButtons> : ''
                }

                <IonTitle className="title">{props.title}</IonTitle>
            </IonToolbar>

        </>
    );
}

export default TopNav;
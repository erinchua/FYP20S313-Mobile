import React, { useContext } from 'react';
import { IonToolbar, IonButtons, IonButton, IonTitle, IonIcon, IonMenuButton } from '@ionic/react';
import { NavContext } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';

import '../css/TopNav.css';
import '../css/Global.css';
import { useAuth } from '../modules/auth';
import { auth } from '../firebase';

const TopNav: React.FC<{
    title: String;
    route: string;
    backarrow: Boolean;
    hamburger: Boolean;

}> = props => {

    const { loggedIn } = useAuth();
    const { navigate } = useContext(NavContext);
    // const backarrow = true;

    const handleLogout = async () => {
        await auth.signOut();
        sessionStorage.clear();
        // navigate('/main');

    };

    return (
        <>
            <IonToolbar className="topNav">
                {props.backarrow ?
                    <IonButtons slot="start">
                        <Link to={props.route}>
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
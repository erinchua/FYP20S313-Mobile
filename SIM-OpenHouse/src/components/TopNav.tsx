import React, { useContext } from 'react';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonIcon, IonMenuButton } from '@ionic/react';
import '../css/TopNav.css';
import '../css/Global.css';
import { arrowBackOutline } from 'ionicons/icons';
import { useAuth } from '../auth';
import { auth } from '../firebase';
import { NavContext } from '@ionic/react';

const TopNav: React.FC<{
    title: String; 
    route: any;
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

    return(
        <>
            <IonHeader>
                <IonToolbar className="topNav">
                    { props.backarrow ?
                    <IonButtons slot="start">
                        <IonButton routerLink={props.route}>
                            <IonIcon className="back_button" slot="icon-only" icon={arrowBackOutline} />
                        </IonButton>
                    </IonButtons> : ''
                    }
                    { props.hamburger ?
                    <IonButtons slot="primary">
                        <IonMenuButton className="menuBtn" auto-hide="true" menu="first"></IonMenuButton>
                    </IonButtons> : ''    
                    }            

                    <IonTitle className="title">{props.title}</IonTitle>
                </IonToolbar>
            </IonHeader>

        </>
    );
}

export default TopNav;
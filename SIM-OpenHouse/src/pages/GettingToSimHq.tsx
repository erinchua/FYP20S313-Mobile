import { IonContent, IonGrid, IonHeader, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import '../css/GettingToSimHq.css';
import '../css/Global.css';
import TopNav from '../components/TopNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faCar } from '@fortawesome/free-solid-svg-icons';

const GettingToSimHq: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Getting To SIM HQ" route="/u/home" backarrow={ true } hamburger={ true }/>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid className="gettingToSimHqGrid">
                    <IonRow>
                        <div style={{width: "100%"}}>
                            <iframe width="100%" height="250" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=461%20Clementi%20Rd,%20Singapore%20599491+(Singapore%20Institute%20of%20Management)&amp;t=k&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </div>
                    </IonRow>
                    <IonRow>
                        <IonToolbar className="gettingToSimHq-heading-toolBar">
                            <IonTitle className="gettingToSimHq-title"><FontAwesomeIcon className="gettingToSimHq-titleIcon" icon={faCar} size="lg"/>By Car</IonTitle>
                        </IonToolbar>
                    </IonRow>
                    <IonRow>
                        <IonText className="gettingToSimHq-description">
                            The campus is easily accessible via Pan-Expressway (PIE), go via Exit 26A and turn into Clementi Road.
                        </IonText>
                    </IonRow>
                    <IonRow>
                        <IonToolbar className="gettingToSimHq-heading-toolBar">
                            <IonTitle className="gettingToSimHq-title"><FontAwesomeIcon className="gettingToSimHq-titleIcon" icon={faBus} size="lg"/>By Bus</IonTitle>
                        </IonToolbar>
                    </IonRow>
                    <IonRow>
                        <IonGrid>
                            
                        </IonGrid>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default GettingToSimHq;
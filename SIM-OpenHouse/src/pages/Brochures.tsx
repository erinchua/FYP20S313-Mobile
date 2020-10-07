import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonSegment, IonSegmentButton } from '@ionic/react';
import React, { useState } from 'react';

import '../css/Global.css';
import '../css/Brochures.css';
import TopNav from '../components/TopNav';
import Study_SIM from '../components/Brochures/Study_SIM';
import StudentLife_SIM from '../components/Brochures/StudentLife_SIM';

const Brochures: React.FC = () => {

    const [heading, setHeading] = useState('study@SIM');

    const handleHeading = () => {
        setHeading('study@SIM');
    }

    const handleHeading2 = () => {
        setHeading('studentLife@SIM');
    }

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Brochures" route="/u/home" backarrow={ true } hamburger={ true }/>
            </IonHeader>
            <IonContent fullscreen className="brochures-content">
                <IonGrid id="brochures-ionRowCol">
                    <IonRow id="brochures-ionRowCol">
                        <IonCol id="brochures-ionRowCol">
                            <IonSegment scrollable value={heading} id="brochures-mainHeader" onIonChange={(e) => console.log(`${e.detail.value} segment selected`)}>
                                <IonSegmentButton value="study@SIM" className="brochures-heading" onClick={() => handleHeading()}><div>Study@SIM</div></IonSegmentButton>
                                <IonSegmentButton value="studentLife@SIM" className="brochures-heading" onClick={() => handleHeading2()}>Student Life@SIM</IonSegmentButton>
                            </IonSegment>
                        </IonCol>
                    </IonRow>

                    {heading === 'study@SIM' ? 
                        <Study_SIM /> : ''
                    }

                    {heading === 'studentLife@SIM' ? 
                        <StudentLife_SIM /> : ''
                    }

                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Brochures;
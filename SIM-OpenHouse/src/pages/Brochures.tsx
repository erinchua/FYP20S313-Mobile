import { IonContent, IonGrid, IonHeader, IonPage, IonSegment, IonSegmentButton, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';

import '../css/Global.css';
import '../css/Brochures.css';
import TopNav from '../components/TopNav';
import Study_SIM from '../components/Brochures/Study_SIM';
import StudentLife_SIM from '../components/Brochures/StudentLife_SIM';
import { db } from '../firebase';
import { Brochure, toBrochure } from '../modules/map';

const Brochures: React.FC = () => {

    const [heading, setHeading] = useState('study@SIM');
    const [brochures, setBrochures] = useState<Brochure[]>([]);

    const handleHeading = () => {
        setHeading('study@SIM');
    }

    const handleHeading2 = () => {
        setHeading('studentLife@SIM');
    }

    useEffect(() => {
        db.collection('Brochures').get().then(({ docs }) => {
            setBrochures(docs.map(toBrochure));
        });
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Brochures" route="/u/home" backarrow={ true } hamburger={ true }/>

                <IonToolbar>
                    <IonSegment scrollable value={heading} id="brochures-mainHeader" onIonChange={(e) => console.log(`${e.detail.value} segment selected`)}>
                        <IonSegmentButton value="study@SIM" className="brochures-heading" onClick={() => handleHeading()}><div>Study@SIM</div></IonSegmentButton>
                        <IonSegmentButton value="studentLife@SIM" className="brochures-heading" onClick={() => handleHeading2()}>Student Life@SIM</IonSegmentButton>
                    </IonSegment>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="brochures-content">
                <IonGrid id="brochures-ionRowCol">

                    {heading === 'study@SIM' ? 
                        <Study_SIM brochures={brochures} /> : ''
                    }

                    {heading === 'studentLife@SIM' ? 
                        <StudentLife_SIM brochures={brochures} /> : ''
                    }

                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Brochures;
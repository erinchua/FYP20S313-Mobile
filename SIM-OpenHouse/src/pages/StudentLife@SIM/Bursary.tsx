import { IonContent, IonGrid, IonHeader, IonPage, IonSegment, IonSegmentButton, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';

import '../../css/Global.css';
import '../../css/StudentLife.css';
import TopNav from '../../components/TopNav';
import SimGeBursary from '../../components/Bursary/SimGeBursary';
import OtherFinancialAssistance from '../../components/Bursary/OtherFinancialAssistance';
import { db } from '../../firebase';
import { toBrochure } from '../../modules/map';

const Bursary: React.FC = () => {

    const [heading, setHeading] = useState('simGeBursary');
    const [brochure, setBrochure] = useState<any>({});

    const handleHeading = () => {
        setHeading('simGeBursary');
    }

    const handleHeading2 = () => {
        setHeading('otherFinancialAssistance');
    }

    useEffect(() => {
        db.collection('Brochures').where('description', 'in', ['Bursary-FAQ']).get().then(({ docs }) => {
            const brocs = docs.map(toBrochure);

            if (brocs.length == 1)
                setBrochure(brocs[0]);
        });
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Bursary" route="/u/studentLife@SIM" backarrow={ true } hamburger={ true }/>

                <IonToolbar>
                    <IonSegment scrollable value={heading} id="bursary-mainHeader" onIonChange={(e) => console.log(`${e.detail.value} segment selected`)}>
                        <IonSegmentButton value="simGeBursary" className="bursary-heading" onClick={() => handleHeading()}><div>SIM GE Bursary</div></IonSegmentButton>
                        <IonSegmentButton value="otherFinancialAssistance" className="bursary-heading" onClick={() => handleHeading2()}><div className="ion-text-wrap">Other Financial Assistance</div></IonSegmentButton>
                    </IonSegment>
                </IonToolbar>
            </IonHeader>
            
            <IonContent fullscreen className="studentLife-content">
                <IonGrid id="bursary-ionRowCol">

                    {heading === 'simGeBursary' ? 
                        <SimGeBursary brochure={brochure} /> : ''
                    }

                    {heading === 'otherFinancialAssistance' ? 
                        <OtherFinancialAssistance /> : ''
                    }

                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Bursary;
import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRouterLink, IonRow, IonSegment, IonSegmentButton, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';

import '../../css/Global.css';
import '../../css/StudentLife.css';
import TopNav from '../../components/TopNav';
import SimGeScholarship from '../../components/Scholarships/SimGeScholarship';
import Sponsors from '../../components/Scholarships/Sponsors';

const Scholarships: React.FC = () => {

    const [heading, setHeading] = useState('simGeScholarship');

    const handleHeading = () => {
        setHeading('simGeScholarship');
    }

    const handleHeading2 = () => {
        setHeading('sponsors');
    }

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Scholarships" route="/u/studentLife@SIM" backarrow={ true } hamburger={ true }/>
            </IonHeader>
            <IonContent fullscreen className="studentLife-content">
                <IonGrid id="scholarships-ionRowCol">
                    <IonRow id="scholarships-ionRowCol">
                        <IonCol id="scholarships-ionRowCol">
                            <IonToolbar>
                                <IonSegment scrollable value={heading} id="scholarships-mainHeader" onIonChange={(e) => console.log(`${e.detail.value} segment selected`)}>
                                    <IonSegmentButton value="simGeScholarship" className="scholarships-heading" onClick={() => handleHeading()}>SIM GE Scholarship</IonSegmentButton>
                                    <IonSegmentButton value="sponsors" className="scholarships-heading" onClick={() => handleHeading2()}>Sponsors</IonSegmentButton>
                                </IonSegment>
                            </IonToolbar>
                        </IonCol>
                    </IonRow>

                    {heading === 'simGeScholarship' ? 
                        <SimGeScholarship /> : ''
                    }

                    {heading === 'sponsors' ? 
                        <Sponsors /> : ''
                    }

                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Scholarships;
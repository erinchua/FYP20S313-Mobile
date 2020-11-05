import { IonContent, IonGrid, IonHeader, IonPage, IonSegment, IonSegmentButton, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';

import '../../css/Global.css';
import '../../css/StudentLife.css';
import TopNav from '../../components/TopNav';
import SimGeScholarship from '../../components/Scholarships/SimGeScholarship';
import Sponsors from '../../components/Scholarships/Sponsors';
import { db } from '../../firebase';
import { toBrochure, toScholarshipBursary } from '../../modules/map';

const Scholarships: React.FC = () => {

    const [heading, setHeading] = useState('simGeScholarship');
    const [brochure, setBrochure] = useState<any>({});
    const [scholarships, setScholarships] = useState<any>([]);

    const handleHeading = () => {
        setHeading('simGeScholarship');
    }

    const handleHeading2 = () => {
        setHeading('sponsors');
    }

    useEffect(() => {
        const fetchData = async () => {
            await db.collection('Scholarship').get().then(({ docs }) => {
                setScholarships(docs.map(toScholarshipBursary));
            });
            
            await db.collection('Brochures').where('description', 'in', ['Scholarship-FAQ']).get().then(({ docs }) => {
                const brocs = docs.map(toBrochure);

                if (brocs.length === 1)
                    setBrochure(brocs[0]);
            });
        }
        fetchData();
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Scholarships" route="/u/studentLife@SIM" backarrow={true} hamburger={true} />

                <IonToolbar>
                    <IonSegment scrollable value={heading} id="scholarships-mainHeader" onIonChange={(e) => console.log(`${e.detail.value} segment selected`)}>
                        <IonSegmentButton value="simGeScholarship" className="scholarships-heading" onClick={() => handleHeading()}>SIM GE Scholarship</IonSegmentButton>
                        <IonSegmentButton value="sponsors" className="scholarships-heading" onClick={() => handleHeading2()}>Sponsors</IonSegmentButton>
                    </IonSegment>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen className="studentLife-content">
                <IonGrid id="scholarships-ionRowCol">

                    {heading === 'simGeScholarship' ?
                        <SimGeScholarship brochure={brochure} scholarships={scholarships} /> : null
                    }

                    {heading === 'sponsors' ?
                        <Sponsors scholarships={scholarships} /> : null
                    }

                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Scholarships;
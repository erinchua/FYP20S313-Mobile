import { IonContent, IonHeader, IonPage } from '@ionic/react';
import React from 'react';
import { RouteComponentProps, useLocation } from 'react-router-dom';

import '../../css/Global.css';
import '../../css/CourseComparator.css';

import TopNav from '../../components/TopNav';
import CourseComparatorDetails from '../../components/Study@SIM/CourseComparatorDetails';


interface CourseComparator_Props extends RouteComponentProps<{
    discipline: string;
    category: string;
}> { }

const CourseComparator: React.FC<CourseComparator_Props> = ({ match }) => {
    console.log("Comparator rendered!")

    const location = useLocation()
    const programmes = location.state
    console.log(location)
    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Compare Programmes" route={`/u/study@SIMMain/${match.params.discipline}/${match.params.category}`} backarrow={true} hamburger={true} />
            </IonHeader>

            <IonContent fullscreen={true}>
                {typeof programmes !== 'undefined' ? <CourseComparatorDetails programmes={programmes} /> : ''}

            </IonContent>
        </IonPage>
    );
};

export default CourseComparator;
import { IonContent, IonHeader, IonPage } from '@ionic/react';
import React from 'react';
import { RouteComponentProps, useLocation } from 'react-router-dom';

import '../../css/Global.css';
import '../../css/CourseComparator.css';

import TopNav from '../../components/TopNav';
import CourseComparatorDetails from '../../components/Study@SIM/CourseComparatorDetails';
import { LocationState } from '../../modules/map'


interface CourseComparator_Props extends RouteComponentProps<{
    discipline: string;
    category: string;
}> { }

const CourseComparator: React.FC<CourseComparator_Props> = ({ match }) => {

    const location = useLocation<LocationState>()
    const programmes: any = location.state
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
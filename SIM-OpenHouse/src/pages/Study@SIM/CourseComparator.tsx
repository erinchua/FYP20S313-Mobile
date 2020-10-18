import { IonContent, IonHeader, IonPage } from '@ionic/react';
import React from 'react';
import { RouteComponentProps, useLocation, match } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import '../../css/Global.css';
import '../../css/CourseComparator.css';
import Grenoble from '../../img/study@SIM/GrenobleEcoleDeManagement.png';
import LaTrobe from '../../img/study@SIM/LaTrobeUniversity.png';
import RMIT from '../../img/study@SIM/RMITUniversity.png';
import SIMGE from '../../img/study@SIM/SimGE.png';
import Buffalo from '../../img/study@SIM/UniversityAtBuffalo.png';
import Birmingham from '../../img/study@SIM/UniversityOfBirmingham.png';
import London from '../../img/study@SIM/UniversityOfLondon.png';
import Manchester from '../../img/study@SIM/UniversityOfManchester.png';
import Stirling from '../../img/study@SIM/UniversityOfStirling.png';
import Sydney from '../../img/study@SIM/UniversityOfSydney.png';
import Warwick from '../../img/study@SIM/UniversityOfWarwick.png';
import Wollongong from '../../img/study@SIM/UniversityOfWollongong.png';
import { Programme } from './Study@SIMProgInfo'

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
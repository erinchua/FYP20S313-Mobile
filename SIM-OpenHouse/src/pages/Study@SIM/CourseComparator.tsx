import { IonContent, IonHeader, IonPage } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
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

import TopNav from '../../components/TopNav';
import CourseComparatorDetails from '../../components/Study@SIM/CourseComparatorDetails';


interface CourseComparator_Props extends RouteComponentProps<{
    discipline: string;
    compareCourse: string;
}> { }

const CourseComparator: React.FC<CourseComparator_Props> = ({ match }) => {

    return (
        <IonPage>
            <IonHeader>
                {match.params.discipline === 'artSocialSciences' ?
                    <TopNav title="Compare Programmes" route='/u/study@SIMMain/artSocialSciences' backarrow={ true } hamburger = { true }/>
                    :''
                }

                {match.params.discipline === 'business' ?
                    <TopNav title="Compare Programmes" route='/u/study@SIMMain/business' backarrow={ true } hamburger = { true }/>
                    :''
                }

                {match.params.discipline === 'itComputerScience' ?
                    <TopNav title="Compare Programmes" route='/u/study@SIMMain/itComputerScience' backarrow={ true } hamburger = { true }/>
                    :''
                }

                {match.params.discipline === 'nursing' ?
                    <TopNav title="Compare Programmes" route='/u/study@SIMMain/nursing' backarrow={ true } hamburger = { true }/>
                    :''
                }

                {match.params.discipline === 'speciality' ?
                    <TopNav title="Compare Programmes" route='/u/study@SIMMain/speciality' backarrow={ true } hamburger = { true }/>
                    :''
                }
            </IonHeader>

            <IonContent fullscreen={true}>
                {match.params.discipline === 'artSocialSciences' ?
                    <CourseComparatorDetails />
                    :''
                }

                {match.params.discipline === 'business' ?
                    <CourseComparatorDetails />
                    :''
                }

                {match.params.discipline === 'itComputerScience' ?
                    <CourseComparatorDetails />
                    :''
                }

                {match.params.discipline === 'nursing' ?
                    <CourseComparatorDetails />
                    :''
                }

                {match.params.discipline === 'speciality' ?
                    <CourseComparatorDetails />
                    :''
                }
            </IonContent>
        </IonPage>
    );
};

export default CourseComparator;
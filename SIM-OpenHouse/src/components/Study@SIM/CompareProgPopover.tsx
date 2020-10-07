import { IonBadge, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonItem, IonLabel, IonPage, IonPopover, IonRouterLink, IonRow, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useRef, useState } from 'react';

import '../../css/Global.css';
// import '../../css/CompareProgPopover.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faFilter } from '@fortawesome/free-solid-svg-icons';
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

const CompareProgPopover: React.FC<{}> = () => {

    const [showPopover, setShowPopover] = useState<{open: boolean, event: Event | undefined}>({
        open: false,
        event: undefined,
        });
    return (
        <>
            <IonPopover
                isOpen={showPopover.open}
                event={showPopover.event}
                onDidDismiss={e => setShowPopover({open: false, event: undefined})}
            >
            <p>This is popover content</p>
            </IonPopover>
            <IonButton onClick={(e) => setShowPopover({open: true, event: e.nativeEvent})}>Click</IonButton>
        </>
    );
};

export default CompareProgPopover;




// const CompareProgPopover: React.FC<{
//     isOpen: boolean;
//     onDidDismiss: any;
//     event: any;
// }> = props => {

//     return (
//         <>
//             <IonPopover id="compareProgPopover" isOpen={props.isOpen} cssClass='my-custom-class' onDidDismiss={props.onDidDismiss} event={props.event}>
//                 <p>This is popover content</p>
//             </IonPopover>
//         </>
//     );
// };

// export default CompareProgPopover;
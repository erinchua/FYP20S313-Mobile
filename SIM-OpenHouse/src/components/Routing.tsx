import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';

import GuidedTours from '../pages/GuidedTours';
import GuidedTourContent from '../pages/GuidedTourContent';

const Routing: React.FC<RouteComponentProps> = ({match}) => {

    return(
        <IonRouterOutlet>
            <Route exact path={match.url} componenet={GuidedTours}/>
            <Route path={`${match.url}/openHouseMain/guidedTours-day:id`} componenet={GuidedTourContent}/>
        </IonRouterOutlet>
    );
}

export default Routing;
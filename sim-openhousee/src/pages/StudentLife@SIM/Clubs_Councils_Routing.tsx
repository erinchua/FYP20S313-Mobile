import { IonRouterOutlet } from '@ionic/react';
import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

import '../../css/Global.css';
import '../../css/StudentLife.css';
import Clubs_Councils from './Clubs_Councils';
import Clubs_Councils_Details from './Clubs_Councils_Details';

const Clubs_Councils_Routing: React.FC<RouteComponentProps> = ({ match }) => {

    return (
        <IonRouterOutlet>
            <Route exact path={match.url} component={Clubs_Councils} />
            <Route path={`${match.url}/:id`} component={Clubs_Councils_Details} />
        </IonRouterOutlet>
    );
};

export default Clubs_Councils_Routing;
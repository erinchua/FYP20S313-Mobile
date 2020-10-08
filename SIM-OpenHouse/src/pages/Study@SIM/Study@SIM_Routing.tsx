import { IonRouterOutlet } from '@ionic/react';
import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

import '../../css/Global.css';
import StudySIMMain from './Study@SIMMain';
import StudySIMProgList from './Study@SIMProgList';

const StudySIM_Routing: React.FC<RouteComponentProps> = ({ match }) => {

    return (
        <IonRouterOutlet>
            <Route exact path={match.url} component={StudySIMMain} />
            <Route path={`${match.url}/:id`} component={StudySIMProgList} />
        </IonRouterOutlet>
    );
};

export default StudySIM_Routing;
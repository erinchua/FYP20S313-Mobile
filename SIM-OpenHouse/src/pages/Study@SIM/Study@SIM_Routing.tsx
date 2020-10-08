import { IonRouterOutlet } from '@ionic/react';
import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

import '../../css/Global.css';
import StudySIMMain from './Study@SIMMain';
import StudySIMProgList from './Study@SIMProgList';
import StudySIMProgInfo from './Study@SIMProgInfo';
import CourseComparator from './CourseComparator';

const StudySIM_Routing: React.FC<RouteComponentProps> = ({ match }) => {

    return (
        <IonRouterOutlet>
            <Route exact path={match.url} component={StudySIMMain} />
            <Route path={`${match.url}/:discipline`} component={StudySIMProgList} />
            <Route path={`${match.url}/:discipline/:id`} component={StudySIMProgInfo} />
            <Route path={`${match.url}/:discipline/:compareCourse`} component={CourseComparator} />
        </IonRouterOutlet>
    );
};

export default StudySIM_Routing;
import { IonRouterOutlet } from '@ionic/react';
import React from 'react';
import { BrowserRouter as Router, Route, RouteComponentProps, Switch } from 'react-router-dom';

import '../../css/Global.css';
import StudySIMMain from './Study@SIMMain';
import StudySIMProgList from './Study@SIMProgList';
import StudySIMProgInfo from './Study@SIMProgInfo';
import CourseComparator from './CourseComparator';

const StudySIM_Routing: React.FC<RouteComponentProps> = ({ match }) => {

    return (
        <IonRouterOutlet>
            <Switch>
                <Route exact path={match.url} component={StudySIMMain} />
                <Route path={`${match.url}/:discipline/:category`} component={StudySIMProgList} />
                <Route path={`${match.url}/Study@SIMProgInfo/:id`} component={StudySIMProgInfo} />
                <Route path={`${match.url}/:discipline/:compareCourse`} component={CourseComparator} />
            </Switch>
        </IonRouterOutlet>
    );
};

export default StudySIM_Routing;
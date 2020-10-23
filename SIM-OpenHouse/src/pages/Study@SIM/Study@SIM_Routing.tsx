import { IonRouterOutlet } from '@ionic/react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from 'react-router-dom';


import '../../css/Global.css';
import StudySIMMain from './Study@SIMMain';
import StudySIMProgList from './Study@SIMProgList';
import StudySIMProgInfo from './Study@SIMProgInfo';
import CourseComparator from './CourseComparator';


const StudySIM_Routing: React.FC<RouteComponentProps> = ({ match }) => {


    return (
        <IonRouterOutlet>
            <Switch>
                <Route exact path='/u/study@SIMMain' component={StudySIMMain} />
                <Route path={`/u/study@SIMMain/Study@SIMProgInfo/:id/:discipline/:category`} component={StudySIMProgInfo} />
                <Route path={`/u/study@SIMMain/:discipline/:category/courseComparator`} component={CourseComparator} />
                {/* <Route path={`/u/study@SIMMain/:discipline/:category`} render={props => <StudySIMProgList {...props} compareProgList={compareProgList} onCompareProgListChange={onCompareProgListChange} />} /> */}
                <Route path={`/u/study@SIMMain/:discipline/:category`} component={StudySIMProgList} />
            </Switch>
        </IonRouterOutlet>
    );
};

export default StudySIM_Routing;
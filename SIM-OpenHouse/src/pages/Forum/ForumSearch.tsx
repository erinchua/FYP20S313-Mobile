import { IonContent, IonPage, IonGrid, IonRow, IonRouterLink, IonToolbar, IonSearchbar, IonCol, IonList, IonLabel, IonText, IonHeader, IonTitle } from '@ionic/react';
import React from 'react';

import '../../css/Global.css';
import '../../css/Forum.css';
import TopNav from '../../components/TopNav';
import ForumRules from '../../components/Forum/ForumRules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import Forum_FlagModal from '../../components/Forum/Forum_FlagModal';

const ForumSearch: React.FC = () => {

    const search = 'Wollongong';
    
    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Forum" route="/u/forum" backarrow={ true } hamburger={ true }/>
            </IonHeader>

            <IonContent  fullscreen id="forum-content">
                <IonGrid id="forum-searchbar-container">
                    <IonRow>
                        <IonSearchbar id="forum-searchbar" animated></IonSearchbar>
                    </IonRow>
                </IonGrid>

                <IonGrid id="forum-heading-container">
                    <IonRow className="ion-justify-content-start">
                        <IonCol size="10" className="ion-align-self-center forum-col">
                            <IonTitle id="forum-heading">Search Results for: <span style={{color: 'black'}}>{search}</span></IonTitle>
                        </IonCol>                            
                        <IonCol size="2" className="forum-col">
                            <ForumRules />
                        </IonCol>
                    </IonRow>
                </IonGrid>

                {/* Display all Questions */}
                <IonList className="forum-container">
                    <IonGrid>
                        <IonRow>
                            <IonLabel>
                                <IonRouterLink href="/u/forumViewQuestion"><IonText className="forum-question">Anyone going to enrol for the Cyber Security (University of {search}) course?</IonText></IonRouterLink>
                            </IonLabel>
                        </IonRow>
                        <IonRow className="ion-justify-content-end">
                            <IonText className="forum-question-details" id="forum-userName">~ Martin John</IonText>
                        </IonRow>
                        <IonRow className="ion-align-items-end ion-justify-content-start" id="forum-question-detail-container">
                            <IonCol size="1" className="forum-col ion-align-self-end">
                                <FontAwesomeIcon icon={faClock} size="sm"/>
                            </IonCol>
                            <IonCol size="6" className="forum-col ion-align-self-end">
                                <IonText className="forum-question-details">21-11-2020, 5.30pm</IonText>
                            </IonCol>
                            <IonCol size="1" className="forum-col ion-align-self-end">
                                <FontAwesomeIcon icon={faCommentAlt} size="sm"/>
                            </IonCol>
                            <IonCol size="3" className="forum-col ion-align-self-end">
                                <IonText className="forum-question-details">0</IonText>
                            </IonCol>
                            <IonCol size="1" className="ion-align-self-end forum-col">
                                <Forum_FlagModal />
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonList>                
            </IonContent>
        </IonPage>
    );
};

export default ForumSearch;
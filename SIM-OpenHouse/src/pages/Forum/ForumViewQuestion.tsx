import { IonContent, IonPage, IonGrid, IonRow, IonButton, IonRouterLink, IonToolbar, IonSearchbar, IonCol, IonTitle, IonList, IonLabel, IonText } from '@ionic/react';
import React from 'react';

import '../../css/Global.css';
import '../../css/Forum.css';
import TopNav from '../../components/TopNav';
import ForumRules from '../../components/Forum/ForumRules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

const ForumViewQuestion: React.FC = () => {

    return (
        <IonPage>
            <TopNav title="Forum" route="/u/forum" backarrow={ true } hamburger={ true }/>
            <IonToolbar id="forum-searchbar-container">
                <IonGrid>
                    <IonRow className="ion-justify-content-start">
                        <IonCol size="10" className="forum-col">
                            <IonSearchbar id="forum-searchbar" animated></IonSearchbar>
                        </IonCol>
                        <IonCol size="2" className="forum-col ion-align-self-center">
                            <ForumRules />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonToolbar>
            <IonContent  fullscreen id="forum-content">
                <IonList className="forum-container">
                    <IonGrid>
                        <IonRow>
                            <IonLabel>
                                <IonRouterLink href="/u/forumViewQuestion"><IonText className="forum-question">Anyone going to enrol for the Cyber Security (University of Wollongong) course?</IonText></IonRouterLink>
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
                                <IonButton id="forum-question-flagBtn" size="small"><FontAwesomeIcon icon={faFlag} size="sm"/></IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default ForumViewQuestion;
import { IonContent, IonPage, IonGrid, IonRow, IonRouterLink, IonSearchbar, IonCol, IonList, IonLabel, IonText, IonHeader } from '@ionic/react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCommentAlt } from '@fortawesome/free-regular-svg-icons';

import '../../css/Global.css';
import '../../css/Forum.css';
import TopNav from '../../components/TopNav';
import ForumRules from '../../components/Forum/ForumRules';
import Forum_WithComment from '../../components/Forum/Forum_WithComment';
import Forum_FlagModal from '../../components/Forum/Forum_FlagModal';
import Forum_AddCommentModal from '../../components/Forum/Forum_AddCommentModal';

const ForumViewQuestion: React.FC = () => {
    
    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Forum" route="/u/forum" backarrow={ true } hamburger={ true }/>
            </IonHeader>
            
            <IonContent  fullscreen id="forum-content">
                <IonGrid id="forum-searchbar-container">
                    <IonRow className="ion-justify-content-start">
                        <IonCol size="10" className="forum-col">
                            <IonSearchbar id="forum-searchbar" animated></IonSearchbar>
                        </IonCol>
                        <IonCol size="2" className="forum-col ion-align-self-center">
                            <ForumRules />
                        </IonCol>
                    </IonRow>
                </IonGrid>
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
                                <Forum_FlagModal />
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonList>
                <IonGrid id="add-comment-container">
                    <IonRow>
                        <IonCol className="ion-align-self-center">
                            <IonText id="addComment-commentText">Comments</IonText>
                        </IonCol>
                        <IonCol className="ion-align-self-center">
                            <Forum_AddCommentModal />
                        </IonCol>
                    </IonRow>
                </IonGrid>

                {/* When there's no comment */}
                {/* <Forum_NoComment /> */}

                {/* When there's 2 comments, reply to comment and deleted comment*/}
                <Forum_WithComment />
                
            </IonContent>
        </IonPage>
    );
};

export default ForumViewQuestion;
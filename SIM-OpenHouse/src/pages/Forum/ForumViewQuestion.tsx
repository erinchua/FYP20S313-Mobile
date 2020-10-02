import { IonContent, IonPage, IonGrid, IonRow, IonButton, IonRouterLink, IonToolbar, IonSearchbar, IonCol, IonTitle, IonList, IonLabel, IonText } from '@ionic/react';
import React from 'react';

import '../../css/Global.css';
import '../../css/Forum.css';
import TopNav from '../../components/TopNav';
import ForumRules from '../../components/Forum/ForumRules';
import Forum_NoComment from '../../components/Forum/Forum_NoComment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCommentAlt, faComment, faCommentDots } from '@fortawesome/free-regular-svg-icons';
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
                <IonGrid id="add-comment-container">
                    <IonRow>
                        <IonCol className="ion-align-self-center">
                            <IonText id="addComment-commentText">Comments</IonText>
                        </IonCol>
                        <IonCol className="ion-align-self-center">
                            <IonButton id="forum-addCommentBtn" size="small"><FontAwesomeIcon icon={faComment} size="sm"/><IonText style={{marginLeft: '5%', fontSize: '90%'}}>Add Comment</IonText></IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                {/* When there's no comment */}
                {/* <Forum_NoComment /> */}

                {/* When there's 2 comments */}
                <IonGrid id="comment-main-container">
                    <IonList id="comment-list">
                        <IonGrid className="forum-container">
                            <IonRow>
                                <IonLabel>
                                    <IonText id="comment-text">Sure thing. Do you stay near North East area? We can meet up and cab there together if you don't mind.</IonText>
                                </IonLabel>
                            </IonRow>
                            <IonRow className="ion-justify-content-end">
                                <IonText id="comment-userName">~ John Tan</IonText>
                            </IonRow>
                            <IonRow className="ion-align-items-end ion-justify-content-start" id="comment-detail-container">
                                <IonCol size="1" className="forum-col ion-align-self-end">
                                    <FontAwesomeIcon icon={faClock} size="sm"/>
                                </IonCol>
                                <IonCol size="6" className="forum-col ion-align-self-end">
                                    <IonText id="comment-details">22-11-2020, 9.10am</IonText>
                                </IonCol>
                                <IonCol size="4" className="forum-col ion-align-self-end">
                                    <IonButton id="comment-replyBtn" size="small"><FontAwesomeIcon icon={faCommentDots} size="sm"/><IonText style={{marginLeft: '5%'}}>Reply</IonText></IonButton>
                                </IonCol>
                                <IonCol size="1" className="ion-align-self-end forum-col">
                                    <IonButton id="comment-flagBtn" size="small"><FontAwesomeIcon icon={faFlag} size="sm"/></IonButton>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonList>
                    <IonList id="comment-list">
                        <IonGrid className="forum-container">
                            <IonRow>
                                <IonLabel>
                                    <IonText id="comment-text">Sure thing. Do you stay near North East area? We can meet up and cab there together if you don't mind.</IonText>
                                </IonLabel>
                            </IonRow>
                            <IonRow className="ion-justify-content-end">
                                <IonText id="comment-userName">~ John Tan</IonText>
                            </IonRow>
                            <IonRow className="ion-align-items-end ion-justify-content-start" id="comment-detail-container">
                                <IonCol size="1" className="forum-col ion-align-self-end">
                                    <FontAwesomeIcon icon={faClock} size="sm"/>
                                </IonCol>
                                <IonCol size="6" className="forum-col ion-align-self-end">
                                    <IonText id="comment-details">22-11-2020, 9.10am</IonText>
                                </IonCol>
                                <IonCol size="4" className="forum-col ion-align-self-end">
                                    <IonButton id="comment-replyBtn" size="small"><FontAwesomeIcon icon={faCommentDots} size="sm"/><IonText style={{marginLeft: '5%'}}>Reply</IonText></IonButton>
                                </IonCol>
                                <IonCol size="1" className="ion-align-self-end forum-col">
                                    <IonButton id="comment-flagBtn" size="small"><FontAwesomeIcon icon={faFlag} size="sm"/></IonButton>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonList>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default ForumViewQuestion;
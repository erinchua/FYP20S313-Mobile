import { IonButton, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItemDivider, IonLabel, IonModal, IonPage, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonTextarea, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';

import "../../css/Global.css"
import "../../css/Forum.css"
import TopNav from '../../components/TopNav';
import ForumRules from '../../components/Forum/ForumRules';
import { addCircleSharp, personSharp } from 'ionicons/icons';
import { useHistory } from 'react-router';
import ForumQuestions from '../../components/Forum/ForumQuestions';
import ForumComments from '../../components/Forum/ForumComments';

const ForumUser: React.FC = () => {

    const [showPostModal, setShowPostModal] = useState(false);
    let history = useHistory();

    const [modalSegmentValue, setModalSegmentValue] = useState('');

    const [qnsCom, setQnsCom] = useState('forum-myQuestions');

    const handleQuestions = () => {
        setQnsCom('forum-myQuestions');
    }

    const handleComments = () => {
        setQnsCom('forum-myComments');
    }
   
    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Forum" route="/u/forum" backarrow={ true } hamburger={ true } />
            </IonHeader>

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

            <IonContent fullscreen id="forum-content">
                <IonGrid id="forumUser-ionRowCol">
                    <IonRow id="forumUser-ionRowCol">
                        <IonCol id="forumUser-ionRowCol">
                            <IonToolbar>
                                <IonSegment scrollable value={qnsCom} onIonChange={(e) => console.log(`${e.detail.value}`)}>
                                    <IonSegmentButton value="forum-myQuestions" onClick={() => handleQuestions()} className="forumUser-heading">My Questions</IonSegmentButton>
                                    <IonSegmentButton value="forum-myComments" onClick={() => handleComments()} className="forumUser-heading">My Comments</IonSegmentButton>
                                </IonSegment>
                            </IonToolbar>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                {qnsCom === 'forum-myQuestions' ? 
                    <ForumQuestions /> : <ForumComments />
                }
                
                {/* Post Question Modal */}
                <IonModal isOpen={showPostModal} cssClass='post-question-modal' onDidDismiss={() => setShowPostModal(false)}>
                    <IonGrid id="postQns-modal-container">
                        <IonRow style={{paddingTop: '1%'}}>
                            <IonLabel id="postQns-title">Post Question</IonLabel>
                        </IonRow>
                        <IonItemDivider></IonItemDivider>
                        <IonRow id="postQns-modal-inputArea">
                            <IonTextarea placeholder="Type your question here..."></IonTextarea>
                        </IonRow>
                        <IonRow className="ion-justify-content-around">
                            <IonButton id="postQns-close-button" fill="outline" onClick={() => [setShowPostModal(false), setModalSegmentValue('')]}>CLOSE</IonButton>
                            <IonButton id="postQns-post-button">POST</IonButton>
                        </IonRow>
                    </IonGrid>
                </IonModal>
            </IonContent>

            <IonFooter>
                <IonToolbar>
                    <IonSegment scrollable value={modalSegmentValue} onIonChange={(e) => console.log(`${e.detail.value}`)}>
                        <IonSegmentButton className="forum-segmentBtn" value="postQuestionBtn" onClick={() => [setShowPostModal(true), setModalSegmentValue('postQuestionBtn')]}><IonIcon icon={addCircleSharp} /></IonSegmentButton>
                        <IonSegmentButton className="forum-segmentBtn" value="forumUserBtn" onClick={(e) => {e.preventDefault(); history.push('/u/forumUser');}}><IonIcon icon={personSharp} /></IonSegmentButton>
                    </IonSegment>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default ForumUser;
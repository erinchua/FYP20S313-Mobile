import { IonCol, IonGrid, IonLabel, IonList, IonRow, IonText } from '@ionic/react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import '../../css/Global.css';
import '../../css/Forum.css';
import Forum_CommentReply from './Forum_CommentReply';
import Forum_FlagModal from './Forum_FlagModal';
import Forum_ReplyModal from './Forum_ReplyModal';

const Forum_WithComment: React.FC = () => {

    return (
        <>
        {/* Deleted Comment */}
        <IonGrid id="comment-main-container">
            <IonList id="comment-list">
                <IonGrid className="forum-container">
                    <IonRow>
                        <IonLabel>
                            <IonText id="comment-text">[Deleted]</IonText>
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
                            <Forum_ReplyModal disabled={false}/>
                        </IonCol>
                        <IonCol size="1" className="ion-align-self-end forum-col">
                            <Forum_FlagModal />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonList>

            {/* Normal Comment */}
            <IonList id="comment-list">
                <IonGrid className="forum-container">
                    <IonRow>
                        <IonLabel>
                            <IonText id="comment-text">At Blk A Level 2, outside of library</IonText>
                        </IonLabel>
                    </IonRow>
                    <IonRow className="ion-justify-content-end">
                        <IonText id="comment-userName">~ Martin John</IonText>
                    </IonRow>
                    <IonRow className="ion-align-items-end ion-justify-content-start" id="comment-detail-container">
                        <IonCol size="1" className="forum-col ion-align-self-end">
                            <FontAwesomeIcon icon={faClock} size="sm"/>
                        </IonCol>
                        <IonCol size="6" className="forum-col ion-align-self-end">
                            <IonText id="comment-details">21-11-2020, 10.02am</IonText>
                        </IonCol>
                        <IonCol size="4" className="forum-col ion-align-self-end">
                        <Forum_ReplyModal disabled={true}/>
                        </IonCol>
                        <IonCol size="1" className="ion-align-self-end forum-col">
                            <Forum_FlagModal />
                        </IonCol>
                    </IonRow>
                </IonGrid>
                
                {/* Reply to the comment */}
                <Forum_CommentReply />

                {/* Reply to Comment Modal */}
                
            </IonList>
        </IonGrid>
        </>
    );
};

export default Forum_WithComment;
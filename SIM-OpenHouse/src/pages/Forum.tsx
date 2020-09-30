import { IonButton, IonCheckbox, IonCol, IonContent, IonFooter, IonGrid, IonIcon, IonItem, IonItemDivider, IonLabel, IonList, IonModal, IonPage, IonPopover, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonText, IonTextarea, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import "../css/Global.css";
import "../css/Forum.css";
import TopNav from '../components/TopNav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import {  faFlag, faUser } from "@fortawesome/free-solid-svg-icons";
import { addCircleSharp, informationCircleOutline } from "ionicons/icons";


const Forum: React.FC = () => {

    const { register, errors, handleSubmit } = useForm();

    const [checked, setChecked] = useState(false);
    
    const [count, setCount] = useState(0);

    const [showPopover, setShowPopover] = useState(false);

    const [showPostModal, setShowPostModal] = useState(false);
    const [showUserModal, setShowUserModal] = useState(false);

    const [modalSegmentValue, setModalSegmentValue] = useState('');

    const onSubmit = () => {
        setCount(1);
        setChecked(true);
    }
   
    return (
        <IonPage>
            <TopNav title="Forum" route="/u/home" backarrow={ true } hamburger={ true } />
            
            <IonContent fullscreen id="forum-content">
            {count === 1 && checked === true ?
                <>
                <IonToolbar id="forum-searchbar-container">
                    <IonSearchbar id="forum-searchbar" animated></IonSearchbar>
                </IonToolbar>
                <IonToolbar id="forum-heading-container">
                    <IonGrid>
                        <IonRow className="ion-justify-content-start">
                            <IonCol size="10" className="ion-align-self-center forum-col">
                                <IonTitle id="forum-heading">All Discussions</IonTitle>
                            </IonCol>

                            {/* Popup for Information Button */}
                            <IonPopover isOpen={showPopover} cssClass='my-custom-class' onDidDismiss={e => setShowPopover(false)}>
                                <IonGrid>
                                    <IonRow id="popover-infoDetails">
                                        <IonText>1. Remain respectful of other users at all times.</IonText>
                                    </IonRow>
                                    <IonRow id="popover-infoDetails">
                                        <IonText>2. Please do not spam. The definition of spam is an irrelevant or advertising post. Any post that is considered spam will be removed.</IonText>
                                    </IonRow>
                                    <IonRow id="popover-infoDetails">
                                        <IonText>3. Do not post offensive posts, links or images.</IonText>
                                    </IonRow>
                                    <IonRow id="popover-infoDetails">
                                        <IonText>4. Please do not post threads text in all CAPITALS since this is considered to be shouting.</IonText>
                                    </IonRow>
                                    <IonRow id="popover-infoDetails">
                                        <IonText>Anyone who breaks any of the above rules will be banned from the forum. Let's keep this forum safe for everyone.</IonText>
                                    </IonRow>
                                </IonGrid>
                            </IonPopover>

                            <IonCol size="2" className="forum-col">
                                <IonButton id="forum-informationBtn" size="small" onClick={() => setShowPopover(true)}><IonIcon size="sm" icon={informationCircleOutline} /></IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>

                {/* Display all Questions */}
                <IonList className="forum-container">
                    <IonGrid>
                        <IonRow>
                            <IonLabel>
                                <IonText className="forum-question">Anyone going to enrol for the Cyber Security (University of Wollongong) course?</IonText>
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
                                <IonText className="forum-question-details">1000</IonText>
                            </IonCol>
                            <IonCol size="1" className="ion-align-self-end forum-col">
                                <IonButton id="forum-question-flagBtn" size="small"><FontAwesomeIcon icon={faFlag} size="sm"/></IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonList>

                <IonList className="forum-container">
                    <IonGrid>
                        <IonRow>
                            <IonLabel>
                                <IonText className="forum-question">Anyone going to enrol for the Cyber Security (University of Wollongong) course?</IonText>
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
                                <IonText className="forum-question-details">1000</IonText>
                            </IonCol>
                            <IonCol size="1" className="ion-align-self-end forum-col">
                                <IonButton id="forum-question-flagBtn" size="small"><FontAwesomeIcon icon={faFlag} size="sm"/></IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonList>
                {/* End of Display all Questions */}
                </>

                : <form onSubmit={handleSubmit(onSubmit)}>        
                    <IonGrid id="forumRulesGrid">
                        <IonRow id="important-notice">
                            <IonText>*Important Notice*</IonText>
                        </IonRow>
                        <IonRow id="forum-rules">
                            <IonText>Forum Rules</IonText>
                        </IonRow>
                        <IonRow id="forum-instructions">
                            <IonText>This forum is strictly for discussion about programmes offered by SIM and its partner universities and SIM
                                Open House. Please adhere to the following rules before posting in the forum.
                            </IonText>
                        </IonRow>
                        <IonRow id="forum-instructions">
                            <IonText>1. Remain respectful of other users at all times.</IonText>
                        </IonRow>
                        <IonRow id="forum-instructions">
                            <IonText>2. Please do not spam. The definition of spam is an irrelevant or advertising post. Any post that is considered spam will be removed.</IonText>
                        </IonRow>
                        <IonRow id="forum-instructions">
                            <IonText>3. Do not post offensive posts, links or images.</IonText>
                        </IonRow>
                        <IonRow id="forum-instructions">
                            <IonText>4. Please do not post threads text in all CAPITALS since this is considered to be shouting.</IonText>
                        </IonRow>
                        <IonRow id="forum-instructions">
                            <IonText>Anyone who breaks any of the above rules will be banned from the forum. Let's keep this forum safe for everyone.</IonText>
                        </IonRow>
                        <IonRow className="ion-justify-content-center">
                            <IonItem id="forum-checkbox-container">
                                <IonCol size="2" size-sizeSm="2" className="ion-align-self-center">
                                    <IonCheckbox name="forumCheckbox" checked={checked} onIonChange={(e) => setChecked(e.detail.checked)} ref={register({ validate: (value) => checked === true })}></IonCheckbox>
                                </IonCol>
                                <IonCol size="10" size-sizeSm="10">
                                    <IonText id="forum-checkbox-text">
                                    *I have read the above forum rules and agree to abide to the rules stated above. I understand that should I break any of the rules above, I may be banned from the forum.
                                    </IonText>
                                </IonCol>
                            </IonItem>
                            {errors.forumCheckbox && errors.forumCheckbox.type === "validate" && <div className="errorMessage">*Please check the above after reading the rules to proceed to the forum</div>}
                        </IonRow>
                        <IonRow class="ion-justify-content-center">
                            <IonButton id="forumRulesBtn" type="submit">PROCEED TO FORUM</IonButton>
                        </IonRow>
                    </IonGrid>
                </form>
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

            {/* Forum User Modal */}
            <IonModal isOpen={showUserModal} cssClass='forum-user-modal' onDidDismiss={() => setShowUserModal(false)}>
                <TopNav title="Forum" route="/u/forum" backarrow={ true } hamburger={ true } />
                <IonButton id="postQns-close-button" fill="outline" onClick={() => [setShowUserModal(false), setModalSegmentValue('')]}>CLOSE</IonButton>
            </IonModal>

            </IonContent>

            {/* Bottom Tabs (After Forum Rules) */}
            {count === 1 && checked === true ? 
                <>
                <IonFooter>
                    <IonToolbar>
                        <IonSegment value={modalSegmentValue} onIonChange={(e) => console.log(`${e.detail.value}`)}>
                            <IonSegmentButton value="postQuestionBtn" onClick={() => [setShowPostModal(true), setModalSegmentValue('postQuestionBtn')]}><IonIcon icon={addCircleSharp} /></IonSegmentButton>
                            <IonSegmentButton value="forumUserBtn" onClick={() => [setShowUserModal(true), setModalSegmentValue('forumUserBtn')]}><FontAwesomeIcon icon={faUser} /></IonSegmentButton>
                        </IonSegment>
                    </IonToolbar>
                </IonFooter>
                </> : ''
            }
        </IonPage>
    );
};

export default Forum;
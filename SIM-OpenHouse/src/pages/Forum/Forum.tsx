import { IonButton, IonCheckbox, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonLabel, IonList, IonLoading, IonModal, IonPage, IonRouterLink, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonText, IonTextarea, IonTitle, IonToolbar } from "@ionic/react";
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import { addCircleSharp, personSharp } from "ionicons/icons";

import "../../css/Global.css";
import "../../css/Forum.css";
import TopNav from '../../components/TopNav';
import ForumRules from '../../components/Forum/ForumRules';
import Forum_FlagModal from "../../components/Forum/Forum_FlagModal";
import { db } from "../../firebase";
import { useAuth } from "../../modules/auth";

const Forum: React.FC = () => {
    const { userID } = useAuth();
    const { register, errors, handleSubmit } = useForm();

    const [loading, setLoading] = useState(false);
    const [checked, setChecked] = useState(false);
    const [agreedTOC, setAgreedTOC] = useState(true);
    const [showPostModal, setShowPostModal] = useState(false);
    const [modalSegmentValue, setModalSegmentValue] = useState('');
    const [postText, setPostText] = useState("");
    const [questionPosts, setQuestionPosts] = useState([]);

    let history = useHistory();

    useEffect(() => {
        db.collection('Forum').doc(userID).onSnapshot((snapshot: any) => {
            if (snapshot.data().readRules)
                setAgreedTOC(true);
            else
                setAgreedTOC(false);
        });

        db.collection('Forum').get().then(uRef => {
            const questions: any = [];
            uRef.forEach(user => {
                db.collection('Forum').doc(user.id).collection('Questions').onSnapshot(qnRef => {
                    qnRef.forEach(doc => questions.push(doc));
                });
            });

            setQuestionPosts(questions);
            console.log(questionPosts)
        });
    }, []);

    const onSubmit = async () => {
        setLoading(true);
        if (checked)
            await db.collection('Forum').doc(userID).update({ readRules: true });
        setLoading(false);
    };

    const handlePost = async (postType: any) => {
        try {    
            setLoading(true);
            const time = new Date();

            if (postType == "question")
                await db.collection('Forum').doc(userID).collection('Questions').doc((time.getTime()).toString()).set({
                    text: postText,
                    dateTime: time.toLocaleString().replace(/\//g, "-"),
                    noOfComments: 0,
                    postedBy: userID,
                    deleted: false,
                    reported: false
                });
            else if (postType == "comment")
                await db.collection('Forum').doc(userID).collection('Comments').doc((time.getTime()).toString()).set({
                    text: postText,
                    dateTime: time.toLocaleString().replace(/\//g, "-"),
                    postedBy: userID,
                    deleted: false,
                    reported: false
                });
        } catch(e) {
            return console.log(e);
        } finally {
            setLoading(false);
            setShowPostModal(false);
            setPostText("");
        }
    }
    
    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Forum" route="/u/home" backarrow={ true } hamburger={ true }/>
            </IonHeader>
            
            <IonContent fullscreen id="forum-content">
                {agreedTOC === true ?
                    <>
                    <IonGrid id="forum-searchbar-container">
                        <IonRow>
                            <IonSearchbar id="forum-searchbar" animated></IonSearchbar>
                        </IonRow>
                    </IonGrid>
                        

                    <IonGrid id="forum-heading-container">
                        <IonRow className="ion-justify-content-start">
                            <IonCol size="10" className="ion-align-self-center forum-col">
                                <IonTitle id="forum-heading">All Discussions</IonTitle>
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

                    <IonList className="forum-container">
                        <IonGrid>
                            <IonRow>
                                <IonLabel>
                                <IonRouterLink href="/u/forumViewQuestion"><IonText className="forum-question">Where's the ATM?</IonText></IonRouterLink>
                                </IonLabel>
                            </IonRow>
                            <IonRow className="ion-justify-content-end">
                                <IonText className="forum-question-details" id="forum-userName">~ John Tan</IonText>
                            </IonRow>
                            <IonRow className="ion-align-items-end ion-justify-content-start" id="forum-question-detail-container">
                                <IonCol size="1" className="forum-col ion-align-self-end">
                                    <FontAwesomeIcon icon={faClock} size="sm"/>
                                </IonCol>
                                <IonCol size="6" className="forum-col ion-align-self-end">
                                    <IonText className="forum-question-details">21-11-2020, 10.00am</IonText>
                                </IonCol>
                                <IonCol size="1" className="forum-col ion-align-self-end">
                                    <FontAwesomeIcon icon={faCommentAlt} size="sm"/>
                                </IonCol>
                                <IonCol size="3" className="forum-col ion-align-self-end">
                                    <IonText className="forum-question-details">1</IonText>
                                </IonCol>
                                <IonCol size="1" className="ion-align-self-end forum-col">
                                    <Forum_FlagModal />
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
                                    <IonCol size="2" sizeSm="2" className="ion-align-self-center">
                                        <IonCheckbox name="forumCheckbox" checked={checked} onIonChange={(e) => setChecked(e.detail.checked)} ref={register({ validate: (value) => checked === true })}></IonCheckbox>
                                    </IonCol>
                                    <IonCol size="10" sizeSm="10">
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
                    <IonContent>
                        <IonGrid id="postQns-modal-container">
                            <IonRow style={{paddingTop: '1%'}}>
                                <IonLabel id="postQns-title">Post Question</IonLabel>
                            </IonRow>
                            <IonItemDivider></IonItemDivider>
                            <IonRow id="postQns-modal-inputArea">
                                <IonTextarea value={postText} onIonChange={(e: any) => setPostText(e.detail.value)} rows={11} placeholder="Type your question here..." required></IonTextarea>
                            </IonRow>
                            <IonRow className="ion-justify-content-around">
                                <IonButton id="postQns-close-button" fill="outline" onClick={() => [setShowPostModal(false), setModalSegmentValue('')]}>CLOSE</IonButton>
                                <IonButton id="postQns-post-button" onClick={() => handlePost("question")}>POST</IonButton>
                            </IonRow>
                        </IonGrid>
                    </IonContent>
                </IonModal>
                <IonLoading isOpen={loading} />
            </IonContent>

            {/* Bottom Tabs */}
            {agreedTOC === true ? 
                <>
                <IonFooter>
                    <IonToolbar>
                        <IonSegment scrollable value={modalSegmentValue} onIonChange={(e) => console.log(`${e.detail.value}`)}>
                            <IonSegmentButton className="forum-segmentBtn" value="postQuestionBtn" onClick={() => [setShowPostModal(true), setModalSegmentValue('postQuestionBtn')]}><IonIcon icon={addCircleSharp} /></IonSegmentButton>
                            <IonSegmentButton className="forum-segmentBtn" value="forumUserBtn" onClick={(e) => {e.preventDefault(); history.push('/u/forumUser');}}><IonIcon icon={personSharp} /></IonSegmentButton>
                        </IonSegment>
                    </IonToolbar>
                </IonFooter>
                </> : ''
            }
        </IonPage>
    );
};

export default Forum;
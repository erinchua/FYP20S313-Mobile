import { IonAlert, IonButton, IonCheckbox, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonLabel, IonList, IonLoading, IonModal, IonPage, IonRouterLink, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonText, IonTextarea, IonTitle, IonToolbar } from "@ionic/react";
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
import { forumPostsDesc } from "../../modules/compare";

const Forum: React.FC = () => {
    const { userID } = useAuth();
    const { register, errors, handleSubmit } = useForm();

    let history = useHistory();

    const [loading, setLoading] = useState(true);
    const [forumDisabled, setForumDisabled] = useState(false);
    const [checked, setChecked] = useState(false);
    const [agreedTOC, setAgreedTOC] = useState(true);
    const [showPostModal, setShowPostModal] = useState(false);
    const [modalSegmentValue, setModalSegmentValue] = useState('');
    const [entry, setEntry] = useState("");
    const [questions, setQuestions] = useState([]);
    const [keyword, setKeyword] = useState("");

    const onSubmit = async () => {
        setLoading(true);
        if (checked)
            await db.collection('Forum').doc(userID).update({ readRules: true });
        setLoading(false);
    };

    const handleQuestion = async () => {
        try {
            setLoading(true);
            const time = new Date();
            let name: string;

            await db.collection('Students').doc(userID).get().then((doc: any) => {
                name = doc.data().firstName + " " + doc.data().lastName;
            });

            const docRef = db.collection('Forum').doc(userID).collection('Questions').doc((time.getTime()).toString());
            await docRef.set({
                id: +docRef.id,
                entry: entry,
                posterName: name!,
                posterId: userID,
                dateTime: time.toLocaleString().replace(/\//g, "-"),
                noOfComments: 0,
                deleted: false,
                reported: false
            });
        } catch (e) {
            return console.log(e);
        } finally {
            setLoading(false);
            setShowPostModal(false);
            setEntry("");
        }
    }

    useEffect(() => {
        setQuestions([]);

        db.collection('Openhouse').get().then(snapshot => {
            let disabled = false;
            snapshot.forEach(doc => {
                if (doc.data().disableForum) {
                    disabled = true;
                    setLoading(false);
                }
            });
            setForumDisabled(disabled);

            if (!disabled) {
                db.collection('Forum').get().then(uRef => {
                    const questions: any = [];
    
                    uRef.forEach(user => {
                        if (user.id === userID && user.data().suspended) 
                            return history.goBack();
    
                        return db.collection('Forum').doc(user.id).collection('Questions').onSnapshot(entries => {
                            entries.docChanges().forEach(change => {
                                questions.unshift({
                                    id: +change.doc.id,
                                    entry: change.doc.data().entry,
                                    dateTime: change.doc.data().dateTime,
                                    user: change.doc.data().posterName,
                                    uid: change.doc.data().posterId,
                                    commentCount: change.doc.data().noOfComments,
                                    removed: change.doc.data().deleted
                                });
                            });
                        });
                    });
    
                    setTimeout(() => {
                        questions.sort(forumPostsDesc);
                        setQuestions(questions);
                        setLoading(false);
                    }, 500);
                });
    
                return db.collection('Forum').doc(userID).onSnapshot(snapshot => {
                    if (snapshot.exists) {
                        if (snapshot.data()?.readRules) {
                            setAgreedTOC(true);
                        } else {
                            setAgreedTOC(false);
                        }
                    }
                });
            }
        }).catch((error) => console.log(error));

        
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Forum" route="/u/home" backarrow={true} hamburger={true} />
            </IonHeader>

            <IonContent fullscreen id="forum-content">
                <IonAlert
                    isOpen={forumDisabled}
                    onDidDismiss={() => { history.goBack() }}
                    cssClass='alertBox'
                    mode='md'
                    header={'Forum Unvailable'}
                    message={'The forum is currently not available at this time. The forum will reopen again in the next Open House.'}
                    buttons={['Ok']}
                ></IonAlert>

                {agreedTOC === true ?
                    <>
                        <IonGrid id="forum-searchbar-container">
                            <IonRow>
                                <form onSubmit={e => { e.preventDefault(); history.push(`/u/forumSearch/${keyword}`); }}>
                                    <IonSearchbar value={keyword} onIonChange={e => setKeyword(e.detail.value!)} enterkeyhint="search" id="forum-searchbar" animated></IonSearchbar>
                                </form>
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
                        {questions.length > 0 ?
                            questions.map((post: any) => (
                                post.removed === false ? (
                                    <IonList className="forum-container" key={post.id}>
                                        <IonGrid>
                                            <IonRouterLink href={`/u/forumViewQuestion/${post.id}/${post.uid}`}>
                                                <IonRow>
                                                    <IonLabel>
                                                        <IonText className="forum-question">{post.entry}</IonText>
                                                    </IonLabel>
                                                </IonRow>
                                                <IonRow className="ion-justify-content-end">
                                                    <IonText className="forum-question-details" id="forum-userName">~ {post.user}</IonText>
                                                </IonRow>
                                            </IonRouterLink>
                                            <IonRow className="ion-align-items-end ion-justify-content-start" id="forum-question-detail-container">
                                                <IonCol size="1" className="forum-col ion-align-self-end">
                                                    <FontAwesomeIcon icon={faClock} size="sm" />
                                                </IonCol>
                                                <IonCol size="6" className="forum-col ion-align-self-end">
                                                    <IonText className="forum-question-details">{post.dateTime}</IonText>
                                                </IonCol>
                                                <IonCol size="1" className="forum-col ion-align-self-end">
                                                    <FontAwesomeIcon icon={faCommentAlt} size="sm" />
                                                </IonCol>
                                                <IonCol size="3" className="forum-col ion-align-self-end">
                                                    <IonText className="forum-question-details">{post.commentCount}</IonText>
                                                </IonCol>
                                                <IonCol size="1" className="ion-align-self-end forum-col">
                                                    <Forum_FlagModal disabled={false} postId={post.id} postType={"Question"} postContent={post.entry} offender={post.user} offenderId={post.uid} />
                                                </IonCol>
                                            </IonRow>
                                        </IonGrid>
                                    </IonList>
                                ) : null
                            )) : (
                                <IonGrid>
                                    <IonRow className="ion-justify-content-center">
                                        <IonText color="medium">Looks like there are no discussion going on right now. Why not start one?</IonText>
                                    </IonRow>
                                </IonGrid>
                            )
                        }
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
                            <IonRow style={{ paddingTop: '1%' }}>
                                <IonLabel id="postQns-title">Post Question</IonLabel>
                            </IonRow>
                            <IonItemDivider />
                            <IonRow id="postQns-modal-inputArea">
                                <IonTextarea value={entry} onIonChange={e => setEntry(e.detail.value!)} rows={11} placeholder="Type your question here..." required></IonTextarea>
                            </IonRow>
                            <IonRow className="ion-justify-content-around">
                                <IonButton id="postQns-close-button" fill="outline" onClick={() => [setShowPostModal(false), setModalSegmentValue('')]}>CLOSE</IonButton>
                                <IonButton id="postQns-post-button" onClick={handleQuestion}>POST</IonButton>
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
                                <IonSegmentButton className="forum-segmentBtn" value="forumUserBtn" onClick={(e) => { e.preventDefault(); history.push('/u/forumUser'); }}><IonIcon icon={personSharp} /></IonSegmentButton>
                            </IonSegment>
                        </IonToolbar>
                    </IonFooter>
                </> : ''
            }
        </IonPage>
    );
};

export default Forum;
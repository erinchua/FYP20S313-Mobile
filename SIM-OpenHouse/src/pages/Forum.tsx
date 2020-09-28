import { IonButton, IonCheckbox, IonCol, IonContent, IonGrid, IonItem, IonLabel, IonList, IonPage, IonRow, IonSearchbar, IonText, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from 'react';

import "../css/Global.css";
import "../css/Forum.css";
import TopNav from '../components/TopNav';
import { useForm } from "react-hook-form";

const Forum: React.FC = () => {

    const { register, errors, handleSubmit } = useForm();

    const [checked, setChecked] = useState(false);
    
    const [count, setCount] = useState(0);

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
                    <IonTitle id="forum-heading">All Discussions</IonTitle>
                </IonToolbar>
                <IonList className="forum-question-container">
                    <IonLabel>
                        <IonText className="forum-question">Anyone going to enrol for the Cyber Security (University of Wollongong) course?</IonText>
                    </IonLabel>
                </IonList>
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
            </IonContent>
        </IonPage>
    );
};

export default Forum;
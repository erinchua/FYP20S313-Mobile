import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonHeader, IonTitle, IonLoading, IonList, IonLabel, IonRouterLink, IonText } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import '../../css/Global.css';
import '../../css/Forum.css';
import TopNav from '../../components/TopNav';
import ForumRules from '../../components/Forum/ForumRules';
import Forum_FlagModal from '../../components/Forum/Forum_FlagModal';
import { db } from '../../firebase';
import { faClock, faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from '../../modules/auth';

interface RouteParams {
    keyword: string;
}

const ForumSearch: React.FC = () => {
    const { keyword } = useParams<RouteParams>();
    const { userID } = useAuth();

    const [loading, setLoading] = useState(true);
    const [searchResults, setSearchResults] = useState([]);

    const getSearchResults = (allPosts: any) => {
        const matchedPosts: any = [];

        allPosts.forEach((post: any) => {
            if (post.entry.toLowerCase().indexOf(keyword) != -1) {
                if (post.hasOwnProperty('questionId')) {
                    allPosts.forEach((ele: any) => {
                        if (ele.id === post.questionId) {
                            post = ele;
                        }
                    });
                }
                if (!(matchedPosts.filter((result: any) => { return post.id === result.id }).length > 0))
                    matchedPosts.push(post);
            }
        });

        return setSearchResults(matchedPosts);
    }

    useEffect(() => {
        db.collection('Forum').get().then(users => {
            const all: any = [];

            users.forEach(async user => {
                await db.collection('Forum').doc(user.id).collection('Questions').get().then(docs => {
                    docs.forEach(doc => {
                        all.push({
                            id: +doc.id,
                            entry: doc.data().entry,
                            dateTime: doc.data().dateTime,
                            user: doc.data().posterName,
                            uid: doc.data().posterId,
                            commentCount: doc.data().noOfComments,
                            removed: doc.data().deleted
                        });
                    });
                });
                
                await db.collection('Forum').doc(user.id).collection('Comments').get().then(docs => {
                    docs.forEach(doc => {
                        all.push({
                            id: +doc.id,
                            entry: doc.data().entry,
                            questionId: +doc.data().questionId
                        });
                    });
                });
            });

            setTimeout(() => {
                getSearchResults(all);
                setLoading(false);
            }, 500);
        });
    }, []);

    //console.log(searchResults)
    
    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Forum" route="/u/forum" backarrow={ true } hamburger={ true }/>
            </IonHeader>

            <IonContent  fullscreen id="forum-content">
                <IonGrid id="forum-heading-container">
                    <IonRow className="ion-justify-content-start">
                        <IonCol size="10" className="ion-align-self-center forum-col">
                            <IonTitle id="forum-heading">Search Results for: <span style={{color: 'black'}}>{keyword}</span></IonTitle>
                        </IonCol>                            
                        <IonCol size="2" className="forum-col">
                            <ForumRules />
                        </IonCol>
                    </IonRow>
                </IonGrid>

                {searchResults.length > 0 ?
                    searchResults.map((result: any) => (
                        result.removed === false ? (
                            <IonList className="forum-container" key={result.id}>
                                <IonGrid>
                                    <IonRouterLink href={`/u/forumViewQuestion/${result.id}/${result.uid}`}>
                                        <IonRow>
                                            <IonLabel>
                                                <IonText className="forum-question">{result.entry}</IonText>
                                            </IonLabel>
                                        </IonRow>
                                        <IonRow className="ion-justify-content-end">
                                            <IonText className="forum-question-details" id="forum-userName">~ {result.user}</IonText>
                                        </IonRow>
                                    </IonRouterLink>
                                    <IonRow className="ion-align-items-end ion-justify-content-start" id="forum-question-detail-container">
                                        <IonCol size="1" className="forum-col ion-align-self-end">
                                            <FontAwesomeIcon icon={faClock} size="sm" />
                                        </IonCol>
                                        <IonCol size="6" className="forum-col ion-align-self-end">
                                            <IonText className="forum-question-details">{result.dateTime}</IonText>
                                        </IonCol>
                                        <IonCol size="1" className="forum-col ion-align-self-end">
                                            <FontAwesomeIcon icon={faCommentAlt} size="sm" />
                                        </IonCol>
                                        <IonCol size="3" className="forum-col ion-align-self-end">
                                            <IonText className="forum-question-details">{result.commentCount}</IonText>
                                        </IonCol>
                                        <IonCol size="1" className="ion-align-self-end forum-col">
                                            <Forum_FlagModal disabled={false} postId={result.id} postType={"Question"} postContent={result.entry} offender={result.user} offenderId={result.uid} />
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonList>
                        ) : null
                    )) : (
                        <IonGrid>
                            <IonRow className="ion-justify-content-center">
                                <IonText color="medium">No match was found</IonText>
                            </IonRow>
                        </IonGrid>
                    )
                }
                <IonLoading isOpen={loading} />
            </IonContent>
        </IonPage>
    );
};

export default ForumSearch;
import { IonGrid, IonRow, IonCol, IonPage, IonHeader, IonContent } from '@ionic/react';
import React from 'react';

import '../../css/Global.css';
import '../../css/ProgrammeTalks.css'

import { useParams } from 'react-router';
import TopNav from '../TopNav';

interface RouteParams {
    fbid: string;
    id: string;
}

const ProgTalkLive: React.FC = () => {
    const { fbid, id } = useParams<RouteParams>();

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Live Talk" route="/u/openHouseMain/programmeTalks" backarrow={true} hamburger={true} />
            </IonHeader>

            <IonContent fullscreen className="progTalkIonContent">            
                <IonGrid className="progTalkIframeGrid">
                    <IonRow className="ion-justify-content-center">
                        <IonCol size="12" sizeSm="12" className="ion-text-center">
                            <div style={{height: "50%"}}>
                                <iframe src={`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F${fbid}%2Fvideos%2F${id}%2F&width=360`} className="iframeVideo" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </IonContent>
        </IonPage>
    );
};

export default ProgTalkLive;
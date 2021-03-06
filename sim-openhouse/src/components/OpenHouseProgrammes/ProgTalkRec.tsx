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

const ProgTalkRec: React.FC = () => {
    const { fbid, id } = useParams<RouteParams>();

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Recording" route="/u/openHouseMain/programmeTalks" backarrow={true} hamburger={true} />
            </IonHeader>

            <IonContent fullscreen className="progTalkIonContent">
                <IonGrid className="progTalk-TableGrid">
                    <IonRow className="ion-justify-content-center">
                        <IonCol size="12" sizeSm="12">
                            <div style={{height: "50%"}}>
                                <iframe src={`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F${fbid}%2Fvideos%2F${id}%2F&show_text=0&width=360`} className="iframeVideo" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </IonContent>
        </IonPage>
    );
};

export default ProgTalkRec;
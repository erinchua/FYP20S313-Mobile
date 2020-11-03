import { IonGrid, IonRow, IonCol, IonPage, IonHeader, IonContent } from '@ionic/react';
import React from 'react';

import '../../css/Global.css';
import '../../css/ProgrammeTalks.css'

import { useParams } from 'react-router';
import TopNav from '../TopNav';

interface RouteParams {
    fileName: string;
    token: string;
}

const ProgTalkRec: React.FC = () => {
    const { fileName, token } = useParams<RouteParams>();

    //https://firebasestorage.googleapis.com/v0/b/sandbox-4c75c.appspot.com/o/Recordings%2FsampleVideo.mp4?alt=media&token=b9021fe5-f104-4071-8153-a74b9b33f053

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Recording" route="/u/openHouseMain/programmeTalks" backarrow={true} hamburger={true} />
            </IonHeader>

            <IonContent fullscreen className="progTalkIonContent">
                <IonGrid className="progTalk-TableGrid">
                    <IonRow className="ion-justify-content-center progTalk-TableHeader">
                        <IonCol size="12" sizeSm="12" className="progTalk-DataHeader ion-text-wrap">
                            <iframe src={`https://firebasestorage.googleapis.com/v0/b/sandbox-4c75c.appspot.com/o/Recordings%2F${fileName}.mp4?alt=media&token=${token}`} width="100%" height="720" style={{border:"none", overflow:"hidden"}} scrolling="no" frameBorder="0" allowFullScreen></iframe>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default ProgTalkRec;
import { IonGrid, IonRow, IonText } from '@ionic/react';
import React from 'react';

import '../../css/Global.css';
import '../../css/Forum.css';

const Forum_NoComment: React.FC = () => {

    return (
        <>
        <IonGrid>
            <IonRow className="ion-justify-content-center">
                <IonText color="medium" id="no-comment-text">There are currently no comments for this part.</IonText>
            </IonRow>
        </IonGrid>
        </>
    );
};

export default Forum_NoComment;
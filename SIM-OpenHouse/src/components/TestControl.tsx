import React from 'react';
import {IonRow, IonButton} from '@ionic/react';

const TestController: React.FC<{
    onVerify: () => void;
    }> = props => {
        
    return (
        <IonRow class="ion-justify-content-center" style={{marginTop:"10%"}}>         
            <IonButton size="large" id="doneBtn" type="submit" onClick={props.onVerify} style={{marginTop:"5%"}}>DONE</IonButton>
        </IonRow>
    );
}

export default TestController;
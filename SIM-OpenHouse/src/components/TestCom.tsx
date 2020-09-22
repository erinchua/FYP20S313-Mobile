import React from 'react';
import {IonRow} from '@ionic/react';
import ReactCodeInput from 'react-verification-code-input';
import { useForm, Controller } from "react-hook-form";

const TestCom: React.FC<{onType: () => void; result: string;}> = props => {

    const { register, handleSubmit, errors } = useForm();
        
    return (
        <IonRow class="ion-justify-content-center">         
            <ReactCodeInput onComplete={props.onType}></ReactCodeInput>
            <h2>{props.result}</h2>
            <p id="errorMsg">
                <span>
                    {errors.codeID && errors.codeID.message}
                </span>
            </p>
        </IonRow>
    );
}

export default TestCom;
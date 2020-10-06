import { IonAlert, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonModal, IonPage, IonRouterLink, IonRow, IonSelect, IonSelectOption, IonTitle } from '@ionic/react';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import '../css/Global.css';
import '../css/MyProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faEnvelope, faMobileAlt, faBirthdayCake, faUserGraduate, faGlobe, faLock } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';


const ChangePasswordModal: React.FC<{
    isOpen: any; 
    handleSubmit: any;
    onClickCancel: any;
    onClickSubmit: any;
    onDidDismiss: any;
    currentPasswordName: any;
    newPasswordName: any;
    confirmNewPasswordName: any;
}> = props => {

    const { register, handleSubmit, errors, getValues, reset, watch } = useForm();

    const currentPasswordRef = useRef({});
    const newPasswordRef = useRef({});
    currentPasswordRef.current = watch("currentPassword", "");
    newPasswordRef.current = watch("newPassword", "");

    return (
        <>
            <IonModal isOpen={props.isOpen} cssClass='editPasswordModal' onDidDismiss={props.onDidDismiss}>
                <IonContent fullscreen className="editPasswordModalContent">
                    <IonGrid id="editPasswordModalGrid">
                        <form key={1} onSubmit={props.handleSubmit}>
                            {/* Current Password */}
                            <IonRow className="editPasswordModalRow" class="ion-align-items-center">
                                <IonCol size="12" sizeSm="12" className="editPasswordModalCol" class="ion-text-left">
                                    <IonItem className="editPasswordModalItem">
                                        <IonInput type="password" className="passwordInput" name={props.currentPasswordName} placeholder="Current Password" ref={register({ required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.,/<>#^~`@$!%*?&])[A-Za-z\d.,/<>#~`^@$!%*?&]{8,}$/ })} />
                                    </IonItem>
                                    {errors.currentPassword && errors.currentPassword.type === "required" && <p className="errorMsg">Current Password is required!</p>}
                                    {errors.currentPassword && errors.currentPassword.type === "minLength" && <p className="errorMsg">Password has to be at least 8 characters and must contain 1 uppercase, 1 lowercase, 1 number and 1 special character</p>}
                                    {errors.currentPassword && errors.currentPassword.type === "pattern" && <p className="errorMsg">Password has to be at least 8 characters and must contain 1 uppercase, 1 lowercase, 1 number and 1 special character</p>}
                                </IonCol>
                            </IonRow>

                            {/* New Password */}
                            <IonRow className="editPasswordModalRow" class="ion-align-items-center">
                                <IonCol size="12" sizeSm="12" className="editPasswordModalCol" class="ion-text-left">
                                    <IonItem className="editPasswordModalItem">
                                        <IonInput type="password" className="passwordInput" name={props.newPasswordName} placeholder="New Password" ref={register({ required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.,/<>#^~`@$!%*?&])[A-Za-z\d.,/<>#~`^@$!%*?&]{8,}$/, validate: (newPassword) => newPassword !== currentPasswordRef.current })} />
                                    </IonItem>
                                    {errors.newPassword && errors.newPassword.type === "required" && <p className="errorMsg">New Password is required!</p>}
                                    {errors.newPassword && errors.newPassword.type === "minLength" && <p className="errorMsg">New Password has to be at least 8 characters and must contain 1 uppercase, 1 lowercase, 1 number and 1 special character</p>}
                                    {errors.newPassword && errors.newPassword.type === "pattern" && <p className="errorMsg">New Password has to be at least 8 characters and must contain 1 uppercase, 1 lowercase, 1 number and 1 special character</p>}
                                    {errors.newPassword && errors.newPassword.type === "validate" && <p className="errorMsg">New Password cannot be the same as Current Password!</p>}
                                </IonCol>
                            </IonRow>

                            {/* Confirm New Password */}
                            <IonRow className="editPasswordModalRow" class="ion-align-items-center">
                                <IonCol size="12" sizeSm="12" className="editPasswordModalCol" class="ion-text-left">
                                    <IonItem className="editPasswordModalItem">
                                        <IonInput type="password" className="passwordInput" name={props.confirmNewPasswordName} placeholder="Confirm New Password" ref={register({ required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.,/<>#^~`@$!%*?&])[A-Za-z\d.,/<>#~`^@$!%*?&]{8,}$/, validate: (confirmNewPassword) => confirmNewPassword === newPasswordRef.current })} />
                                    </IonItem>
                                    {errors.confirmNewPassword && errors.confirmNewPassword.type === "required" && <p className="errorMsg">Confirm New Password is required!</p>}
                                    {errors.confirmNewPassword && errors.confirmNewPassword.type === "minLength" && <p className="errorMsg">Passwords do not match!</p>}
                                    {errors.confirmNewPassword && errors.confirmNewPassword.type === "pattern" && <p className="errorMsg">Passwords do not match!</p>}
                                    {errors.confirmNewPassword && errors.confirmNewPassword.type === "validate" && <p className="errorMsg">Passwords do not match!</p>}
                                </IonCol>
                            </IonRow>

                            <IonRow class="ion-align-items-center" style={{marginTop:"5%"}}>
                                <IonCol size="4" sizeSm="4" class="ion-text-right">
                                    <IonButton className="editPasswordBtn" onClick={props.onClickCancel}>CANCEL</IonButton>
                                </IonCol>

                                <IonCol size="8" sizeSm="8" class="ion-text-center">
                                    <IonButton className="editPasswordBtn" type="submit" onClick={props.onClickSubmit}>CHANGE PASSWORD</IonButton>
                                </IonCol>
                            </IonRow>

                        </form>
                    </IonGrid>

                </IonContent>
            </IonModal>
        </>
    );
};

export default ChangePasswordModal;
import { IonAlert, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonModal, IonPage, IonRow, IonSelect, IonSelectOption } from '@ionic/react';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faEnvelope, faMobileAlt, faBirthdayCake, faUserGraduate, faGlobe, faLock } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

import '../css/Global.css';
import '../css/MyProfile.css';
import TopNav from '../components/TopNav';


const MyProfile: React.FC = () => {

    const { register, handleSubmit, errors, getValues, reset, watch } = useForm();

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [contactNo, setContactNo] = useState<string>(''); 
    const [dob, setDob] = useState();
    const [highestQualification, setHighestQualification] = useState('');
    const [nationality, setNationality] = useState();
    const [password, setPassword] = useState();
    const [readOnly, setReadOnly] = useState(true);
    const [contactNoDisabled, setContactNoDisabled] = useState(true);
    const [highestQualDisabled, setHighestQualDisabled] = useState(true);
    const [contactNoReadOnly, setContactNoReadOnly] = useState(true);

    const [profileNav, setProfileNav] = useState(true);
    const [showEditProfileBtn, setShowEditProfileBtn] = useState(true);
    const [showChangePassword, setShowChangePassword] = useState(true);

    {/* Alert for successful and failure of updating profile */}
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    {/* Edit Profile */}
    const editProfile = () => {
        setContactNoDisabled(false);
        setHighestQualDisabled(false);
        setContactNoReadOnly(false);
        
        setProfileNav(false);
        setShowEditProfileBtn(false);
        setShowChangePassword(false);
    };

    const onSubmitEditProfile = () => {
        console.log('Edited');
        {/* // //Here need to setShowSuccessAlert to true if the contactNo and highestQualifcation is correctly filled up.
        if (contactNo !== "" && highestQualification !== ""){
            setShowSuccessAlert(true);
        } */}
    };

    {/* Change Password Modal & Alert */}
    const [changePasswordModal, setChangePasswordModal] = useState(false);
    const [changePasswordSuccess, setChangePasswordSuccess] = useState(false);

    const currentPasswordRef = useRef({});
    const newPasswordRef = useRef({});
    currentPasswordRef.current = watch("currentPassword", "");
    newPasswordRef.current = watch("newPassword", "");

    const displayChangePassword = () => {
        setChangePasswordModal(true);
    };

    const onSubmitChangePassword = (data: any) => {
        const currentPassword = getValues("currentPassword");
        const newPassword = getValues("newPassword");
        const confirmNewPassword = getValues("confirmNewPassword");

        if ((currentPassword !== "" && newPassword !== "" && confirmNewPassword !== "") && 
        (newPassword !== currentPassword && confirmNewPassword === newPassword)) {            
            console.log("Submitted");
            setChangePasswordModal(false)
            reset({
                currentPassword: "",
                newPassword: "",
                confirmNewPassword: ""
            });
            setChangePasswordSuccess(true);        
        }
    };

    const cancelEditPassword = () => {
        console.log("Cancel");
        setChangePasswordModal(false)
        reset({
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: ""
        });
    }
    
    return(
        <React.Fragment>
            <IonModal isOpen={changePasswordModal} cssClass='editPasswordModal' onDidDismiss={() => setChangePasswordModal(false)}>
                <IonContent fullscreen className="editPasswordModalContent">
                    <IonGrid id="editPasswordModalGrid">
                        <form onSubmit={handleSubmit(onSubmitChangePassword)}>
                            {/* Current Password */}
                            <IonRow className="editPasswordModalRow" class="ion-align-items-center">
                                <IonCol size="12" sizeSm="12" className="editPasswordModalCol" class="ion-text-left">
                                    <IonItem className="editPasswordModalItem">
                                        <IonInput type="password" className="passwordInput" name="currentPassword" placeholder="Current Password" ref={register({ required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.,/<>#^~`@$!%*?&])[A-Za-z\d.,/<>#~`^@$!%*?&]{8,}$/ })} />
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
                                        <IonInput type="password" className="passwordInput" name="newPassword" placeholder="New Password" ref={register({ required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.,/<>#^~`@$!%*?&])[A-Za-z\d.,/<>#~`^@$!%*?&]{8,}$/, validate: (newPassword) => newPassword !== currentPasswordRef.current })} />
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
                                        <IonInput type="password" className="passwordInput" name="confirmNewPassword" placeholder="Confirm New Password" ref={register({ required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.,/<>#^~`@$!%*?&])[A-Za-z\d.,/<>#~`^@$!%*?&]{8,}$/, validate: (confirmNewPassword) => confirmNewPassword === newPasswordRef.current })} />
                                    </IonItem>
                                    {errors.confirmNewPassword && errors.confirmNewPassword.type === "required" && <p className="errorMsg">Confirm New Password is required!</p>}
                                    {errors.confirmNewPassword && errors.confirmNewPassword.type === "minLength" && <p className="errorMsg">Passwords do not match!</p>}
                                    {errors.confirmNewPassword && errors.confirmNewPassword.type === "pattern" && <p className="errorMsg">Passwords do not match!</p>}
                                    {errors.confirmNewPassword && errors.confirmNewPassword.type === "validate" && <p className="errorMsg">Passwords do not match!</p>}
                                </IonCol>
                            </IonRow>

                            <IonRow class="ion-align-items-center" style={{marginTop:"5%"}}>
                                <IonCol size="4" sizeSm="4" class="ion-text-right">
                                    <IonButton className="editPasswordBtn" onClick={cancelEditPassword}>CANCEL</IonButton>
                                </IonCol>

                                <IonCol size="8" sizeSm="8" class="ion-text-center">
                                    <IonButton className="editPasswordBtn" type="submit" onClick={onSubmitChangePassword}>CHANGE PASSWORD</IonButton>
                                </IonCol>
                            </IonRow>

                        </form>
                    </IonGrid>

                </IonContent>
            </IonModal>

            <IonAlert
                isOpen={changePasswordSuccess}
                onDidDismiss={() => setChangePasswordSuccess(false)}
                cssClass='alertBox'
                mode='md'
                header={'Successfully Changed Password'}
                message={'Password has been successfully changed!'}
                buttons={[
                    {
                        text: 'Close',
                        handler: () => {
                            reset({
                                currentPassword: "",
                                newPassword: "",
                                confirmNewPassword: ""
                            });
                            setChangePasswordSuccess(false);
                        }
                    }
                ]}
            ></IonAlert>

            <IonPage>
                <IonHeader>
                    {profileNav ?
                        <TopNav title="My Profile" route='/u/home' backarrow={ true } hamburger = { true }/>
                        : 
                            <TopNav title="Edit My Profile" route='/u/home' backarrow={ false } hamburger = { true }/>
                    }
                </IonHeader>

                <IonContent fullscreen={true}>
                    <IonGrid id="profileGrid">
                        <form onSubmit={handleSubmit(onSubmitEditProfile)}>
                            {/* Edit Profile Button */}
                            {showEditProfileBtn ?
                                <IonRow id="editProfileBtnRow" class="ion-align-items-right">
                                    <IonCol size="12" sizeSm="12" class="ion-text-right" id="editProfileBtnCol">
                                        <IonButton id="editProfileBtn" onClick={editProfile}>EDIT PROFILE</IonButton>
                                    </IonCol>
                                </IonRow>
                                : null
                            }

                            {/* Generated QR Code */}
                            <IonRow id="qrCodeRow" class="ion-align-items-center">
                                <IonCol size="12" sizeSm="12" class="ion-text-center" id="qrCodeCol">
                                    <span id="qrCode">QR Code here</span>
                                </IonCol>
                            </IonRow>

                            {/* Name */}
                            <IonRow className="profileRow" class="ion-align-items-center">
                                <IonCol size="2" sizeSm="2" class="ion-text-center" className="profileIconCol">
                                    <FontAwesomeIcon icon={faAddressCard} size="lg" />
                                </IonCol>

                                <IonCol size="5" sizeSm="5" class="ion-text-left">
                                    <IonInput value={firstName} name="firstName" readonly={readOnly} className="readOnlyIonInput">First Name</IonInput>
                                </IonCol>

                                <IonCol size="5" sizeSm="5" class="ion-text-left">
                                    <IonInput value={lastName} name="lastName" readonly={readOnly} className="readOnlyIonInput">Last Name</IonInput>
                                </IonCol>
                            </IonRow>

                            {/* Email */}
                            <IonRow className="profileRow" class="ion-align-items-center">
                                <IonCol size="2" sizeSm="2" class="ion-text-center" className="profileIconCol">
                                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                                </IonCol>

                                <IonCol size="10" sizeSm="10" class="ion-text-left">
                                    <IonInput value={email} name="email" readonly={readOnly} className="readOnlyIonInput">Email</IonInput>
                                </IonCol>
                            </IonRow>

                            {/* Contact No. */}
                            <IonRow className="profileRow" class="ion-align-items-center">
                                <IonCol size="2" sizeSm="2" class="ion-text-center" className="profileIconCol">
                                    <FontAwesomeIcon icon={faMobileAlt} size="lg" />
                                </IonCol>

                                <IonCol size="10" sizeSm="10" class="ion-text-left">
                                    <IonInput type="tel" name="contactNo" readonly={contactNoReadOnly} disabled={contactNoDisabled} className="readOnlyIonInput" id="contactNoField" minlength={8} maxlength={8} ref={register({ required: true, minLength: 8, maxLength: 8, pattern: /(6|8|9)\d{7}/ })}>{contactNo}</IonInput>
                                    {errors.contactNo && errors.contactNo.type === "required" && <p className="errorMsg">Contact number is required!</p>}
                                    {errors.contactNo && errors.contactNo.type === "minLength" && <p className="errorMsg">Contact number consist of only 8 digits</p>}
                                    {errors.contactNo && errors.contactNo.type === "maxLength" && <p className="errorMsg">Contact number consist of only 8 digits</p>}
                                    {errors.contactNo && errors.contactNo.type === "pattern" && <p className="errorMsg">Please enter a valid Contact No.</p>}
                                </IonCol>
                            </IonRow>

                            {/* DOB */}
                            <IonRow className="profileRow" class="ion-align-items-center">
                                <IonCol size="2" sizeSm="2" class="ion-text-center" className="profileIconCol">
                                    <FontAwesomeIcon icon={faBirthdayCake} size="lg" />
                                </IonCol>

                                <IonCol size="10" sizeSm="10" class="ion-text-left">
                                    <IonInput value={dob} name="dob" readonly={readOnly} className="readOnlyIonInput">DOB</IonInput>
                                </IonCol>
                            </IonRow>

                            {/* Highest Qualification */}
                            <IonRow className="profileRow" class="ion-align-items-center">
                                <IonCol size="2" sizeSm="2" class="ion-text-center" className="profileIconCol">
                                    <FontAwesomeIcon icon={faUserGraduate} size="lg" />
                                </IonCol>

                                <IonCol size="10" sizeSm="10" class="ion-text-left">
                                    <IonSelect id="highestQualSelect" className="readOnlyIonInput" name="highestQualification" disabled={highestQualDisabled} ref={register({ required: true })}>
                                        <IonSelectOption value="aLevel" className="highestQualSelectOption">'A' Level</IonSelectOption>
                                        <IonSelectOption value="oLevel" className="highestQualSelectOption">'O' Level</IonSelectOption>
                                        <IonSelectOption value="degree" className="highestQualSelectOption">Degree</IonSelectOption>
                                        <IonSelectOption value="diploma" className="highestQualSelectOption">Diploma</IonSelectOption>
                                    </IonSelect>
                                </IonCol>
                            </IonRow>

                            {/* Nationality */}
                            <IonRow className="profileRow" class="ion-align-items-center">
                                <IonCol size="2" sizeSm="2" class="ion-text-center" className="profileIconCol">
                                    <FontAwesomeIcon icon={faGlobe} size="lg" />
                                </IonCol>

                                <IonCol size="10" sizeSm="10" class="ion-text-left">
                                    <IonInput value={nationality} name="nationality" readonly={readOnly} className="readOnlyIonInput">Nationality</IonInput>
                                </IonCol>
                            </IonRow>

                            {/* Password */}
                            {showChangePassword ?
                                <IonRow className="profileRow" class="ion-align-items-center">
                                    <IonCol size="2" sizeSm="2" class="ion-text-center" className="profileIconCol">
                                        <FontAwesomeIcon icon={faLock} size="lg" />
                                    </IonCol>

                                    <IonCol size="8" sizeSm="8" class="ion-text-left">
                                        <IonInput type="password" value={password} name="password" readonly={readOnly} className="readOnlyIonInput">Password</IonInput>
                                    </IonCol>

                                    <IonCol size="2" sizeSm="2" class="ion-text-center">
                                        <IonButton id="editPasswordBtn" fill="clear" size="default" onClick={displayChangePassword}>
                                            <FontAwesomeIcon icon={faEdit} size="lg" />
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                                : (
                                    <IonRow id="editProfileBtnRow" class="ion-align-items-center">
                                        <IonCol size="12" sizeSm="12" class="ion-text-center" id="saveEditProfileBtnCol">
                                            <IonAlert isOpen={showSuccessAlert} onDidDismiss={() => setShowSuccessAlert(false)} cssClass='alertBox' header={'Profile Updated'} message={'Your profile has been successfully updated!'} buttons={['CLOSE']}></IonAlert>
                                            <IonAlert isOpen={showErrorAlert} onDidDismiss={() => setShowErrorAlert(false)} cssClass='alertBox' header={'Error Occurred!'} message={'Please enter the correct information for the fields.'} buttons={['OK']}></IonAlert>
                                            <IonButton id="saveEditProfileBtn" type="submit" onClick={() => [setShowErrorAlert(true), setShowSuccessAlert(false)]}>SAVE</IonButton>
                                        </IonCol>
                                    </IonRow>
                                )
                            }
                        
                        </form>
                    </IonGrid>
                </IonContent>
            </IonPage>
        </React.Fragment>
    );
};

export default MyProfile;
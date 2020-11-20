import { IonAlert, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLoading, IonModal, IonPage, IonRow, IonSelect, IonSelectOption } from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faEnvelope, faMobileAlt, faBirthdayCake, faUserGraduate, faGlobe, faLock, faGift } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import firebase from 'firebase';

import '../css/Global.css';
import '../css/MyProfile.css';
import TopNav from '../components/TopNav';
import { db } from '../firebase';
import { useAuth } from '../modules/auth';
import { auth } from '../firebase';


const MyProfile: React.FC = () => {
    const { userID } = useAuth();
    const { register, handleSubmit, errors, watch } = useForm();

    const [loading, setLoading] = useState(true);
    const [student, setStudent] = useState<any>({});

    const [fieldDisable, setFieldDisable] = useState(true);
    const [profileUi, setProfileUi] = useState({ profileNav: true, editProfile: true, changePassword: true });
    const [profileAlert, setProfileAlert] = useState({ success: false, error: false });
    const [passwordAlert, setPasswordAlert] = useState({ success: false, error: false });

    {/* Edit Profile */ }
    const editMode = () => {
        setFieldDisable(false);
        setProfileUi({ profileNav: false, editProfile: false, changePassword: false });
    };

    const handleEditProfile = async (data: any) => {
        try {
            setLoading(true);
            await db.collection('Students').doc(userID).update({
                contactNo: data.contactNo,
                highestQualification: data.highestQualification,
            });
            setProfileAlert({ success: true, error: false });
        } catch (e) {
            return console.log(e);
        } finally {
            setLoading(false);
        }
    };

    const [changePasswordModal, setChangePasswordModal] = useState(false);
    const [changePasswordErrorAlert, setChangePasswordErrorAlert] = useState(false);

    const currentPasswordRef = useRef({});
    const newPasswordRef = useRef({});
    currentPasswordRef.current = watch("currentPassword", "");
    newPasswordRef.current = watch("newPassword", "");

    const handleChangePassword = async (data: any) => {
        try {
            setLoading(true);
            if (data.currentPassword && data.newPassword) {
                const user = auth.currentUser;
                const cred = firebase.auth.EmailAuthProvider.credential(user?.email!, data.currentPassword);

                await user?.reauthenticateWithCredential(cred).then(async () => {
                    await user!.updatePassword(data.newPassword);
                });
                setPasswordAlert({ success: true, error: false });
            } else {
                throw data;
            }
        } catch (e) {
            setPasswordAlert({ success: false, error: true });
            setChangePasswordErrorAlert(true);
            return console.log(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        let studentInfo: any = {}

        db.collection('Games').doc(userID).get().then(ref => {
            if (ref.exists) {
                studentInfo.points = ref.data()?.points;
            }
        });

        return db.collection('Students').doc(userID).onSnapshot(student => {
            if (student.exists) {
                studentInfo.id = student.id;
                studentInfo.firstName = student.data()?.firstName;
                studentInfo.lastName = student.data()?.lastName;
                studentInfo.dob = student.data()?.dob;
                studentInfo.email = student.data()?.email;
                studentInfo.contact = student.data()?.contactNo;
                studentInfo.nationality = student.data()?.nationality;
                studentInfo.highestQual = student.data()?.highestQualification;
            }

            setTimeout(() => {
                setStudent(studentInfo);
                setLoading(false);
            }, 500);
        });
    }, []);

    const handleCancel = () => {
        setFieldDisable(true);
        setProfileUi({ profileNav: true, editProfile: true, changePassword: true });
    }

    return (
        <React.Fragment>
            {/* Change Password Modal */}
            <IonModal isOpen={changePasswordModal} cssClass='editPasswordModal'>
                <IonContent fullscreen className="editPasswordModalContent">
                    <IonGrid id="editPasswordModalGrid">
                        <form onSubmit={handleSubmit(handleChangePassword)}>

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

                            <IonRow class="ion-align-items-center" style={{ marginTop: "5%" }}>
                                <IonCol size="4" sizeSm="4" class="ion-text-right">
                                    <IonButton className="editPasswordBtn" onClick={() => setChangePasswordModal(false)}>CANCEL</IonButton>
                                </IonCol>

                                <IonCol size="8" sizeSm="8" class="ion-text-center">
                                    <IonButton className="editPasswordBtn" type="submit">CHANGE PASSWORD</IonButton>
                                </IonCol>
                            </IonRow>

                        </form>
                    </IonGrid>

                </IonContent>
            </IonModal>

            {/* Change Password Success Alert */}
            <IonAlert
                isOpen={passwordAlert.success}
                onDidDismiss={() => setPasswordAlert({ success: false, error: false })}
                cssClass='alertBox'
                mode='md'
                header={'Successfully Changed Password'}
                message={'Password has been successfully changed!'}
                buttons={[
                    {
                        text: 'Close',
                        handler: () => {
                            setChangePasswordModal(false);
                        }
                    }
                ]}
            ></IonAlert>

            {/* Change Password Fail Alert */}
            <IonAlert
                isOpen={changePasswordErrorAlert}
                onDidDismiss={() => setChangePasswordErrorAlert(false)}
                cssClass='alertBox'
                mode='md'
                header={'Failed to Change Password'}
                message={'Please check your current password!'}
                buttons={[
                    {
                        text: 'Close',
                        handler: () => {
                            setChangePasswordErrorAlert(false);
                        }
                    }
                ]}
            ></IonAlert>

            <IonPage>
                <IonHeader>
                    {profileUi.profileNav ?
                        <TopNav title="My Profile" route='/u/home' backarrow={true} hamburger={true} />
                        :
                        <TopNav title="Edit My Profile" route='/u/home' backarrow={false} hamburger={true} />
                    }
                </IonHeader>

                <IonContent fullscreen={true}>
                    <IonGrid id="profileGrid">
                        <form onSubmit={handleSubmit(handleEditProfile)}>
                            {/* Edit Profile Button */}
                            {profileUi.editProfile ? (
                                <IonRow id="editProfileBtnRow" class="ion-align-items-right">
                                    <IonCol size="12" sizeSm="12" class="ion-text-right" id="editProfileBtnCol">
                                        <IonButton id="editProfileBtn" onClick={editMode}>EDIT PROFILE</IonButton>
                                    </IonCol>
                                </IonRow>
                                ) : null
                            }

                            <IonRow className="profileMainRow" class="ion-align-items-center">
                                <IonCol>
                                    {/* Name */}
                                    <IonRow className="profileRow" class="ion-align-items-center">
                                        <IonCol size="2" sizeSm="2" class="ion-text-center" className="profileIconCol">
                                            <FontAwesomeIcon icon={faAddressCard} size="lg" />
                                        </IonCol>

                                        <IonCol size="5" sizeSm="5" class="ion-text-left">
                                            <IonInput value={student.firstName} name="firstName" readonly={true} disabled={true} className="readOnlyIonInput"></IonInput>
                                        </IonCol>

                                        <IonCol size="5" sizeSm="5" class="ion-text-left">
                                            <IonInput value={student.lastName} name="lastName" readonly={true} disabled={true} className="readOnlyIonInput"></IonInput>
                                        </IonCol>
                                    </IonRow>

                                    {/* Email */}
                                    <IonRow className="profileRow" class="ion-align-items-center">
                                        <IonCol size="2" sizeSm="2" class="ion-text-center" className="profileIconCol">
                                            <FontAwesomeIcon icon={faEnvelope} size="lg" />
                                        </IonCol>

                                        <IonCol size="10" sizeSm="10" class="ion-text-left">
                                            <IonInput value={student.email} name="email" readonly={true} disabled={true} className="readOnlyIonInput"></IonInput>
                                        </IonCol>
                                    </IonRow>

                                    {/* Contact No. */}
                                    <IonRow className="profileRow" class="ion-align-items-center">
                                        <IonCol size="2" sizeSm="2" class="ion-text-center" className="profileIconCol">
                                            <FontAwesomeIcon icon={faMobileAlt} size="lg" />
                                        </IonCol>

                                        <IonCol size="10" sizeSm="10" class="ion-text-left">
                                            <IonInput value={student.contact} type="tel" name="contactNo" readonly={fieldDisable} disabled={fieldDisable} className="readOnlyIonInput" id="contactNoField" minlength={8} maxlength={8} ref={register({ required: true, minLength: 8, maxLength: 8, pattern: /(6|8|9)\d{7}/, min: 8, max: 8 })}></IonInput>
                                            {errors.contactNo && errors.contactNo.type === "required" && <p className="errorMsg">Contact number is required!</p>}
                                            {errors.contactNo && errors.contactNo.type === "minLength" && <p className="errorMsg">Contact number consists of only 8 digits</p>}
                                            {errors.contactNo && errors.contactNo.type === "maxLength" && <p className="errorMsg">Contact number consists of only 8 digits</p>}
                                            {errors.contactNo && errors.contactNo.type === "pattern" && <p className="errorMsg">Please enter a valid Contact No.</p>}
                                        </IonCol>
                                    </IonRow>

                                    {/* DOB */}
                                    <IonRow className="profileRow" class="ion-align-items-center">
                                        <IonCol size="2" sizeSm="2" class="ion-text-center" className="profileIconCol">
                                            <FontAwesomeIcon icon={faBirthdayCake} size="lg" />
                                        </IonCol>

                                        <IonCol size="10" sizeSm="10" class="ion-text-left">
                                            <IonInput value={student.dob} name="dob" readonly={true} disabled={true} className="readOnlyIonInput"></IonInput>
                                        </IonCol>
                                    </IonRow>

                                    {/* Highest Qualification */}
                                    <IonRow className="profileRow" class="ion-align-items-center">
                                        <IonCol size="2" sizeSm="2" class="ion-text-center" className="profileIconCol">
                                            <FontAwesomeIcon icon={faUserGraduate} size="lg" />
                                        </IonCol>

                                        <IonCol size="10" sizeSm="10" class="ion-text-left">
                                            <IonSelect value={student.highestQual} id="highestQualSelect" className="readOnlyIonInput" name="highestQualification" disabled={fieldDisable} ref={register({ required: true })}>
                                                <IonSelectOption value="'A' Level" className="highestQualSelectOption">'A' Level</IonSelectOption>
                                                <IonSelectOption value="'O' Level" className="highestQualSelectOption">'O' Level</IonSelectOption>
                                                <IonSelectOption value="Degree" className="highestQualSelectOption">Degree</IonSelectOption>
                                                <IonSelectOption value="Diploma" className="highestQualSelectOption">Diploma</IonSelectOption>
                                            </IonSelect>
                                        </IonCol>
                                    </IonRow>

                                    {/* Nationality */}
                                    <IonRow className="profileRow" class="ion-align-items-center">
                                        <IonCol size="2" sizeSm="2" class="ion-text-center" className="profileIconCol">
                                            <FontAwesomeIcon icon={faGlobe} size="lg" />
                                        </IonCol>

                                        <IonCol size="10" sizeSm="10" class="ion-text-left">
                                            <IonInput value={student.nationality} name="nationality" readonly={true} disabled={true} className="readOnlyIonInput"></IonInput>
                                        </IonCol>
                                    </IonRow>

                                    {/* Total Points Earned */}
                                    {profileUi.editProfile ? (
                                        <IonRow className="profileRow" class="ion-align-items-center">
                                            <IonCol size="2" sizeSm="2" class="ion-text-center" className="profileIconCol">
                                                <FontAwesomeIcon icon={faGift} size="lg" />
                                            </IonCol>

                                            <IonCol size="10" sizeSm="10" class="ion-text-left">
                                                <IonInput value={student.points} name="pointsEarned" readonly={true} disabled={true} className="readOnlyIonInput"></IonInput>
                                            </IonCol>
                                        </IonRow>
                                    ) : null
                                    }


                                    {/* Password */}
                                    {profileUi.changePassword ? (
                                        <>
                                            <IonRow className="profileRow" class="ion-align-items-center">
                                                <IonCol size="2" sizeSm="2" class="ion-text-center" className="profileIconCol">
                                                    <FontAwesomeIcon icon={faLock} size="lg" />
                                                </IonCol>

                                                <IonCol size="8" sizeSm="8" class="ion-text-left">
                                                    <IonInput type="password" value={"password"} name="password" readonly={true} disabled={true} className="readOnlyIonInput"></IonInput>
                                                </IonCol>

                                                <IonCol size="2" sizeSm="2" class="ion-text-center">
                                                    <IonButton id="editPasswordBtn" fill="clear" size="default" onClick={() => setChangePasswordModal(true)}>
                                                        <FontAwesomeIcon icon={faEdit} size="lg" />
                                                    </IonButton>
                                                </IonCol>
                                            </IonRow>
                                        </>
                                    ) : (
                                            <IonRow id="editProfileBtnRow" class="ion-align-items-center">
                                                <IonCol size="12" sizeSm="12" class="ion-text-center" id="saveEditProfileBtnCol">
                                                    <IonRow>
                                                        <IonCol size="6" sizeSm="6" class="ion-text-center">
                                                            <IonButton id="cancelEditProfileBtn" onClick={handleCancel}>CANCEL</IonButton>
                                                        </IonCol>

                                                        <IonCol size="6" sizeSm="6" class="ion-text-center">
                                                            <IonButton id="saveEditProfileBtn" type="submit">SAVE</IonButton>
                                                        </IonCol>
                                                    </IonRow>

                                                    <IonAlert
                                                        isOpen={profileAlert.success}
                                                        onDidDismiss={() => setProfileAlert({ success: false, error: false })}
                                                        cssClass='alertBox'
                                                        header={'Profile Updated'}
                                                        message={'Your profile has been successfully updated!'}
                                                        buttons={[
                                                            {
                                                                text: 'CLOSE',
                                                                handler: () => {
                                                                    setFieldDisable(true);
                                                                    setProfileUi({ profileNav: true, editProfile: true, changePassword: true });
                                                                }
                                                            }
                                                        ]}
                                                    />

                                                    <IonAlert isOpen={profileAlert.error} onDidDismiss={() => setProfileAlert({ success: false, error: false })} cssClass='alertBox' header={'Error Occurred!'} message={'Please enter the correct information for the fields.'} buttons={['OK']}></IonAlert>
                                                    
                                                </IonCol>
                                            </IonRow>
                                        )
                                    }
                                </IonCol>

                            </IonRow>

                        </form>
                    </IonGrid>
                    <IonLoading isOpen={loading} />
                </IonContent>
            </IonPage>
        </React.Fragment>
    );
};

export default MyProfile;
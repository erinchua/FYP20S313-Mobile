import { IonAlert, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonPage, IonRouterLink, IonRow, IonSelect, IonSelectOption, IonTitle } from '@ionic/react';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import '../css/Global.css';
import '../css/MyProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faEnvelope, faMobileAlt, faBirthdayCake, faUserGraduate, faGlobe, faLock } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

import TopNav from '../components/TopNav';
import Menu from '../components/Menu';


const MyProfile: React.FC = () => {

    const { register, handleSubmit, errors, getValues } = useForm();

    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [contactNo, setContactNo] = useState<string>(); 
    const [dob, setDob] = useState();
    const [highestQualification, setHighestQualification] = useState();
    const [nationality, setNationality] = useState();
    const [password, setPassword] = useState();


    {/* Edit Password Fields Alert */}
    const [editPasswordAlert, setEditPasswordAlert] = useState(false);
    const [changePasswordSuccess, setChangePasswordSuccess] = useState(false);

    const displayEditPassword = () => {
        setEditPasswordAlert(true);
    };

    const onSubmit = () => {
        console.log("Form Submitted");
    };
    
    return(
        <React.Fragment>
             <form onSubmit={handleSubmit(onSubmit)}>
                <IonAlert
                    isOpen={editPasswordAlert}
                    onDidDismiss={() => setEditPasswordAlert(false)}
                    cssClass='alertBox changePasswordAlertBox'
                    mode='md'
                    header={'Change Password'}
                    inputs={[
                        {
                          name: 'currentPassword',
                          type: 'password',
                          placeholder: 'Current Password'
                        },
                        {
                            name: 'newPassword',
                            type: 'password',
                            placeholder: 'New Password'
                          },
                          {
                            name: 'confirmNewPassword',
                            type: 'password',
                            placeholder: 'Confirm New Password'
                          }
                    ]}
                    buttons={[
                        {
                            text: 'Cancel',
                            cssClass: 'cancelChangePasswordBtn',
                            handler: () => {
                                console.log('Cancel');
                            }
                        },
                        { 
                            text: 'Change Password',
                            cssClass: 'changePasswordBtn',
                            handler: () => {
                                setEditPasswordAlert(false);
                                setChangePasswordSuccess(true);

                                {/* Logic to update password */}
                            }
                        }
                    ]}
                ></IonAlert>

                <IonAlert
                    isOpen={changePasswordSuccess}
                    onDidDismiss={() => setChangePasswordSuccess(false)}
                    cssClass='alertBox'
                    mode='md'
                    header={'Successfully Changed Password'}
                    message={'Password has been successfully changed!'}
                    buttons={['Close']}
                ></IonAlert>

            </form>

            <IonPage>
                <IonHeader>
                    <TopNav title="My Profile" route='/u/home' backarrow={ true } hamburger = { true }/>
                </IonHeader>

                <IonContent fullscreen={true}>
                    <IonGrid id="profileGrid">
                        <IonRow id="editProfileBtnRow" class="ion-align-items-right">
                            <IonCol size="12" sizeSm="12" class="ion-text-right" id="editProfileBtnCol">
                                <IonButton id="editProfileBtn">EDIT PROFILE</IonButton>
                            </IonCol>
                        </IonRow>

                        {/* Generated QR Code */}
                        <IonRow id="qrCodeRow" class="ion-align-items-center">
                            <IonCol size="12" sizeSm="12" class="ion-text-center" id="qrCodeCol">
                                QR Code here
                            </IonCol>
                        </IonRow>

                        {/* Name */}
                        <IonRow className="profileRow" class="ion-align-items-center">
                            <IonCol size="2" sizeSm="2" class="ion-text-center" className="profileIconCol">
                                <FontAwesomeIcon icon={faAddressCard} size="lg" />
                            </IonCol>

                            <IonCol size="5" sizeSm="5" class="ion-text-left">
                                <IonInput value={firstName} readonly className="readOnlyIonInput">First Name</IonInput>
                            </IonCol>

                            <IonCol size="5" sizeSm="5" class="ion-text-left">
                                <IonInput value={lastName} readonly className="readOnlyIonInput">Last Name</IonInput>
                            </IonCol>
                        </IonRow>

                        {/* Email */}
                        <IonRow className="profileRow" class="ion-align-items-center">
                            <IonCol size="2" sizeSm="2" class="ion-text-center" className="profileIconCol">
                                <FontAwesomeIcon icon={faEnvelope} size="lg" />
                            </IonCol>

                            <IonCol size="10" sizeSm="10" class="ion-text-left">
                                <IonInput value={email} readonly className="readOnlyIonInput">Email</IonInput>
                            </IonCol>
                        </IonRow>

                        {/* Contact No. */}
                        <IonRow className="profileRow" class="ion-align-items-center">
                            <IonCol size="2" sizeSm="2" class="ion-text-center" className="profileIconCol">
                                <FontAwesomeIcon icon={faMobileAlt} size="lg" />
                            </IonCol>

                            <IonCol size="10" sizeSm="10" class="ion-text-left">
                                <IonInput value={contactNo} readonly className="readOnlyIonInput">Contact No.</IonInput>
                            </IonCol>
                        </IonRow>

                        {/* DOB */}
                        <IonRow className="profileRow" class="ion-align-items-center">
                            <IonCol size="2" sizeSm="2" class="ion-text-center" className="profileIconCol">
                                <FontAwesomeIcon icon={faBirthdayCake} size="lg" />
                            </IonCol>

                            <IonCol size="10" sizeSm="10" class="ion-text-left">
                                <IonInput value={dob} readonly className="readOnlyIonInput">DOB</IonInput>
                            </IonCol>
                        </IonRow>

                        {/* Highest Qualification */}
                        <IonRow className="profileRow" class="ion-align-items-center">
                            <IonCol size="2" sizeSm="2" class="ion-text-center" className="profileIconCol">
                                <FontAwesomeIcon icon={faUserGraduate} size="lg" />
                            </IonCol>

                            <IonCol size="10" sizeSm="10" class="ion-text-left">
                                <IonSelect id="highestQualSelect" className="readOnlyIonInput" name="highestQualification" value={highestQualification} disabled>
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
                                <IonInput value={nationality} readonly className="readOnlyIonInput">Nationality</IonInput>
                            </IonCol>
                        </IonRow>

                        {/* Password */}
                        <IonRow className="profileRow" class="ion-align-items-center">
                            <IonCol size="2" sizeSm="2" class="ion-text-center" className="profileIconCol">
                                <FontAwesomeIcon icon={faLock} size="lg" />
                            </IonCol>

                            <IonCol size="8" sizeSm="8" class="ion-text-left">
                                <IonInput type="password" value={password} readonly className="readOnlyIonInput">Password</IonInput>
                            </IonCol>

                            <IonCol size="2" sizeSm="2" class="ion-text-center">
                                <IonButton id="editPasswordBtn" fill="clear" size="default" onClick={displayEditPassword}>
                                    <FontAwesomeIcon icon={faEdit} size="lg" />
                                </IonButton>
                            </IonCol>
                        </IonRow>

                    </IonGrid>
                </IonContent>
            </IonPage>
        </React.Fragment>
    );
};

export default MyProfile;
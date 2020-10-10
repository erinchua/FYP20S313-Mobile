import { IonButton, IonCol, IonContent, IonDatetime, IonGrid, IonInput, IonLabel, IonPage, IonRow, IonSelect, IonSelectOption, IonItem, IonCheckbox, IonAlert, IonItemDivider, IonText, IonLoading, IonHeader } from "@ionic/react";
import React, { useRef, useState } from "react";
import { Redirect, useHistory } from "react-router";
import { useForm } from "react-hook-form";

import { useAuth } from "../auth";
import { auth, db } from "../firebase";
import { formatDate } from "../convert";

import "../css/Global.css";
import "../css/Registration.css";

import TopNav from "../components/TopNav";

const Registration: React.FC = () => {
  const { register, handleSubmit, errors, watch } = useForm();

  const { loggedIn } = useAuth();

  const [status, setStatus] = useState({ loading: false, error: false });
  const [checked, setChecked] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const password = useRef({});
  password.current = watch("password", "");

  const addNewStudent = async (data: any, uid: any) => {
    console.log(data);
    await db.collection("Students").doc(uid).set({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      contactNo: Number(data.contactNo),
      dob: formatDate(data.dob),
      highestQualification: data.highestQualification,
      nationality: data.nationality,
      points: 0,
      isSuspendedFromForum: false,
    })
    await db.collection("PersonalScheduler").doc(uid).set({
      isConflicted: false,
      registeredProgrammes: []
    })
  };

  const handleRegister = async (data: any) => {
    try {
      setStatus({ loading: true, error: false });
      await auth.createUserWithEmailAndPassword(data.email, data.password).then((user) => {
        addNewStudent(data, user.user?.uid);
      });
      setStatus({ loading: false, error: false });
      setShowSuccessAlert(true);
    } catch (e) {
      setStatus({ loading: false, error: true });
      console.log(e);
    }     
  };

  console.log(loggedIn);

  if (loggedIn && showSuccessAlert === false){
    return <Redirect to="/u/home" />;
  };


  return (
    <IonPage>
      <IonHeader>
        <TopNav title="Registration" route="/main" backarrow={true} hamburger={false} />
      </IonHeader>
      
      <IonContent fullscreen>
        <form onSubmit={handleSubmit(handleRegister)}>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonInput className="inputField" type="text" placeholder="First Name" name="firstName" ref={register({ required: true, minLength: 2, pattern: /^[A-Za-z]+$/i })} />
                {errors.firstName && errors.firstName.type === "required" && <div className="errorMessage">First name is required!</div>}
                {errors.firstName && errors.firstName.type === "minLength" && <div className="errorMessage">First name has to be 2 or more characters</div>}
                {errors.firstName && errors.firstName.type === "pattern" && <div className="errorMessage">Please enter a valid First Name</div>}
              </IonCol>
              <IonCol>
                <IonInput className="inputField" type="text" placeholder="Last Name" name="lastName" ref={register({ required: true, minLength: 2, pattern: /^[A-Za-z]+$/i })} />
                {errors.lastName && errors.lastName.type === "required" && <div className="errorMessage">Last name is required!</div>}
                {errors.lastName && errors.lastName.type === "minLength" && <div className="errorMessage">Last name has to be 2 or more characters</div>}
                {errors.lastName && errors.lastName.type === "pattern" && <div className="errorMessage">Please enter a valid Last Name</div>}
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput className="inputField" type="email" placeholder="Email" name="email"
                  ref={register({ required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
                {errors.email && errors.email.type === "required" && <div className="errorMessage">Email is required!</div>}
                {errors.email && errors.email.type === "pattern" && <div className="errorMessage">Please enter a valid Email</div>}
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput className="inputField" type="tel" placeholder="Contact Number" minlength={8} maxlength={8} name="contactNo" ref={register({ required: true, minLength: 8, maxLength: 8, pattern: /(6|8|9)\d{7}/ })} />
                {errors.contactNo && errors.contactNo.type === "required" && <div className="errorMessage">Contact number is required!</div>}
                {errors.contactNo && errors.contactNo.type === "minLength" && <div className="errorMessage">Contact number consist of only 8 digits</div>}
                {errors.contactNo && errors.contactNo.type === "maxLength" && <div className="errorMessage">Contact number consist of only 8 digits</div>}
                {errors.contactNo && errors.contactNo.type === "pattern" && <div className="errorMessage">Please enter a valid Contact No.</div>}
              </IonCol>
              <IonCol>
                <IonDatetime className="inputField" displayFormat="DD-MM-YYYY" placeholder="D.O.B" name="dob" ref={register({ required: true })}></IonDatetime>
                {errors.dob && errors.dob.type === "required" && <div className="errorMessage">Date of Birth is required!</div>}
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel id="highestQualificationLabel">Highest Qualification</IonLabel>
                  <IonSelect placeholder="Please select" name="highestQualification" ref={register({ required: true })}>
                    <IonSelectOption value="A-Level">'A' Level</IonSelectOption>
                    <IonSelectOption value="O-Level">'O' Level</IonSelectOption>
                    <IonSelectOption value="Degree">Degree</IonSelectOption>
                    <IonSelectOption value="Diploma">Diploma</IonSelectOption>
                  </IonSelect>
                </IonItem>
                {errors.highestQualification && errors.highestQualification.type === "required" && <div className="errorMessage">Highest Qualification is required!</div>}
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel id="nationalityLabel">Nationality</IonLabel>
                  <IonSelect placeholder="Please Select" name="nationality" ref={register({ required: true })}>
                    <IonSelectOption value="singaporean">Singaporean</IonSelectOption>
                    <IonSelectOption value="afghan">Afghan</IonSelectOption>
                    <IonSelectOption value="albanian">Albanian</IonSelectOption>
                    <IonSelectOption value="algerian">Algerian</IonSelectOption>
                    <IonSelectOption value="american">American</IonSelectOption>
                    <IonSelectOption value="andorran">Andorran</IonSelectOption>
                    <IonSelectOption value="angolan">Angolan</IonSelectOption>
                    <IonSelectOption value="antiguans">Antiguans</IonSelectOption>
                    <IonSelectOption value="argentinean">Argentinean</IonSelectOption>
                    <IonSelectOption value="armenian">Armenian</IonSelectOption>
                    <IonSelectOption value="australian">Australian</IonSelectOption>
                    <IonSelectOption value="austrian">Austrian</IonSelectOption>
                    <IonSelectOption value="azerbaijani">Azerbaijani</IonSelectOption>
                    <IonSelectOption value="bahamian">Bahamian</IonSelectOption>
                    <IonSelectOption value="bahraini">Bahraini</IonSelectOption>
                    <IonSelectOption value="bangladeshi">Bangladeshi</IonSelectOption>
                    <IonSelectOption value="barbadian">Barbadian</IonSelectOption>
                    <IonSelectOption value="barbudans">Barbudans</IonSelectOption>
                    <IonSelectOption value="batswana">Batswana</IonSelectOption>
                    <IonSelectOption value="belarusian">Belarusian</IonSelectOption>
                    <IonSelectOption value="belgian">Belgian</IonSelectOption>
                    <IonSelectOption value="belizean">Belizean</IonSelectOption>
                    <IonSelectOption value="beninese">Beninese</IonSelectOption>
                    <IonSelectOption value="bhutanese">Bhutanese</IonSelectOption>
                    <IonSelectOption value="bolivian">Bolivian</IonSelectOption>
                    <IonSelectOption value="bosnian">Bosnian</IonSelectOption>
                    <IonSelectOption value="brazilian">Brazilian</IonSelectOption>
                    <IonSelectOption value="british">British</IonSelectOption>
                    <IonSelectOption value="bruneian">Bruneian</IonSelectOption>
                    <IonSelectOption value="bulgarian">Bulgarian</IonSelectOption>
                    <IonSelectOption value="burkinabe">Burkinabe</IonSelectOption>
                    <IonSelectOption value="burmese">Burmese</IonSelectOption>
                    <IonSelectOption value="burundian">Burundian</IonSelectOption>
                    <IonSelectOption value="cambodian">Cambodian</IonSelectOption>
                    <IonSelectOption value="cameroonian">Cameroonian</IonSelectOption>
                    <IonSelectOption value="canadian">Canadian</IonSelectOption>
                    <IonSelectOption value="cape verdean">Cape Verdean</IonSelectOption>
                    <IonSelectOption value="central african">Central African</IonSelectOption>
                    <IonSelectOption value="chadian">Chadian</IonSelectOption>
                    <IonSelectOption value="chilean">Chilean</IonSelectOption>
                    <IonSelectOption value="chinese">Chinese</IonSelectOption>
                    <IonSelectOption value="colombian">Colombian</IonSelectOption>
                    <IonSelectOption value="comoran">Comoran</IonSelectOption>
                    <IonSelectOption value="congolese">Congolese</IonSelectOption>
                    <IonSelectOption value="costa rican">Costa Rican</IonSelectOption>
                    <IonSelectOption value="croatian">Croatian</IonSelectOption>
                    <IonSelectOption value="cuban">Cuban</IonSelectOption>
                    <IonSelectOption value="cypriot">Cypriot</IonSelectOption>
                    <IonSelectOption value="czech">Czech</IonSelectOption>
                    <IonSelectOption value="danish">Danish</IonSelectOption>
                    <IonSelectOption value="djibouti">Djibouti</IonSelectOption>
                    <IonSelectOption value="dominican">Dominican</IonSelectOption>
                    <IonSelectOption value="dutch">Dutch</IonSelectOption>
                    <IonSelectOption value="east timorese">East Timorese</IonSelectOption>
                    <IonSelectOption value="ecuadorean">Ecuadorean</IonSelectOption>
                    <IonSelectOption value="egyptian">Egyptian</IonSelectOption>
                    <IonSelectOption value="emirian">Emirian</IonSelectOption>
                    <IonSelectOption value="equatorial guinean">Equatorial Guinean</IonSelectOption>
                    <IonSelectOption value="eritrean">Eritrean</IonSelectOption>
                    <IonSelectOption value="estonian">Estonian</IonSelectOption>
                    <IonSelectOption value="ethiopian">Ethiopian</IonSelectOption>
                    <IonSelectOption value="fijian">Fijian</IonSelectOption>
                    <IonSelectOption value="filipino">Filipino</IonSelectOption>
                    <IonSelectOption value="finnish">Finnish</IonSelectOption>
                    <IonSelectOption value="french">French</IonSelectOption>
                    <IonSelectOption value="gabonese">Gabonese</IonSelectOption>
                    <IonSelectOption value="gambian">Gambian</IonSelectOption>
                    <IonSelectOption value="georgian">Georgian</IonSelectOption>
                    <IonSelectOption value="german">German</IonSelectOption>
                    <IonSelectOption value="ghanaian">Ghanaian</IonSelectOption>
                    <IonSelectOption value="greek">Greek</IonSelectOption>
                    <IonSelectOption value="grenadian">Grenadian</IonSelectOption>
                    <IonSelectOption value="guatemalan">Guatemalan</IonSelectOption>
                    <IonSelectOption value="guinea-bissauan">Guinea-Bissauan</IonSelectOption>
                    <IonSelectOption value="guinean">Guinean</IonSelectOption>
                    <IonSelectOption value="guyanese">Guyanese</IonSelectOption>
                    <IonSelectOption value="haitian">Haitian</IonSelectOption>
                    <IonSelectOption value="herzegovinian">Herzegovinian</IonSelectOption>
                    <IonSelectOption value="honduran">Honduran</IonSelectOption>
                    <IonSelectOption value="hungarian">Hungarian</IonSelectOption>
                    <IonSelectOption value="icelander">Icelander</IonSelectOption>
                    <IonSelectOption value="indian">Indian</IonSelectOption>
                    <IonSelectOption value="indonesian">Indonesian</IonSelectOption>
                    <IonSelectOption value="iranian">Iranian</IonSelectOption>
                    <IonSelectOption value="iraqi">Iraqi</IonSelectOption>
                    <IonSelectOption value="irish">Irish</IonSelectOption>
                    <IonSelectOption value="israeli">Israeli</IonSelectOption>
                    <IonSelectOption value="italian">Italian</IonSelectOption>
                    <IonSelectOption value="ivorian">Ivorian</IonSelectOption>
                    <IonSelectOption value="jamaican">Jamaican</IonSelectOption>
                    <IonSelectOption value="japanese">Japanese</IonSelectOption>
                    <IonSelectOption value="jordanian">Jordanian</IonSelectOption>
                    <IonSelectOption value="kazakhstani">Kazakhstani</IonSelectOption>
                    <IonSelectOption value="kenyan">Kenyan</IonSelectOption>
                    <IonSelectOption value="kittian and nevisian">Kittian and Nevisian</IonSelectOption>
                    <IonSelectOption value="kuwaiti">Kuwaiti</IonSelectOption>
                    <IonSelectOption value="kyrgyz">Kyrgyz</IonSelectOption>
                    <IonSelectOption value="laotian">Laotian</IonSelectOption>
                    <IonSelectOption value="latvian">Latvian</IonSelectOption>
                    <IonSelectOption value="lebanese">Lebanese</IonSelectOption>
                    <IonSelectOption value="liberian">Liberian</IonSelectOption>
                    <IonSelectOption value="libyan">Libyan</IonSelectOption>
                    <IonSelectOption value="liechtensteiner">Liechtensteiner</IonSelectOption>
                    <IonSelectOption value="lithuanian">Lithuanian</IonSelectOption>
                    <IonSelectOption value="luxembourger">Luxembourger</IonSelectOption>
                    <IonSelectOption value="macedonian">Macedonian</IonSelectOption>
                    <IonSelectOption value="malagasy">Malagasy</IonSelectOption>
                    <IonSelectOption value="malawian">Malawian</IonSelectOption>
                    <IonSelectOption value="malaysian">Malaysian</IonSelectOption>
                    <IonSelectOption value="maldivan">Maldivan</IonSelectOption>
                    <IonSelectOption value="malian">Malian</IonSelectOption>
                    <IonSelectOption value="maltese">Maltese</IonSelectOption>
                    <IonSelectOption value="marshallese">Marshallese</IonSelectOption>
                    <IonSelectOption value="mauritanian">Mauritanian</IonSelectOption>
                    <IonSelectOption value="mauritian">Mauritian</IonSelectOption>
                    <IonSelectOption value="mexican">Mexican</IonSelectOption>
                    <IonSelectOption value="micronesian">Micronesian</IonSelectOption>
                    <IonSelectOption value="moldovan">Moldovan</IonSelectOption>
                    <IonSelectOption value="monacan">Monacan</IonSelectOption>
                    <IonSelectOption value="mongolian">Mongolian</IonSelectOption>
                    <IonSelectOption value="moroccan">Moroccan</IonSelectOption>
                    <IonSelectOption value="mosotho">Mosotho</IonSelectOption>
                    <IonSelectOption value="motswana">Motswana</IonSelectOption>
                    <IonSelectOption value="mozambican">Mozambican</IonSelectOption>
                    <IonSelectOption value="namibian">Namibian</IonSelectOption>
                    <IonSelectOption value="nauruan">Nauruan</IonSelectOption>
                    <IonSelectOption value="nepalese">Nepalese</IonSelectOption>
                    <IonSelectOption value="new zealander">New Zealander</IonSelectOption>
                    <IonSelectOption value="ni-vanuatu">Ni-Vanuatu</IonSelectOption>
                    <IonSelectOption value="nicaraguan">Nicaraguan</IonSelectOption>
                    <IonSelectOption value="nigerien">Nigerien</IonSelectOption>
                    <IonSelectOption value="north korean">North Korean</IonSelectOption>
                    <IonSelectOption value="northern irish">Northern Irish</IonSelectOption>
                    <IonSelectOption value="norwegian">Norwegian</IonSelectOption>
                    <IonSelectOption value="omani">Omani</IonSelectOption>
                    <IonSelectOption value="pakistani">Pakistani</IonSelectOption>
                    <IonSelectOption value="palauan">Palauan</IonSelectOption>
                    <IonSelectOption value="panamanian">Panamanian</IonSelectOption>
                    <IonSelectOption value="papua new guinean">Papua New Guinean</IonSelectOption>
                    <IonSelectOption value="paraguayan">Paraguayan</IonSelectOption>
                    <IonSelectOption value="peruvian">Peruvian</IonSelectOption>
                    <IonSelectOption value="polish">Polish</IonSelectOption>
                    <IonSelectOption value="portuguese">Portuguese</IonSelectOption>
                    <IonSelectOption value="qatari">Qatari</IonSelectOption>
                    <IonSelectOption value="romanian">Romanian</IonSelectOption>
                    <IonSelectOption value="russian">Russian</IonSelectOption>
                    <IonSelectOption value="rwandan">Rwandan</IonSelectOption>
                    <IonSelectOption value="saint lucian">Saint Lucian</IonSelectOption>
                    <IonSelectOption value="salvadoran">Salvadoran</IonSelectOption>
                    <IonSelectOption value="samoan">Samoan</IonSelectOption>
                    <IonSelectOption value="san marinese">San Marinese</IonSelectOption>
                    <IonSelectOption value="sao tomean">Sao Tomean</IonSelectOption>
                    <IonSelectOption value="saudi">Saudi</IonSelectOption>
                    <IonSelectOption value="scottish">Scottish</IonSelectOption>
                    <IonSelectOption value="senegalese">Senegalese</IonSelectOption>
                    <IonSelectOption value="serbian">Serbian</IonSelectOption>
                    <IonSelectOption value="seychellois">Seychellois</IonSelectOption>
                    <IonSelectOption value="sierra leonean">Sierra Leonean</IonSelectOption>
                    <IonSelectOption value="slovakian">Slovakian</IonSelectOption>
                    <IonSelectOption value="slovenian">Slovenian</IonSelectOption>
                    <IonSelectOption value="solomon islander">Solomon Islander</IonSelectOption>
                    <IonSelectOption value="somali">Somali</IonSelectOption>
                    <IonSelectOption value="south african">South African</IonSelectOption>
                    <IonSelectOption value="south korean">South Korean</IonSelectOption>
                    <IonSelectOption value="spanish">Spanish</IonSelectOption>
                    <IonSelectOption value="sri lankan">Sri Lankan</IonSelectOption>
                    <IonSelectOption value="sudanese">Sudanese</IonSelectOption>
                    <IonSelectOption value="surinamer">Surinamer</IonSelectOption>
                    <IonSelectOption value="swazi">Swazi</IonSelectOption>
                    <IonSelectOption value="swedish">Swedish</IonSelectOption>
                    <IonSelectOption value="swiss">Swiss</IonSelectOption>
                    <IonSelectOption value="syrian">Syrian</IonSelectOption>
                    <IonSelectOption value="taiwanese">Taiwanese</IonSelectOption>
                    <IonSelectOption value="tajik">Tajik</IonSelectOption>
                    <IonSelectOption value="tanzanian">Tanzanian</IonSelectOption>
                    <IonSelectOption value="thai">Thai</IonSelectOption>
                    <IonSelectOption value="togolese">Togolese</IonSelectOption>
                    <IonSelectOption value="tongan">Tongan</IonSelectOption>
                    <IonSelectOption value="trinidadian or tobagonian">Trinidadian or Tobagonian</IonSelectOption>
                    <IonSelectOption value="tunisian">Tunisian</IonSelectOption>
                    <IonSelectOption value="turkish">Turkish</IonSelectOption>
                    <IonSelectOption value="tuvaluan">Tuvaluan</IonSelectOption>
                    <IonSelectOption value="ugandan">Ugandan</IonSelectOption>
                    <IonSelectOption value="ukrainian">Ukrainian</IonSelectOption>
                    <IonSelectOption value="uruguayan">Uruguayan</IonSelectOption>
                    <IonSelectOption value="uzbekistani">Uzbekistani</IonSelectOption>
                    <IonSelectOption value="venezuelan">Venezuelan</IonSelectOption>
                    <IonSelectOption value="vietnamese">Vietnamese</IonSelectOption>
                    <IonSelectOption value="welsh">Welsh</IonSelectOption>
                    <IonSelectOption value="yemenite">Yemenite</IonSelectOption>
                    <IonSelectOption value="zambian">Zambian</IonSelectOption>
                    <IonSelectOption value="zimbabwean">Zimbabwean</IonSelectOption>
                  </IonSelect>
                </IonItem>
                {errors.nationality && errors.nationality.type === "required" && <div className="errorMessage">Nationality is required!</div>}
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput className="inputField" type="password" placeholder="Password" name="password"
                  ref={register({ required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.,/<>#^~`@$!%*?&])[A-Za-z\d.,/<>#~`^@$!%*?&]{8,}$/ })} />
                {errors.password && errors.password.type === "required" && <div className="errorMessage">Password is required!</div>}
                {errors.password && errors.password.type === "minLength" && <div className="errorMessage">Password has to be at least 8 characters and must contain 1 uppercase, 1 lowercase, 1 number and 1 special character</div>}
                {errors.password && errors.password.type === "pattern" && <div className="errorMessage">Password has to be at least 8 characters and must contain 1 uppercase, 1 lowercase, 1 number and 1 special character</div>}
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput className="inputField" type="password" placeholder="Confirm Password" name="confirmPassword" ref={register({ required: true, validate: (value) => value === password.current })} />
                {errors.confirmPassword && errors.confirmPassword.type === "required" && <div className="errorMessage">Confirm Password is required!</div>}
                {errors.confirmPassword && errors.confirmPassword.type === "validate" && <div className="errorMessage">Password does not match!</div>}
              </IonCol>
            </IonRow>
            <IonRow>
              <IonItem id="registration-check">
                <IonCheckbox name="privacyCheckbox" checked={checked} onIonChange={(e) => setChecked(e.detail.checked)} slot="start" ref={register({ validate: (value) => checked === true })}></IonCheckbox>
                <IonLabel style={{ fontSize: "80%", marginLeft: "10%" }} className="ion-text-wrap" color="dark">
                  I agree with SIM's Terms of Use and Privary Policy and thereby give my consent to receive marketing communications from SIM.
                </IonLabel>
              </IonItem>
              {errors.privacyCheckbox && errors.privacyCheckbox.type === "validate" && <div className="errorMessage" style={{marginBottom: '5%'}}>*Terms of Use and Privacy Policy checkbox not checked</div>}
            </IonRow>
            <IonRow class="ion-justify-content-center">
              <IonAlert isOpen={showSuccessAlert} onDidDismiss={() => setShowSuccessAlert(false)} cssClass='alertBox' header={'Registration Success'} message={'Account has been successfully registered.'} buttons={['CLOSE']}></IonAlert>
              {status.error && <IonAlert isOpen={showErrorAlert} onDidDismiss={() => setShowErrorAlert(false)} cssClass='alertBox' header={'Error Occured!'} message={'Please enter a valid email.'} buttons={['OK']}></IonAlert>}            
              <IonButton id="registration_registrationBtn" type="submit" onClick={() => [setShowErrorAlert(true), setShowSuccessAlert(false)]}>REGISTER</IonButton>
            </IonRow>
          </IonGrid>
        </form>
        <IonGrid>
          <IonItemDivider></IonItemDivider>
          <IonText color="medium"><div className="ion-text-center" style={{marginTop: "5%", fontWeight: "bold"}}>OR</div></IonText>
          <IonRow class="ion-justify-content-center">
            <IonButton id="registration_googleBtn" type="submit" onClick={() => setShowErrorAlert(true)}>REGISTER WITH GOOGLE</IonButton>
          </IonRow>
          <IonRow class="ion-justify-content-center">
            <IonButton id="registration_facebookBtn" type="submit" onClick={() => setShowErrorAlert(true)}>REGISTER WITH FACEBOOK</IonButton>
          </IonRow>
        </IonGrid>
        <IonLoading isOpen={status.loading} />
      </IonContent>
    </IonPage>
  );
};

export default Registration;

import { IonButton, IonCheckbox, IonCol, IonContent, IonDatetime, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonPopover, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import "../css/Global.css";
import "../css/SingleSignOn.css";
import TopNav from '../components/TopNav';

const SingleSignOn: React.FC = () => {

    const { register, errors, handleSubmit } = useForm();
    const [checked, setChecked] = useState(false);

    const onSubmit = () => {
        console.log('submitted');
    }

    return (
        <>
        <IonPage>
            <TopNav title="Sign In With Facebook/Google" route="/main" backarrow={true} hamburger={false} />
            <IonContent fullscreen>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <IonGrid>
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
                                    <IonSelectOption value="aLevel">'A' Level</IonSelectOption>
                                    <IonSelectOption value="oLevel">'O' Level</IonSelectOption>
                                    <IonSelectOption value="degree">Degree</IonSelectOption>
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
                            <IonItem id="singleSignOn-check">
                                <IonCheckbox name="privacyCheckbox" checked={checked} onIonChange={(e) => setChecked(e.detail.checked)} slot="start" ref={register({ validate: (value) => checked === true })}></IonCheckbox>
                                <IonLabel style={{ fontSize: "80%", marginLeft: "10%" }} className="ion-text-wrap" color="dark">
                                I agree with SIM's Terms of Use and Privary Policy and thereby give my consent to receive marketing communications from SIM.
                                </IonLabel>
                            </IonItem>
                            {errors.privacyCheckbox && errors.privacyCheckbox.type === "validate" && <div className="errorMessage">*Terms of Use and Privacy Policy checkbox not checked</div>}
                        </IonRow>
                        <IonRow class="ion-justify-content-center">
                            <IonButton id="continueBtn" type="submit">CONTINUE</IonButton>
                        </IonRow>
                    </IonGrid>
                </form>
            </IonContent>
        </IonPage>
        </>
    );
};

export default SingleSignOn;
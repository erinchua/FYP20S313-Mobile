import { IonCol, IonGrid, IonRow, IonButton, IonAlert } from '@ionic/react';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarTimes } from '@fortawesome/free-regular-svg-icons';
import firebase from 'firebase';

import { db } from '../firebase';
import { useAuth } from '../auth';
import '../css/Global.css';
import '../css/GuidedTourContent.css';

const MyScheduleContent: React.FC<{
    day1: any; 
    day2: any;
    openhouseDates: any;
    openHouseProgs: any;
}> = props => {
    const { userID } = useAuth();
    
    /* Remove Programme Alert */
    const [confirmRemoveAlert, setConfirmRemoveAlert] = useState(false);
    const [removeSuccess, setRemoveSuccess] = useState(false);

    const openHouseProgsDay1 = props.openHouseProgs.filter((item: any) => {
        return item.date == props.openhouseDates[0]; // openHouseDates is undefine because of parent error
    });

    const openHouseProgsDay2 = props.openHouseProgs.filter((item: any) => {
        return item.date == props.openhouseDates[1];
    });

    const displayRemoveProgAlert = () => {
        setConfirmRemoveAlert(true);        
    };

    const handleDelete = async (item: any) => {
        try {
            db.collection('PersonalScheduler').doc(userID).update({
                registeredProgrammes: firebase.firestore.FieldValue.arrayRemove(item.id)
            });
        } catch(e) {
            console.log(e);
        }
    };

    //console.log("props", props.openHouseProgs)
    console.log("day1", openHouseProgsDay1);
    //console.log("day2", openHouseProgsDay2);
    
    return(
        <>
            <IonAlert
                isOpen={confirmRemoveAlert}
                onDidDismiss={() => setConfirmRemoveAlert(false)}
                cssClass='alertBox'
                mode='md'
                header={'Confirm removal of programme from scheduler'}
                message={'Are you sure you want to remove the programme from your schedule?'}
                buttons={[
                    { 
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: cancel => {
                            console.log('Confirm Cancel: cancel delete');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            setConfirmRemoveAlert(false);
                            setRemoveSuccess(true);
                            {/* Logic to remove the data in the row of the selected remove button */}
                        }
                    }]}
            ></IonAlert>

            <IonAlert
                isOpen={removeSuccess}
                onDidDismiss={() => setRemoveSuccess(false)}
                cssClass='alertBox'
                mode='md'
                header={'Successfully Removed Programme'}
                message={'The programme has been successfully removed from My Schedule!'}
                buttons={['Close']}
            ></IonAlert>

            <IonGrid className="myScheduleGrid">
                <IonRow className="ion-justify-content-center">
                    <IonCol size-sizeSm="2" className="ion-text-wrap" id="hourHeader">Hour</IonCol>
                    <IonCol size-sizeSm="3" className="progNameHeader ion-text-wrap">Programme Name</IonCol>
                    <IonCol size-sizeSm="3" className="myScheduleTableHeader ion-text-wrap">Time</IonCol>
                    <IonCol size-sizeSm="3" className="myScheduleTableHeader ion-text-wrap">Venue</IonCol>
                    <IonCol size-sizeSm="1" className="myScheduleTableHeader ion-text-wrap"></IonCol>
                </IonRow>
                
                {props.day1 === "day1" ? 
                    <>
                        {/* My Schedule Table (Programme Talks/Guided Tours) 9am */}
                        <IonRow className="ion-justify-content-center">
                            <IonCol size-sizeSm="2" className="myScheduleTableTimeHeader ion-text-wrap">9am</IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-ProgNameData ion-text-wrap">ProgName1</IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap">9:00AM  to 10:00AM</IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap">Sample</IonCol>
                            <IonCol size-sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={displayRemoveProgAlert}>
                                    <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                </IonButton>
                            </IonCol>
                        </IonRow>

                        {/* My Schedule Table (Programme Talks/Guided Tours) 10am */}
                        <IonRow className="ion-justify-content-center">
                            <IonCol size-sizeSm="2" className="myScheduleTableTimeHeader ion-text-wrap">10am</IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-ProgNameData ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                {/* <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={displayRemoveProgAlert}>
                                    <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                </IonButton> */}
                            </IonCol>
                        </IonRow>

                        {/* My Schedule Table (Programme Talks/Guided Tours) 11am */}
                        <IonRow className="ion-justify-content-center">
                            <IonCol size-sizeSm="2" className="myScheduleTableTimeHeader ion-text-wrap">11am</IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-ProgNameData ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                {/* <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={displayRemoveProgAlert}>
                                    <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                </IonButton> */}
                            </IonCol>
                        </IonRow>

                        {/* My Schedule Table (Programme Talks/Guided Tours) 12pm */}
                        <IonRow className="ion-justify-content-center">
                            <IonCol size-sizeSm="2" className="myScheduleTableTimeHeader ion-text-wrap">12pm</IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-ProgNameData ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                {/* <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={displayRemoveProgAlert}>
                                    <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                </IonButton> */}
                            </IonCol>
                        </IonRow>

                        {/* My Schedule Table (Programme Talks/Guided Tours) 1pm */}
                        <IonRow className="ion-justify-content-center">
                            <IonCol size-sizeSm="2" className="myScheduleTableTimeHeader ion-text-wrap">1pm</IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-ProgNameData ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                {/* <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={displayRemoveProgAlert}>
                                    <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                </IonButton> */}
                            </IonCol>
                        </IonRow>

                        {/* My Schedule Table (Programme Talks/Guided Tours) 2pm */}
                        <IonRow className="ion-justify-content-center">
                            <IonCol size-sizeSm="2" className="myScheduleTableTimeHeader ion-text-wrap">2pm</IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-ProgNameData ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                {/* <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={displayRemoveProgAlert}>
                                    <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                </IonButton> */}
                            </IonCol>
                        </IonRow>

                        {/* My Schedule Table (Programme Talks/Guided Tours) 3pm */}
                        <IonRow className="ion-justify-content-center">
                            <IonCol size-sizeSm="2" className="myScheduleTableTimeHeader ion-text-wrap">3pm</IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-ProgNameData ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                {/* <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={displayRemoveProgAlert}>
                                    <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                </IonButton> */}
                            </IonCol>
                        </IonRow>

                        {/* My Schedule Table (Programme Talks/Guided Tours) 4pm */}
                        <IonRow className="ion-justify-content-center">
                            <IonCol size-sizeSm="2" className="myScheduleTableTimeHeader ion-text-wrap">4pm</IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-ProgNameData ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                {/* <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={displayRemoveProgAlert}>
                                    <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                </IonButton> */}
                            </IonCol>
                        </IonRow>

                        {/* My Schedule Table (Open House Activities) */}
                        <IonRow className="ion-justify-content-center openHouseActTableRow">
                            <IonCol size-sizeSm="12" className="openHouseActTableTitle ion-text-wrap">Open House Activities - Games & Activities</IonCol>
                        </IonRow>

                        {/* My Schedule Table (Open House Activities) Table Header*/}
                        <IonRow className="ion-justify-content-center">
                            <IonCol size-sizeSm="2" className="ion-text-wrap" id="boothNoHeader">Booth No.</IonCol>
                            <IonCol size-sizeSm="4" className="progNameHeader ion-text-wrap">Programme Name</IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleActTableHeader ion-text-wrap">Venue</IonCol>
                            <IonCol size-sizeSm="2" className="myScheduleActTableHeader ion-text-wrap">Points</IonCol>
                            <IonCol size-sizeSm="1" className="myScheduleActTableHeader ion-text-wrap"></IonCol>
                        </IonRow>

                        {/* Row will be dynamically generated */}
                        <IonRow className="ion-justify-content-center">
                            <IonCol size-sizeSm="2" className="myScheduleTable-BoothData ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="4" className="myScheduleTable-ProgNameData ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="2" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                {/* <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={displayRemoveProgAlert}>
                                    <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                </IonButton> */}
                            </IonCol>
                        </IonRow>
                    </> : '' 
                }

                
                {props.day2 === "day2" ? 
                    <>
                        {/* My Schedule Table (Programme Talks/Guided Tours) 9am */}
                        <IonRow className="ion-justify-content-center">
                            <IonCol sizeSm="2" className="myScheduleTableTimeHeader ion-text-wrap">9am</IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-ProgNameData ion-text-wrap">ProgName2</IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-Data ion-text-wrap">9:00AM  to 10:00AM</IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-Data ion-text-wrap">Sample</IonCol>
                            <IonCol sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={displayRemoveProgAlert}>
                                    <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                </IonButton>
                            </IonCol>
                        </IonRow>

                        {/* My Schedule Table (Programme Talks/Guided Tours) 10am */}
                        <IonRow className="ion-justify-content-center">
                            <IonCol sizeSm="2" className="myScheduleTableTimeHeader ion-text-wrap">10am</IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-ProgNameData ion-text-wrap"></IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                {/* <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={displayRemoveProgAlert}>
                                    <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                </IonButton> */}
                            </IonCol>
                        </IonRow>

                        {/* My Schedule Table (Programme Talks/Guided Tours) 11am */}
                        <IonRow className="ion-justify-content-center">
                            <IonCol sizeSm="2" className="myScheduleTableTimeHeader ion-text-wrap">11am</IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-ProgNameData ion-text-wrap"></IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                {/* <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={displayRemoveProgAlert}>
                                    <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                </IonButton> */}
                            </IonCol>
                        </IonRow>

                        {/* My Schedule Table (Programme Talks/Guided Tours) 12pm */}
                        <IonRow className="ion-justify-content-center">
                            <IonCol sizeSm="2" className="myScheduleTableTimeHeader ion-text-wrap">12pm</IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-ProgNameData ion-text-wrap"></IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                {/* <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={displayRemoveProgAlert}>
                                    <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                </IonButton> */}
                            </IonCol>
                        </IonRow>

                        {/* My Schedule Table (Programme Talks/Guided Tours) 1pm */}
                        <IonRow className="ion-justify-content-center">
                            <IonCol sizeSm="2" className="myScheduleTableTimeHeader ion-text-wrap">1pm</IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-ProgNameData ion-text-wrap"></IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                {/* <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={displayRemoveProgAlert}>
                                    <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                </IonButton> */}
                            </IonCol>
                        </IonRow>

                        {/* My Schedule Table (Programme Talks/Guided Tours) 2pm */}
                        <IonRow className="ion-justify-content-center">
                            <IonCol sizeSm="2" className="myScheduleTableTimeHeader ion-text-wrap">2pm</IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-ProgNameData ion-text-wrap"></IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                {/* <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={displayRemoveProgAlert}>
                                    <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                </IonButton> */}
                            </IonCol>
                        </IonRow>

                        {/* My Schedule Table (Programme Talks/Guided Tours) 3pm */}
                        <IonRow className="ion-justify-content-center">
                            <IonCol sizeSm="2" className="myScheduleTableTimeHeader ion-text-wrap">3pm</IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-ProgNameData ion-text-wrap"></IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                {/* <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={displayRemoveProgAlert}>
                                    <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                </IonButton> */}
                            </IonCol>
                        </IonRow>

                        {/* My Schedule Table (Programme Talks/Guided Tours) 4pm */}
                        <IonRow className="ion-justify-content-center">
                            <IonCol sizeSm="2" className="myScheduleTableTimeHeader ion-text-wrap">4pm</IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-ProgNameData ion-text-wrap"></IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                {/* <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={displayRemoveProgAlert}>
                                    <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                </IonButton> */}
                            </IonCol>
                        </IonRow>

                        {/* My Schedule Table (Open House Activities) */}
                        <IonRow className="ion-justify-content-center openHouseActTableRow">
                            <IonCol sizeSm="12" className="openHouseActTableTitle ion-text-wrap">Open House Activities - Games & Activities</IonCol>
                        </IonRow>

                        {/* My Schedule Table (Open House Activities) Table Header*/}
                        <IonRow className="ion-justify-content-center">
                            <IonCol sizeSm="2" className="ion-text-wrap" id="boothNoHeader">Booth No.</IonCol>
                            <IonCol sizeSm="4" className="progNameHeader ion-text-wrap">Programme Name</IonCol>
                            <IonCol sizeSm="3" className="myScheduleActTableHeader ion-text-wrap">Venue</IonCol>
                            <IonCol sizeSm="2" className="myScheduleActTableHeader ion-text-wrap">Points</IonCol>
                            <IonCol sizeSm="1" className="myScheduleActTableHeader ion-text-wrap"></IonCol>
                        </IonRow>

                        {/* Row will be dynamically generated */}
                        <IonRow className="ion-justify-content-center">
                            <IonCol sizeSm="2" className="myScheduleTable-BoothData ion-text-wrap"></IonCol>
                            <IonCol sizeSm="4" className="myScheduleTable-ProgNameData ion-text-wrap"></IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol sizeSm="2" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                {/* <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={displayRemoveProgAlert}>
                                    <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                </IonButton> */}
                            </IonCol>
                        </IonRow>
                    </> : '' 
                }
            </IonGrid>
        </>
    );
}

export default MyScheduleContent;
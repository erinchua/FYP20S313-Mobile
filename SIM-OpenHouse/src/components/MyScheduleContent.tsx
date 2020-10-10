import { IonCol, IonGrid, IonRow, IonButton, IonAlert, IonLoading, IonItem } from '@ionic/react';
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
    //const [confirmRemoveAlert, setConfirmRemoveAlert] = useState(false);
    //const [removeSuccess, setRemoveSuccess] = useState(false);
    const [alert, setAlert] = useState({ confirmRemove: false, removeSuccess: false, loading: false });
    const [toBeDeleted, setToBeDeleted] = useState("");

    const openHouseProgsDay1 = props.openHouseProgs.filter((item: any) => {
        return item.date == props.openhouseDates[0];
    });

    const openHouseProgsDay2 = props.openHouseProgs.filter((item: any) => {
        return item.date == props.openhouseDates[1];
    });

    const displayRemoveProgAlert = (id: any) => {
        setAlert({ confirmRemove: true, removeSuccess: false, loading: false });
        setToBeDeleted(id);
    };

    const handleDelete = async (item: any) => {
        try {
            setAlert({ confirmRemove: false, removeSuccess: false, loading: true });
            await db.collection('PersonalScheduler').doc(userID).update({
                registeredProgrammes: firebase.firestore.FieldValue.arrayRemove(item)
            });
            setAlert({ confirmRemove: false, removeSuccess: true, loading: false });
        } catch(e) {
            setAlert({ confirmRemove: false, removeSuccess: false, loading: false });
            console.log(e);
        }
    };

    //console.log("props", props.openHouseProgs)
    //console.log(props.openhouseDates)
    
    return(
        <>
            <IonAlert
                isOpen={alert.confirmRemove}
                //onDidDismiss={() => { return }}
                cssClass='alertBox'
                mode='md'
                header={'Confirm removal of programme from scheduler'}
                message={'Are you sure you want to remove the programme from your schedule?'}
                buttons={[
                    { 
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel: cancel delete');
                            setAlert({ confirmRemove: false, removeSuccess: false, loading: false });
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            handleDelete(toBeDeleted);
                        }
                    }]}
            ></IonAlert>

            <IonAlert
                isOpen={alert.removeSuccess}
                onDidDismiss={() => setAlert({ confirmRemove: false, removeSuccess: false, loading: false })}
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
                    openHouseProgsDay1.map((item: any) => {
                        if (item.id.split("-")[0] !== "activity")
                            return (
                                <IonRow className="ion-justify-content-center" key={item.id}>
                                    <IonCol size-sizeSm="2" className="myScheduleTableTimeHeader ion-text-wrap">9am</IonCol>
                                    {openHouseProgsDay1.map((item:any) => {
                                        return (
                                            <IonRow key={item.id}>
                                                <IonCol size-sizeSm="3" className="myScheduleTable-ProgNameData ion-text-wrap">ProgName1</IonCol>
                                                <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap">9:00AM  to 10:00AM</IonCol>
                                                <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap">Sample</IonCol>
                                                <IonCol size-sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                                    <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => displayRemoveProgAlert("")}>
                                                        <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                                    </IonButton>
                                                </IonCol>
                                            </IonRow>
                                        )
                                    })}
                                </IonRow>
                            )
                    }) : '' 
                }
                
                {/* {props.day1 === "day1" ? 
                    <>
                        <IonRow className="ion-justify-content-center">
                            <IonCol size-sizeSm="2" className="myScheduleTableTimeHeader ion-text-wrap">9am</IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-ProgNameData ion-text-wrap">ProgName1</IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap">9:00AM  to 10:00AM</IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap">Sample</IonCol>
                            <IonCol size-sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => displayRemoveProgAlert("")}>
                                    <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                </IonButton>
                            </IonCol>
                        </IonRow>

                        <IonRow className="ion-justify-content-center">
                            <IonCol size-sizeSm="2" className="myScheduleTableTimeHeader ion-text-wrap">10am</IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-ProgNameData ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => displayRemoveProgAlert("")}>
                                    <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                </IonButton>
                            </IonCol>
                        </IonRow>

                        <IonRow className="ion-justify-content-center">
                            <IonCol size-sizeSm="2" className="myScheduleTableTimeHeader ion-text-wrap">11am</IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-ProgNameData ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => displayRemoveProgAlert("")}>
                                    <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                </IonButton>
                            </IonCol>
                        </IonRow>

                        <IonRow className="ion-justify-content-center">
                            <IonCol size-sizeSm="2" className="myScheduleTableTimeHeader ion-text-wrap">12pm</IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-ProgNameData ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => displayRemoveProgAlert("")}>
                                    <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                </IonButton>
                            </IonCol>
                        </IonRow>

                        <IonRow className="ion-justify-content-center">
                            <IonCol size-sizeSm="2" className="myScheduleTableTimeHeader ion-text-wrap">1pm</IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-ProgNameData ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => displayRemoveProgAlert("")}>
                                    <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                </IonButton>
                            </IonCol>
                        </IonRow>

                        <IonRow className="ion-justify-content-center">
                            <IonCol size-sizeSm="2" className="myScheduleTableTimeHeader ion-text-wrap">2pm</IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-ProgNameData ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => displayRemoveProgAlert("")}>
                                    <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                </IonButton>
                            </IonCol>
                        </IonRow>

                        <IonRow className="ion-justify-content-center">
                            <IonCol size-sizeSm="2" className="myScheduleTableTimeHeader ion-text-wrap">3pm</IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-ProgNameData ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => displayRemoveProgAlert("")}>
                                    <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                </IonButton>
                            </IonCol>
                        </IonRow>

                        <IonRow className="ion-justify-content-center">
                            <IonCol size-sizeSm="2" className="myScheduleTableTimeHeader ion-text-wrap">4pm</IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-ProgNameData ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap"></IonCol>
                            <IonCol size-sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => displayRemoveProgAlert("")}>
                                    <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </> : '' 
                } */}
                
                {props.day2 === "day2" ? 
                    <>
                        {/* My Schedule Table (Programme Talks/Guided Tours) 9am */}
                        <IonRow className="ion-justify-content-center">
                            <IonCol sizeSm="2" className="myScheduleTableTimeHeader ion-text-wrap">9am</IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-ProgNameData ion-text-wrap">ProgName2</IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-Data ion-text-wrap">9:00AM  to 10:00AM</IonCol>
                            <IonCol sizeSm="3" className="myScheduleTable-Data ion-text-wrap">Sample</IonCol>
                            <IonCol sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => displayRemoveProgAlert("")}>
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
                                {/* <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => displayRemoveProgAlert("")}>
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
                                {/* <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => displayRemoveProgAlert("")}>
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
                                {/* <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => displayRemoveProgAlert("")}>
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
                                {/* <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => displayRemoveProgAlert("")}>
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
                                {/* <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => displayRemoveProgAlert("")}>
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
                                {/* <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => displayRemoveProgAlert("")}>
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
                                {/* <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => displayRemoveProgAlert("")}>
                                    <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                </IonButton> */}
                            </IonCol>
                        </IonRow>
                    </> : '' 
                }

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

                {props.day1 === "day1" ?
                    openHouseProgsDay1.map((item: any) => {
                        if (item.id.split("-")[0] === "activity")
                            return (
                                <IonRow className="ion-justify-content-center" key={item.id}>
                                    <IonCol size-sizeSm="2" className="myScheduleTable-BoothData ion-text-wrap">{item.id.split("-")[1]}</IonCol>
                                    <IonCol size-sizeSm="4" className="myScheduleTable-ProgNameData ion-text-wrap">{item.name}</IonCol>
                                    <IonCol size-sizeSm="3" className="myScheduleTable-Data ion-text-wrap">{item.venue}</IonCol>
                                    <IonCol size-sizeSm="2" className="myScheduleTable-Data ion-text-wrap">{item.points}</IonCol>
                                    <IonCol size-sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                        <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => displayRemoveProgAlert(item.id)}>
                                            <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                            )
                    }) : '' 
                }

                {props.day2 === "day2" ? 
                    openHouseProgsDay2.map((item: any) => {
                        if (item.id.split("-")[0] === "activity")
                            return (
                                <IonRow className="ion-justify-content-center" key={item.id}>
                                    <IonCol sizeSm="2" className="myScheduleTable-BoothData ion-text-wrap">{item.id.split("-")[1]}</IonCol>
                                    <IonCol sizeSm="4" className="myScheduleTable-ProgNameData ion-text-wrap">{item.name}</IonCol>
                                    <IonCol sizeSm="3" className="myScheduleTable-Data ion-text-wrap">{item.venue}</IonCol>
                                    <IonCol sizeSm="2" className="myScheduleTable-Data ion-text-wrap">{item.points}</IonCol>
                                    <IonCol sizeSm="1" className="myScheduleTable-Data" id="removeCol">
                                        <IonButton className="myScheduleTable-DataBtn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => displayRemoveProgAlert(item.id)}>
                                            <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                            )
                    }) : '' 
                }
            </IonGrid>
            <IonLoading isOpen={alert.loading} />
        </>
    );
}

export default MyScheduleContent;
import { IonCol, IonGrid, IonRow, IonButton, IonAlert, IonLoading, IonModal, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonContent } from '@ionic/react';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarTimes } from '@fortawesome/free-regular-svg-icons';
import firebase from 'firebase';

import '../css/Global.css';
import '../css/GuidedTourContent.css';
import { db } from '../firebase';
import { useAuth } from '../modules/auth';
import { sortTimeAsc } from '../modules/compare';
import QRCode from "qrcode.react";


const MyScheduleContent: React.FC<{ day1: any, day2: any, openhouseDates: any, openHouseProgs: any, studentDetails: any }> = props => {
    const { userID } = useAuth();
    const { firstName, lastName, email } = props.studentDetails;

    const [alert, setAlert] = useState({ confirmRemove: false, removeSuccess: false, loading: false });
    const [toBeDeleted, setToBeDeleted] = useState("");
    const [progInfo, setProgInfo] = useState({ talkName: "", talkDate: "", talkBy: "" });
    const [showProgQRCodeModal, setShowProgQRCodeModal] = useState(false);

    const openHouseProgsDay1 = props.openHouseProgs.filter((item: any) => { return item.date == props.openhouseDates[0] }).sort(sortTimeAsc);
    const openHouseProgsDay2 = props.openHouseProgs.filter((item: any) => { return item.date == props.openhouseDates[1] }).sort(sortTimeAsc);

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
        } catch (e) {
            setAlert({ confirmRemove: false, removeSuccess: false, loading: false });
            return console.log(e);
        }
    };

    return (
        <>
            {/* {console.log("auth has" + JSON.stringify(useAuth()))} */}
            {console.log(firstName)}
            <IonAlert
                isOpen={alert.confirmRemove}
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
                <IonRow style={{ width: "100%" }}>
                    <IonCol className="myScheduleTableHeader ion-text-wrap">Time</IonCol>
                    <IonCol className="myScheduleTableHeader_ProgName ion-text-wrap">Programme Name</IonCol>
                    <IonCol className="myScheduleTableHeader ion-text-wrap">Venue</IonCol>
                    <IonCol className="myScheduleTableHeader_Btn ion-text-wrap">Check In</IonCol>
                    <IonCol className="myScheduleTableHeader_Btn ion-text-wrap"></IonCol>
                </IonRow>

                {props.day1 === "day1" ?
                    openHouseProgsDay1.map((prog: any) => (
                        prog.id.split("-")[0].toLowerCase() !== "activity" ? (
                            <IonRow key={prog.id}>
                                <IonCol className="myScheduleTableData ion-text-wrap">{prog.startTime} to {prog.endTime}</IonCol>
                                <IonCol className="myScheduleTableData_ProgName ion-text-wrap">{prog.name}</IonCol>
                                <IonCol className="myScheduleTableData ion-text-wrap">{prog.venue}</IonCol>
                                <IonCol className="myScheduleTableData_QRCode ion-text-wrap" onClick={() => [setShowProgQRCodeModal(true), setProgInfo({ talkName: prog.name, talkDate: prog.date, talkBy: prog.uni })]}>{prog.id.split("-")[0].toLowerCase() === "talk" ? "View QR Code" : null}</IonCol>
                                <IonCol className="myScheduleTableData_BtnCol" id="removeCol">
                                    <IonButton className="myScheduleTableData_Btn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => displayRemoveProgAlert(prog.id)}>
                                        <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        ) : null
                    )) : null
                }

                {props.day2 === "day2" ?
                    openHouseProgsDay2.map((prog: any) => (
                        prog.id.split("-")[0].toLowerCase() !== "activity" ? (
                            <IonRow key={prog.id}>
                                <IonCol className="myScheduleTableData ion-text-wrap">{prog.startTime} to {prog.endTime}</IonCol>
                                <IonCol className="myScheduleTableData_ProgName ion-text-wrap">{prog.name}</IonCol>
                                <IonCol className="myScheduleTableData ion-text-wrap">{prog.venue}</IonCol>
                                <IonCol className="myScheduleTableData_QRCode ion-text-wrap" onClick={() => [setShowProgQRCodeModal(true), setProgInfo({ talkName: prog.name, talkDate: prog.date, talkBy: prog.uni })]}>{prog.id.split("-")[0].toLowerCase() === "talk" ? "View QR Code" : null}</IonCol>
                                <IonCol className="myScheduleTableData_BtnCol" id="removeCol">
                                    <IonButton className="myScheduleTableData_Btn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => displayRemoveProgAlert(prog.id)}>
                                        <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        ) : null
                    )) : null
                }

                {/* My Schedule Table (Open House Activities) */}
                <IonRow className="ion-justify-content-center openHouseActTableRow">
                    <IonCol size-sizeSm="12" className="openHouseActTableTitle ion-text-wrap">Open House Activities - Games & Activities</IonCol>
                </IonRow>

                {/* My Schedule Table (Open House Activities) Table Header*/}
                <IonRow className="ion-justify-content-center">
                    <IonCol className="ion-text-wrap" id="myScheduleActTableHeader_BoothNo">Booth No.</IonCol>
                    <IonCol className="myScheduleActTableHeader_ProgName ion-text-wrap">Programme Name</IonCol>
                    <IonCol className="myScheduleActTableHeader_Venue ion-text-wrap">Venue</IonCol>
                    <IonCol className="myScheduleActTableHeader_Points ion-text-wrap">Points</IonCol>
                    <IonCol className="myScheduleActTableHeader_Btn ion-text-wrap"></IonCol>
                </IonRow>

                {props.day1 === "day1" ?
                    openHouseProgsDay1.map((prog: any) => (
                        prog.id.split("-")[0] === "activity" ? (
                            <IonRow className="ion-justify-content-center" key={prog.id}>
                                <IonCol className="myScheduleActTableData_Booth ion-text-wrap">{prog.boothNo}</IonCol>
                                <IonCol className="myScheduleActTableData_ProgName ion-text-wrap">{prog.name}</IonCol>
                                <IonCol className="myScheduleActTableData_Venue ion-text-wrap">{prog.venue}</IonCol>
                                <IonCol className="myScheduleActTableData_Points ion-text-wrap">{prog.points}</IonCol>
                                <IonCol className="myScheduleActTableData_Btn ion-text-center" id="removeCol">
                                    <IonButton className="myScheduleTableData_Btn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => displayRemoveProgAlert(prog.id)}>
                                        <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        ) : null
                    )) : null
                }

                {props.day2 === "day2" ?
                    openHouseProgsDay2.map((prog: any) => (
                        prog.id.split("-")[0] === "activity" ? (
                            <IonRow className="ion-justify-content-center" key={prog.id}>
                                <IonCol className="myScheduleActTableData_Booth ion-text-wrap">{prog.boothNo}</IonCol>
                                <IonCol className="myScheduleActTableData_ProgName ion-text-wrap">{prog.name}</IonCol>
                                <IonCol className="myScheduleActTableData_Venue ion-text-wrap">{prog.venue}</IonCol>
                                <IonCol className="myScheduleActTableData_Points ion-text-wrap">{prog.points}</IonCol>
                                <IonCol className="myScheduleActTableData_Btn ion-text-center" id="removeCol">
                                    <IonButton className="myScheduleTableData_Btn" id="removeBtn" size="small" style={{ marginTop: "-5%", marginBottom: "-5%" }} onClick={() => displayRemoveProgAlert(prog.id)}>
                                        <FontAwesomeIcon icon={faCalendarTimes} size="lg" />
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        ) : null
                    )) : null
                }
            </IonGrid>
            <IonLoading isOpen={alert.loading} />

            {/* QR Code Modal */}
            <IonModal isOpen={showProgQRCodeModal} cssClass="progQRCodeModal">
                <IonContent className="ion-text-center">
                    <IonCard className="progQRCodeModalCard">
                        <IonCardHeader>
                            <IonCardTitle className="ion-text-center progQRCodeModalCardHeader">Programme QR Code</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent className="ion-text-center">
                            <QRCode value={`${firstName},${lastName},${email},${progInfo.talkName},${progInfo.talkDate},${progInfo.talkBy}`} />{" "}
                        </IonCardContent>
                    </IonCard>

                    <IonButton id="progQRCodeModalCloseBtn" onClick={() => setShowProgQRCodeModal(false)}>CLOSE</IonButton>
                </IonContent>
            </IonModal>

        </>
    );
}

export default MyScheduleContent;
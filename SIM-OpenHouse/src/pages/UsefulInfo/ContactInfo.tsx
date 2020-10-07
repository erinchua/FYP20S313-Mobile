import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRouterLink, IonRow, IonTitle } from '@ionic/react';
import React, { useRef, useState, useEffect } from 'react';

import '../../css/Global.css';
import '../../css/ContactInfo.css';

import TopNav from '../../components/TopNav';
import Menu from '../../components/Menu';
import { db } from '../../firebase';


const ContactInfo: React.FC = () => {

    const [contactInfo, setContactInfo] = useState([])

    const localContacts = contactInfo.filter((contact: any) => { return contact.country == 'local' })

    useEffect(() => {
        const contacts: any = []
        db.collection('ContactInfo').get().then((snapshot) => {
            snapshot.forEach((doc) => {
                const data = doc.data()
                contacts.push(data)
            })
            setContactInfo(contacts)
        })
    }, [])

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Contact Information" route='/u/usefulInfoMain' backarrow={true} hamburger={true} />
            </IonHeader>

            <IonContent fullscreen={true}>
                <IonGrid id="contactInfoGrid">
                    {/* General Enquiries */}
                    {localContacts.map(({ id, contactTitle, operatingHours = [], contactNo, email }) => {
                        return (
                            <div key={id}>
                                <IonRow className="contactInfoTitleRow">
                                    <IonTitle className="contactInfoTitle">{contactTitle}</IonTitle>
                                </IonRow>

                                <IonRow className="contactInfoDetailRow" style={{ paddingTop: "3%" }}>
                                    <IonCol size="5" sizeSm="5" className="contactInfoDetailCol">
                                        <IonTitle className="contactInfoDetailTitle">Operating Hours:</IonTitle>
                                    </IonCol>

                                    <IonCol size="7" sizeSm="7" className="contactInfoDetailCol">
                                        {operatingHours.map((hours: any) => {
                                            return (<IonRow className="contactInfoDetailInfo">{hours}</IonRow>)
                                        })}

                                    </IonCol>
                                </IonRow>

                                <IonRow className="contactInfoDetailRow">
                                    <IonCol size="5" sizeSm="5" className="contactInfoDetailCol">
                                        <IonTitle className="contactInfoDetailTitle">Tel:</IonTitle>
                                    </IonCol>

                                    <IonCol size="7" sizeSm="7" className="contactInfoDetailCol">
                                        <IonRow className="contactInfoDetailInfo">{contactNo}</IonRow>
                                    </IonCol>
                                </IonRow>

                                <IonRow className="contactInfoDetailRow">
                                    <IonCol size="5" sizeSm="5" className="contactInfoDetailCol">
                                        <IonTitle className="contactInfoDetailTitle">Email:</IonTitle>
                                    </IonCol>

                                    <IonCol size="7" sizeSm="7" className="contactInfoDetailCol" style={{ paddingBottom: "3%" }}>
                                        <IonRow className="contactInfoDetailInfo">
                                            <IonRouterLink className="contactInfoDetailUrl" href="receptions@sim.edu.sg">{email}</IonRouterLink>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                            </div>
                        )
                    })}




                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default ContactInfo;
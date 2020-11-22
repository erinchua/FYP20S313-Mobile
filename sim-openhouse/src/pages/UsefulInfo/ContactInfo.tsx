import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRouterLink, IonRow, IonTitle } from '@ionic/react';
import React, { useState, useEffect } from 'react';

import '../../css/Global.css';
import '../../css/ContactInfo.css';
import TopNav from '../../components/TopNav';
import { db } from '../../firebase';


const ContactInfo: React.FC = () => {

    const [contactInfo, setContactInfo] = useState<any>({ local: [], overseas: []});

    useEffect(() => {
        db.collection('ContactInfo').get().then(snapshot => {
            const local: any = [];
            const overseas: any = [];

            snapshot.forEach((doc) => {
                const data = doc.data();

                if (data.country === "local") {
                    const opHours = data.operatingHours;
                    const opArr = [];

                    for (let i = 0; i < Object.keys(opHours).length; i++) {
                        const op = opHours[Object.keys(opHours)[i]];

                        if (op !== "") {
                            opArr.push(op);
                        }
                    }
                    
                    const contact = {
                        id: data.id,
                        title: data.contactTitle,
                        phone: data.contactNo,
                        email: data.email,
                        opHours: opArr
                    }
                    local.push(contact);
                } else {
                    overseas.push(data);
                }
            });
            setContactInfo({ local: local, overseas: overseas});
        });
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <TopNav title="Contact Information" route='/u/usefulInfoMain' backarrow={true} hamburger={true} />
            </IonHeader>

            <IonContent fullscreen={true}>
                <IonGrid id="contactInfoGrid">
                    {/* General Enquiries */}
                    {contactInfo.local.map((contact: any) => {
                        return (
                            <div key={contact.id}>
                                <IonRow className="contactInfoTitleRow">
                                    <IonTitle className="contactInfoTitle">{contact.title}</IonTitle>
                                </IonRow>

                                <IonRow className="contactInfoDetailRow" style={{ paddingTop: "3%" }}>
                                    <IonCol size="5" sizeSm="5" className="contactInfoDetailCol">
                                        <IonTitle className="contactInfoDetailTitle">Operating Hours:</IonTitle>
                                    </IonCol>

                                    <IonCol size="7" sizeSm="7" className="contactInfoDetailCol">
                                        {contact.opHours.map((hours: any, index: any) => {
                                            return ( <IonRow className="contactInfoDetailInfo" key={index}>{hours}</IonRow> )
                                        })}
                                    </IonCol>
                                </IonRow>

                                <IonRow className="contactInfoDetailRow">
                                    <IonCol size="5" sizeSm="5" className="contactInfoDetailCol">
                                        <IonTitle className="contactInfoDetailTitle">Tel:</IonTitle>
                                    </IonCol>

                                    <IonCol size="7" sizeSm="7" className="contactInfoDetailCol">
                                        <IonRow className="contactInfoDetailInfo">{contact.phone}</IonRow>
                                    </IonCol>
                                </IonRow>

                                <IonRow className="contactInfoDetailRow">
                                    <IonCol size="5" sizeSm="5" className="contactInfoDetailCol">
                                        <IonTitle className="contactInfoDetailTitle">Email:</IonTitle>
                                    </IonCol>

                                    <IonCol size="7" sizeSm="7" className="contactInfoDetailCol" style={{ paddingBottom: "3%" }}>
                                        <IonRow className="contactInfoDetailInfo">
                                            <IonRouterLink className="contactInfoDetailUrl" href="receptions@sim.edu.sg">{contact.email}</IonRouterLink>
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
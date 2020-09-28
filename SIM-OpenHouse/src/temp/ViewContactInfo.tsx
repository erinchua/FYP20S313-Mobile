import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";

const ViewContactInfo = () => {
  const [contactInfo, setContactInfo] = useState<any[]>([]);
  useEffect(() => {
    db.collection("ContactInfo")
      .where("country", "==", "local")
      .get()
      .then((snapshot) => {
        const contactInfo: any = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          contactInfo.push(data);
        });
        setContactInfo(contactInfo);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul>
      {contactInfo.map((contactInfo) => {
        return (
          <div>
            <li>Contact ID: {contactInfo.id}</li>
            <li>Contact Title: {contactInfo.contactTitle}</li>
            <li>
              Operating Hours :
              {contactInfo.operatingHours.map((sub: any) => (
                <li>{sub}</li>
              ))}
            </li>

            <li>Tel: {contactInfo.contactNo}</li>
            <li>Email: {contactInfo.email}</li>
            <li></li>
          </div>
        );
      })}
    </ul>
  );
};

export default ViewContactInfo;

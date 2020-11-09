import React, { useState, useEffect } from "react";
import { db } from "../firebase";

const ViewClubAndCouncil = (props: { categoryType: string }) => {
  const [clubCouncil, setClubCouncil] = useState<any[]>([]);
  useEffect(() => {
    db.collection("ClubsAndCouncils")
      .where("categoryType", "==", props.categoryType)
      .get()
      .then((snapshot) => {
        const clubCouncil: any = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          clubCouncil.push(data);
        });
        setClubCouncil(clubCouncil);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul>
      {clubCouncil.map((clubCouncil) => {
        return (
          <div>
            <li>{clubCouncil.categoryType}</li>
            <li>{clubCouncil.clubsAndCouncilTitle}</li>
            <li>{clubCouncil.clubsAndCouncilDescription}</li>
            <li>
              <img src={clubCouncil.clubsAndCouncilsLogo} alt={clubCouncil.clubsAndCouncilTitle} />
            </li>
            <li>{clubCouncil.id}</li>
          </div>
        );
      })}
    </ul>
  );
};

export default ViewClubAndCouncil;

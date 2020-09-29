import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";

const ViewProgrammeTalk = (props: { date: string }) => {
  const [programmeTalk, setProgrammeTalk] = useState<any[]>([]);
  useEffect(() => {
    db.collection("ProgrammeTalks")
      .where("date", "==", props.date)
      .get()
      .then((snapshot) => {
        const programmeTalk: any = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          programmeTalk.push(data);
        });
        setProgrammeTalk(programmeTalk);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul>
      {programmeTalk.map((programmeTalk) => {
        return (
          <div>
            <li>Programme Talk: {programmeTalk.talkName}</li>
            <li>Awarding Uni: {programmeTalk.awardingUni}</li>
            <li>Time :{programmeTalk.startTime + " to " + programmeTalk.endTime}</li>

            <li>Venue: {programmeTalk.venue}</li>
          </div>
        );
      })}
    </ul>
  );
};

export default ViewProgrammeTalk;

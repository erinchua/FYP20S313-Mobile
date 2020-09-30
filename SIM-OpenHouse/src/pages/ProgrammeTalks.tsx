import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRouterLink, IonRow, IonSegment, IonSegmentButton, IonText, IonTitle, IonToolbar } from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import { withRouter } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

import "../css/Global.css";
import "../css/ProgrammeTalks.css";

import TopNav from "../components/TopNav";
import ProgTalkSchedule from "../components/ProgTalkSchedule";
import ProgTalkLiveTalks from "../components/ProgTalkLiveTalks";
import ProgTalkPastRec from "../components/ProgTalkPastRec";

const ProgrammeTalks: React.FC = () => {
  const [tab, setTab] = useState("schedule");
  const [dayNum, setDayNum] = useState("day1");

  // useEffect (() => {
  //     handleSchedule();
  // }, []);

  const handleDayOne = () => {
    setDayNum("day1");
  };

  const handleDayTwo = () => {
    setDayNum("day2");
  };

  const handleSchedule = () => {
    setTab("schedule");
  };

  const handleLiveTalks = () => {
    setTab("liveTalks");
  };

  const handlePastRec = () => {
    setTab("pastRecordings");
  };

  return (
    <IonPage>
      <TopNav title="Programme Talks" route="/u/openHouseMain" backarrow={true} hamburger={true} />

      <IonContent fullscreen className="progTalkIonContent">
        <IonGrid id="progTalksGrid">
          <IonRow>
            <IonHeader className="segmentHeader">
              <IonToolbar className="segmentHeader">
                <IonSegment scrollable value={tab} className="segmentHeader">
                  <IonSegmentButton value="schedule" className="segmentBtn ion-text-wrap" id="progTalkSchedule" onClick={handleSchedule}>
                    Schedule
                  </IonSegmentButton>
                  <IonSegmentButton value="liveTalks" className="segmentBtn ion-text-wrap" id="progTalkLiveTalk" onClick={handleLiveTalks}>
                    Live Talks
                  </IonSegmentButton>
                  <IonSegmentButton value="pastRecordings" className="segmentBtn ion-text-wrap" id="progTalkPastRec" onClick={handlePastRec}>
                    Past Recordings
                  </IonSegmentButton>
                </IonSegment>
              </IonToolbar>
            </IonHeader>
          </IonRow>
        </IonGrid>

        {/* Programme Talks Schedule */}
        {tab === "schedule" ? (
          <>
            <IonGrid className="progTalk-IonRowCol progTalkIonGrid">
              <IonRow className="progTalk-IonRowCol">
                  <IonToolbar>
                    <IonSegment scrollable value={dayNum} onIonChange={(e) => console.log(`${e.detail.value}`)}>
                      <IonSegmentButton value="day1" onClick={() => handleDayOne()} className="progTalk-DayTab">
                        Day 1: 21 Nov 2020
                      </IonSegmentButton>
                      <IonSegmentButton value="day2" onClick={() => handleDayTwo()} className="progTalk-DayTab">
                        Day 2: 22 Nov 2020
                      </IonSegmentButton>
                    </IonSegment>
                  </IonToolbar>
              </IonRow>

              <IonRow>
                <IonHeader className="filterHeader">
                  <IonToolbar className="filterHeaderToolBar">
                    <IonButtons slot="end" id="filterIcon">
                      <IonButton>
                        <FontAwesomeIcon size="lg" icon={faFilter} />
                      </IonButton>
                    </IonButtons>
                  </IonToolbar>
                </IonHeader>
              </IonRow>
            </IonGrid>

            <ProgTalkSchedule day1={dayNum} day2={dayNum} />
          </>
        ) : (
            ""
          )}

        {/* Live Talks */}
        {tab === "liveTalks" ? (
          <>
            <IonGrid className="progTalk-IonRowCol progTalkIonGrid">
              <IonRow className="progTalk-IonRowCol">
                <IonCol className="progTalk-IonRowCol">
                  <IonToolbar>
                    <IonSegment scrollable value={dayNum} onIonChange={(e) => console.log(`${e.detail.value}`)}>
                      <IonSegmentButton value="day1" onClick={() => handleDayOne()} className="progTalk-DayTab">
                        Day 1: 21 Nov 2020
                      </IonSegmentButton>
                      <IonSegmentButton value="day2" onClick={() => handleDayTwo()} className="progTalk-DayTab">
                        Day 2: 22 Nov 2020
                      </IonSegmentButton>
                    </IonSegment>
                  </IonToolbar>
                </IonCol>
              </IonRow>
            </IonGrid>

            <ProgTalkLiveTalks day1={dayNum} day2={dayNum} />
          </>
        ) : (
            ""
          )}

        {/* Past Recordings */}
        {tab === "pastRecordings" ? (
          <>
            <IonGrid className="progTalk-IonRowCol progTalkIonGrid">
              <IonRow className="progTalk-IonRowCol">
                <IonCol className="progTalk-IonRowCol">
                  <IonToolbar>
                    <IonSegment scrollable value={dayNum} onIonChange={(e) => console.log(`${e.detail.value}`)}>
                      <IonSegmentButton value="day1" onClick={() => handleDayOne()} className="progTalk-DayTab">
                        Day 1: 21 Nov 2020
                      </IonSegmentButton>
                      <IonSegmentButton value="day2" onClick={() => handleDayTwo()} className="progTalk-DayTab">
                        Day 2: 22 Nov 2020
                      </IonSegmentButton>
                    </IonSegment>
                  </IonToolbar>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonHeader className="filterHeader">
                  <IonToolbar className="filterHeaderToolBar">
                    <IonButtons slot="end" id="filterIcon">
                      <IonButton>
                        <FontAwesomeIcon size="lg" icon={faFilter} />
                      </IonButton>
                    </IonButtons>
                  </IonToolbar>
                </IonHeader>
              </IonRow>
            </IonGrid>

            <ProgTalkPastRec day1={dayNum} day2={dayNum} />
          </>
        ) : (
            ""
          )}
      </IonContent>
    </IonPage>
  );
};

export default withRouter(ProgrammeTalks);

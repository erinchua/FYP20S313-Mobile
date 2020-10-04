import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonSegment, IonSegmentButton, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import '../../css/Global.css';
import '../../css/ProgrammeTalks.css';

import TopNav from '../../components/TopNav';
import ProgTalkSchedule from '../../components/OpenHouseProgrammes/ProgTalkSchedule';
import ProgTalkLiveTalks from '../../components/OpenHouseProgrammes/ProgTalkLiveTalks';
import ProgTalkPastRec from '../../components/OpenHouseProgrammes/ProgTalkPastRec';
import { db } from '../../firebase';

const ProgrammeTalks: React.FC = () => {
  const [tab, setTab] = useState("schedule");
  const [dayNum, setDayNum] = useState("day1");


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

  const [openhouseDates, setOpenhouseDates] = useState([])
  const [programmeTalk, setProgrammeTalk] = useState<any[]>([]);

  const liveTalk = programmeTalk.filter(talk => { return talk.isLive == true })
  const recordedTalk = programmeTalk.filter(talk => { return talk.hasRecording == true })

  useEffect(() => {
    const dates: any = [];

    db.collection("Openhouse")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const data = doc.get('day')
          data.forEach((day: any) => { dates.push(day.date) })
        });
        setOpenhouseDates(dates);
      })
      .catch((error) => console.log(error));

    db.collection("ProgrammeTalks")
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

  }, [])

  return (
    <IonPage>
      <IonHeader>
        <TopNav title="Programme Talks" route="/u/openHouseMain" backarrow={true} hamburger={true} />
      </IonHeader>
      
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

            <ProgTalkSchedule day1={dayNum} day2={dayNum} programmeTalk={programmeTalk} openhouseDates={openhouseDates} />
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

            <ProgTalkLiveTalks day1={dayNum} day2={dayNum} liveTalk={liveTalk} openhouseDates={openhouseDates} />
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

            <ProgTalkPastRec day1={dayNum} day2={dayNum} recordedTalk={recordedTalk} openhouseDates={openhouseDates} />
          </>
        ) : (
            ""
          )}
      </IonContent>
    </IonPage>
  );
};

export default withRouter(ProgrammeTalks);

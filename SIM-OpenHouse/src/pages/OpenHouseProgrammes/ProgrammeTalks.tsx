import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonPopover, IonRow, IonSegment, IonSegmentButton, IonToolbar } from '@ionic/react';
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
import FilterPopoverContent from '../../components/FilterPopoverContent';
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

  const [openhouseDates, setOpenhouseDates] = useState([]);
  const [programmeTalk, setProgrammeTalk] = useState<any[]>([]);

  const liveTalk = programmeTalk.filter(talk => { return talk.isLive === true })
  const recordedTalk = programmeTalk.filter(talk => { return talk.hasRecording === true })

  useEffect(() => {
    const dates: any = [];

    db.collection("Openhouse")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const data = doc.get('day')
          if (!Array.isArray(data)) {
            for (var i = 0; i < Object.keys(data).length; i++) {
              const date = data[Object.keys(data)[i]].date;
              dates.push(date)
            }
          }
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

  }, []);


  /* Display Filter Menu Popover */
  const [showProgTalkFilterPopover, setShowProgTalkFilterPopover] = useState<{ open: boolean, event: Event | undefined }>({
    open: false,
    event: undefined,
  });

  return (
    <IonPage>
      <IonHeader>
        <TopNav title="Programme Talks" route="/u/openHouseMain" backarrow={true} hamburger={true} />

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

      <IonContent fullscreen className="progTalkIonContent">

        {/* Programme Talks Schedule */}
        {tab === "schedule" ? (
          <>
            <IonGrid className="progTalk-IonRowCol progTalkIonGrid">
              <IonRow className="progTalk-IonRowCol">
                <IonToolbar>
                  <IonSegment scrollable value={dayNum} onIonChange={(e) => console.log(`${e.detail.value}`)}>
                    <IonSegmentButton value="day1" onClick={() => handleDayOne()} className="progTalk-DayTab">
                      Day 1: {openhouseDates[0]}
                    </IonSegmentButton>
                    <IonSegmentButton value="day2" onClick={() => handleDayTwo()} className="progTalk-DayTab">
                      Day 2: {openhouseDates[1]}
                    </IonSegmentButton>
                  </IonSegment>
                </IonToolbar>
              </IonRow>

              {/* Filter Button */}
              <IonRow>
                <IonHeader className="filterHeader">
                  <IonToolbar className="filterHeaderToolBar">
                    <IonButtons slot="end" id="filterIcon">
                      <IonButton onClick={(e) => { setShowProgTalkFilterPopover({ open: true, event: e.nativeEvent }) }}>
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
          )
        }

        {/* Live Talks */}
        {tab === "liveTalks" ? (
          <>
            <IonGrid className="progTalk-IonRowCol progTalkIonGrid">
              <IonRow className="progTalk-IonRowCol">
                <IonCol className="progTalk-IonRowCol">
                  <IonToolbar>
                    <IonSegment scrollable value={dayNum} onIonChange={(e) => console.log(`${e.detail.value}`)}>
                      <IonSegmentButton value="day1" onClick={() => handleDayOne()} className="progTalk-DayTab">
                        Day 1: {openhouseDates[0]}
                      </IonSegmentButton>
                      <IonSegmentButton value="day2" onClick={() => handleDayTwo()} className="progTalk-DayTab">
                        Day 2: {openhouseDates[1]}
                      </IonSegmentButton>
                    </IonSegment>
                  </IonToolbar>
                </IonCol>
              </IonRow>
            </IonGrid>

            <ProgTalkLiveTalks day1={dayNum} day2={dayNum} liveTalk={liveTalk} openhouseDates={openhouseDates} />
          </>
        ) : ("")
        }

        {/* Past Recordings */}
        {tab === "pastRecordings" ? (
          <>
            <IonGrid className="progTalk-IonRowCol progTalkIonGrid">
              <IonRow className="progTalk-IonRowCol">
                <IonCol className="progTalk-IonRowCol">
                  <IonToolbar>
                    <IonSegment scrollable value={dayNum} onIonChange={(e) => console.log(`${e.detail.value}`)}>
                      <IonSegmentButton value="day1" onClick={() => handleDayOne()} className="progTalk-DayTab">
                        Day 1: {openhouseDates[0]}
                      </IonSegmentButton>
                      <IonSegmentButton value="day2" onClick={() => handleDayTwo()} className="progTalk-DayTab">
                        Day 2: {openhouseDates[1]}
                      </IonSegmentButton>
                    </IonSegment>
                  </IonToolbar>
                </IonCol>
              </IonRow>


              {/* Filter Button */}
              <IonRow>
                <IonHeader className="filterHeader">
                  <IonToolbar className="filterHeaderToolBar">
                    <IonButtons slot="end" id="filterIcon">
                      <IonButton onClick={(e) => { setShowProgTalkFilterPopover({ open: true, event: e.nativeEvent }) }}>
                        <FontAwesomeIcon size="lg" icon={faFilter} />
                      </IonButton>
                    </IonButtons>
                  </IonToolbar>
                </IonHeader>
              </IonRow>
            </IonGrid>

            <ProgTalkPastRec day1={dayNum} day2={dayNum} recordedTalk={recordedTalk} openhouseDates={openhouseDates} />
          </>
        ) : ("")
        }


        {/* Filter Programmes Popover */}
        <IonPopover id="progCourseFilterPopover"
          cssClass='progCourseFilterPopover'
          isOpen={showProgTalkFilterPopover.open}
          event={showProgTalkFilterPopover.event}
          onDidDismiss={e => setShowProgTalkFilterPopover({ open: false, event: undefined })}
        >
          {tab === "schedule" ?
            <FilterPopoverContent filterFunction={() => (console.log('Add filterResults function here'))}
              params={""} href={"/u/openHouseMain/programmeTalks#schedule"} filterFor={"progTalk"} />
            : ''
          }

          {tab === "pastRecordings" ?
            <FilterPopoverContent filterFunction={() => (console.log('Add filterResults function here'))}
              params={""} href={"/u/openHouseMain/programmeTalks#pastRecordings"} filterFor={"progTalk"} />
            : ''
          }

        </IonPopover>


      </IonContent>
    </IonPage>
  );
};

export default withRouter(ProgrammeTalks);

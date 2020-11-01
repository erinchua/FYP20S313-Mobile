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
import FilterPopoverContent, { FilterCondition } from '../../components/FilterPopoverContent';
import { db } from '../../firebase';
import { TalkFilter } from '../../components/FilterPopoverContent'
import { useAuth } from '../../modules/auth';
import { ProgrammeTalk } from '../../modules/map'


const ProgrammeTalks: React.FC = () => {
	const { userID } = useAuth();

	const [tab, setTab] = useState("schedule");
	const [dayNum, setDayNum] = useState("day1");
	const [scheduleItems, setScheduleItems] = useState([]);

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
	const [initialProgtalk, setIntialProgTalk] = useState<any[]>([]);
	const [programmeTalk, setProgrammeTalk] = useState<any[]>([]);
	const [recordedTalk, setRecordedTalk] = useState<ProgrammeTalk[]>([]);
	const [liveTalk, setLiveTalk] = useState<ProgrammeTalk[]>([]);


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
				setIntialProgTalk(programmeTalk)
				setProgrammeTalk(programmeTalk);
			})
			.catch((error) => console.log(error));

		return db.collection('PersonalScheduler').doc(userID).onSnapshot(snap => {
			setScheduleItems(snap.data()?.registeredProgrammes);
		});

	}, []);

	useEffect(() => {
		const liveTalk = initialProgtalk.filter(talk => { return talk.isLive === true })
		const recordedTalk = initialProgtalk.filter(talk => { return talk.hasRecording === true })
		setRecordedTalk(recordedTalk)
		setLiveTalk(liveTalk)

	}, [initialProgtalk])

	/* Display Filter Menu Popover */
	const [showProgTalkFilterPopover, setShowProgTalkFilterPopover] = useState<{ open: boolean, event: Event | undefined }>({
		open: false,
		event: undefined,
	});

	//For Filters

	const [filterCondition, setFilterCondition] = useState<FilterCondition>({
		mos: [],
		discipline: ['Arts & Social Sciences', 'Business', 'IT & Computer Science', 'Nursing', 'Specialty'],
		uni: [],
		acadLvl: [],
		entry: [],
		subDisc: []
	})

	const updateScheduleTalks = (data: ProgrammeTalk[]) => {
		setProgrammeTalk(data)
	}

	const updateRecTalks = (data: ProgrammeTalk[]) => {
		setRecordedTalk(data)
	}


	const filterTalks = async (condition: TalkFilter, callback: any) => {

		const initialList: ProgrammeTalk[] = []
		let filteredList: ProgrammeTalk[] = []
		let segmentFilter: ProgrammeTalk[] = []
		console.log("In filterProgrammes, inputs:" + JSON.stringify(condition))
		await db.collection('ProgrammeTalks')
			.get()
			.then(snapshot => {
				snapshot.docs.forEach((doc: any) => {
					const data = doc.data()
					console.log(JSON.stringify(data))
					initialList.push(data)
				})
			})
		console.log(initialList.length + JSON.stringify(initialList))
		Object.entries(condition).map(([key, value]) => {
			if (key == 'discipline') {
				let discFiltered: ProgrammeTalk[] = []
				if (value.length > 0 && value.length <= 4) {
					console.log("Entered discipline filter")
					value.forEach((value: string) => {
						segmentFilter = initialList.filter(programme => programme.discipline.includes(value))
						console.log("filtering discipline" + value + segmentFilter.length + JSON.stringify(segmentFilter))
						discFiltered = discFiltered.concat(segmentFilter)
					})
					filteredList = discFiltered
				}
				else {
					filteredList = initialList
				}

			}

			else if (key == 'uni') {
				let uniFiltered: ProgrammeTalk[] = []
				if (value.length > 0) {
					value.forEach((value: string) => {
						segmentFilter = filteredList.filter(programme => programme.awardingUni == value)
						console.log("filtering uni" + value + segmentFilter.length + JSON.stringify(segmentFilter))
						uniFiltered = uniFiltered.concat(segmentFilter)
					})
					filteredList = uniFiltered
				}
			}

		}
		)
		// console.log("New List are " + filteredList.length + JSON.stringify(filteredList))
		callback(filteredList)

	}

	const filterRecTalks = async (condition: TalkFilter, callback: any) => {

		const initialList: ProgrammeTalk[] = []
		let filteredList: ProgrammeTalk[] = []
		let segmentFilter: ProgrammeTalk[] = []
		console.log("In filterProgrammes, inputs:" + JSON.stringify(condition))
		await db.collection('ProgrammeTalks')
			.where("hasRecording", '==', true)
			.get()
			.then(snapshot => {
				snapshot.docs.forEach((doc: any) => {
					const data = doc.data()
					console.log(JSON.stringify(data))
					initialList.push(data)
				})
			})
		console.log(initialList.length + JSON.stringify(initialList))
		Object.entries(condition).map(([key, value]) => {
			if (key == 'discipline') {
				let discFiltered: ProgrammeTalk[] = []
				if (value.length > 0 && value.length <= 4) {
					console.log("Entered discipline filter")
					value.forEach((value: string) => {
						segmentFilter = initialList.filter(programme => programme.discipline.includes(value))
						console.log("filtering discipline" + value + segmentFilter.length + JSON.stringify(segmentFilter))
						discFiltered = discFiltered.concat(segmentFilter)
					})
					filteredList = discFiltered
				}
				else {
					filteredList = initialList
				}

			}

			else if (key == 'uni') {
				let uniFiltered: ProgrammeTalk[] = []
				if (value.length > 0) {
					value.forEach((value: string) => {
						segmentFilter = filteredList.filter(programme => programme.awardingUni == value)
						console.log("filtering uni" + value + segmentFilter.length + JSON.stringify(segmentFilter))
						uniFiltered = uniFiltered.concat(segmentFilter)
						// console.log("current list" + JSON.stringify(filteredList))
					})
					filteredList = uniFiltered
				}
			}

		}
		)
		// console.log("New List are " + filteredList.length + JSON.stringify(filteredList))
		callback(filteredList)

	}

	const onUpdateFilter = (mosFilter: string[], discFilter: string[], uniFilter: string[], acadLvlFilter: string[], entryFilter: string[], subDiscFilter: string[]) => {

		setFilterCondition(prevState => {
			let filter = { ...prevState };
			Object.keys(filter).map(key => {
				if (key == 'mos')
					filter[key] = mosFilter;
				if (key == 'discipline')
					filter[key] = discFilter;
				if (key == 'uni')
					filter[key] = uniFilter;
				if (key == 'acadLvl')
					filter[key] = acadLvlFilter;
				if (key == 'entry')
					filter[key] = entryFilter;
				if (key == 'subDisc')
					filter[key] = subDiscFilter;
			})
			return filter;
		})
	}

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

						<ProgTalkSchedule day1={dayNum} day2={dayNum} programmeTalk={programmeTalk} openhouseDates={openhouseDates} scheduleItems={scheduleItems} />
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
					cssClass='progTalkFilterPopover'
					isOpen={showProgTalkFilterPopover.open}
					event={showProgTalkFilterPopover.event}
					onDidDismiss={e => setShowProgTalkFilterPopover({ open: false, event: undefined })}
				>
					{tab === "schedule" ?
						<FilterPopoverContent filterFunction={filterTalks} programmes={programmeTalk} filterFor={"progTalk@SIM"} filterCondition={filterCondition} setState={updateScheduleTalks} onUpdateFilter={onUpdateFilter} discipline="" category="" />

						: ''
					}

					{tab === "pastRecordings" ?
						<FilterPopoverContent filterFunction={filterRecTalks} programmes={recordedTalk} filterFor={"progTalk@SIM"} filterCondition={filterCondition} setState={updateRecTalks} onUpdateFilter={onUpdateFilter} discipline="" category="" />

						: ''
					}

				</IonPopover>


			</IonContent>
		</IonPage>
	);
};

export default withRouter(ProgrammeTalks);

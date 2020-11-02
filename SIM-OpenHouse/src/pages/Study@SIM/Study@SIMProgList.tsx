import { IonAlert, IonBadge, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonPage, IonPopover, IonRouterLink, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faFilter } from '@fortawesome/free-solid-svg-icons';

import '../../css/Global.css';
import '../../css/Study@SIMProgList.css';
import TopNav from '../../components/TopNav';
import CompareProgPopoverContent from '../../components/Study@SIM/CompareProgPopoverContent';
import FilterPopoverContent from '../../components/FilterPopoverContent';
import { db } from '../../firebase';
import { Programme } from '../../modules/map';
import { FilterCondition } from '../../components/FilterPopoverContent'

interface StudySIMProgList_Props extends RouteComponentProps<{
    discipline: string;
    category: string;
}> { }

interface myProps {
    compareProgList: Programme[],
    onCompareProgListChange: (programmes: Programme[]) => void
}
const StudySIMProgList: React.FC<myProps & StudySIMProgList_Props> = (props) => {

    console.log(props);
    const { match } = props;
    const discipline = match.params.discipline
    const category = match.params.category

    const [disciplineName, setDisciplineName] = useState([
        'Arts & Social Sciences',
        'Business',
        'IT & Computer Science',
        'Nursing',
        'Specialty'
    ]);

    const [filterCondition, setFilterCondition] = useState<FilterCondition>({
        mos: ['fullPartTime', 'partTime', 'fullTime'],
        discipline: [discipline],
        uni: [],
        acadLvl: [category],
        entry: [],
        subDisc: []
    })

    const onUpdateFilter = (mosFilter: string[], discFilter: string[], uniFilter: string[], acadLvlFilter: string[], entryFilter: string[], subDiscFilter: string[]) => {
        setFilterCondition(prevState => {
            let filter = { ...prevState };
            Object.keys(filter).map(key => {
                if (key === 'mos')
                    filter[key] = mosFilter;
                if (key === 'discipline')
                    filter[key] = discFilter;
                if (key === 'uni')
                    filter[key] = uniFilter;
                if (key === 'acadLvl')
                    filter[key] = acadLvlFilter;
                if (key === 'entry')
                    filter[key] = entryFilter;
                if (key === 'subDisc')
                    filter[key] = subDiscFilter;
            })
            return filter;
        })
    }

    //programmes to be rendered and the comparepopover list
    const [programmes, setProgrammes] = useState<Programme[]>([])
    const [compareProgList, setCompareProgList] = useState<Programme[]>([])

    //To get the unique disciplines for rendering at the header
    const allDisc = programmes.map(programme => programme.discipline)
    const disc: string[] = []
    allDisc.map(data => data.map(data => disc.push(data)))
    let uniqueDisc: string[] = [...new Set(disc)]

    //For storing the compare list into session
    useEffect(() => {
        return () => {
            window.sessionStorage.setItem("compareProgList", JSON.stringify(compareProgList));
        }
    }, [compareProgList])

    /* Adding programme for comparison - Need to be generated dynamically */
    const compareProgramme = (programme: Programme) => {
        const newProgList = [...compareProgList]
        const newProgID = programme.id

        if (newProgList.length < 3) {
            if (newProgList.includes(programme)) {
                const updatedProgList = newProgList.filter(existingProg => { return existingProg.id !== newProgID })
                setCompareProgList(updatedProgList)
            }
            else {
                newProgList.push(programme)
                setCompareProgList(newProgList)
            }
        }
        else {

            if (newProgList.includes(programme)) {
                const updatedProgList = newProgList.filter(existingProg => { return existingProg.id != newProgID })
                setCompareProgList(updatedProgList)
            }
            else {
                setShowCompareProgAlert(true);
            }

        }
    };

    const filterProgrammes = async (condition: FilterCondition) => {

        const initialList: Programme[] = []
        let filteredList: Programme[] = []
        let segmentFilter: Programme[] = []
        console.log("In filterProgrammes, inputs:" + JSON.stringify(condition))
        await db.collection('TestProgrammes')
            .get()
            .then(snapshot => {
                snapshot.docs.forEach((doc: any) => {
                    const data = doc.data()
                    initialList.push(data)
                })
            })
        console.log(initialList.length + JSON.stringify(initialList))
        Object.entries(condition).map(([key, value]) => {
            if (key === 'mos') {
                if (value.length < 3 && value.length > 0) {
                    value.forEach((value: string) => {
                        if (value === 'fullPartTime') {
                            segmentFilter = initialList.filter(programme => programme.modeOfStudy.fullTime && programme.modeOfStudy.partTime)
                            console.log("filtering full and part time" + segmentFilter.length)
                            filteredList = filteredList.concat(segmentFilter)
                            console.log("Current filtered list" + filteredList.length + JSON.stringify(filteredList))


                        }
                        if (value === 'fullTime') {
                            segmentFilter = initialList.filter(programme => programme.modeOfStudy.fullTime && !programme.modeOfStudy.partTime)
                            console.log("filtering full time" + segmentFilter.length)
                            filteredList = filteredList.concat(segmentFilter)

                        }
                        if (value === 'partTime') {
                            segmentFilter = initialList.filter(programme => !programme.modeOfStudy.fullTime && programme.modeOfStudy.partTime)
                            console.log("filtering part time" + segmentFilter.length)
                            filteredList = filteredList.concat(segmentFilter)

                        }
                    })
                }
                else if (value.length === 0 || value.length === 3) {
                    filteredList = initialList
                }
            }
            else if (key === 'discipline') {
                let discFiltered: Programme[] = []
                if (value.length > 0 && value.length <= 4) {
                    console.log("Entered discipline filter")
                    value.forEach((value: string) => {
                        segmentFilter = filteredList.filter(programme => programme.discipline.includes(value))
                        console.log("filtering discipline" + value + segmentFilter.length + JSON.stringify(segmentFilter))
                        discFiltered = discFiltered.concat(segmentFilter)
                    })
                    filteredList = discFiltered
                }

            }

            else if (key === 'uni') {
                let uniFiltered: Programme[] = []
                if (value.length > 0) {
                    value.forEach((value: string) => {
                        segmentFilter = filteredList.filter(programme => programme.awardedBy == value)
                        console.log("filtering uni" + value + segmentFilter.length + JSON.stringify(segmentFilter))
                        uniFiltered = uniFiltered.concat(segmentFilter)
                        // console.log("current list" + JSON.stringify(filteredList))
                    })
                    filteredList = uniFiltered
                }
            }
            else if (key === 'acadLvl') {
                let acadFiltered: Programme[] = []
                if (value.length > 0) {
                    value.forEach((value: string) => {
                        segmentFilter = filteredList.filter(programme => programme.academicLevel === value)
                        console.log("filtering acadLvl" + value + segmentFilter.length + JSON.stringify(segmentFilter))
                        acadFiltered = acadFiltered.concat(segmentFilter)
                    })
                    filteredList = acadFiltered
                }
            }

            else if (key === 'entry') {
                let entryFiltered: Programme[] = []
                if (value.length > 0) {
                    value.forEach((value: string) => {
                        if (value === 'aLevel') {
                            segmentFilter = filteredList.filter(programme => programme.entryQualifications.aLevel)
                            console.log("Filering " + value + segmentFilter.length + JSON.stringify(segmentFilter))
                            entryFiltered = entryFiltered.concat(segmentFilter)
                        }
                        else if (value === 'oLevel') {
                            segmentFilter = filteredList.filter(programme => programme.entryQualifications.oLevel)
                            console.log("Filering " + value + segmentFilter.length + JSON.stringify(segmentFilter))
                            entryFiltered = entryFiltered.concat(segmentFilter)
                        }
                        else if (value === 'diploma') {
                            segmentFilter = filteredList.filter(programme => programme.entryQualifications.diploma)
                            console.log("Filering " + value + segmentFilter.length + JSON.stringify(segmentFilter))
                            entryFiltered = entryFiltered.concat(segmentFilter)
                        }
                        else if (value === 'degree') {
                            segmentFilter = filteredList.filter(programme => programme.entryQualifications.degree)
                            console.log("Filering " + value + segmentFilter.length + JSON.stringify(segmentFilter))
                            entryFiltered = entryFiltered.concat(segmentFilter)
                        }
                    })
                    filteredList = entryFiltered
                }
            }
            else if (key === 'subDisc') {
                let subDiscFiltered: Programme[] = []
                if (value.length > 0) {
                    value.forEach((value: string) => {
                        segmentFilter = filteredList.filter(programme => programme.subDiscipline.includes(value))
                        console.log("Filering subDisc" + value + segmentFilter.length + JSON.stringify(segmentFilter))
                        subDiscFiltered = subDiscFiltered.concat(segmentFilter)
                    })
                    filteredList = subDiscFiltered

                }
            }
        }
            //newList.filter(programme=>{return programme.modeOfStudy})
        )
        console.log("New List are " + filteredList.length + JSON.stringify(filteredList))
        setProgrammes(filteredList)

    }

    /*To remove selected programmes in comparePopOver */
    const removeProg = (programme: Programme) => {
        const newProgList = [...compareProgList]
        const newProgID = programme.id
        const updatedProgList = newProgList.filter(programme => { return programme.id !== newProgID })
        setCompareProgList(updatedProgList)

    }
    /*To remove all selected programmes in comparePopOver */
    const removeAllProg = (programmes: Programme[]) => {
        const newProgList = [...compareProgList]
        const updatedProgList = newProgList.filter(programme => { return programme.id === '' })
        setCompareProgList(updatedProgList)

    }


    /* Display Compare Prog Popover */
    const [showCompareProgPopover, setShowCompareProgPopover] = useState<{ open: boolean, event: Event | undefined }>({
        open: false,
        event: undefined,
    });

    /* "If no prog is added to compare" Alert */
    const [showCompareProgAlert, setShowCompareProgAlert] = useState(false);

    /* Display Filter Menu Popover */
    const [showProgCourseFilterPopover, setShowProgCourseFilterPopover] = useState<{ open: boolean, event: Event | undefined }>({
        open: false,
        event: undefined,
    });

    /* When page first load */
    useEffect(() => {
        //console.log("proglist rendered")

        /*Fetching Programmes Data from firestore*/
        const fetchData = async (discipline: string, category: string) => {
            const programmes: any = []
            await db.collection('TestProgrammes')
                .where("discipline", "array-contains", match.params.discipline)
                .where("academicLevel", '==', match.params.category)
                .get()
                .then((snapshot: any) => {
                    snapshot.docs.forEach((doc: any) => {
                        const data = doc.data()
                        programmes.push(data)
                        console.log("programme retrieved " + data)
                    })
                    setProgrammes(programmes)
                }).catch((error) => console.log(error));

        }

        fetchData(match.params.discipline, match.params.category)

        const sessionList: Programme[] = window.sessionStorage.compareProgList ? JSON.parse(window.sessionStorage.compareProgList) : [];
        console.log("Session list retrieved! " + sessionList)
        setCompareProgList(sessionList);
    }, [])

    return (
        <React.Fragment>
            {console.log("disc are" + disc + disc.length)}
            {console.log("uniqueDisc are" + uniqueDisc)}
            <IonAlert
                isOpen={showCompareProgAlert}
                onDidDismiss={() => setShowCompareProgAlert(false)}
                cssClass='alertBox'
                mode='md'
                message={'You may compare up to 3 programmes at a time by tapping on the Compare button of the programme(s).'}
                buttons={['OK']}
            ></IonAlert>


            <IonPage>
                <IonHeader>
                    <TopNav title="Study@SIM" route='/u/study@SIMMain' backarrow={true} hamburger={true} />

                    <IonToolbar id="studySIMProgListHeaderToolbar">
                        <IonGrid style={{ padding: "0" }}>
                            <IonRow id="studySIMProgListHeaderRow" class="ion-align-items-center">
                                <IonCol size="6" sizeSm="6" class="ion-text-left" className="studySIMProgListCol" style={{ paddingLeft: "3%" }}>
                                    <IonTitle className="studyProgListTitle">
                                        {uniqueDisc.length === 1 ? uniqueDisc.map(disc => {
                                            return (<div key={disc} className="ion-text-wrap">{disc}</div>)
                                        }) : ''}

                                    </IonTitle>
                                </IonCol>

                                <IonCol size="4" sizeSm="4" class="ion-text-right" className="studySIMProgListCol">
                                    <IonButton id="compareBtn" fill="clear" onClick={(e) => {
                                        if (compareProgList.length < 1 || compareProgList.length > 3) {
                                            setShowCompareProgAlert(true);
                                        } else {
                                            setShowCompareProgPopover({ open: true, event: e.nativeEvent })
                                        }
                                    }
                                    }>
                                        <IonLabel className="compareLabel">Compare</IonLabel>
                                        <IonBadge id="compareBadge">{compareProgList.length}</IonBadge>
                                    </IonButton>
                                </IonCol>

                                <IonCol size="2" sizeSm="2" class="ion-text-center" className="studySIMProgListCol">
                                    <IonButton id="filterBtn" fill="clear" onClick={(e) => {
                                        setShowProgCourseFilterPopover({ open: true, event: e.nativeEvent })
                                    }
                                    }>
                                        <FontAwesomeIcon className="filterIcon" size="lg" icon={faFilter} />
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonToolbar>

                </IonHeader>

                <IonContent fullscreen={true} id="studySIMProgListContent">
                    <IonGrid id="studySIMProgListGrid">

                        {/* Programme List */}
                        {programmes ?
                            programmes.map((programme: Programme) => {
                                return (
                                    <div key={programme.id}>
                                        <>
                                            <IonRow className="studySIMProgListRow" class="ion-align-items-center">
                                                <IonCol size="4" sizeSm="4" class="ion-text-center">
                                                    <img src={programme.uniLogo} className="studyProgUniImg"></img>
                                                </IonCol>

                                                <IonCol size="8" sizeSm="8" className="studySIMProgListColDetails" class="ion-text-left">
                                                    {/* Programme Title */}
                                                    <IonRow className="progCourseRow">
                                                        {/* <IonRouterLink id="progCourseTitleLink" href={`/u/study@SIMMain/Study@SIMProgInfo/${programme.id}`}> */}
                                                        <IonRouterLink id="progCourseTitleLink" href={`/u/study@SIMMain/Study@SIMProgInfo/${programme.id}/${discipline}/${category}`}>
                                                            <IonTitle className="progCourseTitle">
                                                                <div className="ion-text-wrap">{programme.programmeTitle}</div>
                                                            </IonTitle>
                                                        </IonRouterLink>
                                                    </IonRow>

                                                    {/* Awarding Uni */}
                                                    <IonRow className="progCourseRow">
                                                        <IonCol size="4" sizeSm="4" class="ion-text-left" className="progCourseAwardingUniCol">
                                                            <IonLabel className="progCourseAwardingUniLabel">
                                                                <div className="ion-text-wrap">Awarded by:</div>
                                                            </IonLabel>
                                                        </IonCol>

                                                        <IonCol size="8" sizeSm="8" class="ion-text-left" className="progCourseAwardingUniCol">
                                                            <IonLabel className="progCourseAwardingUniName">
                                                                <div className="ion-text-wrap">{programme.awardedBy}</div>
                                                            </IonLabel>
                                                        </IonCol>
                                                    </IonRow>

                                                    <IonRow className="progCompareBtnRow">
                                                        <IonCol size="12" sizeSm="12" class="ion-text-right" className="progCompareBtnCol">
                                                            {compareProgList.includes(programme) ?
                                                                <IonButton className="progCompareBtnSelected" size="small" type="submit" onClick={e => compareProgramme(programme)}>Compared
                                                    <FontAwesomeIcon style={{ paddingLeft: "3%" }} icon={faCheck} />
                                                                </IonButton>
                                                                :
                                                                (<IonButton className="progCompareBtn" size="small" type="submit" onClick={e => compareProgramme(programme)}>Compare</IonButton>)
                                                            }

                                                        </IonCol>
                                                    </IonRow>
                                                </IonCol>
                                            </IonRow>
                                        </></div>
                                )
                            })

                            : ''
                        }

                    </IonGrid>

                    {/* Compare Programme Popover */}
                    <IonPopover id="compareProgPopover"
                        cssClass='compareProgPopover'
                        isOpen={showCompareProgPopover.open}
                        event={showCompareProgPopover.event}
                        onDidDismiss={e => setShowCompareProgPopover({ open: false, event: undefined })}
                    >
                        <CompareProgPopoverContent compareProgList={compareProgList} removeProg={removeProg} removeAllProg={removeAllProg} viewResults={() => (console.log('Add viewResults function here'))}
                            href={`/u/study@SIMMain/${props.match.params.discipline}/${props.match.params.category}/courseComparator`} />

                    </IonPopover>


                    {/* Filter Programmes Popover */}
                    <IonPopover id="progCourseFilterPopover"
                        cssClass='progCourseFilterPopover'
                        isOpen={showProgCourseFilterPopover.open}
                        event={showProgCourseFilterPopover.event}
                        onDidDismiss={e => setShowProgCourseFilterPopover({ open: false, event: undefined })}
                    >
                        <FilterPopoverContent filterFunction={filterProgrammes} programmes={programmes} filterFor={"study@SIM"} filterCondition={filterCondition} onUpdateFilter={onUpdateFilter} discipline={discipline} category={category} setState="" />
                    </IonPopover>
                </IonContent>

            </IonPage>
        </React.Fragment>
    );
};

export default StudySIMProgList;
import { IonAlert, IonBadge, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonPage, IonPopover, IonRouterLink, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useEffect, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faFilter } from '@fortawesome/free-solid-svg-icons';

import '../../css/Global.css';
import '../../css/Study@SIMProgList.css';
import TopNav from '../../components/TopNav';
import CompareProgPopoverContent from '../../components/Study@SIM/CompareProgPopoverContent';
import FilterPopoverContent from '../../components/FilterPopoverContent';
import { db } from '../../firebase';
import { Programme } from './Study@SIMProgInfo';
import { FilterCondition } from '../../components/FilterPopoverContent'
import { filter } from 'ionicons/icons';

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

    // const [progList, setProgList] = useContext(ProgListContext);

    const [disciplineName, setDisciplineName] = useState([
        'Art & Social Sciences',
        'Business',
        'IT & Computer Science',
        'Nursing',
        'Speciality'
    ]);







    const [programmes, setProgrammes] = useState<Programme[]>([])
    const [compareProgList, setCompareProgList] = useState<Programme[]>([])

    //For storing the compare list into session
    useEffect(() => {
        return () => {
            window.sessionStorage.setItem("compareProgList", JSON.stringify(compareProgList));
        }
    }, [compareProgList])


    {/* Adding programme for comparison - Need to be generated dynamically */ }
    const compareProgramme = (programme: Programme) => {
        const newProgList = [...compareProgList]
        const newProgID = programme.id

        if (newProgList.length < 3) {
            if (newProgList.includes(programme)) {
                const updatedProgList = newProgList.filter(existingProg => { return existingProg.id != newProgID })
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

        const newList: Programme[] = []
        console.log("In filterProgrammes, inputs:" + JSON.stringify(condition))
        await db.collection('TestProgrammes')
            .get()
            .then(snapshot => {
                snapshot.docs.forEach((doc: any) => {
                    const data = doc.data()
                    newList.push(data)
                })
                // setProgrammes(newList)
            })
        console.log(JSON.stringify(newList))
        Object.entries(condition).map(([key, value]) => {
            if (key == 'mos') {
                if (value.length < 3) {
                    value.forEach((value: string) => {
                        if (value == 'fullPartTime')
                            newList.filter(programme => { return (programme.modeOfStudy.ModeOfStudy.fullTime && programme.modeOfStudy.ModeOfStudy.partTime) === true })
                        if (value == 'fullTime')
                            newList.filter(programme => { return (programme.modeOfStudy.ModeOfStudy.fullTime && !programme.modeOfStudy.ModeOfStudy.partTime) === true })
                        if (value == 'partTime')
                            newList.filter(programme => { return (!programme.modeOfStudy.ModeOfStudy.fullTime && programme.modeOfStudy.ModeOfStudy.partTime) === true })
                    })
                }
            }
        }
            //newList.filter(programme=>{return programme.modeOfStudy})
        )
        console.log("New List are " + JSON.stringify(newList))




    }
    /*To remove selected programmes in comparePopOver */
    const removeProg = (programme: Programme) => {
        const newProgList = [...compareProgList]
        const newProgID = programme.id
        const updatedProgList = newProgList.filter(programme => { return programme.id != newProgID })
        setCompareProgList(updatedProgList)

    }
    /*To remove all selected programmes in comparePopOver */
    const removeAllProg = (programmes: Programme[]) => {
        const newProgList = [...compareProgList]
        const updatedProgList = newProgList.filter(programme => { return programme.id == '' })
        setCompareProgList(updatedProgList)

    }


    {/* Display Compare Prog Popover */ }
    const [showCompareProgPopover, setShowCompareProgPopover] = useState<{ open: boolean, event: Event | undefined }>({
        open: false,
        event: undefined,
    });

    {/* "If no prog is added to compare" Alert */ }
    const [showCompareProgAlert, setShowCompareProgAlert] = useState(false);

    {/* Display Filter Menu Popover */ }
    const [showProgCourseFilterPopover, setShowProgCourseFilterPopover] = useState<{ open: boolean, event: Event | undefined }>({
        open: false,
        event: undefined,
    });

    {/* When page first load */ }
    useEffect(() => {

        {/*Fetching Programmes Data from firestore*/ }
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
            {console.log("Current proglist are: " + JSON.stringify(compareProgList))}
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
                                        {match.params.discipline === 'artSocialSciences' ?
                                            <div className="ion-text-wrap">{disciplineName[0]}</div>
                                            : ''
                                        }

                                        {match.params.discipline === 'business' ?
                                            <div className="ion-text-wrap">{disciplineName[1]}</div>
                                            : ''
                                        }

                                        {match.params.discipline === 'itComputerScience' ?
                                            <div className="ion-text-wrap">{disciplineName[2]}</div>
                                            : ''
                                        }

                                        {match.params.discipline === 'nursing' ?
                                            <div className="ion-text-wrap">{disciplineName[3]}</div>
                                            : ''
                                        }

                                        {match.params.discipline === 'speciality' ?
                                            <div className="ion-text-wrap">{disciplineName[4]}</div>
                                            : ''
                                        }

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
                        {props.match.params.discipline === "artSocialSciences" ?
                            <FilterPopoverContent filterFunction={filterProgrammes}
                                params={match.params.discipline === "artSocialSciences"} href={"/u/study@SIMMain/artSocialSciences"} filterFor={"study@SIM"} discipline={discipline} category={category} />
                            : ''
                        }

                        {match.params.discipline === "business" ?
                            <FilterPopoverContent filterFunction={() => (console.log('Add filterResults function here'))}
                                params={match.params.discipline === "business"} href={"/u/study@SIMMain/business/test"} filterFor={"study@SIM"} discipline={discipline} category={category} />
                            : ''
                        }

                        {match.params.discipline === "itComputerScience" ?
                            <FilterPopoverContent filterFunction={() => (console.log('Add filterResults function here'))}
                                params={match.params.discipline === "itComputerScience"} href={"/u/study@SIMMain/itComputerScience"} filterFor={"study@SIM"} discipline={discipline} category={category} />
                            : ''
                        }

                        {match.params.discipline === "nursing" ?
                            <FilterPopoverContent filterFunction={() => (console.log('Add filterResults function here'))}
                                params={match.params.discipline === "nursing"} href={"/u/study@SIMMain/nursing"} filterFor={"study@SIM"} discipline={discipline} category={category} />
                            : ''
                        }

                        {match.params.discipline === "speciality" ?
                            <FilterPopoverContent filterFunction={() => (console.log('Add filterResults function here'))}
                                params={match.params.discipline === "speciality"} href={"/u/study@SIMMain/speciality"} filterFor={"study@SIM"} discipline={discipline} category={category} />
                            : ''
                        }

                    </IonPopover>


                </IonContent>

            </IonPage>
        </React.Fragment>
    );
};

export default StudySIMProgList;
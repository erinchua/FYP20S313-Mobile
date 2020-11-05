import { IonBadge, IonButton, IonCheckbox, IonCol, IonFooter, IonGrid, IonIcon, IonItem, IonLabel, IonList, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react';
import '../css/Global.css';
import '../css/FilterPopoverContent.css';
import { chevronDownOutline, chevronUpOutline } from 'ionicons/icons';
import { db } from '../firebase';
import { Programme, ProgrammeTalk, ProgrammeFilter, TalkFilter } from '../modules/map';

interface myProps {
    filterFunction: any;
    filterFor: any;
    discipline: string;
    category: string;
    filterCondition: ProgrammeFilter | TalkFilter;
    onUpdateFilter: any;
    setState: any;
    programmes: Programme[] | ProgrammeTalk[];
}



const FilterPopoverContent: React.FC<myProps> = props => {

    //Full list of filter options
    const mosFilter: string[] = ['fullPartTime', 'partTime', 'fullTime']
    const [discFilter, setDiscFilter] = useState<string[]>([])
    const [subDiscFilter, setSubDiscFilter] = useState<string[]>([])
    const [uniFilter, setUniFilter] = useState<string[]>([])
    const acadlvlFilter: string[] = ['Diploma', 'Bachelor', 'Masters']
    const entryFilter: string[] = ['aLevel', 'oLevel', 'degree', 'diploma']

    //Current selected filters
    const currentMosFilter = useRef<string[]>([])
    currentMosFilter.current= (props.filterCondition as ProgrammeFilter).mos

    const currentDiscFilter = useRef<string[]>([])
    currentDiscFilter.current = props.filterCondition.discipline

    const currentSubDiscFilter = useRef<string[]>([])
    currentSubDiscFilter.current= (props.filterCondition as ProgrammeFilter).subDisc

    const currentUniFilter = useRef<string[]>([])
    currentUniFilter.current = props.filterCondition.uni

    const currentAcadlvlFilter = useRef<string[]>([])
    currentAcadlvlFilter.current= (props.filterCondition as ProgrammeFilter).acadLvl

    const currentEntryFilter = useRef<string[]>([])
    currentEntryFilter.current= (props.filterCondition as ProgrammeFilter).entry

    //When filter first render
    useEffect(() => {

        //fetch initial list of options (disciplines,subDisciplines,universities)
        const fetchData = async () => {
            let retrievedList: string[] = []
            await db.collection('Disciplines')
                .get()
                .then(snapshot => {
                    snapshot.docs.forEach(doc => {
                        const data = doc.get('name')
                        retrievedList.push(data)
                    })
                    setDiscFilter(retrievedList)
                })
            retrievedList = []
            await db.collection('SubDisciplines')
                .get()
                .then(snapshot => {
                    snapshot.docs.forEach(doc => {
                        const data = doc.get('name')
                        retrievedList.push(data)
                    })
                    setSubDiscFilter(retrievedList)
                })
            retrievedList = []

            await db.collection('Universities')
                .get()
                .then(snapshot => {
                    snapshot.docs.forEach(doc => {
                        const data = doc.get('universityName')
                        retrievedList.push(data)
                    })
                    setUniFilter(retrievedList)
                })
        }

        fetchData();

    }, [])

    /* Display Mode of Study Filters */
    const MOSInfo = useRef<HTMLIonRowElement>(null);
    const showMOSIcon = useRef<HTMLIonIconElement>(null);

    const displayMOSInfoCol = () => {
        MOSInfo.current!.hidden = !MOSInfo.current!.hidden;
        if (showMOSIcon.current!.icon === chevronDownOutline)
            showMOSIcon.current!.icon = chevronUpOutline;
        else
            showMOSIcon.current!.icon = chevronDownOutline;
    };

    /* Display Discipline Filters */ 
    const disciplineInfo = useRef<HTMLIonRowElement>(null);
    const showDisciplineIcon = useRef<HTMLIonIconElement>(null);

    const displayDisciplineInfoCol = () => {
        disciplineInfo.current!.hidden = !disciplineInfo.current!.hidden;
        if (showDisciplineIcon.current!.icon === chevronDownOutline)
            showDisciplineIcon.current!.icon = chevronUpOutline;
        else
            showDisciplineIcon.current!.icon = chevronDownOutline;
    };

    /* Display Uni Partners Filters */
    const uniPartnerInfo = useRef<HTMLIonRowElement>(null);
    const showUniPartnerIcon = useRef<HTMLIonIconElement>(null);

    const displayUniPartnerInfoCol = () => {
        uniPartnerInfo.current!.hidden = !uniPartnerInfo.current!.hidden;
        if (showUniPartnerIcon.current!.icon === chevronDownOutline)
            showUniPartnerIcon.current!.icon = chevronUpOutline;
        else
            showUniPartnerIcon.current!.icon = chevronDownOutline;
    };

    /* Display Academic Level Filters */
    const academicLvlInfo = useRef<HTMLIonRowElement>(null);
    const showAcademicLvlIcon = useRef<HTMLIonIconElement>(null);

    const displayAcademicLvlInfoCol = () => {
        academicLvlInfo.current!.hidden = !academicLvlInfo.current!.hidden;
        if (showAcademicLvlIcon.current!.icon === chevronDownOutline)
            showAcademicLvlIcon.current!.icon = chevronUpOutline;
        else
            showAcademicLvlIcon.current!.icon = chevronDownOutline;
    };

    {/* Display Entry Qualifications Filters */ }
    const entryQualInfo = useRef<HTMLIonRowElement>(null);
    const showEntryQualIcon = useRef<HTMLIonIconElement>(null);

    const displayEntryQualInfoCol = () => {
        entryQualInfo.current!.hidden = !entryQualInfo.current!.hidden;
        if (showEntryQualIcon.current!.icon === chevronDownOutline)
            showEntryQualIcon.current!.icon = chevronUpOutline;
        else
            showEntryQualIcon.current!.icon = chevronDownOutline;
    };

    /* Display Sub Disciplines Filters */
    const subDisciplineInfo = useRef<HTMLIonRowElement>(null);
    const showSubDisciplineIcon = useRef<HTMLIonIconElement>(null);

    const displaySubDisciplineInfoCol = () => {
        subDisciplineInfo.current!.hidden = !subDisciplineInfo.current!.hidden;
        if (showSubDisciplineIcon.current!.icon === chevronDownOutline)
            showSubDisciplineIcon.current!.icon = chevronUpOutline;
        else
            showSubDisciplineIcon.current!.icon = chevronDownOutline;
    };


    //Filter checkbox function

    const handleCheck = (value: string, currentFilter: string[], category: string) => {
        const currentIndex = currentFilter.indexOf(value)

        if(category == 'mos'){
            if (currentIndex === -1) {
                currentMosFilter.current.push(value)
            } else {
                currentMosFilter.current.splice(currentIndex, 1)
            }
        }
        else if(category == 'disc'){
            if (currentIndex === -1) {
                currentDiscFilter.current.push(value)
            } else {
                currentDiscFilter.current.splice(currentIndex, 1)
            }
        }
        else if(category == 'subdisc'){
            if (currentIndex === -1) {
                currentSubDiscFilter.current.push(value)
            } else {
                currentSubDiscFilter.current.splice(currentIndex, 1)
            }
        }
        else if(category == 'uni'){
            if (currentIndex === -1) {
                currentUniFilter.current.push(value)
            } else {
                currentUniFilter.current.splice(currentIndex, 1)
            }
        }
        else if(category == 'acad'){
            if (currentIndex === -1) {
                currentAcadlvlFilter.current.push(value)
            } else {
                currentAcadlvlFilter.current.splice(currentIndex, 1)
            }
        }
        else if(category == 'entry'){
            if (currentIndex === -1) {
                currentEntryFilter.current.push(value)
            } else {
                currentEntryFilter.current.splice(currentIndex, 1)
            }
        }

    }
   
    return (
        <>
            {/* Filter for Study@SIM */}
            {props.filterFor === "study@SIM" ?
                <IonGrid id="courseFilterPopoverGrid">
                    <IonRow className="filterCourseHeaderRow">
                        <IonCol className="filterCourseHeaderCol">

                            {/* Mode of Study Filter */}
                            <IonRow className="filterCourseInnerRow" class="ion-align-items-center">
                                <IonCol size="10" sizeSm="10" style={{ padding: "0" }} class="ion-text-left">
                                    <IonTitle className="filterCourseHeader">
                                        <div className="ion-text-wrap">Mode Of Study</div>
                                    </IonTitle>
                                </IonCol>

                                <IonCol size="2" sizeSm="2" className="toggleFilterCourseBtnCol" class="ion-text-right">
                                    <IonButton className="toggleFilterCourseBtn" onClick={displayMOSInfoCol} fill="clear" size="default">
                                        <IonIcon slot="icon-only" ref={showMOSIcon} icon={chevronDownOutline} />
                                    </IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow class="ion-align-items-center">
                                <IonCol sizeSm="12" className="courseFiltersCol" ref={MOSInfo} hidden={true} class="ion-text-center">
                                    <IonList className="courseFilterList">
                                        {mosFilter.map(filter => {
                                            return (
                                                <div key={filter}>
                                                    <IonItem className="courseFilterItem" lines="none">
                                                        <IonCheckbox className="courseFilterCheckbox" onIonChange={e => {handleCheck(e.detail.value, currentMosFilter.current, 'mos')}} value={filter} checked={currentMosFilter.current.indexOf(filter) === -1 ? false : true} />
                                                        <IonLabel className="courseFilterLabel">
                                                            <div className="ion-text-wrap">{filter}</div>
                                                        </IonLabel>
                                                        <IonBadge slot="end" className="courseFilterCountBadge">
                                                            {
                                                                <div>
                                                                    {filter === 'fullPartTime' ? <div>{(props.programmes as Programme[]).filter((programme: any) => programme.modeOfStudy.fullTime && programme.modeOfStudy.partTime).length}</div> : ''}
                                                                    {filter === 'partTime' ? <div>{(props.programmes as Programme[]).filter(programme => !programme.modeOfStudy.fullTime && programme.modeOfStudy.partTime).length}</div> : ''}
                                                                    {filter === 'fullTime' ? <div>{(props.programmes as Programme[]).filter(programme => programme.modeOfStudy.fullTime && !programme.modeOfStudy.partTime).length}</div> : ''}

                                                                </div>
                                                            }

                                                        </IonBadge>
                                                    </IonItem>
                                                </div>
                                            )
                                        })}
                                    </IonList>
                                </IonCol>
                            </IonRow>

                            {/* Disciplines Filter */}
                            <IonRow className="filterCourseInnerRow" class="ion-align-items-center">
                                <IonCol size="10" sizeSm="10" style={{ padding: "0" }} class="ion-text-left">
                                    <IonTitle className="filterCourseHeader">
                                        <div className="ion-text-wrap">Disciplines</div>
                                    </IonTitle>
                                </IonCol>

                                <IonCol size="2" sizeSm="2" className="toggleFilterCourseBtnCol" class="ion-text-right">
                                    <IonButton className="toggleFilterCourseBtn" onClick={displayDisciplineInfoCol} fill="clear" size="default">
                                        <IonIcon slot="icon-only" ref={showDisciplineIcon} icon={chevronDownOutline} />
                                    </IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow class="ion-align-items-center">
                                <IonCol sizeSm="12" className="courseFiltersCol" ref={disciplineInfo} hidden={true} class="ion-text-center">
                                    <IonList className="courseFilterList">
                                        {discFilter.map(filter => {
                                            return (
                                                <div key={filter}>
                                                    <IonItem className="courseFilterItem" lines="none">
                                                        <IonCheckbox className="courseFilterCheckbox" onIonChange={e => handleCheck(e.detail.value, currentDiscFilter.current, 'disc')} value={filter} checked={currentDiscFilter.current.indexOf(filter) === -1 ? false : true} />

                                                        <IonLabel className="courseFilterLabel">
                                                            <div className="ion-text-wrap">{filter}</div>
                                                        </IonLabel>

                                                        <IonBadge slot="end" className="courseFilterCountBadge">
                                                            {(props.programmes as Programme[]).filter(programme => programme.discipline.includes(filter)).length}
                                                        </IonBadge>
                                                    </IonItem>
                                                </div>
                                            )
                                        })}

                                    </IonList>
                                </IonCol>
                            </IonRow>

                            {/* University Partners Filter */}
                            <IonRow className="filterCourseInnerRow" class="ion-align-items-center">
                                <IonCol size="10" sizeSm="10" style={{ padding: "0" }} class="ion-text-left">
                                    <IonTitle className="filterCourseHeader">
                                        <div className="ion-text-wrap">University Partners</div>
                                    </IonTitle>
                                </IonCol>

                                <IonCol size="2" sizeSm="2" className="toggleFilterCourseBtnCol" class="ion-text-right">
                                    <IonButton className="toggleFilterCourseBtn" onClick={displayUniPartnerInfoCol} fill="clear" size="default">
                                        <IonIcon slot="icon-only" ref={showUniPartnerIcon} icon={chevronDownOutline} />
                                    </IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow class="ion-align-items-center">
                                <IonCol sizeSm="12" className="courseFiltersCol" ref={uniPartnerInfo} hidden={true} class="ion-text-center">
                                    <IonList className="courseFilterList">
                                        {uniFilter.map(filter => {
                                            return (<div key={filter}>
                                                <IonItem className="courseFilterItem" lines="none">
                                                    <IonCheckbox className="courseFilterCheckbox" onIonChange={e => handleCheck(e.detail.value, currentUniFilter.current, 'uni')} value={filter} checked={currentUniFilter.current.indexOf(filter) === -1 ? false : true} />

                                                    <IonLabel className="courseFilterLabel">
                                                        <div className="ion-text-wrap">{filter}</div>
                                                    </IonLabel>

                                                    <IonBadge slot="end" className="courseFilterCountBadge">{(props.programmes as Programme[]).filter(programme => programme.awardedBy === filter).length}</IonBadge>
                                                </IonItem>
                                            </div>)
                                        })}

                                    </IonList>
                                </IonCol>
                            </IonRow>

                            {/* Academic Level Filter */}
                            <IonRow className="filterCourseInnerRow" class="ion-align-items-center">
                                <IonCol size="10" sizeSm="10" style={{ padding: "0" }} class="ion-text-left">
                                    <IonTitle className="filterCourseHeader">
                                        <div className="ion-text-wrap">Academic Level</div>
                                    </IonTitle>
                                </IonCol>

                                <IonCol size="2" sizeSm="2" className="toggleFilterCourseBtnCol" class="ion-text-right">
                                    <IonButton className="toggleFilterCourseBtn" onClick={displayAcademicLvlInfoCol} fill="clear" size="default">
                                        <IonIcon slot="icon-only" ref={showAcademicLvlIcon} icon={chevronDownOutline} />
                                    </IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow class="ion-align-items-center">
                                <IonCol sizeSm="12" className="courseFiltersCol" ref={academicLvlInfo} hidden={true} class="ion-text-center">
                                    <IonList className="courseFilterList">
                                        {acadlvlFilter.map(filter => {
                                            return (<div key={filter}>
                                                <IonItem className="courseFilterItem" lines="none">
                                                    <IonCheckbox className="courseFilterCheckbox" onIonChange={e => handleCheck(e.detail.value, currentAcadlvlFilter.current, 'acad')} value={filter} checked={currentAcadlvlFilter.current.indexOf(filter) === -1 ? false : true} />

                                                    <IonLabel className="courseFilterLabel">
                                                        <div className="ion-text-wrap">{filter}</div>
                                                    </IonLabel>

                                                    <IonBadge slot="end" className="courseFilterCountBadge">{(props.programmes as Programme[]).filter(programme => programme.academicLevel === filter).length}</IonBadge>
                                                </IonItem>
                                            </div>)
                                        })}

                                    </IonList>
                                </IonCol>
                            </IonRow>

                            {/* Entry Qualifications Filter */}
                            <IonRow className="filterCourseInnerRow" class="ion-align-items-center">
                                <IonCol size="10" sizeSm="10" style={{ padding: "0" }} class="ion-text-left">
                                    <IonTitle className="filterCourseHeader">
                                        <div className="ion-text-wrap">Entry Qualifications</div>
                                    </IonTitle>
                                </IonCol>

                                <IonCol size="2" sizeSm="2" className="toggleFilterCourseBtnCol" class="ion-text-right">
                                    <IonButton className="toggleFilterCourseBtn" onClick={displayEntryQualInfoCol} fill="clear" size="default">
                                        <IonIcon slot="icon-only" ref={showEntryQualIcon} icon={chevronDownOutline} />
                                    </IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow class="ion-align-items-center">
                                <IonCol sizeSm="12" className="courseFiltersCol" ref={entryQualInfo} hidden={true} class="ion-text-center">
                                    <IonList className="courseFilterList">
                                        {entryFilter.map(filter => {
                                            return (<div key={filter}>
                                                <IonItem className="courseFilterItem" lines="none">
                                                    <IonCheckbox className="courseFilterCheckbox" onIonChange={e => handleCheck(e.detail.value, currentEntryFilter.current, 'entry')} value={filter} checked={currentEntryFilter.current.indexOf(filter) === -1 ? false : true} />

                                                    <IonLabel className="courseFilterLabel">
                                                        <div className="ion-text-wrap">{filter}</div>
                                                    </IonLabel>

                                                    <IonBadge slot="end" className="courseFilterCountBadge">{(props.programmes as Programme[]).filter(programme => (programme.entryQualifications as any)[filter]).length}</IonBadge>
                                                </IonItem>
                                            </div>)
                                        })}

                                    </IonList>
                                </IonCol>
                            </IonRow>

                            {/* Sub Disciplines Filter */}
                            <IonRow className="filterCourseInnerRow" class="ion-align-items-center">
                                <IonCol size="10" sizeSm="10" style={{ padding: "0" }} class="ion-text-left">
                                    <IonTitle className="filterCourseHeader">
                                        <div className="ion-text-wrap">Sub-Disciplines</div>
                                    </IonTitle>
                                </IonCol>

                                <IonCol size="2" sizeSm="2" className="toggleFilterCourseBtnCol" class="ion-text-right">
                                    <IonButton className="toggleFilterCourseBtn" onClick={displaySubDisciplineInfoCol} fill="clear" size="default">
                                        <IonIcon slot="icon-only" ref={showSubDisciplineIcon} icon={chevronDownOutline} />
                                    </IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow class="ion-align-items-center">
                                <IonCol sizeSm="12" className="courseFiltersCol" ref={subDisciplineInfo} hidden={true} class="ion-text-center">
                                    <IonList className="courseFilterList">
                                        {subDiscFilter.map(filter => {
                                            return (<div key={filter}>
                                                <IonItem className="courseFilterItem" lines="none">
                                                    <IonCheckbox className="courseFilterCheckbox" onIonChange={e => handleCheck(e.detail.value, currentSubDiscFilter.current, 'subdisc')} value={filter} checked={currentSubDiscFilter.current.indexOf(filter) === -1 ? false : true} />

                                                    <IonLabel className="courseFilterLabel">
                                                        <div className="ion-text-wrap">{filter}</div>
                                                    </IonLabel>

                                                    <IonBadge slot="end" className="courseFilterCountBadge">{(props.programmes as Programme[]).filter(programme => programme.subDiscipline.includes(filter)).length}</IonBadge>
                                                </IonItem>
                                            </div>)
                                        })}

                                    </IonList>
                                </IonCol>
                            </IonRow>

                        </IonCol>
                    </IonRow>


                    {/* Filter Programme Popover Btn Row */}
                    <IonRow id="courseFilterPopoverBtnRow">
                        <IonFooter className="ion-no-border">
                            <IonToolbar id="courseFilterPopoverBtnToolbar" class="ion-align-items-center">
                                <IonRow class="ion-align-items-center" style={{ width: "100%" }}>
                                    <IonCol size="12" sizeSm="12" class="ion-text-center" style={{ padding: "0" }}>
                                        <>
                                            <IonButton id="courseProgFilterBtn" onClick={() => props.onUpdateFilter(currentMosFilter.current, currentDiscFilter.current, currentUniFilter.current, currentAcadlvlFilter.current, currentEntryFilter.current, currentSubDiscFilter.current)}>FILTER</IonButton>
                                        </>
                                    </IonCol>
                                </IonRow>
                            </IonToolbar>
                        </IonFooter>
                    </IonRow>

                </IonGrid>
                : ''
            }


            {/* Filter for Programme Talks */}
            {props.filterFor === "progTalk@SIM" ?
                <IonGrid id="courseFilterPopoverGrid">
                    <IonRow className="filterCourseHeaderRow">
                        <IonCol className="filterCourseHeaderCol">

                            {/* Disciplines Filter */}
                            <IonRow className="filterCourseInnerRow" class="ion-align-items-center">
                                <IonCol size="10" sizeSm="10" style={{ padding: "0" }} class="ion-text-left">
                                    <IonTitle className="filterCourseHeader">
                                        <div className="ion-text-wrap">Disciplines</div>
                                    </IonTitle>
                                </IonCol>

                                <IonCol size="2" sizeSm="2" className="toggleFilterCourseBtnCol" class="ion-text-right">
                                    <IonButton className="toggleFilterCourseBtn" onClick={displayDisciplineInfoCol} fill="clear" size="default">
                                        <IonIcon slot="icon-only" ref={showDisciplineIcon} icon={chevronDownOutline} />
                                    </IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow class="ion-align-items-center">
                                <IonCol sizeSm="12" className="courseFiltersCol" ref={disciplineInfo} hidden={true} class="ion-text-center">
                                    <IonList className="courseFilterList">
                                        {discFilter.map(filter => {
                                            return (<div key={filter}>
                                                <IonItem className="courseFilterItem" lines="none">
                                                    <IonCheckbox className="courseFilterCheckbox" onIonChange={e => handleCheck(e.detail.value, currentDiscFilter.current, 'disc')} value={filter} checked={currentDiscFilter.current.indexOf(filter) === -1 ? false : true} />

                                                    <IonLabel className="courseFilterLabel">
                                                        <div className="ion-text-wrap">{filter}</div>
                                                    </IonLabel>

                                                    <IonBadge slot="end" className="courseFilterCountBadge">{
                                                        (props.programmes as ProgrammeTalk[]).filter((talk: ProgrammeTalk) => talk.discipline.includes(filter)).length

                                                    }</IonBadge>
                                                </IonItem>
                                            </div>)
                                        })}

                                    </IonList>
                                </IonCol>
                            </IonRow>

                            {/* University Partners Filter */}
                            <IonRow className="filterCourseInnerRow" class="ion-align-items-center">
                                <IonCol size="10" sizeSm="10" style={{ padding: "0" }} class="ion-text-left">
                                    <IonTitle className="filterCourseHeader">
                                        <div className="ion-text-wrap">University Partners</div>
                                    </IonTitle>
                                </IonCol>

                                <IonCol size="2" sizeSm="2" className="toggleFilterCourseBtnCol" class="ion-text-right">
                                    <IonButton className="toggleFilterCourseBtn" onClick={displayUniPartnerInfoCol} fill="clear" size="default">
                                        <IonIcon slot="icon-only" ref={showUniPartnerIcon} icon={chevronDownOutline} />
                                    </IonButton>
                                </IonCol>
                            </IonRow>

                            <IonRow class="ion-align-items-center">
                                <IonCol sizeSm="12" className="courseFiltersCol" ref={uniPartnerInfo} hidden={true} class="ion-text-center">
                                    <IonList className="courseFilterList">
                                        {uniFilter.map(filter => {
                                            return (<div key={filter}>
                                                <IonItem className="courseFilterItem" lines="none">
                                                    <IonCheckbox className="courseFilterCheckbox" onIonChange={e => handleCheck(e.detail.value, currentUniFilter.current, 'uni')} value={filter} checked={currentUniFilter.current.indexOf(filter) === -1 ? false : true} />

                                                    <IonLabel className="courseFilterLabel">
                                                        <div className="ion-text-wrap">{filter}</div>
                                                    </IonLabel>

                                                    <IonBadge slot="end" className="courseFilterCountBadge">{
                                                        (props.programmes as ProgrammeTalk[]).filter((talk: ProgrammeTalk) => talk.awardingUni.toLowerCase() === filter.toLowerCase()).length
                                                    }</IonBadge>
                                                </IonItem>
                                            </div>)
                                        })}

                                    </IonList>
                                </IonCol>
                            </IonRow>

                        </IonCol>
                    </IonRow>


                    {/* Filter Programme Popover Btn Row */}
                    <IonRow id="courseFilterPopoverBtnRow">
                        <IonFooter className="ion-no-border">
                            <IonToolbar id="courseFilterPopoverBtnToolbar" class="ion-align-items-center">
                                <IonRow class="ion-align-items-center" style={{ width: "100%" }}>
                                    <IonCol size="12" sizeSm="12" class="ion-text-center" style={{ padding: "0" }}>
                                        <IonButton id="courseProgFilterBtn" onClick={() => props.filterFunction(props.filterCondition, props.setState)}>FILTER</IonButton>
                                    </IonCol>
                                </IonRow>
                            </IonToolbar>
                        </IonFooter>
                    </IonRow>

                </IonGrid>
                : ''
            }


        </>
    );
};

export default FilterPopoverContent;
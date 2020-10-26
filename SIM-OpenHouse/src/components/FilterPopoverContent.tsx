import { IonBadge, IonButton, IonCheckbox, IonCol, IonFooter, IonGrid, IonIcon, IonItem, IonLabel, IonList, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import '../css/Global.css';
import '../css/FilterPopoverContent.css';
import { chevronDownOutline, chevronUpOutline, filter } from 'ionicons/icons';

interface myProps {
    filterFunction: any;
    params: any;
    href: any;
    filterFor: any;
    discipline: string;
    category: string;
}
export interface FilterCondition {
    mos: string[],
    discipline: string[],
    uni: string[],
    acadLvl: string[],
    entry: string[],
    subDisc: string[]
}

const FilterPopoverContent: React.FC<myProps> = props => {
    // console.log("props are" + JSON.stringify(props))
    const mosFilter = ['fullPartTime', 'partTime', 'fullTime']
    const discFilter = ['artSocialSciences', 'nursing', 'itComputerScience', 'business', 'speciality']
    const subDiscFilter = ['aviation', 'computing', 'design', 'businessAdmin', 'economics', 'Construction and Management']
    const uniFilter = ['RMIT University', 'University of Stirling', 'University of Wollongong']
    const acadlvlFilter = ['Diploma', 'Bachelor', 'Masters']
    const entryFilter = ['aLevel', 'oLevel', 'degree', 'diploma']

    const [currentMosFilter, setCurrentMosFilter] = useState<string[]>(['fullTime', 'partTime', 'fullPartTime'])
    const [currentDiscFilter, setCurrentDiscFilter] = useState<string[]>([props.discipline])
    const [currentSubDiscFilter, setCurrentSubDiscFilter] = useState<string[]>([])
    const [currentUniFilter, setCurrentUniFilter] = useState<string[]>([])
    const [currentAcadlvlFilter, setCurrentAcadlvlFilter] = useState<string[]>([props.category])
    const [currentEntryFilter, setCurrentEntryFilter] = useState<string[]>([])

    const [filterCondition, setFilterCondition] = useState<FilterCondition>({
        mos: [],
        discipline: [],
        uni: [],
        acadLvl: [],
        entry: [],
        subDisc: []
    })

    {/* Display Mode of Study Filters */ }
    const MOSInfo = useRef<HTMLIonRowElement>(null);
    const showMOSIcon = useRef<HTMLIonIconElement>(null);

    const displayMOSInfoCol = () => {
        MOSInfo.current!.hidden = !MOSInfo.current!.hidden;
        if (showMOSIcon.current!.icon == chevronDownOutline)
            showMOSIcon.current!.icon = chevronUpOutline;
        else
            showMOSIcon.current!.icon = chevronDownOutline;
    };

    {/* Display Discipline Filters */ }
    const disciplineInfo = useRef<HTMLIonRowElement>(null);
    const showDisciplineIcon = useRef<HTMLIonIconElement>(null);

    const displayDisciplineInfoCol = () => {
        disciplineInfo.current!.hidden = !disciplineInfo.current!.hidden;
        if (showDisciplineIcon.current!.icon == chevronDownOutline)
            showDisciplineIcon.current!.icon = chevronUpOutline;
        else
            showDisciplineIcon.current!.icon = chevronDownOutline;
    };

    {/* Display Uni Partners Filters */ }
    const uniPartnerInfo = useRef<HTMLIonRowElement>(null);
    const showUniPartnerIcon = useRef<HTMLIonIconElement>(null);

    const displayUniPartnerInfoCol = () => {
        uniPartnerInfo.current!.hidden = !uniPartnerInfo.current!.hidden;
        if (showUniPartnerIcon.current!.icon == chevronDownOutline)
            showUniPartnerIcon.current!.icon = chevronUpOutline;
        else
            showUniPartnerIcon.current!.icon = chevronDownOutline;
    };

    {/* Display Academic Level Filters */ }
    const academicLvlInfo = useRef<HTMLIonRowElement>(null);
    const showAcademicLvlIcon = useRef<HTMLIonIconElement>(null);

    const displayAcademicLvlInfoCol = () => {
        academicLvlInfo.current!.hidden = !academicLvlInfo.current!.hidden;
        if (showAcademicLvlIcon.current!.icon == chevronDownOutline)
            showAcademicLvlIcon.current!.icon = chevronUpOutline;
        else
            showAcademicLvlIcon.current!.icon = chevronDownOutline;
    };

    {/* Display Entry Qualifications Filters */ }
    const entryQualInfo = useRef<HTMLIonRowElement>(null);
    const showEntryQualIcon = useRef<HTMLIonIconElement>(null);

    const displayEntryQualInfoCol = () => {
        entryQualInfo.current!.hidden = !entryQualInfo.current!.hidden;
        if (showEntryQualIcon.current!.icon == chevronDownOutline)
            showEntryQualIcon.current!.icon = chevronUpOutline;
        else
            showEntryQualIcon.current!.icon = chevronDownOutline;
    };

    {/* Display Sub Disciplines Filters */ }
    const subDisciplineInfo = useRef<HTMLIonRowElement>(null);
    const showSubDisciplineIcon = useRef<HTMLIonIconElement>(null);

    const displaySubDisciplineInfoCol = () => {
        subDisciplineInfo.current!.hidden = !subDisciplineInfo.current!.hidden;
        if (showSubDisciplineIcon.current!.icon == chevronDownOutline)
            showSubDisciplineIcon.current!.icon = chevronUpOutline;
        else
            showSubDisciplineIcon.current!.icon = chevronDownOutline;
    };


    {/* Check if filter is checked */ }
    const [checked, setChecked] = useState(false);
    const [courseFilterCount, setCourseFilterCount] = useState(0);

    //Filter handlers

    const handleCheck = (value: string, currentFilter: string[], callback: any) => {
        const currentIndex = currentFilter.indexOf(value)
        const newCurrentFilter = [...currentFilter]

        if (currentIndex === -1) {
            newCurrentFilter.push(value)
        } else {
            newCurrentFilter.splice(currentIndex, 1)
        }

        callback(newCurrentFilter)
        console.log('New filters are' + newCurrentFilter)
        //filterProgrammes(newCheckedFilter)
    }

    //All filter combined 

    const combinedFilter = () => {
        console.log("Before All filters are :" + JSON.stringify(filterCondition))
        const Check = () => {
        }
        setFilterCondition(prevState => {
            let filter = { ...prevState };
            Object.keys(filter).map(key => {
                if (key == 'mos')
                    filter[key] = currentMosFilter;
                if (key == 'discipline')
                    filter[key] = currentDiscFilter;
                if (key == 'uni')
                    filter[key] = currentUniFilter;
                if (key == 'acadLvl')
                    filter[key] = currentAcadlvlFilter;
                if (key == 'entry')
                    filter[key] = currentEntryFilter;
                if (key == 'subDisc')
                    filter[key] = currentSubDiscFilter;
            })
            return filter;
        })

    }

    useEffect(() => {
        combinedFilter();
    }, [currentMosFilter, currentDiscFilter, currentUniFilter, currentAcadlvlFilter, currentEntryFilter, currentSubDiscFilter])


    useEffect(() => {
        console.log("After All filters are :" + JSON.stringify(filterCondition))
    }, [filterCondition])


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
                                                        <IonCheckbox className="courseFilterCheckbox" onIonChange={e => handleCheck(e.detail.value, currentMosFilter, setCurrentMosFilter)} value={filter} checked={currentMosFilter.indexOf(filter) === -1 ? false : true} />
                                                        <IonLabel className="courseFilterLabel">
                                                            <div className="ion-text-wrap">{filter}</div>
                                                        </IonLabel>
                                                        <IonBadge slot="end" className="courseFilterCountBadge">{courseFilterCount}</IonBadge>
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
                                                        <IonCheckbox className="courseFilterCheckbox" onIonChange={e => handleCheck(e.detail.value, currentDiscFilter, setCurrentDiscFilter)} value={filter} checked={currentDiscFilter.indexOf(filter) === -1 ? false : true} />

                                                        <IonLabel className="courseFilterLabel">
                                                            <div className="ion-text-wrap">{filter}</div>
                                                        </IonLabel>

                                                        <IonBadge slot="end" className="courseFilterCountBadge">{courseFilterCount}</IonBadge>
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
                                                    <IonCheckbox className="courseFilterCheckbox" onIonChange={e => handleCheck(e.detail.value, currentUniFilter, setCurrentUniFilter)} value={filter} checked={currentUniFilter.indexOf(filter) === -1 ? false : true} />

                                                    <IonLabel className="courseFilterLabel">
                                                        <div className="ion-text-wrap">{filter}</div>
                                                    </IonLabel>

                                                    <IonBadge slot="end" className="courseFilterCountBadge">{courseFilterCount}</IonBadge>
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
                                                    <IonCheckbox className="courseFilterCheckbox" onIonChange={e => handleCheck(e.detail.value, currentAcadlvlFilter, setCurrentAcadlvlFilter)} value={filter} checked={currentAcadlvlFilter.indexOf(filter) === -1 ? false : true} />

                                                    <IonLabel className="courseFilterLabel">
                                                        <div className="ion-text-wrap">{filter}</div>
                                                    </IonLabel>

                                                    <IonBadge slot="end" className="courseFilterCountBadge">{courseFilterCount}</IonBadge>
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
                                                    <IonCheckbox className="courseFilterCheckbox" onIonChange={e => handleCheck(e.detail.value, currentEntryFilter, setCurrentEntryFilter)} value={filter} checked={currentEntryFilter.indexOf(filter) === -1 ? false : true} />

                                                    <IonLabel className="courseFilterLabel">
                                                        <div className="ion-text-wrap">{filter}</div>
                                                    </IonLabel>

                                                    <IonBadge slot="end" className="courseFilterCountBadge">{courseFilterCount}</IonBadge>
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
                                                    <IonCheckbox className="courseFilterCheckbox" onIonChange={e => handleCheck(e.detail.value, currentSubDiscFilter, setCurrentSubDiscFilter)} value={filter} checked={currentSubDiscFilter.indexOf(filter) === -1 ? false : true} />

                                                    <IonLabel className="courseFilterLabel">
                                                        <div className="ion-text-wrap">{filter}</div>
                                                    </IonLabel>

                                                    <IonBadge slot="end" className="courseFilterCountBadge">{courseFilterCount}</IonBadge>
                                                </IonItem>
                                            </div>)
                                        })}

                                    </IonList>
                                </IonCol>
                            </IonRow>

                        </IonCol>
                    </IonRow>


                    {/* Compare Programme Popover Btn Row */}
                    <IonRow id="courseFilterPopoverBtnRow">
                        <IonFooter className="ion-no-border">
                            <IonToolbar id="courseFilterPopoverBtnToolbar" class="ion-align-items-center">
                                <IonRow class="ion-align-items-center" style={{ width: "100%" }}>
                                    <IonCol size="12" sizeSm="12" class="ion-text-center" style={{ padding: "0" }}>
                                        {props.params ?
                                            <>
                                                <IonButton id="courseProgFilterBtn" onClick={() => props.filterFunction(filterCondition)}>FILTER</IonButton>
                                            </>
                                            : ''
                                        }

                                    </IonCol>
                                </IonRow>
                            </IonToolbar>
                        </IonFooter>
                    </IonRow>

                </IonGrid>
                : ''
            }


            {/* Filter for Programme Talks */}
            {props.filterFor === "progTalk" ?
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
                                        <IonItem className="courseFilterItem" lines="none">
                                            <IonCheckbox className="courseFilterCheckbox" checked={checked} />

                                            <IonLabel className="courseFilterLabel">
                                                <div className="ion-text-wrap">DisciplineFilterName</div>
                                            </IonLabel>

                                            <IonBadge slot="end" className="courseFilterCountBadge">{courseFilterCount}</IonBadge>
                                        </IonItem>
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
                                        <IonItem className="courseFilterItem" lines="none">
                                            <IonCheckbox className="courseFilterCheckbox" checked={checked} />

                                            <IonLabel className="courseFilterLabel">
                                                <div className="ion-text-wrap">UniPartnerFilterName</div>
                                            </IonLabel>

                                            <IonBadge slot="end" className="courseFilterCountBadge">{courseFilterCount}</IonBadge>
                                        </IonItem>
                                    </IonList>
                                </IonCol>
                            </IonRow>

                        </IonCol>
                    </IonRow>


                    {/* Compare Programme Popover Btn Row */}
                    <IonRow id="courseFilterPopoverBtnRow">
                        <IonFooter className="ion-no-border">
                            <IonToolbar id="courseFilterPopoverBtnToolbar" class="ion-align-items-center">
                                <IonRow class="ion-align-items-center" style={{ width: "100%" }}>
                                    <IonCol size="12" sizeSm="12" class="ion-text-center" style={{ padding: "0" }}>
                                        <IonButton id="courseProgFilterBtn">FILTER</IonButton>
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
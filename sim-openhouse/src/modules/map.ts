export interface ScheduleItem {
    id: string;
    name: string;
    date: string;
    startTime: string;
    endTime: string;
    venue: string;
    uni: string;
    boothNo: string;
    points: number;
};

export function toSchedule(doc: any): ScheduleItem {
    return {
        id: doc.id,
        name: doc.talkName || doc.tourName || doc.performanceName || doc.gameBoothName,
        date: doc.date,
        startTime: doc.startTime || null,
        endTime: doc.endTime || null,
        venue: doc.venue || null,
        uni: doc.awardingUni || null,
        boothNo: doc.boothNumber || null,
        points: doc.pointsAward || null
    };
};

export interface Brochure {
    id: string;
    description: string;
    brochureUrl: string;
    imageUrl: string;
}

export function toBrochure(doc: any): Brochure {
    return {
        id: doc.id,
        ...doc.data()
    }
}

export interface Announcement {
    id: string;
    title: string;
    date: string;
    time: string;
    details: string;
}

export function toAnnouncement(doc: any): Announcement {
    return {
        id: doc.id,
        ...doc.data()
    }
}

//For Programmes and programmesTalks

interface ModeOfStudy {
    partTime: boolean,
    fullTime: boolean
}
interface EntryQualification {
    aLevel: boolean,
    oLevel: boolean,
    degree: boolean,
    diploma: boolean
}
interface ApplicationPeriod {
    intake: string,
    period: string
}
interface ProgrammeStructure {
    coursework: boolean,
    examination: boolean
}
interface OverseaOpportunity {
    exchange: boolean,
    transfer: boolean
}
interface IntakeMonths {
    partTime: string,
    fullTime: string
}
interface Duration {
    partTime: string,
    fullTime: string
}
export interface Programme {
    id: string,
    programmeTitle: string,
    modeOfStudy: ModeOfStudy,
    academicLevel: string,
    discipline: string[],
    subDiscipline: string[],
    entryQualifications: EntryQualification,
    awardedBy: string,
    programOverview: string[],
    applicationPeriod: ApplicationPeriod,
    programmeStructure: ProgrammeStructure,
    overseaOpportunity: OverseaOpportunity,
    intakeMonths: IntakeMonths,
    duration: Duration,
    uniLogo: string
}

export interface ProgrammeTalk {
    id: string,
    talkName: string,
    awardingUni: string,
    details: string,
    discipline: string[],
    date: string,
    startTime: string,
    endTime: string,
    venue: string,
    capacityLimit: number,
    noRegistered: number,
    isLive: boolean,
    hasRecording: boolean,
    url: string
}

export interface LocationState {
    state: {
        programmes: Programme[]
    };
}

//Filters

export interface FilterCondition {
    mos: string[],
    discipline: string[],
    uni: string[],
    acadLvl: string[],
    entry: string[],
    subDisc: string[]
}

export interface TalkFilter {
    discipline: string[]
    uni: string[]
}

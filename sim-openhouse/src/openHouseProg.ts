export interface TalkSchedule {
    id: string;
    talkName: string;
    date: string;
    endTime: string;
    startTime: string
    venue: string;
    awardingUni: string;
    capacityLimit: number;
    noRegistered: number;
    isLive: boolean;
    hasRecording: boolean;
}

export function toTalkSchedule(doc: any): TalkSchedule {
    return { id: doc.id, ...doc.data() };
}

export interface GuidedTours {
    id: string;
    tourName: string;
    date: string;
    endTime: string;
    startTime: string
    venue: string;
}

export function toGuidedTours(doc: any): GuidedTours {
    return { id: doc.id, ...doc.data() };
}
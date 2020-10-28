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
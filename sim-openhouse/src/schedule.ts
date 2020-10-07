export interface ScheduleItem {
    id: string;
    name: string;
    date: string;
    startTime: string;
    endTime: string;
    venue: string
};

export function toSchedule(doc: any): ScheduleItem {
    return {
        id: doc.id,
        name: doc.talkName || doc.tourName || doc.performanceName || doc.gameBoothName,
        date: doc.date,
        startTime: doc.startTime,
        endTime: doc.endTime || null,
        venue: doc.venue
    };
};
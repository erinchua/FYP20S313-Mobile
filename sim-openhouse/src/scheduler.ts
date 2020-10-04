export interface ProgrammeSchedule {
    id: string;
    name: string;
    startTime: string;
    endTime: string;
    venue: string
}

export function toSchedule(doc: any): ProgrammeSchedule {
    return { ...doc.data() };
}
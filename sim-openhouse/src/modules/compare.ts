export function forumPostsDesc(a: any, b: any) {
    if (a.id > b.id) return -1;

    if (a.id < b.id) return 1;

    return 0;
}

export function forumPostsAsc(a: any, b: any) {
    if (a.id < b.id) return -1;

    if (a.id > b.id) return 1;

    return 0;
}

export function sortTimeAsc(a: any, b: any) {
    const aTime = a.startTime, bTime = b.startTime
    let aHour = +aTime.split(":")[0], bHour = +bTime.split(":")[0];
    const aMins = +aTime.split(":")[1].slice(0, 2), bMins = +bTime.split(":")[1].slice(0, 2);
    const aMeridiem = aTime.split(":")[1].slice(-2, aTime.split(":")[1].length), bMeridiem = bTime.split(":")[1].slice(-2, bTime.split(":")[1].length);

    if ((aHour > 0 && aHour < 12) && aMeridiem === "PM") aHour += 12;
    if ((bHour > 0 && bHour < 12) && bMeridiem === "PM") bHour += 12;

    if (aHour < bHour) return -1;
    if (aHour > bHour) return 1;

    if (aHour === bHour) {
        if (aMins < bMins) return -1;
        if (aMins > bMins) return 1;
    }

    return 0;
}
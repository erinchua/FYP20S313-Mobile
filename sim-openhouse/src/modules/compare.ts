export function sortDsc(a: any, b: any) {
    if (a > b) return -1;

    if (a < b) return 1;

    return 0;
}

export function sortAsc(a: any, b: any) {
    if (a < b) return -1;

    if (a > b) return 1;

    return 0;
}

export function sortTimeAsc(a: any, b: any) {
    let aHour = +a.split(":")[0], bHour = +b.split(":")[0];
    const aMins = +a.split(":")[1].slice(0, 2), bMins = +b.split(":")[1].slice(0, 2);
    const aMeridiem = a.split(":")[1].slice(-2, a.split(":")[1].length), bMeridiem = b.split(":")[1].slice(-2, b.split(":")[1].length);

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

export function sortTimeDsc(a: any, b: any) {
    let aHour = +a.split(":")[0], bHour = +b.split(":")[0];
    const aMins = +a.split(":")[1].slice(0, 2), bMins = +b.split(":")[1].slice(0, 2);
    const aMeridiem = a.split(":")[1].slice(-2, a.split(":")[1].length), bMeridiem = b.split(":")[1].slice(-2, b.split(":")[1].length);

    if (aHour == 12 && aMeridiem.toUpperCase() == "AM") aHour = 0;
    if (bHour == 12 && bMeridiem.toUpperCase() == "AM") bHour = 0;
    
    if ((aHour > 0 && aHour < 12) && aMeridiem === "PM") aHour += 12;
    if ((bHour > 0 && bHour < 12) && bMeridiem === "PM") bHour += 12;

    if (aHour > bHour) return -1;
    if (aHour < bHour) return 1;

    if (aHour === bHour) {
        if (aMins > bMins) return -1;
        if (aMins < bMins) return 1;
    }

    return 0;
}
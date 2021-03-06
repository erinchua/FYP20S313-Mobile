export function formatDate(isoDate: any) {
    return new Date(isoDate).toLocaleDateString('en-UK', {
        day: 'numeric', month: 'short', year: 'numeric'
    });
}

export function toDateObject(date: string, time: string) {
    if (time === "") time = "00:00AM";

    const dateSplit = date.split("-");
    const timeSplit = time.split(":");
    
    let monthString = dateSplit[1];
    if (monthString.length > 3) monthString = monthString.slice(0, 3);

    const monthsArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const day = +dateSplit[0], month = +monthsArray.indexOf(dateSplit[1]), year = +dateSplit[2];
    let hours = +timeSplit[0];
    const minutes = +timeSplit[1].slice(0, 2), meridiem = timeSplit[1].slice(-2, timeSplit[1].length);
    const seconds = 0, milliseconds = 0;

    
    if (hours === 12 && meridiem.toUpperCase() === "AM") hours = 0;
    if ((hours > 0 && hours < 12) && meridiem.toUpperCase() === "PM") hours += 12;

    return new Date(year, month, day, hours, minutes, seconds, milliseconds);
}

export function camalize(str: string) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m: string, chr: string) => chr.toUpperCase());
}

export function sentence(str: string) {
    const split = str.replace( /([A-Z])/g, " $1" );
    return split.charAt(0).toUpperCase() + split.slice(1);
}
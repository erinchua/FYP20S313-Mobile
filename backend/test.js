const db = require('./config/adminConfig')
//const admin = require('firebase-admin')

//db.collection('Test').doc('test').update({testarray: admin.firestore.FieldValue.arrayUnion('hello')});

const userID = "KxJfH2BPsQaEQgwjS8SLEog1nSX2";
/* db.collection('PersonalScheduler').doc(userID).get().then(doc => {
    const items = [];
    const activities = doc.data().registeredProgrammes;
    activities.forEach(item => {
        const itemType = item.split("-");
        switch (itemType[0]) {
            case "talk":
                return db.collection('ProgrammeTalks').doc(item).onSnapshot(doc => items.push(doc.data()))
            case "tour":
                //return db.collection('GuidedTours').doc(item).onSnapshot(doc => items.push(doc.data()))
            case "performance":
                //return db.collection('Performances').doc(item).onSnapshot(doc => items.push(doc.data()))
            case "activity":
                //return db.collection('GamesActivities').doc(item).onSnapshot(doc => items.push(doc.data()))
            default:
        }
    });
    setTimeout(() => {
        const mapped = items.map((doc) => {
            return {
                id: doc.id,
                name: doc.talkName || doc.tourName || doc.performanceName || doc.gameBoothName,
                date: doc.date,
                startTime: doc.startTime,
                endTime: doc.endTime || null,
                venue: doc.venue
            }
        })
        console.log(mapped)
    }, 1000);
}); */

/* const prog = {
    awardingUni: "University of London",
    capacityLimit: 50,
    date: "21-Nov-2020",
    endTime: "11:00AM",
    hasRecording: false,
    id: "talk-002",
    isLive: false,
    noRegistered: 0,
    startTime: "10:00AM",
    talkName: "University of London - Computer Science Undergraduate",
    venue: "SIM HQ BLK B LT B.2.01" 
}
db.collection('PersonalScheduler').doc(userID).onSnapshot(snapshot => {
    const registered = snapshot.data().registeredProgrammes;
    
        registered.forEach((item) => {
            const itemType = item.split("-");

            switch (itemType[0]) {
                case "talk":
                    db.collection('ProgrammeTalks').doc(item).onSnapshot(doc => {
                        //console.log(doc.data().startTime.slice(-2, doc.data().startTime.length))
                        if (prog.date == doc.data().date) {
                            console.log("date", true)
                            let progStart = Number(prog.startTime.split(":")[0]), progEnd = Number(prog.endTime.split(":")[0]);
                            let itemStart = Number(doc.data().startTime.split(":")[0]), itemEnd = Number(doc.data().endTime.split(":")[0]);
                            //console.log(progStart, itemStart)
                            if (prog.startTime.slice(-2, prog.startTime.length) == "PM") progStart += 12;
                            if (prog.endTime.slice(-2, prog.startTime.length) == "PM") progStart += 12;
                            if (doc.data().startTime.slice(-2, doc.data().startTime.length) == "PM") progStart += 12;
                            if (doc.data().endTime.slice(-2, doc.data().endTime.length) == "PM") progStart += 12;

                            if ((progStart >= itemStart && progStart < itemEnd) || (progEnd > itemStart && progEnd <= itemEnd))
                                console.log("time", true)
                            else console.log("time", false)
                        } else console.log("date", false)
                    });
                //case "tour":
                    //return db.collection('GuidedTours').doc(item).onSnapshot(doc => {});
                //case "performance":
                    //return db.collection('Performances').doc(item).onSnapshot(doc => {});
                default:
                    return;
            }
        });
}); */

db.collection("Openhouse").orderBy('id', 'desc').limit(1).get().then(snapshot => {
    const arr = []
    snapshot.forEach(doc => {
        const data = doc.data().day;
        //console.log(data)
        data.forEach(day => arr.push(day))
    })
    console.log(arr[0].date)
})

/* const dateObject1 = {
    date: "21-Nov-2020",
    start: "11:30AM", end: "12:30PM"
}
const dateObject2 = {
    date: "21-Nov-2020",
    start: "11:00AM", end: "12:00PM"
}
function toDateObject(date, time) {
    const dateSplit = date.split("-");
    const timeSplit = time.split(":");

    const monthString = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const day = +dateSplit[0], month = +monthString.indexOf(dateSplit[1]) + 1, year = +dateSplit[2];
    let hours = +timeSplit[0];
    const minutes = +timeSplit[1].slice(0, 2), meridiem = timeSplit[1].slice(-2, timeSplit[1].length);
    const seconds = 0, milliseconds = 0;

    if (meridiem.toUpperCase() == "PM") hours += 12;

    return new Date(year, month, day, hours, minutes, seconds, milliseconds);
};
const start1 = toDateObject(dateObject1.date, dateObject1.start), end1 = toDateObject(dateObject1.date, dateObject1.end);
const start2 = toDateObject(dateObject2.date, dateObject2.start), end2 = toDateObject(dateObject2.date, dateObject2.end);
console.log((start1 >= start2 && start1 < end2) || (end1 > start2 && end1 <= end2)) */

//console.log(toDateObject(dateObject.dateLater, dateObject.timeLater), toDateObject(dateObject.dateEarly, dateObject.timeEarly))
//console.log(toDateObject(dateObject.dateLater, dateObject.timeLater) > toDateObject(dateObject.dateEarly, dateObject.timeEarly))
const db = require('./config/adminConfig')
//const admin = require('firebase-admin')

//db.collection('Test').doc('test').update({testarray: admin.firestore.FieldValue.arrayUnion('hello')});

const userID = "KxJfH2BPsQaEQgwjS8SLEog1nSX2";
db.collection('PersonalScheduler').doc(userID).get().then(doc => {
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
});

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

/* db.collection("Openhouse").orderBy('id', 'desc').limit(1).get().then(snapshot => {
    snapshot.forEach(doc => {
        const data = doc.data().day;
        data.forEach(day => {
            console.log(day.date)
        })
    })
}) */
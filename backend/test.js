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
                return db.collection('GuidedTours').doc(item).onSnapshot(doc => items.push(doc.data()))
            case "performance":
                return db.collection('Performances').doc(item).onSnapshot(doc => items.push(doc.data()))
            case "activity":
                return db.collection('GamesActivities').doc(item).onSnapshot(doc => items.push(doc.data()))
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

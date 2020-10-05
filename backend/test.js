const db = require('./config/adminConfig')
//const admin = require('firebase-admin')

//db.collection('Test').doc('test').update({testarray: admin.firestore.FieldValue.arrayUnion('hello')});

const userID = "KxJfH2BPsQaEQgwjS8SLEog1nSX2";
/* db.collection('PersonalScheduler').doc(userID).onSnapshot(doc => {
    const regProg = doc.data().registeredProgrammes;
    regProg.forEach(element => {
        console.log(element)
    });
}); */
const snapshot = db.collection('PersonalScheduler').doc(userID);
snapshot.get().then(doc => {
    const items = [];
    const activities = doc.data().registeredProgrammes;
    activities.forEach(item => {
        const itemType = item.split("-");
        switch (itemType[0]) {
            case "talk":
                //console.log(item);
                db.collection('ProgrammeTalks').doc(item).get().then(doc => items.push(doc.data()))
                break;
            case "tour":
                //console.log(item);
                db.collection('GuidedTours').doc(item).get().then(doc => items.push(doc.data()))
                break;
            case "performance":
                //console.log(item);
                db.collection('Performances').doc(item).get().then(doc => items.push(doc.data()))
                break;
            case "activity":
                //console.log(item);
                db.collection('GamesActivities').doc(item).get().then(doc => items.push(doc.data()))
                break;
            default:
        }
    });
    /* const mapped = items.map((doc) => {
        return {
            id: doc.id,
            name: doc.talkName || doc.tourName || doc.performanceName || doc.activityName,
            date: doc.date,
            startTime: doc.startTime,
            endTime: doc.endTime,
            venue: doc.venue
        }
    }) */
    console.log(items.length) // 0
});

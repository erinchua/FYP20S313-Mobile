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
    const activities = doc.data().registeredProgrammes;
    activities.forEach(item => {
        const itemType = item.split("-");
        switch (itemType[0]) {
            case "talk":
                console.log(item);
                db.collection('ProgrammeTalks').doc(item).get().then(doc => console.log(doc.data()))
                break;
            case "tour":
                console.log(item);
                db.collection('GuidedTours').doc(item).get().then(doc => console.log(doc.data()))
                break;
            case "performance":
                console.log(item);
                db.collection('Performances').doc(item).get().then(doc => console.log(doc.data()))
                break;
            case "activity":
                console.log(item);
                db.collection('GamesActivities').doc(item).get().then(doc => console.log(doc.data()))
                break;
            default:
        }
    });
});

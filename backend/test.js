const db = require('./config/adminConfig')
//const admin = require('firebase-admin')

//db.collection('Test').doc('test').update({testarray: admin.firestore.FieldValue.arrayUnion('hello')});

const userID = "ZbmlrKK1veOLkaKykhl9pbrPP703";
db.collection('PersonalScheduler').doc(userID).onSnapshot(doc => {
    const regProg = doc.data().registeredProgrammes;
    regProg.forEach(element => {
        console.log(element)
    });
});
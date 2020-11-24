const admin = require("firebase-admin");
const serviceAccount = require("./fypServiceKey.json");
// const serviceAccount = require("./sandboxServiceKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fyp20s3-13.firebaseio.com"
    // databaseURL: "https://sandbox-4c75c.firebaseio.com"
});

const db = admin.firestore();
module.exports = db;
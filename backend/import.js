const admin = require("firebase-admin");
const serviceAccount = require("./fypServiceKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fyp20s3-13.firebaseio.com",
});

const db = admin.firestore();

const fs = require("fs");
const path = require("path");
const pathDir = "./data/";

const args = process.argv.slice(2);

fs.readdir(pathDir, (err, files) => {
  if (err) return console.log(`${err} Error reading directory`);
  let read = false;
  files.forEach((file) => {
    var fileName = path.parse(file).name;

    if (fileName == args) {
      let dataCol = require(`${pathDir}${file}`);
      read = true;
      dataCol.forEach((obj) => {
        db.collection(fileName)
          .doc(obj.id)
          .set(obj)
          .then((ref) => {
            console.log(`${ref} added`);
          })
          .catch((err) => {
            console.log("Error occured:", err);
          });
      });
    }
  });
  if (read == false) console.log(`File ${args} does not exist`);
});

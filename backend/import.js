const db = require('./config/adminConfig');

const fs = require("fs");
const path = require("path");
const pathDir = "./data/";

const args = process.argv.slice(2)[0];

fs.readdir(pathDir, (err, files) => {
    if (err) return console.log(`${err} Error reading directory`);
    let read = false;

    files.forEach(file => {
        let fileName = path.parse(file).name;
        let fileExt = path.parse(file).ext;

        if (fileName == args && fileExt == '.json') {
            let dataCol = require(`${pathDir}${file}`);
            let counter = 0;

            dataCol.forEach(obj => {
                db.collection(fileName).doc(obj.id).set(obj).catch(err => {
                    console.log(`Error occured: ${err}`);
                });
                counter++;
            });
            console.log(`${counter} documents added to ${fileName}`);
        }
    });
});
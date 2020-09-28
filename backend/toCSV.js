const db = require('./config/adminConfig');
const fs = require('fs');

const pathDir = './data/';
const args = process.argv.slice(2)[0];
//console.log(typeof args);

const getCollection = async () => {
    let dataCol = [];

    await db.collection(args).get().then(col => {
        col.forEach(doc => {
            //console.log(doc.data());
            dataCol.push(doc.data());
        });
    }).catch(err => {
        console.log(`Error occured: ${err}`)
    });

    console.log(dataCol);

    //convert object to csv string here

    const CSVString = "write file test";

    fs.writeFileSync(`${pathDir}test.csv`, CSVString, err => {
        if (err)
            return console.log(`${err} Error writing file`)
    });
};
getCollection();
//const db = require('./config/adminConfig');
const fs = require('fs');
const converter = require('json-2-csv');

const pathDir = './data/';
const args = process.argv.slice(2)[0];

const csvToJson = () => {
    /* const snapshot = await db.collection(args).get().catch(err => {
        console.log(`Error occured: ${err}`)
    });
    const colData = snapshot.docs.map(doc => doc.data());
    console.log(colData); */

    const csvFile = fs.readFileSync(`${pathDir}Test.csv`);
    const csvJson = JSON.parse(csvFile)
    console.log(csvJson);

    /* converter.csv2json(csvFile, (err, csv) => {
        if (err)
            return console.log(`${err} Error occured`);

        fs.writeFileSync(`${pathDir}${args}.csv`, csv, err => {
            if (err)
                return console.log(`${err} Error writing file`)
        });
    }); */
};
csvToJson();
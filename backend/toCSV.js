const db = require('./config/adminConfig');

const args = process.argv.slice(2)[0];
//console.log(typeof args);

const getCollection = async () => {
    await db.collection(args).get().then(col => {
        col.forEach(doc => {
            console.log(doc.data());
        });
    });
};
getCollection();
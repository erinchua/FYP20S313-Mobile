const db = require('./config/adminConfig')
const QRCode = require('qrcode');

/* QRCode.toDataURL('hello world', (err, url) => {
    console.log(url)
}) */

db.collection('Students').doc('Hp9ZqdS1EJO6lEIRQNxDC0xQIII3').get().then(snap => {
    //snap.get('email');
    //console.log(snap.data())
    const data = {...snap.data()}
    console.log(data.email);

    QRCode.toString(data.email, {type:'terminal'}, (err, url) => {
        if (err) return console.log(err);
        console.log(url);
    });
});


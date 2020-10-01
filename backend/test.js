const db = require('./config/adminConfig')

db.collection('Test').doc('test').update({test: "hello"})

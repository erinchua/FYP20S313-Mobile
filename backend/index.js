const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 3000;

app.use(bodyParser.json());

app.post('/login', async (req, res) => {

})

app.listen(port , () => {
    console.log(`Listening from port: ${port}`)
})
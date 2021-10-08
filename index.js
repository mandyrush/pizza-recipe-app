let express = require('express');
require('dotenv').config();

let app = express();

let port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('This is working!');
})

app.listen(port, () => {
    console.log('Listening on port ', port);
})
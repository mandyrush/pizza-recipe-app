let express = require('express');
require('dotenv').config();

let app = express();

let port = process.env.PORT;

// Add functionality to parse json body
app.use(express.json());

const authRoutes = require('./routes/auth');
app.use(authRoutes);

const recipeRoutes = require('./routes/recipes');
app.use(recipeRoutes);

// Testing connection
app.get('/', (req, res) => {
    res.send('This is working!');
});

app.listen(port, () => {
    console.log('Listening on port ', port);
});
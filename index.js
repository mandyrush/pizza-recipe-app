let express = require('express');
require('dotenv').config();

let app = express();

// Add functionality to parse json body
app.use(express.json());

const { auth } = require('express-openid-connect');

app.use(
    auth({
        authRequired: false,
        auth0Logout: true,
        issuerBaseURL: process.env.ISSUER_BASE_URL,
        baseURL: process.env.BASE_URL,
        clientID: process.env.CLIENT_ID,
        secret: process.env.SECRET,
        idpLogout: true,
    })
);

let port = process.env.PORT;

const { logger } = require('./middleware/auth');
app.use(logger);

const authRoutes = require('./routes/auth');
app.use(authRoutes);

const userRoutes = require('./routes/users');
app.use(userRoutes);

const recipeRoutes = require('./routes/recipes');
app.use(recipeRoutes);

app.listen(port, () => {
    console.log('Listening on port ', port);
});
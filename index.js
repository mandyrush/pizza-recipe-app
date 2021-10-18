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

const projectRoutes =require('./routes/projects');
app.use(projectRoutes);

const recipeRoutes = require('./routes/recipes');
app.use(recipeRoutes);

const ingredientRoutes = require('./routes/ingredients');
app.use(ingredientRoutes);

const stepRoutes = require('./routes/steps');
app.use(stepRoutes);

const imageRoutes = require('./routes/images');
app.use(imageRoutes);

const userRoutes = require('./routes/users');
app.use(userRoutes);

app.listen(port, () => {
    console.log('Listening on port ', port);
});
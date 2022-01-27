let express = require('express');
require('dotenv').config();
const cors = require("cors");
let app = express();

app.use(cors());

// Add functionality to parse json body
app.use(express.json());

let port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('This is working!');
})

const authRoutes = require('./routes/auth');
app.use(authRoutes);

const projectRoutes = require('./routes/projects');
app.use(projectRoutes);

const recipeRoutes = require('./routes/recipes');
app.use(recipeRoutes);

const ingredientRoutes = require('./routes/ingredients');
app.use(ingredientRoutes);

const stepRoutes = require('./routes/steps');
app.use(stepRoutes);

const ratingRoutes = require('./routes/ratings');
app.use(ratingRoutes);

const ratingCategoryRoutes = require('./routes/ratingCategories');
app.use(ratingCategoryRoutes);

const imageRoutes = require('./routes/images');
app.use(imageRoutes);

const userRoutes = require('./routes/users');
app.use(userRoutes);

const weatherRoutes = require('./routes/weather');
app.use(weatherRoutes);

app.listen(port, () => {
    console.log('Listening on port ', port);
});
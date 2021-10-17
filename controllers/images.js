const db = require('../db/db');

// Get all of the images for a particular recipe by it's id
const getRecipeImages = (req, res) => {
    console.log('Get all images by recipe route.');

    let recipe_id = req.body.recipe_id;

    let sql = 'SELECT * FROM images WHERE recipe_id = ?';

    db.query(sql, recipe_id, (error, results) => {
        if (error) {
            console.log('Failed to return recipe images. ', error);
            res.sendStatus(500);
        } else {
            console.log('Recipe Images: ', results);
            res.json(results);
        }
    })
  }
  
const getImageById = (req, res) => {
    console.log('Get image by id route. ', req.params.id);

    let id = req.params.id;

    let sql = "SELECT * FROM images WHERE id = ?";

    db.query(sql, id, (error, results) => {
        if (error) {
            console.log(`Failed to return image with id ${id}.`);
            res.sendStatus(500);
        } else {
            console.log('Image: ', results);
            res.json(results);
        }
    })
}

const createImage = (req, res) => {
    console.log('Create image route.');

    let image_path = req.body.image_path;
    let recipe_id = req.body.recipe_id;
    let featured_image = false;

    let params = [];
    params.push(image_path);
    params.push(recipe_id);
    params.push(featured_image);

    let sql = "INSERT INTO images (image_path, recipe_id, featured_image) VALUES (?, ?, ?)"

    db.query(sql, params, (error, results) => {
        if (error) {
            console.log(`Failed to create a new image.`, error);
            res.sendStatus(500);
        } else {
            console.log('Image successfully created!');
            res.sendStatus(204);
        }
    })
}

const setFeaturedImage = (req, res) => {
    console.log('Update image route.');
    
    let id = req.params.id;
    let recipe_id = req.body.recipe_id;

    let params = [];
    params.push(id);
    params.push(recipe_id);

    let sql = "UPDATE images SET featured_image = CASE WHEN id = ? THEN true ELSE false END WHERE recipe_id = ?";

    db.query(sql, params, (error, results) => {
        if (error) {
            console.log(`Failed to set image with id ${id} to featured image.`, error);
            res.sendStatus(500);
        } else {
            console.log('Image successfully updated!');
            res.sendStatus(204);
        }
    })
}

const deleteImage = (req, res) => {
    console.log('Delete image route.');

    let id = req.params.id;

    let sql = 'DELETE FROM images WHERE id = ?';

    db.query(sql, id, (error, results) => {
        if (error) {
            console.log(`Failed to delete image with id ${id}.`, error);
            res.sendStatus(500);
        } else {
            console.log('Image successfully deleted!');
            res.sendStatus(204);
        }
    })
}

module.exports = {
    getRecipeImages,
    getImageById,
    createImage,
    setFeaturedImage,
    deleteImage
}
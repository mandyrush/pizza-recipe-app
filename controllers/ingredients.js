const showIngredients = (req, res) => {
    console.log('Show all ingredients route.');
}

const showIngredient = (req, res) => {
    console.log('Show an ingredient by id route. ', req.params.id);
}

const createIngredient = (req, res) => {
    console.log('Create a new ingredient route. ', req.body);
}

const updateIngredient = (req, res) => {
    console.log('Update an ingredient by id route. ', req.body);
}

const deleteIngredient = (req, res) => {
    console.log('Delete an ingredient by id route. ', req.params.id);
}

module.exports = {
    showIngredients,
    showIngredient,
    createIngredient,
    updateIngredient,
    deleteIngredient
}
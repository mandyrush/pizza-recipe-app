const showRatings = (req, res) => {
    console.log('Show all ratings route.');
}

const showRating = (req, res) => {
    console.log('Show single rating by id route. ', req.params.id);
}

const createRating = (req, res) => {
    console.log('Create new rating route. ', req.body);
}

const updateRating = (req, res) => {
    console.log('Update rating by id route. ', req.body);
}

const deleteRating = (req, res) => {
    console.log('Delete rating by id route. ', req.params.id);
}

module.exports = {
    showRatings,
    showRating,
    createRating,
    updateRating,
    deleteRating
}
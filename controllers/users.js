const showUsers = (req, res) => {
    console.log('Show all users route.');
}

const showUser = (req, res) => {
    console.log('Show single user by id route. ', req.params.id);
}

const createUser = (req, res) => {
    console.log('Create new user route. ', req.body);
}

const updateUser = (req, res) => {
    console.log('Update user by id route. ', req.body);
}

const deleteUser = (req, res) => {
    console.log('Delete user by id route. ', req.params.id);
}

module.exports = {
    showUsers,
    showUser,
    createUser,
    updateUser,
    deleteUser
}
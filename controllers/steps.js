const showSteps = (req, res) => {
    console.log('Show all steps route.');
}

const showStep = (req, res) => {
    console.log('Show single step by id route. ', req.params.id);
}

const createStep = (req, res) => {
    console.log('Create new step route. ', req.body);
}

const updateStep = (req, res) => {
    console.log('Update step by id route. ', req.body);
}

const deleteStep = (req, res) => {
    console.log('Delete step by id route. ', req.params.id);
}

module.exports = {
    showSteps,
    showStep,
    createStep,
    updateStep,
    deleteStep
}
let authCheck = (req, res) => {
    console.log('Successfully passed auth check');

    res.json('Successfully Logged In!');
};

module.exports = {
    authCheck
}
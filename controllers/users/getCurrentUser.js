const { HttpError } = require("../../helpers");

const getCurrentUser = async(req, res) => {
    const { email, subscription } = req.user;
    if(!req.user) {
        throw HttpError(401, 'not autorized')
    }
    res.json({
        email,
        subscription
    });
};

module.exports = getCurrentUser;
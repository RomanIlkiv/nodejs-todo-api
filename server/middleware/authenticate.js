var { User } = require('../models/user');

var authenticate = (req, res, next) => {
    var token = req.header('x-auth');

    User.findByToken(token).then((user) => {
        if (!user) {
            return Promise.reject();
        }
        //console.log(user, token);
        req.user = user;
        req.token = token;
        //console.log(req);
        next();
    }).catch((error) => {
        res.status(401).send();
    });
};

module.exports = {authenticate};
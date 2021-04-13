let jwt = require('jsonwebtoken');
let secret = 'asd45asd';

function generateToken (user) {
    let payload = {
        email: user.mail,
        password: user.password
    }
    return jwt.sign(payload, secret);
}

function checkToken (token) {
    return jwt.verify(token, secret);
}

module.exports = { generateToken, checkToken };



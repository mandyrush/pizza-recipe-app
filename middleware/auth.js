const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
require('dotenv');

const logger = (req, res, next) => {
    console.log('Logging route:', '/users', new Date().toISOString());
    next();
}

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),
  audience: process.env.AUTH0_IDENTITY,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256']
});

module.exports = {
    logger,
    jwtCheck
}
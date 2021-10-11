const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
require('dotenv');

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: process.env.JWKS_URI
  }),
  audience: process.env.AUDIENCE,
  issuer: process.env.JWT_ISSUER,
  algorithms: ['RS256']
});

module.exports = {
    jwtCheck
}
const redisClient = require('../utils/auth').redisClient;

const requireAuth = (req, res, next) => {
  let { authorization } = req.headers;
  authorization = authorization.split('Bearer: ')[1]
  if (!authorization) {
    return res.status(401).json('Unauthorized')
  }
  return redisClient.get(authorization, (err, reply) => {
    if (err || !reply) {
      return res.status(401).json('Unauthorized')
    }
    return next();
  })  
}

module.exports = {
  requireAuth
}
const jwt = require('jsonwebtoken');
const redis = require('redis');

const redisClient = redis.createClient(process.env.REDIS_URI);

const getAuthTokenId = (req, res) => {
  let { authorization } = req.headers;
  authorization = authorization.split('Bearer: ')[1]
  console.log('here', authorization)
  return redisClient.get(authorization, (err, reply) => {
    if (err || !reply) {
      return res.status(400).json('Unauthorized')
    }
    return res.json({id: reply})
  })
}

const setToken = (token, id) => {
  return Promise.resolve(redisClient.set(token, id))
}

const createSessions = (user) => {
  const { email, id } = user;
  const token = signToken(email);
  return setToken(token, id)
   .then(() => { 
     return { success: 'true', userId: id, token }
   })
   .catch(err => console.log(err))
}

const signToken = (email) => {
  const jwtPayload = { email };
  return jwt.sign(jwtPayload, 'JWT_SECRET', { expiresIn: '1 day' });
}

module.exports = {
  getAuthTokenId,
  createSessions,
  redisClient
}
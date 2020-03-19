const jwt = require('jsonwebtoken');

function verifyJWTToken(token) 
{
  return new Promise((resolve, reject) =>
  {
    jwt.verify(token, 'MYCOURSE_SECRET_TOKEN', (err, decodedToken) => 
    {
      if (err || !decodedToken)
      {
        return reject(err)
      }

      resolve(decodedToken)
    })
  })
}

function createJWToken(user)
{
  return jwt.sign({
     data: user.email + user.password
    }, 'MYCOURSE_SECRET_TOKEN', {
      expiresIn: 3200,
      algorithm: 'HS256'
  })
}

module.exports = { verifyJWTToken, createJWToken };
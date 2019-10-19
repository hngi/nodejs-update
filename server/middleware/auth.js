const jwt = require('jsonwebtoken');
require('dotenv').config()
const SECRET_KEY = process.env.SECRET_KEY

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decodeToken = jwt.verify(token, SECRET_KEY)
    const userId = decodeToken.userId
    if (res.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID'
    }
    next()
  } catch {
    res.status(401).json({
      error: new Error('Invalid request')
    })
  }
}
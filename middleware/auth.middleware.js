const jwt = require('jsonwebtoken')
const keys = require('../config/keys')

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next()
  }

  try {
    const token = req.headers.authorization.split(' ')[1] // "Bearer TOKEN"

    if (!token) {
      return res.status(401).json({ message: 'None Authorized' })
    }

    const decoded = jwt.verify(token, keys.jwtSecret)
    req.user = decoded
    next()

  } catch (e) {
    res.status(401).json({ message: 'None Authorized' })
  }
}
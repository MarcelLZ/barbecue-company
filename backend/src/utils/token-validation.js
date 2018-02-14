import jwt from 'jsonwebtoken'
import config from '../../config'

const token = ({ required = false }) => (req, res, next) => {
  if (!required) next()

  const token = getToken(req)
  tokenNotProvided(token, res)
  validateToken(token, req, res, next)
}

const getToken = (req) =>
  req.body.token ||
  req.headers['authorization'] ||
  req.headers['Authorization']

const tokenNotProvided = (token, res) =>
  !token && forbiden(res)

const validateToken = (token, req, res, next) => {
  jwt.verify(token, config.secretToken, (error, decodedToken) => {
    if (error) forbiden(res)

    console.log('DECODED:::', decodedToken)
    req.user = decodedToken
    next()
  })
}

const forbiden = res =>
  res.status(403).end()

export default token

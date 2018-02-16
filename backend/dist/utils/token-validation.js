'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const token = ({ required = false }) => (req, res, next) => {
  if (!required) next();

  const token = getToken(req);
  tokenNotProvided(token, res);
  validateToken(token, req, res, next);
};

const getToken = req => req.body.token || req.headers['authorization'] || req.headers['Authorization'];

const tokenNotProvided = (token, res) => !token && forbiden(res);

const validateToken = (token, req, res, next) => {
  _jsonwebtoken2.default.verify(token, _config2.default.secretToken, (error, decodedToken) => {
    if (error) forbiden(res);

    console.log('DECODED:::', decodedToken);
    req.user = decodedToken;
    next();
  });
};

const forbiden = res => res.status(403).end();

exports.default = token;
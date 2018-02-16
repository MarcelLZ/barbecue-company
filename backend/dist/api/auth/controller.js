'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticate = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _responses = require('../../utils/responses');

var _config = require('../../../config');

var _config2 = _interopRequireDefault(_config);

var _encrypt = require('../../utils/encrypt');

var _encrypt2 = _interopRequireDefault(_encrypt);

var _users = require('../users');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const generateToken = payload => _jsonwebtoken2.default.sign(payload, _config2.default.secretToken, { expiresIn: '1d' });

const authenticate = exports.authenticate = (() => {
  var _ref = _asyncToGenerator(function* ({ body }, res, next) {
    try {
      const { email, password } = body;
      const encryptedPassword = (0, _encrypt2.default)(password);

      let user = yield _users.User.findOne({ email, password: encryptedPassword });
      if (!user) throw Error('Usuário não encontrado.');

      (0, _responses.success)(res)({ token: generateToken({ _id: user._id, email }), email });
    } catch (message) {
      (0, _responses.error)(res, 400)(message);
    }
  });

  return function authenticate(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();
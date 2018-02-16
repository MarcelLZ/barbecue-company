'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = exports.create = undefined;

var _responses = require('../../utils/responses');

var _encrypt = require('../../utils/encrypt');

var _encrypt2 = _interopRequireDefault(_encrypt);

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const create = exports.create = (() => {
  var _ref = _asyncToGenerator(function* ({ body }, res, next) {
    try {
      const { email, password } = body;
      const encryptedPassword = (0, _encrypt2.default)(password);

      let user = yield _model2.default.findOne({ email });
      if (user) throw Error('Email já cadastrado.');

      yield _model2.default.create({ email, password: encryptedPassword });
      (0, _responses.success)(res, 204)();
    } catch (e) {
      (0, _responses.error)(res)(e);
    }
  });

  return function create(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();

const update = exports.update = (() => {
  var _ref2 = _asyncToGenerator(function* ({ body, user }, res, next) {
    const { email } = user;

    let userToUpdate = yield _model2.default.findOne({ email });
    if (!userToUpdate) throw Error('Usuário não existe.');

    const { password } = body;
    const encryptedPassword = (0, _encrypt2.default)(password);

    userToUpdate.set({ password: encryptedPassword }).save().then((0, _responses.success)(res)).catch((0, _responses.error)(res));
  });

  return function update(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
})();
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cancelOrder = exports.addOrder = exports.create = exports.index = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _responses = require('../../utils/responses');

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const index = exports.index = ({ user }, res, next) => _model2.default.find({ user }).then((0, _responses.success)(res)).catch((0, _responses.error)(res));

const create = exports.create = ({ bodymen: { body }, user }, res, next) => _model2.default.create(_extends({}, body, { user: user._id })).then((0, _responses.success)(res)).catch((0, _responses.error)(res));

const addOrder = exports.addOrder = (() => {
  var _ref = _asyncToGenerator(function* ({ body }, res, next) {
    const { orders } = body;

    const toCompany = (() => {
      var _ref2 = _asyncToGenerator(function* (order) {
        let company = yield _model2.default.findOne({ _id: order.company });
        if (!company) throw Error(`Company '${order.company}' not found`);

        const { orders } = company;
        return company.set({ orders: [{ items: order.items }, ...orders] }).save();
      });

      return function toCompany(_x4) {
        return _ref2.apply(this, arguments);
      };
    })();

    let updates = orders.map(toCompany);
    Promise.all(updates).then((0, _responses.success)(res)).catch((0, _responses.error)(res));
  });

  return function addOrder(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();

const cancelOrder = exports.cancelOrder = (() => {
  var _ref3 = _asyncToGenerator(function* ({ params: { id, orderId } }, res, next) {
    let company = yield _model2.default.findOne({ _id: id });
    if (!company) throw Error(`Company '${id}' not found`);

    company.set({ orders: company.orders.filter(function (order) {
        return order._id.toString() !== orderId;
      }) }).save().then((0, _responses.success)(res)).catch((0, _responses.error)(res));
  });

  return function cancelOrder(_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
})();
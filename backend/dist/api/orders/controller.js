'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _responses = require('../../utils/responses');

var _companies = require('../companies');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const index = exports.index = ({ params: { id }, user }, res, next) => {
  getOrders(user, id && { _id: id }).then((0, _responses.success)(res)).catch((0, _responses.error)(res));
};

const getOrders = (() => {
  var _ref = _asyncToGenerator(function* (user, filter) {
    let companies = yield _companies.Company.find(_extends({ user }, filter));
    if (!companies) return;

    return companies.reduce(function (prev, company) {
      let companyId = company._id;
      let companyName = company.name;

      let orderInfos = company.orders.map(function (order) {
        return {
          identifiers: { orderId: order._id, companyId },
          code: order.code,
          company: companyName,
          items: order.items
        };
      });

      return [...prev, ...orderInfos];
    }, []);
  });

  return function getOrders(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

var _companies = require('./companies');

var _companies2 = _interopRequireDefault(_companies);

var _orders = require('./orders');

var _orders2 = _interopRequireDefault(_orders);

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _express.Router();

router.use('/auth', _auth2.default);
router.use('/companies', _companies2.default);
router.use('/orders', _orders2.default);
router.use('/users', _users2.default);

exports.default = router;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = _bluebird2.default;
const { mongo } = _config2.default;

Object.keys(mongo.options).forEach(key => {
  _mongoose2.default.set(key, mongo.options[key]);
});

_mongoose2.default.connection.on('error', err => {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});

exports.default = _mongoose2.default;
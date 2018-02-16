'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemsSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getRandomInt = () => {
  const min = Math.ceil(0);
  const max = Math.floor(10000);
  return Math.floor(Math.random() * (max - min)) + min;
};

const itemsSchema = new _mongoose.Schema({
  description: { type: String, required: true },
  quantity: { type: Number, required: true }
});

const orderSchema = new _mongoose.Schema({
  code: { type: String, default: getRandomInt, index: true },
  items: {
    type: [itemsSchema],
    required: true
  }
});

const companySchema = new _mongoose.Schema({
  user: {
    type: _mongoose.Schema.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  cnpj: {
    type: String,
    required: true,
    index: true
  },
  orders: [orderSchema]
});

exports.itemsSchema = itemsSchema;
exports.default = _mongoose2.default.model('Company', companySchema);
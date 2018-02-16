'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Company = undefined;

var _express = require('express');

var _bodymen = require('bodymen');

var _tokenValidation = require('../../utils/token-validation');

var _tokenValidation2 = _interopRequireDefault(_tokenValidation);

var _controller = require('./controller');

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.Router)();
const { name, cnpj } = _model2.default.schema.tree;

app.get('/', (0, _tokenValidation2.default)({ required: true }), _controller.index);

app.post('/', (0, _tokenValidation2.default)({ required: true }), (0, _bodymen.middleware)({ name, cnpj }), _controller.create);

app.post('/orders', (0, _tokenValidation2.default)({ required: true }), (0, _bodymen.middleware)({ orders: [_model.orderSchema] }), _controller.addOrder);

app.delete('/:id/order/:orderId', (0, _tokenValidation2.default)({ required: true }), _controller.cancelOrder);

exports.Company = _model2.default;
exports.default = app;
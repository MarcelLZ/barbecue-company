'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = undefined;

var _express = require('express');

var _bodymen = require('bodymen');

var _tokenValidation = require('../../utils/token-validation');

var _tokenValidation2 = _interopRequireDefault(_tokenValidation);

var _controller = require('./controller');

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _express.Router();
const { email, password } = _model2.default.schema.tree;

app.post('/', (0, _bodymen.middleware)({ email, password }), _controller.create);

app.patch('/me', (0, _tokenValidation2.default)({ required: true }), (0, _bodymen.middleware)({ password }), _controller.update);

exports.User = _model2.default;
exports.default = app;
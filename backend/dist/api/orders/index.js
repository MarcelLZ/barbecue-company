'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _tokenValidation = require('../../utils/token-validation');

var _tokenValidation2 = _interopRequireDefault(_tokenValidation);

var _controller = require('./controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _express.Router();

app.get('/', (0, _tokenValidation2.default)({ required: true }), _controller.index);

app.get('/company/:id', (0, _tokenValidation2.default)({ required: true }), _controller.index);

exports.default = app;
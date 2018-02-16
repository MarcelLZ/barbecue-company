'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _bodymen = require('bodymen');

var _controller = require('./controller');

var _users = require('../users');

const app = new _express.Router();
const { user, password } = _users.User.schema.tree;

app.post('/', (0, _bodymen.middleware)({ user, password }), _controller.authenticate);

exports.default = app;
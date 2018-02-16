'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorHandler = undefined;

var _responses = require('./responses');

const errorHandler = exports.errorHandler = (payload, req, res, next) => {
  (0, _responses.error)(res)(payload);
};
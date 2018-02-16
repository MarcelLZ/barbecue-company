"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const success = exports.success = (response, code = 200) => payload => response.status(code).json(payload);

const error = exports.error = (response, code = 500) => error => response.status(code).json({ message: error.message });

const notFound = exports.notFound = response => payload => {
  if (payload) return payload;

  response.status(404).end();
};
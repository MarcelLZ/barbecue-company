'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _bodymen = require('bodymen');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _mongoose = require('./utils/mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _handlers = require('./utils/handlers');

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.urlencoded({ 'extended': 'true' }));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.json({ type: 'application/vnd.api+json' }));
app.use((0, _methodOverride2.default)());
app.use((0, _bodymen.errorHandler)());
app.use((0, _cors2.default)('*'));
app.use(_api2.default);
app.use(_handlers.errorHandler);

_mongoose2.default.connect(_config2.default.mongo.uri);

/* RUNNING */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Up and running on port ${PORT}`));
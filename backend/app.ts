var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

import config from './config.json';
import { getCarbonFootprint } from './src/carbon_footprint'

var app = express();
const PORT: number = parseInt(process.env.PORT || config.port);
const HOST: string = process.env.IP || 'localhost';

app.use(logger('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ data: 'you\'re at root!' })
});

app.get('/api/carbon', (req, res) => {
  const dest = req.query.dest as String;
  const data = getCarbonFootprint(dest);
  data.done((a) => { res.send(a) });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).send({ error: 'error' });
});

const server = app.listen(PORT, HOST, () => {
  console.log(`Server started on port ${PORT} at ${HOST}`);
});

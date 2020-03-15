var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const fs = require('fs');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var lecturesRouter = require('./routes/lectures');

var app = express();

const accessLogStream = fs.createWriteStream('./access.log', { flags: 'a' });
app.use(logger("combined", { stream: accessLogStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/lectures', lecturesRouter);

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
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

app.listen(3000, () => console.log('Listening on 3000'))

module.exports = app;

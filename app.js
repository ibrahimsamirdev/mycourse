const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const lecturesRouter = require('./routes/lectures');
const coursesRouter = require('./routes/courses');
const enrollsRouter = require('./routes/enrolls');

const { dbConn } = require('./middleware/mongooseConnect');

const app = express();

const accessLogStream = fs.createWriteStream('./access.log', { flags: 'a' });
app.use(logger("combined", { stream: accessLogStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Set environment
app.set('port', process.env.PORT || 3000);
const port = app.get('port');

// Connect to db
app.use(dbConn);

// Define routes
app.use('/', indexRouter);
app.use('/lectures', lecturesRouter);
app.use('/api/enrolls', enrollsRouter);
app.use('/courses', coursesRouter);

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
    error: err
  });
});

// Launch app
app.listen(port, () => console.log(`ready on port ${port}`));

module.exports = app;

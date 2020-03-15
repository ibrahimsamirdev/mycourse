const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const logger = require('morgan');
// const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const lecturesRouter = require('./routes/lectures');
const coursesRouter = require('./routes/courses');
// const userModel = require('./models/schema');

// const { dbConn } = require('./middleware/dbConfig');
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
// let db;
// app.use( async (req, res, next) => {
//   try {
//       if (!db) {
//          db = await 
//          mongoose.connect("mongodb+srv://mwaDG:mongo123@cluster0-seryv.gcp.mongodb.net/mycourse?retryWrites=true&w=majority", { useUnifiedTopology: true })
//         .then(_ => console.log(`connected successfully to MongoDB Server`))
//         .catch(err => console.log(err));
//       }
//       req.db = db;
//       next();
//   } catch (err) {
//       next(err);
//   }
// });

// Define routes

// app.get('/', async (req, res) => {
//   mongoose.model('users').find(function(err, users) {
//     res.send(users);
//     console.log(users);
//   });
// });

app.use('/', indexRouter);
app.use('/lectures', lecturesRouter);
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
    message: err.message,
    error: err
  });
});

// Launch app
app.listen(port, () => console.log(`ready on port ${port}`));

module.exports = app;

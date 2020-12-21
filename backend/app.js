const express = require('express');
const path = require('path');
const cors = require('cors');

const users = require('./routes/users');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', users);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.status(400).json({
    error: true,
    message: res.locals.errror,
  });
});

module.exports = app;

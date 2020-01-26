const express = require('express');
require('express-async-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("./db/mongoose");

const routers = {
  index: require('./routes/index'),
  customers: require('./routes/customers')
}


const app = express();

mongoose.init();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', routers.index);
app.use('/customer', routers.customers);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.log('err.message:', err)

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
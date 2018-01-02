const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');

const chat = require ('./routes/chat');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/chat', chat);

// Error 404

app.use(function(req, res, next){
  const err = new Error ('Not Found');
  err.status = 404;
  next(err);
});

// Error handler

app.use(function(err, req, res, next){
  // Set locals, only providing error in dev
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render error page
  res.status(err.status || 500);
  res.render('error');
})

module.exports = app;

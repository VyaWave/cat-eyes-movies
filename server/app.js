/**
 *  backend server entry
 */
// dependences
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
let fs = require('fs');

// router
// var routes = require('./routes/route_app');

var app = express();
var ejs = require('ejs');
// root router & render lib
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// render engine
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

// server settings
app.use(favicon(path.join(__dirname, 'favicon', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

// webpack server deal
app.get('/__webpack_hmr', function(req, res) {
  res.send('')
})

// router redirect
app.get('/', (req, res) => {
   res.redirect('catEyesMovies');
});

// router setting
// app.get('/app', routes.index);
// app.get(/\/movie\/hot\//, routes.hot);
// app.get(/\/movie\/cinema\//, routes.cinema);
// app.get(/\/movie\/info\//, routes.info);
// app.get(/\/movie\/evaluation\//, routes.evaluation);
// app.get(/\/movie\/coming\//, routes.coming);
// app.get(/\/movie\/coming\/[\w\W]*/, routes.comingLimit);

// app.get('/movie/swiper', routes.swiper);
// app.get('/movie/city', routes.city);
// app.get('/movie/cinema_detail', routes.cinema_detail);

// err
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// dev
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(res => {
  res.body = 'Hello World';
});

// pro base
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(5600, () => {
  console.log('catEyesMivies server listening on port 5600!');
});

module.exports = app;

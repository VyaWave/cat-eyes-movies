var Koa = require('koa');
var app = new Koa();

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('koa-logger');
var cookieParser = require('cookie-parser');
var bodyParser = require('co-body');
let fs = require('fs');
const fileServer = require('koa-static');

var ejs = require('ejs');
var router = require('koa-router')();

router.get('/', function* (next) {
  console.log('logging');
  yield next;
});
// app
//   .use(router.routes())
//   .use(router.allowedMethods());

// server settings
// app.use(favicon(path.join(__dirname, 'favicon', 'favicon.ico')));
app.use(logger('dev'));
app.use(fileServer('.'))
// app.use(bodyParser().urlencoded({ extended: false }));
//app.use(cookieParser());
// app.use(bodyParser().json());

app.use(ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

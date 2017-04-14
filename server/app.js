/**
 * 后台服务入口
 */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
let fs = require('fs');

// 路由控制
var routes = require('./routes/route_app');

var app = express();
var ejs = require('ejs');
// 设置路由参数 和 渲染库 😢
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

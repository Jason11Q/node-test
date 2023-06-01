const express = require('express');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();
const bodyParser = require('body-parser');

proxy.on('proxyRes', function (proxyRes, req, res) {
  // 获取到响应头信息
  const headers = proxyRes.headers;
  console.log('1111', headers);

  // 将响应头信息设置到代理服务器的响应头中
  Object.keys(headers).forEach(function (key) {
    res.append(key, headers[key]);
  });
});

proxy.on('error', function (err, req, res) {
  // 处理错误信息
});

// 转发请求到目标接口服务
const targetUrl = 'http://172.16.2.65:3070';

const port = 30701;
const app = express();

//设置跨域访问
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By', ' 3.2.1');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  proxy.web(req, res, { target: targetUrl });
});

app.crx;

app.listen(port);

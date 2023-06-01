const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const options = {
  target: 'http://172.16.2.65:3070', // 目标主机,提供接口服务的域名
  changeOrigin: true, // 需要虚拟主机站点
  onProxyRes: function (proxyRes, req, res) {
    console.log(1, proxyRes);
    console.log(2, req);
    console.log(3, res);
    // 显式指定要传递的响应头信息
    res.set({
      'Content-Type': proxyRes.headers['content-type'],
      'Cache-Control': proxyRes.headers['cache-control'],
      'Last-Modified': proxyRes.headers['Last-Modified'],
      'Has-Avws-Setting': proxyRes.headers['Has-Avws-Setting'],
      //   'Has-Avws-Setting': proxyRes.headers['Has-Avws-Setting'],
    });
  },
  // 指定要传递的请求头信息
  //   headers: {
  //     Authorization: 'Bearer xxxxxxxxx',
  //   },
  // 指定要传递的响应头信息
  forwardHeaders: ['content-type', 'cache-control', 'Last-Modified', 'Has-Avws-Setting'],
};
const exampleProxy = createProxyMiddleware(options); //开启代理功能，并加载配置

const port = 30701;
const app = express();

app.use(cors()); //允许跨域请求。也就是说，你的请求应该是可以
app.use(exampleProxy);

app.listen(port);

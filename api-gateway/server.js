const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

app.use('/sale', createProxyMiddleware({ target: 'http://salesinfo:3001', changeOrigin: true }));
app.use('/product', createProxyMiddleware({ target: 'http://productinfo:3002', changeOrigin: true }));
app.use('/customer', createProxyMiddleware({ target: 'http://customerinfo:3003', changeOrigin: true }));

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
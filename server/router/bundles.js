const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const {
  service1, service2, service3, service4, service5,
} = require('../config/services.js');

const router = Router();

router.use('/service1.js', createProxyMiddleware({
  target: `${service1.url}/:id`,
  // pathRewrite: {
  //   '^/bundles/service1.js': service1.bundle,
  // },
  changeOrigin: true,
}));

router.use('/service2.js', createProxyMiddleware({
  target: `${service2.url}/:id`,
  // pathRewrite: {
  //   '^/bundles/service2.js': service2.bundle,
  // },
  changeOrigin: true,
}));

router.use('/service3.js', createProxyMiddleware({
  target: `${service3.url}/:id`,
  // pathRewrite: {
  //   '^/bundles/service3.js': service3.bundle,
  // },
  changeOrigin: true,
}));

router.use('/service4.js', createProxyMiddleware({
  target: `${service4.url}/:id`,
  // pathRewrite: {
  //   '^/bundles/service4.js': service4.bundle,
  // },
  changeOrigin: true,
}));

router.use('/service5.js', createProxyMiddleware({
  target: `${service5.url}/:id`,
  // pathRewrite: {
  //   '^/bundles/service5.js': service5.bundle,
  // },
  changeOrigin: true,
}));

module.exports = router;

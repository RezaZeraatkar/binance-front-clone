const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    ['/daily-stats', '/order-book', '/recent-trades'],
    proxy({
      target: 'http://localhost:5000',
      changeOrigin: true,
    }),
  );
  app.use(
    '/pairs',
    proxy({
      target: 'http://localhost:3004',
      changeOrigin: true,
    }),
  );
};

const serverless = require('serverless-http');
const Koa = require('koa');
const RSSHub = require('rsshub');

const app = new Koa();
RSSHub.init({
  CACHE_TYPE: null,
  ALLOW_ORIGIN: '*',
});

app.use(RSSHub.routes());
app.use(RSSHub.allowedMethods());

module.exports = serverless(app);

const serverless = require('serverless-http');
const Koa = require('koa');
const RSSHub = require('./lib/index'); // RSSHub 原入口

const app = new Koa();
app.use(RSSHub.routes());
app.use(RSSHub.allowedMethods());

module.exports = serverless(app);

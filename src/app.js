const Koa = require('koa');
const app = new Koa();

const allRoutes = require('./routes/index');

app
  .use(allRoutes.routes())
  .use(allRoutes.allowedMethods());

app.listen(3000);
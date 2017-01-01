const router = require('koa-router')();

router.get('/', function (ctx, next) {
  ctx.body = '/users';
});

router.get('/secret', function (ctx, next) {
  ctx.body = '/users/secret';
});

module.exports = router;
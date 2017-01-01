const router = require('koa-router')();

router.get('/', function (ctx, next) {
    ctx.body = '/admin';
});

router.get('/secret/:secretId', function (ctx, next) {
    ctx.body = `SecretId: ${ctx.params.secretId}`;
});

module.exports = router;
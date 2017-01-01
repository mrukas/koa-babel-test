const router = require('koa-router')();

const users = require('./users');
const admin = require('./admin');

router.use('/users', users.routes());
router.use('/admin', admin.routes());

module.exports = router;
const Router = require('koa-router');
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = 'Всем привет, я сервер'
})
module.exports = router;

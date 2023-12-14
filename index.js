// import router from './routes'
const router = require('./routes')
const Koa = require('koa');
const KoaBody = require('koa-body').default;
const cors = require('koa2-cors');
const router = require('./routes');
const app = new Koa();
const PORT = 7070;

app.use(
    KoaBody({
        text: true,
        urlencoded: true,
        multipart: true,
        json: true,
    })
);

app.use(
    cors({
        origin: '*',
        credentials: true,
        'Access-Control-Allow-Origin': true,
        allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    })
);

app.use(router().routers()).use(router.allowedMethods());

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Сервер запущен на ${PORT} порту`);
});

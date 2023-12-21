const Router = require('koa-router');
const router = new Router();
// const data = require('./data')
const file = require('./filereader');
const { randomUUID } = require('crypto')
import moment from 'moment';

router.get('/', (ctx, next) => {
    ctx.body = 'Всем привет, я сервер';
});

router
	.get('/posts', (ctx, next) => {
	 ctx.body = file.getFile();
	})
	.get('/posts/:id', (ctx, next) => {
		const postId = ctx.params.id;
		const data = file.getFile();
		const post = data.find(elem => elem.id === postId);
		//console.log(post)
		ctx.body = post;
	})
	.delete('/remove/:id', (ctx, next) => {
		const postId = ctx.params.id;
		const data = file.getFile()
		const arrPosts = data.filter((elem) => elem.id !== postId);
		file.setFile(arrPosts)
		ctx.body = { status: 'Все ОК' };
		ctx.response.status = 204;
	})
	.post('/posts/new', async (ctx, next) => {
		const newData = new Date();
		const month = newData.getMonth()
		console.log(newData);
		const newPost = ctx.request.body;
		newPost.id = randomUUID()
		const data = file.getFile()
		data.push(newPost)
		file.setFile(data)
		ctx.response.status = 204;
	})


module.exports = router;

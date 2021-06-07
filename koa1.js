const Koa = require('koa');
const app = new Koa();
const Router = require('koa-Router')
const router = new Router
app.use(async (ctx, next) => {
    let stime = new Date().getTime();
              await next()
    let etime = new Date().getTime();
    ctx.response.body =  `<h1>你好 ${etime-stime}ms</h1>`
})
app.use(async (ctx, next) => {
 console.log('2');
//  await next()
 console.log('3');
})
app.use(async (ctx) => {
console.log('4');
})
app.listen(3002, ()=> {
  console.log('启动成功');
});
// node使用了事件驱动，非阻塞式的I/O模型，轻量高效
// context: Koa将Node.js的Request(请求)和Response(响应)对象封装到Context对象中，
// 所以也可以把Context对象称为一次对话的上下文。通过价格Context对象，就可以控制返回给用户的内容
// Context对象还内置了一些常用属性，如 context.state context.app context.cookies, context.throw等
// 也可以在Context对象中自定义一些属性，配置以供全局使用

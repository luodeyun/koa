const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser')
const Router = require('koa-router')
const router = new Router() // 初始化koa-router中间件
// 之前通过ctx.url判段路径，通过ctx.method判断请求方法，这样显得麻烦，所以
// 借助koa-router 如下: npm i koa-router 
app
  .use(bodyparser())
  .use(router.routes())
app.use(static(  // 加载静态资源 要引入path与koa-static中间件
path.join(_dirname, '/static')
  ))
router.get('/',async (ctx, next) => {
     ctx.type = 'html'
     let html = `
     <h1>登录</h1>
     <form method = 'POST' action = '/'>
     <p>用户名</p>
     <input name = 'username'/></br>
     <p>密码</p>
     <input name = 'password' type = 'password'/></br>
     <button typr = 'submit'> submit</button>
     `
     ctx.body = html
}) 
   
router.post('/', ctx => {
    let postData = ctx.request.body
    ctx.body = postData
   })
app.listen(3023, ()=> {
  console.log('启动成功');
});

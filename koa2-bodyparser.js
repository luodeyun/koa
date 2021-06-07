const Koa = require('koa')
const app = new Koa()
const bodyparser = require('koa-bodyparser')
// 常见的中间件 1.koa-bodyparser
// 可以把post请求的参数解析到ctx.request.body中，使用koa-bodyparser中间件要安装 npm i koa-bodyparser
app.use(bodyparser())
app.use(async (ctx, next) => {
  if (ctx.url === '/' && ctx.method === 'GET') {
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
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    let postData = ctx.request.body
    ctx.body = postData
  }
})
app.listen(3013, () => {
  console.log('启动成功')
})

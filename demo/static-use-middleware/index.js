const Koa = require('koa')
const path = require('path')
//静态资源中间件
const static = require('koa-static')

const  conditional = require('koa-conditional-get');
const  etag =  require('koa-etag');

const app = new Koa()

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'

app.use(conditional());
app.use(etag());

// app.use( async ( ctx, next ) => {
//    // 设置响应头Cache-Control 设置资源有效期为300秒
//    ctx.set({
//     'Cache-Control': 'max-age=300'  
//   });
//   await next();
// })

app.use(static(
  path.join( __dirname,  staticPath)
))

app.listen(3000, () => {
  console.log('[demo] static-use-middleware is starting at port 3000')
})


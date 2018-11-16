// const Koa = require('koa')
// const app = new Koa()
// app.use( async (ctx) =>{
//     ctx.body="hello world"
// })
// app.listen(3000)
// console.log("开始")
var sig = require('./tls-sig-api/TLSAPI');
var config = {
    "sdk_appid": 1400160244,
    "expire_after": 180 * 24 * 3600,
    "private_key": "../keys/private_key",
    "public_key": "../keys/public_key"
}
 
var sig = new sig.Sig(config);
console.log(sig.genSig("xiaojun"));
//引用koa的app对象
const koa = require("koa");
const app = new koa();
//引入tingjs对象
const ting = require("../Ting.js/");
//引入package
const _package = require("./package.json");
//引入routes
let routes = require("./routes.js");
//定义初始化函数
let initfn = function(init){
    init(routes);
}
//初始化项目
ting(app,initfn,_package);

app.listen(8090);
console.log("server listen to 8090");
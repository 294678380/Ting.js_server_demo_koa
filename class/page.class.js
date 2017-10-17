const rules = {
	get:[
		{
			brie:"这是page页get访问方法",
			desc:"必须要传入get查询参数?s=hello",
			path:"/",
			Examination:true,
			controller:["getPage"],
			ver:{
				query:{
					s:/hello/,
					t:function(val,query){

						if(val !== "test"){
							return "参数t的值必须是test";
						}
						return true;
					}
				}
			}
		}
	]
}
class Page{
	async getPage(ctx,next){
		/*
			配置中的ver验证，如果失败会将失败信息挂在req._typeError中 判断它
		*/
		if(req._typeError){
			ctx.body = req._typeError;
			await next();
		}
		
		ctx.body = "hello page";
	}
}
Page.rules = rules;
module.exports = Page;
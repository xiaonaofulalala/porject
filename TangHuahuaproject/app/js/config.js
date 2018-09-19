require.config({
	baseUrl:"/",
	paths:{
		"jquery":"libs/jquery-1.12.4",
		"template":"libs/template-web",
		"url":"module/url",
		"shoppost":"module/shoppost",
		"footer":"module/footer",
		"register":"module/register",
		"tab":"module/Tab",
		"header_focus":"module/header_focus",
		
		"header_focus":"module/header_focus",
		
	},
	shim:{
		header_focus:{
			deps:["jquery"]
		}
	}
})


//首页 轮播图
// 	$(function(){
// 		var box=$("#header_focus"),
// 			ul=$("#header_focus ul"),
// 			aLi=$("#header_focus ul li"),
// 			aLiL=$("#header_focus ul li .focus_text"),
// 			aLiR=$("#header_focus ul li .focus_text"),
// 			nav=$("#header_focus .focus_nav"),
// 			aBtn=$("#header_focus .focus_nav span"),
// 			index=0,
// 			flag=false;
// 		aBtn.on("click",function(){
// 			if(!flag){
// 				flag=true;
// 				$(this).addClass("on").siblings().removeClass("on");
// 				aLi.eq(index).stop().fadeOut(100);
// 				index=$(this).index();
// 				aLi.eq(index).stop().fadeIn(1000,function(){
// 					flag=false;
// 				});
// 				/* aLi.eq(index).children('.focus_text').animate({},function(){
// 					flag=false;
// 				}); */
// 			}
// 		})
// 		
// 		
// 		var timer=null;
// 		function auto(){
// 			timer=setInterval(function(){
// 				if(!flag){
// 					flag=true;
// 					aLi.eq(index).stop().fadeOut(100);
// 					index++;
// 					if(index>aLi.length-1) index=0;
// 					aBtn.eq(index).addClass("on").siblings().removeClass("on");
// 					aLi.eq(index).stop().fadeIn(1000,function(){
// 						flag=false;
// 					
// 					});
// 				}
// 			},3000);
// 		}
// 		auto();
// 		$("#header_focus").hover(function(){
// 			clearInterval(timer);
// 		},auto);
// 		
// 		
// 	});
// 

define(function(){
	$(function(){
			var box=$("#header_focus"),
				ul=$("#header_focus ul"),
				aLi=$("#header_focus ul li"),
				aLiL=$("#header_focus ul li .focus_text"),
				aLiR=$("#header_focus ul li .focus_text"),
				nav=$("#header_focus .focus_nav"),
				aBtn=$("#header_focus .focus_nav span"),
				index=0,
				flag=false;
			aBtn.on("click",function(){
				if(!flag){
					flag=true;
					$(this).addClass("on").siblings().removeClass("on");
					aLi.eq(index).stop().fadeOut(100);
					index=$(this).index();
					aLi.eq(index).stop().fadeIn(1000,function(){
						flag=false;
					});
					/* aLi.eq(index).children('.focus_text').animate({},function(){
						flag=false;
					}); */
				}
			})
			
			
			var timer=null;
			function auto(){
				timer=setInterval(function(){
					if(!flag){
						flag=true;
						aLi.eq(index).stop().fadeOut(100);
						index++;
						if(index>aLi.length-1) index=0;
						aBtn.eq(index).addClass("on").siblings().removeClass("on");
						aLi.eq(index).stop().fadeIn(1000,function(){
							flag=false;
						
						});
					}
				},3000);
			}
			auto();
			$("#header_focus").hover(function(){
				clearInterval(timer);
			},auto);
			
			
		});
	
})
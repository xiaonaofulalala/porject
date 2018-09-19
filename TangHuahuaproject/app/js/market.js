require(["config"],function(){
	require(["jquery","register","header_focus","footer","shoppost"],function($,register,header_focus,footer){
		$("#btn").click(function(){
			register.init();
			register.regedit();
		});
		$("#btn1").click(function(){
			register.init1();
			register.login();
		});	
		
		footer.init();
		footer.init1();
		
	})
})

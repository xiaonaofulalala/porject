define(function(){
	function footer(){
		
	}
	
	footer.prototype.init=function(){
		$("#footer").load("/html/template/footer.html",function(){
			
		});
		
		
	}
	
	footer.prototype.init1=function(){
		$("#footer1").load("/html/template/footer.html",function(){
			
		});
		
		
	}
	
	
	return new footer();
})
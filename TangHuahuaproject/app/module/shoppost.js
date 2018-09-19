define(function(){
	$("#body").on("click",function(e){
		e=e||window.event;
		var target=e.target||e.srcElement;
		
		if(target.className=="spanBtn"){
			var tradename=target.parentNode.children[1].innerHTML;
			$.ajax({
				url: "http://localhost/api/v1/shoppost.php",
				dataType: 'text',
				type: 'POST',
				data: {"tradename": tradename},
				success: function(data){
					//location.href = 'html/product.html'
					alert(data);
				}
				
			})
		}
	})

})
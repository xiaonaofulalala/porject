define(function(){$("#body").on("click",function(t){var e=(t=t||window.event).target||t.srcElement;if("spanBtn"==e.className){var a=e.parentNode.children[1].innerHTML;$.ajax({url:"http://localhost/api/v1/shoppost.php",dataType:"text",type:"POST",data:{tradename:a},success:function(t){alert(t)}})}})});
define(function(){
	function register(){
			
	}
	//遮罩层..................................................................................................................................
	
	register.prototype.init=function(){
		$(".ni").addClass("ac");
		$(".register").addClass("ac").on("click",".closeBtn",function(){
			$(".register").removeClass("ac");
			$(".ni").removeClass("ac");
		});
		
		
	/* 	$div1=$("#ni");
		$div1.css({
			"position":"fixed",
			"left":0,
			"top":0,
			"background":"rgba(0,0,0,.1)",
			"width":"100%",
			"height":"100%",
			"zIndex":70
		}).appendTo($(document.body)); */
		
	}
	
	register.prototype.init1=function(){
		$(".ni").addClass("ac");
		$(".login").addClass("ac").on("click",".closeBtn",function(){
			$(".login").removeClass("ac");
			$(".ni").removeClass("ac");
		});
		
		
		/* $div1=$("#ni");
		$div1.css({
			"position":"fixed",
			"left":0,
			"top":0,
			"background":"rgba(0,0,0,.1)",
			"width":"100%",
			"height":"100%",
			"zIndex":70
		}).appendTo($(document.body)); */
		
	}
	
	//注册..................................................................................................................................
	
	register.prototype.regedit=function(){
		
			/* //用户名
			var btn2=document.getElementById('btn2');
			btn2.onclick=function(){
				window.location.href='denglu.html'
			} */	
			var oArr=[false,false,false,false]
			var input1=document.getElementById('username');
			var span1=document.getElementById('span1');
			
			
			var input2=document.getElementById('pwd');
			var span2=document.getElementById('span2');
				
			var input3=document.getElementById('opwd');
			var span3=document.getElementById('span3');
			
			var input4=document.getElementById('phone');
			var span4=document.getElementById('span4');
			
				input1.onfocus=function(){
				if(this.className=="gray"){
					this.value='';
					this.className='';
				}
				
				}
				input1.onblur=function(){
					if(this.value==''){
						this.value="您的用户名"
						this.className="gray"
						span1.className="on"
						span1.innerHTML='输入用户名'
					}else if(this.value!=''){
						var reg=/^[0-9a-z_]{1,}$/i
						if(reg.test(this.value)){
							span1.className="on"
							span1.innerHTML='用户名输入正确'
							oArr[0]=true;
						}else{
							
							span1.className="on"
							span1.innerHTML='错误：用户名只能包含数字、字母、下划线'
						}
					}
				}
				
				input1.onkeydown=function(){
					if(this.className=='ccc'){
						this.value='';
						this.className='';
					}
				}
			
			
			//密码

				input2.onblur=function(){
					if(this.value==''){
						span2.className="on"
						span2.innerHTML='请输六位以上的入密码'
					}else if(this.value!=''){
						var reg=/^.{6,}$/i
						if(reg.test(this.value)){
							span2.className="on"
							span2.innerHTML='密码输入正确'
							oArr[1]=true;
							return oArr[1]
						}else{
							span2.className="on"
							span2.innerHTML='错误：密码必须六位数以上'
						}
					}
				}
			
				input3.onblur=function(){
					if(this.value==''){
						span3.className="on"
						span3.innerHTML='请再次输入密码'
					}else if(this.value!=''){
						if(this.value!=input2.value){
							span3.style.color='red'
							span3.innerHTML='错误：两次密码不一致'
						}else{
							span3.className="on"
							span3.innerHTML='两次密码一致'
							oArr[2]=true;
						}
					}
				}

			//电话号码
				
				input4.onfocus=function(){
					if(this.className=="gray"){
						this.value='';
						this.className='';
					}
					
				}
				input4.onblur=function(){
					if(this.value==''){
						this.className="gray"
						span4.className="on"
						span4.innerHTML='请输11位手机号码'
					}else if(this.value!=''){
						var reg=/^1\d{10}$/
						if(reg.test(this.value)){
							span4.className="on"
							span4.innerHTML='号码格式正确'
							oArr[3]=true;
						}else{
							span4.className="on"
							span4.innerHTML='号码只能11位数字并以“1”开头'
						}
					}
				}
				
				input4.onkeydown=function(){
					if(this.className=='ccc'){
						this.value='';
						this.className='';
					}
				}
				
				
				//想服务器传输数据
				function ajaxPost(url,option,fnSucc,fnError){
					var ajax=new XMLHttpRequest();
					ajax.open("POST",url,true);
					//请求头一定在open之后send之前设置
					ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
					ajax.send(option);//发送请求
					ajax.onreadystatechange=function(){
						//readyState 与网络 有关  当为4 时 代表 
						if(ajax.readyState==4){
							//
							if (ajax.status==200) {
								fnSucc(ajax.responseText);//成功 回调成功函数
							}else{
								fnError&&fnError(ajax.responseText);//失败 传了调失败函数  则调否者不予回应
							}
						}
					}
				}
				
				
				var ZCbtn=document.getElementById("ZCbtn")
				ZCbtn.onclick=function(e){
					console.log(oArr)
					var username1=input1.value;
					var passward2=input3.value;
					var phone1=input4.value;
					
					
					var i = oArr.every(function(j){
						return j == true;
					})
					
					
					if(!i){
						alert('注册不成功')
					}else{
						var option="username="+username1+"&passward="+passward2+"&phone="+phone1;
						ajaxPost("http://localhost/api/v1/register.php",option,function(data){
							alert(data);
							if(data=="注册成功！"){
								$(".register").remove();
								$("#ni").remove();
							}
							
						});
					}
	
				}
				
				/* $("btn1").click(function(){
					var username1=input1.value;
					var passward2=input3.value;
					var phone1=input4.value;
					var i = oArr.every(function(j){
						return j == true;
					});
					if(!i){
						alert('注册不成功')
					}else{
						 $.post("http://localhost/api/v1/register.php",{"username":username1,"passward":passward2,"phone":phone1},function(data){
							alert(data)
						}) 
					}		
				});
			 */
				
	}
	//登录..................................................................................................................................
	
	register.prototype.login=function(){
		
		var oArr=[false,false]
		var input1=document.getElementById('username1');
		var span1=document.getElementById('spanL1');
		
		
		var input2=document.getElementById('pwd1');
		var span2=document.getElementById('spanL2');
		
		
		
		input1.onfocus=function(){
		if(this.className=="gray"){
			this.value='';
			this.className='';
		}
		
		}
		input1.onblur=function(){
			if(this.value==''){
				this.value="您的用户名"
				this.className="gray"
				span1.className="on"
				span1.innerHTML='输入用户名'
			}else if(this.value!=''){
				var reg=/^[0-9a-z_]{1,}$/i
				if(reg.test(this.value)){
					span1.className=""
					span1.innerHTML='用户名输入正确'
					oArr[0]=true;
				}else{
					
					span1.className="on"
					span1.innerHTML='用户名只能包含数字、字母'
					
				}
			}
		}
		
		input1.onkeydown=function(){
			if(this.className=='gray'){
				this.value='';
				this.className='';
			}
		}

	//密码
		input2.onblur=function(){
			if(this.value==''){
				span2.className="on"
				span2.innerHTML='请输六位以上的入密码'
			}else if(this.value!=''){
				var reg=/^.{6,}$/i
				if(reg.test(this.value)){
					span2.className=""
					span2.innerHTML='密码输入正确'
					oArr[1]=true;
					return oArr[1]
				}else{
					span2.className="on"
					span2.innerHTML='错误：密码必须六位数以上'
					input2.value=""
				}
			}
		}
		
		var DLbtn=document.getElementById("DLbtn")
		DLbtn.onclick=function(e){
			console.log(oArr)
			var username1=input1.value;
			var passward2=input2.value;
			
			
			var i = oArr.every(function(j){
				return j == true;
			})
			
			//想服务器传输数据
			function ajaxPost(url,option,fnSucc,fnError){
				var ajax=new XMLHttpRequest();
				ajax.open("POST",url,true);
				//请求头一定在open之后send之前设置
				ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				ajax.send(option);//发送请求
				ajax.onreadystatechange=function(){
					//readyState 与网络 有关  当为4 时 代表 
					if(ajax.readyState==4){
						//
						if (ajax.status==200) {
							fnSucc(ajax.responseText);//成功 回调成功函数
						}else{
							fnError&&fnError(ajax.responseText);//失败 传了调失败函数  则调否者不予回应
						}
					}
				}
			}
			
			
			if(!i){
				alert('账号或密码格式错误');
				input1.value="";
				input2.value="";
				
			}else{
				var option="username="+username1+"&passward="+passward2;
				ajaxPost("http://localhost/api/v1/login.php",option,function(data){
					alert(data);
					
				});
			}

		}
		
		
		
	}
		
	return new register();
})
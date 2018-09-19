/* window.onload=function(){
	//选项卡
	function My(n){
		this.box=document.getElementById(n);
		this.aBtn=this.box.getElementsByTagName('div')[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
		this.aPhoto=this.box.getElementsByTagName('div')[1].getElementsByTagName("ul");
	}
	
	My.prototype.change=function(){
		var _this=this;
		for(var i=0;i<this.aBtn.length;i++){
			this.aBtn[i].index=i;
			this.aBtn[i].onclick=function(){
				for(j=0;j<_this.aPhoto.length;j++){
					_this.aPhoto[j].className='';
					_this.aBtn[j].className='';
				}
				_this.aPhoto[this.index].className='on';
				_this.aBtn[this.index].className='on';
			}
		}
	}
	var box1=new My('area1_hot_col1');
	box1.change();
	var box2=new My('area2_hot_col1');
	box2.change();
	var box3=new My('area3_hot_col1');
	box3.change();
	
}
 */


define(function(){
	//选项卡
	function My(n){
		this.box=document.getElementById(n);
		this.aBtn=this.box.getElementsByTagName('div')[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
		this.aPhoto=this.box.getElementsByTagName('div')[1].getElementsByTagName("ul");
	}
	
	My.prototype.change=function(){
		var _this=this;
		for(var i=0;i<this.aBtn.length;i++){
			this.aBtn[i].index=i;
			this.aBtn[i].onclick=function(){
				for(j=0;j<_this.aPhoto.length;j++){
					_this.aPhoto[j].className='';
					_this.aBtn[j].className='';
				}
				_this.aPhoto[this.index].className='on';
				_this.aBtn[this.index].className='on';
			}
		}
	}
	
	
	var box1=new My('area1_hot_col1');
	box1.change();
	var box2=new My('area2_hot_col1');
	box2.change();
	var box3=new My('area3_hot_col1');
	box3.change();
	
})
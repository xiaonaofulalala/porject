<?php
//处理表单请求
header("Access-Control-Allow-Origin:*");
$tradename = $_POST['tradename'];




//把标题和答案插入数据库

mysql_connect("127.0.0.1","root","123456");
mysql_select_db("thh");

$sql = "SELECT * FROM shangping WHERE tradename='$tradename'";

mysql_query("set names 'utf8'");

$sql = mysql_query($sql);

while($arr=mysql_fetch_array($sql)) {
	$brr='INSERT INTO shop (tradename,seller,img,price) VALUES ("'.$arr['tradename'].'","'.$arr['seller'].'","'.$arr['img'].'",'.$arr['price'].')';
	$isSucc=mysql_query($brr);
} 


if($isSucc){
	echo "加入购物车成功！";
}else{
	echo "加入购物车失败！";
}
mysql_close();


?>
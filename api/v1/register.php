<?php
//处理表单请求
$title = $_POST['username'];
$answer = $_POST['passward'];
$phone = $_POST['phone'];

header("Access-Control-Allow-Origin:*");

//把标题和答案插入数据库

mysql_connect("127.0.0.1","root","123456");
mysql_select_db("thh");

$sql = "INSERT INTO mima (username,pwd,phone) VALUES ('$title','$answer',$phone)";

mysql_query("set names 'utf8'");


$isSucc = mysql_query($sql);
if($isSucc){
	echo "注册成功！";
}else{
	echo "注册失败！";
}
mysql_close();


?>
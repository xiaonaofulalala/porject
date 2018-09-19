<?php
//处理表单请求
$username = $_POST['username'];
$passward = $_POST['passward'];

header("Access-Control-Allow-Origin:*");

//把标题和答案插入数据库

mysql_connect("127.0.0.1","root","123456");
mysql_select_db("thh");

$sql = "SELECT * FROM mima WHERE username='$username' && pwd='$passward'";

mysql_query("set names 'utf8'");


$isSucc = mysql_query($sql);

$brr=array();
while ($arr=mysql_fetch_array($isSucc)) {
	array_push($brr, $arr);
}

$data=json_encode($brr);

if($data=="[]"){
	echo "登录失败！";
}else{
	echo "登录成功！";
}
mysql_close();


?>
<?php
	include 'connect.php';
	
	$sql="insert into user(uid,username,password,email,phone) values('2','aiya','123456','123@qq.com','13111111111123')";
	
	$res=$conn->query($sql);
	
	if($res){
		echo '插入成功';
	}
	
	$conn->close();//关闭数据库的链接
	
	
?>
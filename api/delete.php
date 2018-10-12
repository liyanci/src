<?php
	include 'connect.php';
	
	$id=$_GET['id'];
	
	$sql="delete from user where uid=$id";
	
	$res=$conn->query($sql);
	
	if($res){
		echo '删除成功';
	}
	
	//关闭连接数据库
	
    $conn->close();//关闭数据库的链接
	
?>
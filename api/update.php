<?php
	include 'connect.php';
	
	//写查询语句  UPDATE reginf set age='19' WHERE name='malin'
	$sql="update user set password='456123' where username='lili'";
	
	//执行查询语句
	$res=$conn->query($sql);
	
	if($res){
		echo '更新成功';
	}
	
	//关闭连接数据库
	
    $conn->close();//关闭数据库的链接
?>
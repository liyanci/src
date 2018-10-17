<?php
//	header("content-type:text/html;charset=utf-8");
	include 'connect.php';
	
	$uid=isset($_POST['uid']) ? $_POST['uid'] : '';
//	echo $uid;
	
	$sql="select * from goodlist where uid='$uid'";
	
	$res=$conn->query($sql);
	
	$row=$res->fetch_all(MYSQLI_ASSOC);
//	var_dump($row);
	
	echo json_encode($row,JSON_UNESCAPED_UNICODE);
	
	$res->close();//关闭结果集
//	
    $conn->close();//关闭数据库的链接
?>
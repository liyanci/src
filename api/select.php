<?php
	include 'connect.php';
	
	$sql='select * from user';
	
	$res=$conn->query($sql);
	
	$row=$res->fetch_all(MYSQLI_ASSOC);
	
	echo json_encode($row,JSON_UNESCAPED_UNICODE);
	
	$res->close();//关闭结果集
	
    $conn->close();//关闭数据库的链接
?>
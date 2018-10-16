<?php
	include 'connect.php';
	$username=isset($_POST['username']) ? $_POST['username'] : '';
	$password=isset($_POST['psw']) ? $_POST['psw'] : '';
//	echo $username.' '.$password
	
	$sql="insert into users(username,password) values('$username','$password')";
	
	$res=$conn->query($sql);
	
	if($res){
		echo 'yes';
	}
	else{
		echo 'no';
	}
	
	$conn->close();//关闭数据库的链接
	
	
?>
$('#saoma').click(function(){
	$(this).addClass('on');
	$('#mima').removeClass('on');
	$('.erwei_login').show();
	$('.psw_login').hide();
})
$('#mima').click(function(){
	$(this).addClass('on');
	$('#saoma').removeClass('on');
	$('.psw_login').show();
	$('.erwei_login').hide();
})
$('#log').click(function(){
	var url='../api/select.php';
	var data='username='+$('#l_username').val()+'&'+'password='+$('#l_password').val();
	ajax('POST',url,data,function(str){
		console.log(str);
	})
})

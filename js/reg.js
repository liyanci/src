$('#shoucang').click(function() {
	alert('您可以尝试通过快捷键CTRL + D 加入到收藏夹~');
})
$('#reg_one').blur(function() {
	r_username.innerHTML = /^\w+@\w+(\.\w+)+$/.test(reg_one.value) || /^\d{11}$/.test(reg_one.value) ? "" : "请输入正确的手机号或者邮箱";
	$(this).removeClass('highlight');
	if(r_username.innerHTML == '请输入正确的手机号或者邮箱') {
		r_username.style.color = 'red';
		$(this).attr("style", "border-color: red");
	} else {
		$(this).attr("style", "border-color: #dedede");
	}
//1、用户验证
	var isok=true; 
	var url='../api/02checkname.php';
	var data='username='+$(this).val();
	ajax('GET',url,data,function(str){
		console.log(str);
	if(str=='yes'){
		isok=true;
	}
	else{
		isok=false;
		r_username.innerHTML="该用户名已经存在"
		r_username.style.color='red';
	}
	})
})
$('#reg_two').blur(function() {
	r_password.innerHTML = /^\w{6,25}$/.test(reg_two.value) ? "" : "密码的长度只能在6-25位之间！";
	$(this).removeClass('highlight');
	if(r_password.innerHTML == '密码的长度只能在6-25位之间！') {
		$(this).attr("style", "border-color: red")
	} else {
		$(this).attr("style", "border-color: #dedede")
	}
})
$('#reg_three').blur(function() {
	r_confirm.innerHTML = ($('#reg_two').val() == $('#reg_three').val()) ? "" : "两次密码输入不一致，请重新输入";
	$(this).removeClass('highlight');
	if(r_confirm.innerHTML == '两次密码输入不一致，请重新输入') {
		$(this).attr("style", "border-color: red")
	} else {
		$(this).attr("style", "border-color: #dedede")
	}
})
$('#reg_one').focus(function() {
	$(this).addClass('highlight');
})
$('#reg_two').focus(function() {
	$(this).addClass('highlight');
})
$('#reg_three').focus(function() {
	$(this).addClass('highlight');
})

$('#yaoqingma').click(function() {
		
		var html = '';
		if($('#yaoqingma').prop('checked')) {
			html += '<input type="text" name="yao" id="yao" value="" />';
			$('.regBox .clearfix').append(html);
		}
		else{
			$('.regBox .clearfix #yao').remove();
		}
	
})
$('#reg').click(function() {
	if($('#reg_one').val() != '' && $('#reg_two').val() != '' && $('#reg_three').val() != '' && $('#agree').prop('checked')) {
		//2、插入数据
		var url='../api/insert.php';
		var data='username='+$('#reg_one').val()+'&'+'psw='+$('#reg_two').val();
//		console.log(data);
		ajax('POST',url,data,function(str){
			console.log(str);
			if(str=='yes'){
				alert('注册成功')
			}
		})
	}
})


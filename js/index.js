
$('.server').hover(function() {
		$('.topBar_list').show()
	})
	$('.topBar_list').mouseover(function() {
		$(this).show()
	})
	$('.topBar_list').mouseout(function() {
		$(this).hide()
	})
	$('.navBar .container ul li').mouseover(function() {
		$('.unfolder').show();
	})
	
	$('.c_bagpack').mouseover(function(){
		$('.bagpack').show();
		$('.unfolder .bagpack').css('display', 'flex');
	})
	$('.c_bagpack').mouseout(function() {
		$('.bagpack').hide();
		$('.unfolder .bagpack').css('display', 'none');

	})
	$('.c_clock').mouseover(function() {
		$('.clock').show();
		$('.unfolder .clock').css('display', 'flex');
	})
	$('.c_clock').mouseout(function() {
		$('.clock').hide();
		$('.unfolder .clock').css('display', 'none');
	})
	$('.c_jewel').mouseover(function() {
		$('.jewel').show();
		$('.unfolder .jewel').css('display', 'flex');
	})
	$('.c_jewel').mouseout(function() {
		$('.jewel').hide();
		
		
	})
	$('.c_cloth').mouseover(function() {
		$('.cloth').show();
		$('.unfolder .cloth').css('display', 'flex');
	})
	$('.c_cloth').mouseout(function() {
		$('.cloth').hide();
	})
	$('.c_ornament').mouseover(function() {
		$('.ornament').show();
		$('.unfolder .ornament').css('display', 'flex');
	})
	$('.c_ornament').mouseout(function() {
		$('.ornament').hide();
	})
	$('.c_sport').mouseover(function() {
		$('.sport').show();
		$('.unfolder .sport').css('display', 'flex');
	})
	$('.c_sport').mouseout(function() {
		$('.sport').hide();
	})
	$('.c_life').mouseover(function() {
		$('.life').show();
		$('.unfolder .life').css('display', 'flex');
	})
	$('.c_life').mouseout(function() {
		$('.life').hide();
	})
	$('.c_life_style').mouseover(function() {
		$('.life_style').show();
		$('.unfolder .life_style').css('display', 'flex');
	})
	$('.c_life_style').mouseout(function() {
		$('.life_style').hide();
	})
	$('.c_baby').mouseover(function() {
		$('.baby').show();
		$('.unfolder .baby').css('display', 'flex');
	})
	$('.c_baby').mouseout(function() {
		$('.baby').hide();
	})
	$('.c_car').mouseover(function() {
		$('.car').show();
		$('.unfolder .car').css('display', 'flex');
		
	})
	$('.c_car').mouseout(function() {
		$('.car').hide();
	})
	$('.navBar ul').mouseover(function() {
		$(this).show();
		$(this).css('display', 'flex');
	})
	
	$('.navBar').mouseout(function() {
		$('.unfolder').hide();
	})
	$('.unfolder').mouseover(function() {
		$('.unfolder').show();
	})
	$('.unfolder').mouseout(function() {
		$('.unfolder').hide();
	})
	

	$('.index').mouseover(function(){
		$('.unfolder').css('cssText','display:none!important;');
	})
	
	var div = document.getElementById('s_banner');
	var ul = document.getElementById("ul1");
	var btns = document.querySelectorAll("ol span");
	var lis = $('#ul1').find('li');
	var len = btns.length;
	var now = 0;
	tab();
	for(let i = 0; i < len; i++) {
		btns[i].onclick = function() {
			now = i;
			tab();
		}
	}
	function tab() {
		for(let j = 0; j < len; j++) {
			btns[j].className = '';
			lis[j].style.display = "block";
			startMove(lis[j], {
				"opacity": 0
			}, function() {
				lis[j].style.display = "none";
			});
		}
		btns[now].className = "selected";
		startMove(lis[now], {
			"opacity": 100
		});
	}

	function next() {
		now++;
		if(now == len) {
			now = 0;
		}
		tab()
	}
	var timer = setInterval(next, 3000);
	div.onmouseover = function() {
		clearInterval(timer);
	}
	div.onmouseout = function() {
		timer = setInterval(next, 3000);
	}
	$('#like_slide').Marquee({
		distance: 1200, //每次移动162px
		time: 2, //延时时间3秒
		btnGo: {
			left: '#left',
			right: '#right'
		},
		direction: 'left' //方向

	});
	$('#gl').click(function(){
		setCookie('id',1,3);
	})
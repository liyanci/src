$('.server').hover(function() {
		$('.topBar_list').show()
	})
	$('.topBar_list').mouseover(function() {
		$('.topBar_list').show()
	})
	$('.topBar_list').mouseout(function() {
		$('.topBar_list').hide()
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

	})
	$('.c_clock').mouseover(function() {
		$('.clock').show();
		$('.unfolder .clock').css('display', 'flex');
	})
	$('.c_clock').mouseout(function() {
		$('.clock').hide();
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
	//	$('.navBar .container ul li').mouseout(function() {
	//		$('.unfolder').hide();
	//	})
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
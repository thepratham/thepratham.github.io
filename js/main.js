$(document).ready(function(){

	$('.menu').click(function(){
		$(this).toggleClass('open');
		$('.nav').toggleClass('nav-open');
		$('html, body').scrollTop(0);
	});
	$('.nav-link').click(function(){
		$('.menu').removeClass('open');
		$('.nav').removeClass('nav-open');
	});
	$('.logo, .title').click(function(){
		location.reload(true);
	});
	if ($(window).scrollTop()!=0) {
		$('.header').addClass('fixed');
		$('.gototop').removeClass('hide');
	}

	$(window).scroll(function(){

		if ($(window).scrollTop()==0) {
			$('.header').removeClass('fixed');
			$('.gototop').addClass('hide');
		}
		else{
			$('.header').addClass('fixed');
			$('.gototop').removeClass('hide');
		}
	});

	$('#home').click(function(){
		location.reload(true);
	});

	$('.gototop').on('click', function () {
		$('html, body').animate({
            scrollTop: 0
        }, 500);
	});
});
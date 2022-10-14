$(function () {


	$('.jq22').filterizr();

	$('.nav li').on('click', function () {
		$(this).toggleClass('active').siblings().removeClass('active');
	});


})
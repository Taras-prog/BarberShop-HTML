jQuery(document).ready(function($) {

	let scroll = $(this).scrollTop();
	(scroll > 50) ? $('#header').addClass('bg-brown') : $('#header').removeClass('bg-brown');

	$(window).on('scroll', function(e){
		scroll = $(this).scrollTop();
		(scroll > 50) ? $('#header').addClass('bg-brown') : $('#header').removeClass('bg-brown');
	})

	$("#burger").click(function(){
		$(this).toggleClass('active');
		$("#navigation").toggleClass('active');
	});

	$('.modal_form_trigger').click(function(e){
		e.preventDefault();
		$("#modal_form").addClass('active');
	})

	$('#modal_close').click(function(e){
		e.preventDefault();
		$("#modal_form").removeClass('active');
	})
});
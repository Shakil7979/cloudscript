$(document).ready(function(){
	$('.child_class_item').click(function(){
		$('.child_class_item').removeClass('activelink');
		$(this).addClass('activelink');
		
	});
});
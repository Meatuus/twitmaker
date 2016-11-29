// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {


	$('.create_tweet').on('submit', function(eventObject){
		eventObject.preventDefault();
		console.log('part 1');
		$.ajax({
			url: $(this).attr('action'),
			method: $(this).attr('method'), //why when set to 'post' doesn't this work??
			data: $(this).serialize(),
			dataType: 'html'
		}).done(function(responseData) {
			console.log(responseData);
			$('.tweets').prepend(responseData);
		});

	});
});

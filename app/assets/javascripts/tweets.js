// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {


	$('.new_tweet').on('submit', function(eventObject){
		eventObject.preventDefault();

		$.ajax({
			url: $(this).attr('action'),
			method: $(this).attr('method'),
			data: $(this).serialize(),
			dataType: 'json'
		}).done(function(responseData) {
			console.log(responseData);
			$('.tweets').prepend('<li class="tweet">' + '<p>' + responseData.message + '</p>' +
			'<time>' + responseData.created_at + '</time>' + '</li>');
		});
	});
});

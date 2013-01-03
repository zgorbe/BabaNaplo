$(function() {
	$('.entry').last().css('border-bottom', 'none');

	$(document).on('pagebeforechange', function(e, data) {
		var url = data.toPage;

		if (typeof url === 'string') {
			if (url.indexOf('cmd') !== -1) {

				$('#container').load(url);
				console.log(url);

				e.preventDefault();
			}
		}
	});
});
		
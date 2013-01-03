$(function() {
	$('.entry').last().css('border-bottom', 'none');

	$(document).on('pagebeforechange', function(e, data) {
		var u = $.mobile.path.parseUrl(data.toPage),
			re = /cmd=(a+zA+Z)$/;
		console.log(u.hash)
		if (u.hash.search(re) !== -1) {

			console.log(u);

			e.preventDefault();
		}
	});
});
		
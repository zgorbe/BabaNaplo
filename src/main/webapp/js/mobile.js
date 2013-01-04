var mobileJS = (function() {
	return {
		init: function() {
			$('.entry').last().css('border-bottom', 'none');
			$('.alldays-filter').on('change', function() {
				mobileJS.getDaysForAMonth($('#select-year').val(), $('#select-month').val());
			});
		},
		getDaysForAMonth: function(year, month) {
			$.ajax({
				type: "GET",
				data: "cmd=alldays&year=" + year + "&month=" + month,
				url: '/m/naplo',
				async: false
			});
		}
	};
	
})();

$(document).on('pageinit', function() {
	mobileJS.init();
});
		
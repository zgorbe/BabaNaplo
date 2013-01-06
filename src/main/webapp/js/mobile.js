var mobileJS = (function() {
	return {
		init: function() {
			$('.entry').last().css('border-bottom', 'none');
			$('.alldays-filter').on('change', function() {
				mobileJS.getDaysForAMonth();
			});
		},
		getDaysForAMonth: function() {
			var year = $('#select-year').val();
            var month = $('#select-month').val();
			var url = '/m/naplo?cmd=alldays&year=' + year + '&month=' + month;
			$('#alldays').load(url, function() {
				$('.entry').last().css('border-bottom', 'none');
			});
		}
	};
})();

$(document).on('pageinit', function() {
	mobileJS.init();
});
var mobileJS = (function() {
	return {
		init: function() {
			$('.entry').last().css('border-bottom', 'none');
			$('.alldays-filter').on('change', function() {
				mobileJS.getDaysForAMonth();
			});
			$('#search-button').on('click', function() {
				var searchTerm = $.trim($('#search-term').val());
				if (searchTerm.length < 3) {
					return;
				}
				$.ajax({
					type: "POST",
					data: "cmd=search&searchTerm=" + searchTerm,
					url: '/m/naplo',
					success: function(data, type, xmlhttp){
						$('#search-result').html(data);
						$('.entry').last().css('border-bottom', 'none');
					}
				});
			});
		},
		getDaysForAMonth: function() {
			var year = $('#select-year').val();
            var month = $('#select-month').val();
			var url = '/m/naplo?cmd=alldays&year=' + year + '&month=' + month;
			$('#alldays').load(url, function() {
				$('.entry').last().css('border-bottom', 'none');
			});
		},
		initPhotosPage: function() {
			var $photo_popup = $('#photo_popup');
			var $img_popup = $('#img_popup');
			$photo_popup.popup({
				corners: false,
				transition: 'fade'
			});
			$('.photos').on('click', 'img.baba', function() {
				$.mobile.loading('show', {theme: 'e'});
				$img_popup.attr('src', '/photos?cmd=data&filename=' + $(this).data('filename'));
				$img_popup.on('load', function() {
					$photo_popup.popup('open');
					$.mobile.loading('hide');
				});
			});
			$img_popup.on('click', function() {
				$photo_popup.popup('close');
			});
		},
		initAddDayPage: function() {
			$('#theDayInput1').mobiscroll().date({
				theme: 'jqm',
				lang: 'hu',
	        	display: 'modal',
	        	mode: 'scroller',
	        	dateOrder: 'yymmdd D'
			});
			$('#startDateInput1').mobiscroll().datetime({
				theme: 'jqm',
				lang: 'hu',
	        	display: 'modal',
	        	mode: 'scroller'
			});
			$('#durationInput1').mobiscroll().time({
				theme: 'jqm',
				lang: 'hu',
	        	display: 'modal',
	        	mode: 'scroller'
			});
		},
		initAddEventPage: function() {
			$('#startDateInput2').mobiscroll().datetime({
				theme: 'jqm',
				lang: 'hu',
	        	display: 'modal',
	        	mode: 'scroller'
			});
			$('#durationInput2').mobiscroll().time({
				theme: 'jqm',
				lang: 'hu',
	        	display: 'modal',
	        	mode: 'scroller'
			});

		}
	};
})();

$(document).on('pageinit', function() {
	mobileJS.init();
});
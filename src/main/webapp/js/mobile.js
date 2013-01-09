var mobileJS = (function() {
	return {
		init: function() {
			$('.entry').last().css('border-bottom', 'none');
			$('.alldays-filter').on('change', function() {
				mobileJS.getDaysForAMonth();
			});
			$('#search-result').hide();
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
						$('#latest-events').fadeOut();
						$('#search-result').html(data).fadeIn();
					}
				});
			});
			$('#home-icon').on('click', function() {
				$('#latest-events').fadeIn();
				$('#search-result').fadeOut();
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
		}
	};
})();

$(document).on('pageinit', function() {
	mobileJS.init();
});
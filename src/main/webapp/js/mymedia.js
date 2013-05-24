var Photos = (function() {
	
	return {
		getAll: function(context) {
			context.load('/photos?cmd=photos', context.loadOptions)
	    	.then(function(items) {
	    		$.each(items, function(i, item) {
					if (!item.inited) {
						item.createdate = $.format.date(item.createdate, 'yyyy.MM.dd HH:mm');
						item.inited = true;
					}
				});
				context.render('/templates/photos.hb', {items: items})
				.swap(context.$element()).then(function(){
					var $container = $('#isotope_container'); 
					$container.isotope({
						itemSelector: '.photo_item',
						filter: '*'
					});
					$('#isotope_container img').last().on('load', function() {
						$container.isotope('reLayout');
					});
					
					ImagePreview.init($container);
				});
	    	});					
		}
	};	
})();


/**** ImagePreview with Module Pattern ****/
var ImagePreview = (function(){
	var $container;
	
	return {
		init: function(container) {
			$container = container;
			$container.on('click', 'img.baba', function() {
				ImagePreview.click($(this));
			});
			$container.on('click', 'img.zoom', function() {
				ImagePreview.zoom($(this));
			});
			$container.on('click', 'img.cancel', function() {
				ImagePreview.cancel($(this));
			});
		},
		click: function($image) {
			var width = parseInt($image.css('width'), 10);
			var height = parseInt($image.css('height'), 10);
			if ($image.hasClass('selected')) {
				return;
			} else {
				$image.attr('width', width * 2);
				$image.attr('height', height * 2);
				$image.attr('src', '/photos?cmd=data&filename='+$image.data('filename'));
				$image.siblings('div.buttons').show();
			}
			$image.toggleClass('selected');
			$container.isotope('reLayout');
		},
		zoom: function($zoomImage) {
			var $img = $zoomImage.parent().siblings('img.baba');
			ImagePreview.showimage('/photos?cmd=data&filename='+$img.data('filename'), $img.data('createdate'), $img.data('filename'));					
		},
		cancel: function($cancelImage) {
			var $img = $cancelImage.parent().siblings('img.baba');
			var width = parseInt($img.css('width'), 10);
			var height = parseInt($img.css('height'), 10);
			$img.attr('width', width / 2);
			$img.attr('height', height / 2);
			$img.toggleClass('selected');
			$img.siblings('div.buttons').hide();
			$container.isotope('reLayout');
		},
		showimage: function(imageurl, date, filename) {
			$("#dialog").html('<img src="' + imageurl + '" height="684" width="912" />');
			$("#dialog").dialog({
				modal: true,
				width: 945,
				height: 740,
				resizable: false,
				title: date + ' - ' + filename
			});
		}
	};
})();

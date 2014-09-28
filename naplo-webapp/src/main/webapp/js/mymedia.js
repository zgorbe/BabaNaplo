var Photos = (function() {
	
	var readPreview = function(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function (e) {
				$('#img_preview').attr('src', e.target.result).width(200).height(150).show();
			};
			reader.readAsDataURL(input.files[0]);
		}
	};
	var initDates = function(items) {
		$.each(items, function(i, item) {
			if (!item.inited) {
				item.createdate = $.format.date(item.createdate, 'yyyy.MM.dd HH:mm');
				item.inited = true;
			}
		});
	};
	return {
		initMainScoller: function() {
			$('div.jTscroller').on('click', 'a', function() {
				var $this = $(this);
				ImagePreview.showimage($this.data('url'), $this.data('date'), $this.data('filename')); 
			});
			$(window).on('load', function() { 
				$('#tS1').thumbnailScroller({ 
					scrollerType: 'hoverAccelerate', 
					scrollerOrientation: 'horizontal', 
					scrollEasing: 'easeOutCirc', 
					scrollEasingAmount: 600, 
					acceleration: 1, 
					noScrollCenterSpace: 0 
				});
			});
		},
		newPhoto: function(context) {
			context.render('/templates/newphoto.hb')
				.swap(context.$element())
				.then(function() {
					context.app.trigger('initCalendar');
				})
				.then(function() {
					$('#fileInput').on('change', function() {
						readPreview(this);
					});
				})
				.then(function() {
					$('#inputTheDay').datetimepicker();
				});
		},
		addPhoto: function(context) {
			var data = new FormData();
			data.append('file', $('#fileInput')[0].files[0]);
			data.append('keyword', $('#inputKeyword').val());
			data.append('createdate', $('#inputTheDay').val());
			data.append('description', $('#description').val());
			if ($('#halveSize').is(':checked')) {
				data.append('halveSize', 'true');
			}

            $.ajax({
                type: 'POST',
                url: '/photos',
                contentType: false,
                processData: false,
                data: data,
                success: function (res) {
                    if (res == 'success') {
                    	context.app.clearTemplateCache();
						context.redirect('#/');
                    } else {
                    	context.app.trigger('uploadError');
                    }
                }
            });
		},
		
		getAll: function(context) {
			context.load('/photos?cmd=photosmap', context.loadOptions)
	    	.then(function(items) {
	    		$.each(items, function(i, itemList) {
					initDates(itemList);
				});
				context
					.render('/templates/photos.hb', {items: items})
					.swap(context.$element())
					.then(function() {
						$('#fotorama_container .fotorama').fotorama();
					});
	    	});					
		}
	};	
})();

var Videos = (function() {
	
	return {
		newVideo: function(context) {
			context.render('/templates/newvideo.hb')
				.swap(context.$element())
				.then(function() {
					context.app.trigger('initCalendar');
				})
				.then(function() {
					$('#inputTheDay').val($('#datepicker1').val());
					$('#inputStartDate').datetimepicker();
					$('#inputDuration').timepicker({});
				});
		},
		addVideo: function(context) {
			$.ajax({
				type: 'POST',
				data: $('form.new').serialize(),
				url: '/json/videos/form',
				success: function(data, type, xmlhttp){
					if (data.videoId == null) {
						context.app.trigger('uploadError');
					} else {
						context.app.clearTemplateCache();
						context.redirect('#/');
					}
				}
			});
		},
		getAll: function(context) {
			context.load('/json/videos', context.loadOptions)
	    	.then(function(items) {
	    		$.each(items, function(i, item) {
					if (!item.inited) {
						item.createDate = $.format.date(item.createDate, 'yyyy.MM.dd');
						item.inited = true;
					}
				});
				context.render('/templates/videos.hb', {items: items})
					.swap(context.$element())
					.then(function() {
						$('.fotorama').fotorama();
					});
	    	});					
		}
	};	
})();

var Counts = (function() {
	return {
		getCounts: function() {
			$.ajax({
                type: 'GET',
                url: '/json/counts',
                success: function (data) {
                	$('#eventCount').html(data.eventCount);
                	$('#photoCount').html(data.photoCount);
                	$('#videoCount').html(data.videoCount);
                }
            });
		}
	};
})();

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
				title: date + ' - ' + filename,
				hide: {
					effect: "scale",
					duration: 1000
				},
				show: {
					effect: "scale",
					duration: 1000
				},
				open: function(event, ui) { ImagePreview.fixMissingX(); }
			});
		},
		// It's not nice, but i don't want to investigate further why the 'x' is missing...
		fixMissingX: function() {
			$('button.ui-dialog-titlebar-close').html('<span class="ui-icon ui-icon-closethick">close</span>');
		}
	};
})();

var SiteUtils = (function() {
	return {
		initScrollToTop: function() {
		 	$(window).scroll(function() {
	        	if ($(this).scrollTop() > 500) {
	        		$('a.back-top-link').fadeIn().css("display","block");
	        	} else { 
	        		$('a.back-top-link').fadeOut();
	        	}
	        });
	        $('a.back-top-link').on('click', function() {
	        	$('body,html').animate({scrollTop:0},800);
	        	return false;
	        });
		},
		addLoading: function() {
			$('div.control-buttons').addClass('loading');
		},
		removeLoading: function() {
			$('div.control-buttons').removeClass('loading');
		}
	};
})();

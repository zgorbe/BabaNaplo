var selectedDay = getFormattedNow();
var month_days = [];
var active_menu = 'li_home';
var timeout;
var photoSize;
var photo_index = 0;

function getEventsOfTheDay(dateText) {
	selectedDay = dateText;
	$('#div_events').html('');	
	$('#loader_events').show();
	$.ajax({
		type: "GET",
		data: "theDay=" + dateText,
		url: '/naplo',
		success: function(data, type, xmlhttp){
			$('#events').html(data);
			$('#theDayInput').val(selectedDay);
			$('#loader_events').hide();
			smiley();
		}
	});
}

function getLatestEvents() {
	$('#div_latests').html('');
	$('#loader_latests').show();
	$.ajax({
		type: "GET",
		data: "cmd=latests",
		url: '/naplo',
		success: function(data, type, xmlhttp){
			$('#latests').html(data);
			$('#loader_latests').hide();
			smiley();
		}
	});
}

function search() {
	if (active_menu == 'li_home') {
		var searchTerm = $.trim($('#searchTerm').val());
		if (searchTerm.length == 0) {
			$('#searchTerm').focus();
			return;
		}
		$('#div_result').html('');
		$('#loader_result').show();
		$.ajax({
			type: "POST",
			data: "cmd=search&searchTerm=" + searchTerm,
			url: '/naplo',
			success: function(data, type, xmlhttp){
				$('#events').html(data);
				$('#loader_result').hide();
				$('#searchTerm').val('');
				smiley();
			}
		});
	}
	if (active_menu == 'li_photos') {
		var searchTerm = $.trim($('#searchTerm').val());
		if (searchTerm.length == 0) {
			$('#searchTerm').focus();
			return;
		}
		$.ajax({
			type: "POST",
			data: "cmd=search&term=" + searchTerm,
			url: '/photos',
			success: function(data, type, xmlhttp){
				$('#content').html(data);
			}
		});
	}
}

function inactivate_all() {
	$('#menu_list').children().removeClass('active');
	$('#content').css('float','right').css('width','570px');
	$('#sidebar').show();
	clearTimeout(timeout);
}

function home(e) {
	document.location.href = '/naplo';
}

function addday(e) {
	inactivate_all();
	$('#li_addday').addClass('active');
	active_menu = 'li_addday';
	$.ajax({
		type: "GET",
		data: "cmd=addday",
		url: '/naplo',
		success: function(data, type, xmlhttp){
			$('#content').html(data);
		}
	});
}

function addevent(e) {
	inactivate_all();
	$('#li_addevent').addClass('active');
	active_menu = 'li_addevent';
	$.ajax({
		type: "GET",
		data: "cmd=addevent",
		url: '/naplo',
		success: function(data, type, xmlhttp){
			$('#content').html(data);
		}
	});	
}
/* Unused function, replaced by isotope_all_days() */
function allday() {
	inactivate_all();
	$('#li_allday').addClass('active');
	active_menu = 'li_allday';
	var now = new Date();
	var months = now.getMonth();
	var year = now.getFullYear();
	$.ajax({
		type: "GET",
		data: "cmd=allday&year=" + year + "&months=" + months,
		url: '/naplo',
		success: function(data, type, xmlhttp){
			$('#content').html(data);
			//$('#latests').html('');
			smiley();
		}
	});
}
function isotope_all_days() {
	if ($('#li_allday').hasClass('active')) {
		return;
	}
	$.ajax({
		type: "GET",
		data: "cmd=isotopedays",
		url: '/naplo',
		success: function(data, type, xmlhttp) {
			inactivate_all();
			$('#li_allday').addClass('active');
			active_menu = 'li_allday';
			$('#content').html(data);
			smiley();
		}
	});
}

function videos() {
	inactivate_all();
	$('#li_videos').addClass('active');
	active_menu = 'li_videos';
  $.ajax({
    type: "GET",
    data: "cmd=videos",
    url: '/naplo',
    success: function(data, type, xmlhttp){
      $('#content').html(data);
      //setTimeout("initVideos()", 800);
    }
  });
}

function initVideos() {
	$("#tS2").thumbnailScroller({ 
    scrollerType:"hoverAccelerate", 
    scrollerOrientation:"horizontal", 
    scrollEasing:"easeOutCirc", 
    scrollEasingAmount:600, 
    acceleration:1, 
    noScrollCenterSpace:0 
  });
}

function isotope_photos() {
	if ($('#li_photos').hasClass('active')) {
		return;
	}
	$.ajax({
		type: "GET",
		data: "cmd=isotopephotos",
		url: '/naplo',
		success: function(data, type, xmlhttp){
			inactivate_all();
			$('#li_photos').addClass('active');
			active_menu = 'li_photos';
			$('#content').html(data);
		}
	});
}

/* Unused function, replaced by isotope_photos() */
function photos() {
	inactivate_all();
	$('#li_photos').addClass('active');
	active_menu = 'li_photos';
	$.ajax({
		type: "GET",
		data: "cmd=photos&slideshow=true",
		url: '/naplo',
		success: function(data, type, xmlhttp){
			$('#content').html(data);
		}
	});
	$("#searchTerm").autocomplete({
		source: "/photos?cmd=keywords",
		minLength: 2,
		select: function( event, ui ) {
			this.value = ui.item.value
			search();
		}
	});
}

function icon_photos(icon) {
	var dataStr = 'cmd=photos&slideshow=' + icon;
	$.ajax({
		type: "GET",
		data: dataStr,
		url: '/naplo',
		success: function(data, type, xmlhttp){
			$('#content').html(data);
		}
	});
}

function slideshow_start() {
	clearTimeout(timeout);
	var time = 4000;
	var $fotorama = $('#fotorama'); 
	photoSize = $('#photos_size').val();
	
	timeout = setInterval(function(){
		if (photoSize == photo_index) { photo_index = 0; }
		$fotorama.trigger('showimg', photo_index++);
	}, time);
}

function slideshow_stop() {
	clearTimeout(timeout);
}

function showimage(imageurl, date, filename) {
	$("#dialog").html('<img src="' + imageurl + '" height="684" width="912" />');
	$("#dialog").dialog({
		modal: true,
		width: 945,
		height: 740,
		resizable: false,
		title: date + ' - ' + filename
	});
}

function showvideo(videoid, text) {
	$("#videoframe").attr('src', 'http://www.youtube.com/embed/'+videoid);
	$("#video_text").html(text);
}

function datefilter() {
	var year = $('#yearFilter').val();
	var months = $('#monthsFilter').val();
	$('#div_all').html('');	
	$('#loader_all').show();
	$.ajax({
		type: "GET",
		data: "cmd=allday&year=" + year + "&months=" + months,
		url: '/naplo',
		success: function(data, type, xmlhttp){
			$('#content').html(data);
			$('#loader_all').hide();
			smiley();
		}
	});
}

function getFormattedNow() {
	var now = new Date();
	var months = now.getMonth() + 1;
	var days = now.getDate();
	var year = now.getFullYear();
	if (months < 10) {
		months = '0' + months;
	}
	if (days < 10) {
		days = '0' + days;
	}
	return year + '.' + months + '.' + days; 
}

function smiley() {
	$('.entry').each(function(index, element) {
		var tmp = $(element).html().replace(/:\)/g, '<img src="images/smiley.png" alt=":-)" />');
		$(element).html(tmp);
	});
    $('.isotope_item').each(function(index, element) {
    	var tmp = $(element).html().replace(/:\)/g, '<img src="images/smiley.png" alt=":-)" />');
    	$(element).html(tmp);
	});
}

function initCalendar() {
	var now = new Date();
	var month = now.getMonth();
	var year = now.getFullYear();
	getDaysForAMonth(year, month);
}

function getDaysForAMonth(year, month) {
	$.ajax({
		type: "GET",
		data: "cmd=getDays&key=" + year + "-" + month,
		url: '/naplo',
		success: function(data, type, xmlhttp){
		}
	});	
}

function updateCalendar() {
  $('#datepicker1 tr').each(function() {
    $.each(this.cells, function() {
      var cell = $(this);
      var cellAnchor = $(this).find('a');
      if (cellAnchor) {
        var cellData = cellAnchor.html();
        if (cellData) {
          $.each(month_days, function(index, value) {
            if (value == cellData) {
              cellAnchor.addClass('ui-state-has-event');
              // cell.css('background-color', 'red');
            }        
          });
        }
      }
    });
  });
}

function adminGetDay(dateText) {
	selectedDay = dateText;
	$.ajax({
		type: "POST",
		data: "cmd=show&day=" + dateText,
		url: '/naplo/admin',
		success: function(data, type, xmlhttp){
			$('#content').html(data);
		}
	});	
}

function getWordsForDBFix() {
	$.ajax({
		type: "POST",
		data: "cmd=dbfix",
		url: '/naplo/admin',
		success: function(data, type, xmlhttp){
			$('#content_dbfix').html(data);
		}
	});
}


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
			showimage('/photos?cmd=data&filename='+$img.data('filename'), $img.data('createdate'), $img.data('filename'));					
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
		}
	};
})();

/**** ImagePreview with object literal notation ****
var ImagePreview = {
	$container: null,
	
	init: function($container) {
		this.$container = $container;
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
		this.$container.isotope('reLayout');
	},
	zoom: function($zoomImage) {
		var $img = $zoomImage.parent().siblings('img.baba');
		showimage('/photos?cmd=data&filename='+$img.data('filename'), $img.data('createdate'), $img.data('filename'));					
	},
	cancel: function($cancelImage) {
		var $img = $cancelImage.parent().siblings('img.baba');
		var width = parseInt($img.css('width'), 10);
		var height = parseInt($img.css('height'), 10);
		$img.attr('width', width / 2);
		$img.attr('height', height / 2);
		$img.toggleClass('selected');
		$img.siblings('div.buttons').hide();
		this.$container.isotope('reLayout');
	}
};
*/
var Events = (function() {
	
	return {
		initEvent: function(event) {
			var date = new Date(event.startTime);
			event.theDay = $.format.date(event.startTime, 'yyyy.MM.dd');
			event.startTime = $.format.date(event.startTime, 'yyyy.MM.dd HH:mm');
			event.hasDuration = (event.duration > 0) ? true : false;
			if (event.hasDuration) {
				var hour = Math.floor(event.duration / (1000 * 60 * 60));
				var minute = Math.floor((event.duration - (hour * 1000 * 60 * 60)) / (1000 * 60));
				var hh = (hour < 10) ? '0' + hour : '' + hour;
				var mm = (minute < 10) ? '0' + minute : '' + minute;
				event.duration = hh + ':' + mm;
			}
			event.year =  date.getFullYear();
			event.month = $.datepicker._defaults.monthNamesShort[date.getMonth()];
			event.day = date.getDate();
			if (date.getHours() > 0 || date.getMinutes() > 0) { 
				event.hours = date.getHours().toString();
				event.minutes = date.getMinutes().toString();
				if (event.hours.length < 2) {
					event.hours = '0' + event.hours;
				}
				if (event.minutes.length < 2) {
					event.minutes = '0' + event.minutes;
				}
				event.hasTimePart = true;
			}
			event.inited = true;
		},
		newEvent: function(context) {
			context.render('/templates/newevent.hb')
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
		newWord: function(context) {
			context.render('/templates/newword.hb')
				.swap(context.$element())
				.then(function() {
					$('ul.thumbnails').on('click', 'div.thumbnail', function() {
						var $this = $(this);
						$('div.thumbnail').removeClass('selected-img');
						$this.addClass('selected-img');
						$('#kid_input').val($this.data('kid'));
					});
				});
		},
		addEvent: function(context) {
			$.ajax({
				type: 'POST',
				data: $('form.new').serialize(),
				url: '/json/events/form',
				success: function(data, type, xmlhttp){
					if (data.id == null) {
						context.app.trigger('newError');
					} else {
						context.app.clearTemplateCache();
						context.redirect('#/');
					}
				}
			});
		},
		addWord: function(context) {
			$.ajax({
				type: 'POST',
				data: $('form.new').serialize(),
				url: '/json/words/form',
				success: function(data, type, xmlhttp){
					if (data.id == null) {
						context.app.trigger('newError');
					} else {
						context.app.clearTemplateCache();
						context.redirect('#/');
					}
				}
			});
		},
		getLatestWords: function(context) {
			$('a#more-words-link').on('click', function() {
				$.ajax({
					type: 'GET',
					url: '/json/words',
					dataType: 'json',
					complete: function(data, type, xmlhttp){
						var items = $.parseJSON(data.responseText);
			    		context.render('/templates/uniquewords.hb', {accordion: "modal", words: items})
							.replace('div#modal-unique-words')
							.then(function() {
								$('div#myModal').modal();
							});
					}
				});
			});
			$.ajax({
				type: 'GET',
				url: '/json/words/latests/5',
				dataType: 'json',
				complete: function(data, type, xmlhttp){
					var items = $.parseJSON(data.responseText);
		    		context.render('/templates/uniquewords.hb', {accordion: "original", words: items})
						.replace('div#latest-words');
				}
			});
		},
		getLatests: function(context, selectedDay) {
			var latestPhotos = $.parseJSON($('#latestPhotosJSON').val());
			$.each(latestPhotos, function(i, item) {
				if (!item.inited) {
					item.createdate = $.format.date(item.createdate, 'yyyy.MM.dd HH:mm');
					item.inited = true;
				}
				if (i == 0) {
					item.first = true;
				}
			});
			var newestVideo = $('#newestVideo').val();
			context.load('/json/events/latests/5', context.loadOptions)
		    	.then(function(items) {
					$.each(items, function(i, item) {
						if (!item.inited) {
							Events.initEvent(item);
						}
					});
					return items;
		    	})
		    	.then(function(items) {
		    		var now = new Date();
					var dateParam = {
							y: now.getFullYear(), 
							m: (now.getMonth() + 1).toString()
					};
					if (dateParam.m.length < 2) {
						dateParam.m = '0' + dateParam.m;
					}
					context.render('/templates/latests.hb', {items: items, date: dateParam, photos: latestPhotos, videoId: newestVideo})
					.swap(context.$element())
					.then(function() {
						context.app.trigger('initCalendar');
					})					
					.then(function() {
						Events.getLatestWords(context);
						if (selectedDay) {
							context.render('/templates/day.hb', selectedDay).replace('div.selected');
							if (selectedDay.eventIds.length > 0) {
								context.app.trigger('removeSelectedFromLatests', selectedDay.eventIds);
							}
						} else {
							var currentDate = $('#datepicker1').datepicker('getDate');
							context.app.trigger('selectedDayChanged', {
								date: $.format.date(currentDate, 'yyyy.MM.dd')
							});
						}
						$('#myCarousel').carousel({
							interval: 5000,
							cycle: true
						});
					});
		    	});
		},
		smiley: function() {
			$('div.row').each(function(index, element) {
				var tmp = $(element).html().replace(/:\)/g, '<img src="/images/smiley.png" alt=":-)" />');
				$(element).html(tmp);
			});
		},
		initNavbar: function(app) {
			// init dropdown menu..
			$('ul.nav li.dropdown').hover(function() {
				  $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn();
			}, function() {
				  $(this)
				  	.removeClass('active')
				  	.find('.dropdown-menu').stop(true, true).delay(50).fadeOut();
			});
			
			// init search...
			$('#buttonSearch').on('click', function() {
		    	var searchTerm = $('#inputSearch').val();
		    	if (searchTerm.length < 2) {
		    		var $inputSearch = $('#inputSearch');
		    		$inputSearch.tooltip({placement: 'bottom', title: 'Legalább 2 karakter hosszú legyen!'});
		    		$inputSearch.tooltip('show');
					return;
		    	}
		    	$('#inputSearch').tooltip('destroy');
		    	app.setLocation('#/search/' + searchTerm);
		    });
			
			// init all events...
			var $liAllEvents = $('li#liAllEvents'); 
			var dayCount = $liAllEvents.data('day-count');
			var eventCount = $liAllEvents.data('event-count');
			$liAllEvents.tooltip({
		    	placement: 'bottom',
		    	title: dayCount + ' napon ' + eventCount + ' esemény van a naplóban.'
		    });

			// init navbar collapse
		    var $nav = $('.nav-collapse');
			$nav.on('click', 'a.menu-link', function() {
				$nav.collapse('hide');
			});
		},
		search: function(context, searchTerm) {
			context.load('/json/events/search/' + searchTerm, context.loadOptions)
	    	.then(function(items) {
				$.each(items, function(i, item) {
					if (!item.inited) {
						Events.initEvent(item);
						var date = new Date(item.startTime);
						item.year =  date.getFullYear();
						item.month = $.datepicker._defaults.monthNamesShort[date.getMonth()];
						item.day = date.getDate();
					}
				});
				return items;
	    	})
	    	.then(function(items) {
	    		var now = new Date();
				var dateParam = {
						y: now.getFullYear(), 
						m: (now.getMonth() + 1).toString()
				};
				if (dateParam.m.length < 2) {
					dateParam.m = '0' + dateParam.m;
				}
	    		var renderOptions = {
    				items: items, 
    				searchTerm: searchTerm,
    				date: dateParam
	    		};
				context.render('/templates/search.hb', renderOptions)
				.swap(context.$element()).then(function() {
					$('#inputSearch').val('');
					context.$element().highlight(searchTerm, true);
					Events.smiley();
				});
	    	});
		}
	};
})();
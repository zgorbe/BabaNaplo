var Events = (function() {
	
	return {
		initEvent: function(event) {
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
		addEvent: function(context) {
			$.ajax({
				type: 'POST',
				data: $('form.new').serialize(),
				url: '/json/events/form',
				success: function(data, type, xmlhttp){
					if (data.id == null) {
						context.app.trigger('newDayError');
					} else {
						context.app.clearTemplateCache();
						context.redirect('#/');
					}
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
					context.render('/templates/latests.hb', {items: items, date: dateParam, photos: latestPhotos})
					.swap(context.$element())
					.then(function() {
						if (selectedDay) {
							context.render('/templates/day.hb', selectedDay).replace('div.selected');
						}
					})
					.then(function() {
						context.app.trigger('initCalendar');
					})
					.then(function() {
						$('#myCarousel').carousel({
							interval: 5000,
							cycle: true
						});
					});
		    	});
		},
		getAll: function(context, year, month) {
			context.load('/json/events', context.loadOptions)
		    	.then(function(items) {
					$.each(items, function(i, item) {
						if (!item.inited) {
							item.isotopeFilter = 'm' + $.format.date(item.startTime, 'yyyy-MM');
							Events.initEvent(item);
						}
					});
					return items;
		    	})
		    	.then(function(items) {
		    		context.render('/templates/allevents.hb', {events: items})
		    			.swap(context.$element())
		    			.then(function() {
		    				var $container = $('#isotope_container');
							$container.isotope({
				       			itemSelector: '.isotope_item',
				       			filter: '.m' + year + '-' + month,
				       			sortBy : 'original-order', 
				       			sortAscending : false
				       		});
							Events.smiley();
							$('#prependedDropdownButton').val(year);
							var monthStr = $('ul#monthFilter > li > a[data-filter="' + month + '"]').html();
							$('#appendedDropdownButton').val(monthStr);

				       		$('ul.filter').on('click', 'a', function() { 
				       			var filterValue = $(this).data('filter').toString();
				       			var filterYear = '';
				       			var filterMonth = '';
				       			if (filterValue.length > 2) {
				       				filterYear = filterValue;
				       				var filterMonthStr = $('#appendedDropdownButton').val();
				       				filterMonth = $('ul#monthFilter > li > a:contains(' + filterMonthStr + ')').data('filter');
				       				$('#prependedDropdownButton').val(filterValue);
				       			} else {
				       				filterYear = $('#prependedDropdownButton').val();
				       				filterMonth = filterValue; 
				       				$('#appendedDropdownButton').val($(this).html());
				       				$('#appendedDropdownButton').data('filter', filterValue);
				       			}
				       			context.app.setLocation('#/events/' + filterYear + '/' + filterMonth);
				       		});
		    			});
		    	});
		},
		smiley: function() {
			$('div.row').each(function(index, element) {
				var tmp = $(element).html().replace(/:\)/g, '<img src="/images/smiley.png" alt=":-)" />');
				$(element).html(tmp);
			});
		    $('.isotope_item').each(function(index, element) {
		    	var tmp = $(element).html().replace(/:\)/g, '<img src="/images/smiley.png" alt=":-)" />');
		    	$(element).html(tmp);
			});
		},
		initNavbar: function(app) {
			// init dropdown menu..
			$('ul.nav > li.dropdown').on('click', 'a', function() {
					app.trigger('dropDownMenuChanged');
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
		},
		search: function(context, searchTerm) {
			context.load('/json/events/search/' + searchTerm, context.loadOptions)
	    	.then(function(items) {
				$.each(items, function(i, item) {
					if (!item.inited) {
						Events.initEvent(item);
					}
				});
				return items;
	    	})
	    	.then(function(items) {
	    		var renderOptions = {
    				items: items, 
    				searchTerm: searchTerm
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
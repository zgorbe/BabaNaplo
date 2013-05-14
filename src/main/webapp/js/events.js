var Events = (function() {
	
	return {
		initEvent: function(event) {
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
		getLatests: function(context) {
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
					context.render('/templates/latests.hb', {items: items})
					.swap(context.$element()).then(function(){
						context.app.trigger('initCalendar');
					});
		    	});
		},
		getAll: function(context) {
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
				       			filter: '.m2011-09',
				       			sortBy : 'original-order', 
				       			sortAscending : false
				       		});
				       		$('ul.filter').on('click', 'a', function() {
				       			var filterValue = $(this).data('filter').toString();
				       			var filterStr = '';
				       			if (filterValue.length > 2) {
				       				filterStr = '.m' + filterValue + '-' + $('#appendedDropdownButton').data('filter');
				       				$('#prependedDropdownButton').val(filterValue);
				       			} else {
				       				filterStr = '.m' + $('#prependedDropdownButton').val() + '-' + filterValue;
				       				$('#appendedDropdownButton').val($(this).html());
				       				$('#appendedDropdownButton').data('filter', filterValue);
				       			}
				    			 
				    			$container.isotope({
				    				itemSelector: '.isotope_item',
				    				filter: filterStr,
				    				sortBy : 'original-order', 
				    				sortAscending : false
				    			});
				       		});
		    			});
		    	});
		}
	};
})();
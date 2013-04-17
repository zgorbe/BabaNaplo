var Events = (function() {
	
	return {
		getLatests: function(context) {
			context.load('/json/events/latests/5', context.loadOptions)
		    	.then(function(items) {
					$.each(items, function(i, item) {
						if (!item.inited) {
							item.startTime = $.format.date(item.startTime, 'yyyy.MM.dd HH:mm');
							item.hasDuration = (item.duration > 0) ? true : false;
							item.inited = true;
						}
					});
					return items;
		    	})
		    	.then(function(items) {
					context.render('/templates/latests.hb', {items: items})
					.swap(context.$element());
		    	});
		},
		getAll: function(context) {
			context.load('/json/events', context.loadOptions)
		    	.then(function(items) {
					$.each(items, function(i, item) {
						if (!item.inited) {
							item.startTime = $.format.date(item.startTime, 'yyyy.MM.dd HH:mm');
							item.hasDuration = (item.duration > 0) ? true : false;
							item.inited = true;
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
				       			/*filter: '.m2011-09',
				       			sortBy : 'original-order',*/ 
				       			sortAscending : false
				       		});
		    			});
		    	});
		}
	};
})();
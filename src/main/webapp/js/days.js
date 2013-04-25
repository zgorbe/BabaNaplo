var Days = (function() {
	
	return {
		newDay: function(context) {
			context.render('/templates/newday.hb')
			.swap(context.$element()).then(function(){
				context.app.trigger('initCalendar');
			});
		},
		addDay: function(context) {
			$.ajax({
				type: 'POST',
				data: $('#formAddDay').serialize(),
				url: '/json/days/form',
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
		getDay: function(context, date) {
			$.ajax({
				type: 'GET',
				url: '/json/days/' + date,
				dataType: 'json',
				complete: function(data, type, xmlhttp){
					if (data.responseText.length > 0) {
						var day = $.parseJSON(data.responseText);
						$.each(day.eventsOfTheDay, function(i, item) {
							if (!item.inited) {
								item.startTime = $.format.date(item.startTime, 'yyyy.MM.dd HH:mm');
								item.hasDuration = (item.duration > 0) ? true : false;
								item.inited = true;
							}
						});
						console.log(day);
						context.render('/templates/day.hb', {day: day}).prependTo('div.span8');
					} else {
						console.log('No day found');
						context.render('/templates/day.hb', {day: day}).prependTo('div.span8');
					}
					
				}
			});
			
	    	/*.then(function(day) {
				context.render('/templates/latests.hb', {day: day})
					.swap(context.$element());
	    	}); */
			
			/*
			context.load('/json/days/' + date, context.loadOptions)
	    	.then(function(day) {
				$.each(day.eventsOfTheDay, function(i, item) {
					if (!item.inited) {
						item.startTime = $.format.date(item.startTime, 'yyyy.MM.dd HH:mm');
						item.hasDuration = (item.duration > 0) ? true : false;
						item.inited = true;
					}
				});
				console.log(day);
	    	}); */
		}
	};	
})();
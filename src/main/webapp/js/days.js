var Days = (function() {
	
	return {
		newDay: function(context) {
			context.render('/templates/newday.hb')
				.swap(context.$element())
				.then(function() {
					context.app.trigger('initCalendar');
				})
				.then(function() {
					$('#inputTheDay').val($('#datepicker1').val());
					$('#inputTheDay').datepicker();
					$('#inputStartDate').datetimepicker();
					$('#inputDuration').timepicker({});
				});
		},
		addDay: function(context) {
			$.ajax({
				type: 'POST',
				data: $('form.new').serialize(),
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
					var $div = $('div.span8');
					var day;
					if (data.responseText.length > 0) {
						day = $.parseJSON(data.responseText);
						$.each(day.eventsOfTheDay, function(i, item) {
							if (!item.inited) {
								Events.initEvent(item);
							}
						});
					}
					var selectedDate = date.replace(/\//g, '\.');
					if ($div.length) {
						context.render('/templates/day.hb', {day: day, date: selectedDate}).replace('div.span8 > div.selected');
					} else {
						context.render('/templates/day.hb', {day: day, date: selectedDate}).replace('div#main');
					}
				}
			});
		}
	};	
})();
var Days = (function() {
	var dayMonthCache;	
	
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
						context.app.trigger('newError');
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
					var $div = $('div.span4');
					var day;
					var eventIds = [];
					if (data.responseText.length > 0) {
						day = $.parseJSON(data.responseText);
						$.each(day.eventsOfTheDay, function(i, item) {
							if (!item.inited) {
								Events.initEvent(item);
							}
							eventIds.push(item.id);
						});
					}
					var selectedDate = date.replace(/\//g, '\.');
					if ($div.length) {
						context.render('/templates/day.hb', {day: day, date: selectedDate}).replace('div.selected');
						context.app.trigger('removeSelectedFromLatests', eventIds);
					} else {
						Events.getLatests(context, {day: day, date: selectedDate, eventIds: eventIds});
					}
					Days.updateCalendar();
				}
			});
		},
		getDayForAMonth: function(year, month) {
			$.ajax({
				type: 'GET',
				url: '/json/days/list/' + year + '/' + month,
				dataType: 'json',
				complete: function(data, type, xmlhttp){
					if (data.responseText.length > 0) {
						var dayList = $.parseJSON(data.responseText);
						dayMonthCache = dayList.dates;
						Days.updateCalendar(dayList.dates);
					}
				}
			});
		},
		updateCalendar: function(dates) {
			if (!dates && dayMonthCache) {
				dates = dayMonthCache;
			}
			$('#datepicker1 tr').each(function() {
				$.each(this.cells, function() {
					var cell = $(this);
					var cellAnchor = $(this).find('a');
					if (cellAnchor) {
						var cellData = cellAnchor.html();
						if (cellData) {
							$.each(dates, function(index, value) {
								if (value == cellData) {
									cellAnchor.addClass('ui-state-has-event');
								}        
							});
						}
					}
			    });
			});
		}
	};	
})();
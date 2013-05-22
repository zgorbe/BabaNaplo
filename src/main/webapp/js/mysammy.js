$(function(){
	var loadOptions = {
            type: 'get', 
            dataType: 'json'
        };
	
	var app = $.sammy('#main', function() {
		this.use('Handlebars', 'hb');
		
		// Before filter
		this.before({}, function(context) {
			context.loadOptions = loadOptions;
			var location = context.app.getLocation();
			var href = location.substring(location.indexOf('#'));
			
			$('ul.nav > li').removeClass('active');
			$('li > a[href="' + href + '"]').parent().addClass('active');
			context.app.trigger('dropDownMenuChanged');
		});
		
		// Routes
		this.get('#/', function(context) {
			Events.getLatests(context);
		});
		
		this.get('#/events', function(context) {
			Events.getAll(context);
		});
		
		this.get('#/newday', function(context) {
			Days.newDay(context);
		});
		
		this.get('#/newevent', function(context) {
			Events.newEvent(context);
		});

		this.get('#/day/:year/:month/:day', function(context) {
			Days.getDay(context, this.params['year'] + '/' + this.params['month'] + '/' + this.params['day']);
		});
		
		this.post('#/addday', function(context) {
			Days.addDay(context);
		});
		
		this.post('#/addevent', function(context) {
			Events.addEvent(context);
		});
		
		// Custom events
		this.bind('selectedDayChanged', function(e, data) {
			if (app.getLocation().indexOf('new') < 0) {
				app.setLocation('#/day/' + data.date.replace(/\./g, '\/'));
			} else {
				$('#inputTheDay').val(data.date);
			}
		});
		
		this.bind('newDayError', function(e, data) {
			if (!$('div.alert-error').length) {
				var error_div = $('<div class="alert alert-error">' +
						'<button type="button" class="close" data-dismiss="alert">×</button>' +
						'Nem sikerült elmenteni a napot! Próbáld meg újra!</div>');
				$('form.new').before(error_div);
			}
		});
		
		this.bind('dropDownMenuChanged', function() {
			$('.dropdown.open').removeClass('open');
			$('ul.dropdown-menu > li').removeClass('active');
		});
		
		this.bind('initCalendar', function(e, data) {
			$.datepicker.setDefaults($.extend({showMonthAfterYear: true}, $.datepicker.regional['hu']));
			$('#datepicker1').datepicker({
				onSelect: function(dateText, inst) { app.trigger('selectedDayChanged', { date: dateText}); },
				onChangeMonthYear: function(year, month, inst) {  }
			});
		});
    });
	
	$(function() {
        app.run('#/');
    });
	
    $('ul.nav > li.dropdown').on('click', 'a', function() {
		app.trigger('dropDownMenuChanged');
	});
    
});
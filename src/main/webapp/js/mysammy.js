$(function(){
	var loadOptions = {
            type: 'get', 
            dataType: 'json'
        };
	
	var app = $.sammy('#main', function() {
		this.use('Handlebars', 'hb');
		
		this.before({}, function(context) {
			context.loadOptions = loadOptions;
			var location = context.app.getLocation();
			var href = location.substring(location.indexOf('#'));
			
			$('ul.nav > li').removeClass('active');
			$('li > a[href="' + href + '"]').parent().addClass('active');
			context.app.trigger('dropDownMenuChanged');
		});
		
		this.get('#/', function(context) {
			Events.getLatests(context);
		});
		
		this.get('#/events', function(context) {
			Events.getAll(context);
		});
		
		this.get('#/newday', function(context) {
			console.log(context);
			Days.newDay(context);
		});

		this.post('#/addday', function(context) {
			Days.addDay(context);
		});
		
		this.bind('selectedDayChanged', function(e, data) {
			var context = new Sammy.EventContext(app);
			context.loadOptions = loadOptions;
			if (app.getLocation().indexOf('new') < 0) {
				Days.getDay(context, data.date.replace(/\./g, '\/'));
			} else {
				console.log('new');
			}
		});
		
		this.bind('newDayError', function(e, data) {
			var error_div = $('<div class="alert alert-error">' +
					'<button type="button" class="close" data-dismiss="alert">×</button>' +
					'Nem sikerült elmenteni a napot! Próbáld meg újra!</div>');
			$('#formAddDay').before(error_div);
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
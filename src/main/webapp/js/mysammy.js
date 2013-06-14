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
		
		this.get('#/events/:year/:month', function(context) {
			Events.getAll(context, this.params['year'], this.params['month']);
		});
		
		this.get('#/newday', function(context) {
			Days.newDay(context);
		});
		
		this.get('#/newevent', function(context) {
			Events.newEvent(context);
		});
		
		this.get('#/newvideo', function(context) {
			Videos.newVideo(context);
		});
		
		this.get('#/newphoto', function(context) {
			Photos.newPhoto(context);
		});
		
		this.get('#/day/:year/:month/:day', function(context) {
			Days.getDay(context, this.params['year'] + '/' + this.params['month'] + '/' + this.params['day']);
		});

		this.get('#/search/:searchTerm', function(context) {
			Events.search(context, this.params['searchTerm']);
		});
		
		this.get('#/photos', function(context) {
			Photos.getAll(context);
		});
		
		this.get('#/videos/:selectedVideoId', function(context) {
			Videos.getAll(context, this.params['selectedVideoId']);
		});
		
		this.post('#/addday', function(context) {
			Days.addDay(context);
		});
		
		this.post('#/addevent', function(context) {
			Events.addEvent(context);
		});
		
		this.post('#/addvideo', function(context) {
			Videos.addVideo(context);
		});
		
		this.post('#/addphoto', function(context) {
			Photos.addPhoto(context);
		});
		
		// Custom events
		this.bind('selectedDayChanged', function(e, data) {
			if (app.getLocation().indexOf('new') < 0) {
				var newLocation = '/naplo2/#/day/' + data.date.replace(/\./g, '\/');
				if (newLocation != app.getLocation()) {
					app.setLocation(newLocation);
				} else {
					// I don't like this below ;(
					setTimeout("Days.updateCalendar()", 100);
				}
			} else {
				$('#inputTheDay').val(data.date);
			}
		});
		
		this.bind('selectedMonthChanged', function(e, data) {
			Days.getDayForAMonth(data.y, data.m);
		});
		
		this.bind('newDayError', function(e, data) {
			if (!$('div.alert-error').length) {
				var error_div = $('<div class="alert alert-error">' +
						'<button type="button" class="close" data-dismiss="alert">×</button>' +
						'Nem sikerült elmenteni a napot! Próbáld meg újra!</div>');
				$('form.new').before(error_div);
			}
		});
		
		this.bind('uploadError', function(e, data) {
			if (!$('div.alert-error').length) {
				var error_div = $('<div class="alert alert-error">' +
						'<button type="button" class="close" data-dismiss="alert">×</button>' +
						'Nem sikerült a feltöltés! Próbáld meg újra!</div>');
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
				onSelect: function(dateText, inst) { app.trigger('selectedDayChanged', {date: dateText}); },
				onChangeMonthYear: function(year, month, inst) { app.trigger('selectedMonthChanged', {y: year, m: month}); }
			});
			var now = new Date();
			app.trigger('selectedMonthChanged', {y: now.getFullYear(), m: now.getMonth() + 1});
		});
    });
	
	$(function() {
        app.run('#/');
    });
	
    Events.initNavbar(app);
    //Photos.initMainScoller();
});
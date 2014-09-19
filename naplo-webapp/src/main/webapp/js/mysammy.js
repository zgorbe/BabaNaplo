$(function(){
	Handlebars.registerHelper('ifCond', function(v1, v2, options) {
		if(v1 === v2) {
			return options.fn(this);
		}
		return options.inverse(this);
	});
	Handlebars.registerHelper("debug", function(optionalValue) {
		console.log("Current Context");
		console.log("====================");
		console.log(this);
		 
		if (optionalValue) {
			console.log("Value");
			console.log("====================");
			console.log(optionalValue);
		}
	});
	Handlebars.registerHelper("eachObjectKeyReverse", function(context, options) {
		var ret = '',
			keys = [],
			data;
		
		for(var k in context) keys.push(parseInt(k));
		keys.sort().reverse();

		for(var i=0; i < keys.length; i++) {
			if (options.data) {
      			data = Handlebars.createFrame(options.data || {});
      			data.key = keys[i];
    		}
			ret = ret + options.fn(context[keys[i]],  {data: data});
		}

		return ret;
	});
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
		
		this.get('#/days/:year/:month', function(context) {
			Days.getAll(context, this.params['year'], this.params['month']);
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
		
		this.get('#/newword', function(context) {
			Events.newWord(context);
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
		
		this.get('#/videos', function(context) {
			Videos.getAll(context);
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
		
		this.post('#/addword', function(context) {
			Events.addWord(context);
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
		
		this.bind('newError', function(e, data) {
			if (!$('div.alert-error').length) {
				var error_div = $('<div class="alert alert-error">' +
						'<button type="button" class="close" data-dismiss="alert">×</button>' +
						'Nem sikerült a mentés! Próbáld meg újra!</div>');
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
		
		this.bind('removeSelectedFromLatests', function(e, eventIds) {
			var $events = $('div#latest-events');
			$events.find('div.day-box').show();
			$.each(eventIds, function(i, item) {
				$events.find('div[data-eventid=' + item + ']').hide();
			});
		});
    });

    app.run('#/');
    SiteUtils.initScrollToTop();
    Events.initNavbar(app);
    //Photos.initMainScoller();
});
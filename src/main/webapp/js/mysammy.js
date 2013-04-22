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
		});
		
		this.get('#/', function(context) {
			Events.getLatests(context);
		});
		
		this.get('#/events', function(context) {
			Events.getAll(context);
		});
		
		this.get('#/newday', function(context) {
			Days.newDay(context);
		});

		this.post('#/addday', function(context) {
			Days.addDay(context);
		});
		
		this.bind('selectedDayChanged', function(e, data) {
			
		});
		
		this.bind('newDayError', function(e, data) {
			var error_div = $('<div class="alert alert-error">' +
					'<button type="button" class="close" data-dismiss="alert">×</button>' +
					'Nem sikerült elmenteni a napot! Próbáld meg újra!</div>');
			$('#formAddDay').before(error_div);
		});
    });
	
	$(function() {
        app.run('#/');
    });
	
    $('ul.nav > li.dropdown').on('click', 'a', function() {
		$('.dropdown.open').removeClass('open');
		$('ul.dropdown-menu > li').removeClass('active');
	});
    
    
    $.sammy.Application.prototype = $.extend({}, Sammy.Object.prototype, {
    	clearTemplateCache: function(location) {
    		console.log(_template_cache);
    	    return (delete _template_cache[location]);
    	}
    });
});
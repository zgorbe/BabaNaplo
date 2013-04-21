$(function(){
	var loadOptions = {
            type: 'get', 
            dataType: 'json'
        };
	
	var app = $.sammy('#main', function() {
		this.use('Handlebars', 'hb');

		this.before({}, function(context) {
			context.loadOptions = loadOptions;
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
    });
	
	$(function() {
        app.run('#/');
    });
	
    $('ul.nav').on('click', 'li', function () {
        $('ul.nav > li').removeClass('active');
        $(this).addClass('active');                
    });
    $('ul.nav > li.dropdown').on('click', 'a', function() {
		$('.dropdown.open').removeClass('open');
		$('ul.dropdown-menu > li').removeClass('active');
	});         
});
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
    });
	
	$(function() {
        app.run('#/');
    });
	
    $('ul.nav').on('click', 'li', function () {
        $('ul.nav > li').removeClass('active');
        $(this).addClass('active');                
    });            
});

Handlebars.registerHelper('get_filter_class', function(startTime) {

});
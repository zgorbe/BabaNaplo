$(function(){
	var loadOptions = {
            type: 'get', 
            dataType: 'json'
        };
	
	var app = $.sammy('#main', function() {
		this.use('Handlebars', 'hb');
		this.get('#/', function(context) {
			context.app.swap('');
			this.load('/json/events/latests/5', loadOptions)
		    	.then(function(items) {
					$.each(items, function(i, item) {
						item.startTime = $.format.date(item.startTime, 'yyyy.MM.dd HH:mm');
						item.hasDuration = (item.duration > 0) ? true : false;
						context.render('/templates/event.hb', {item: item})
							.appendTo(context.$element());
					});
			});
	    });
		
		this.get('#/events', function(context) {
			context.app.swap('');
			this.load('/json/events', loadOptions)
		    	.then(function(items) {
					$.each(items, function(i, item) {
						item.startTime = $.format.date(item.startTime, 'yyyy.MM.dd HH:mm');
						item.hasDuration = (item.duration > 0) ? true : false;
						context.render('/templates/event.hb', {item: item})
							.appendTo(context.$element());
					});
			});
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

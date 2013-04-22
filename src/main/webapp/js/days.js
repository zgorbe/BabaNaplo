var Days = (function() {
	
	return {
		newDay: function(context) {
			context.render('/templates/newday.hb')
			.swap(context.$element());
		},
		addDay: function(context) {
	    
			$.ajax({
				type: "POST",
				data : $('#formAddDay').serialize(),
				url: '/json/days/form',
				success: function(data, type, xmlhttp){
					if (data.id == null) {
						context.app.trigger('newDayError');
					} else {
						context.app.clearTemplateCache('/json/events/latests/5');
						context.redirect('#/');
					}
				}
			});
		}
	};	
})();
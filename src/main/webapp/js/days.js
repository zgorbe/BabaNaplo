var Days = (function() {
	
	return {
		newDay: function(context) {
			context.render('/templates/newday.hb')
			.swap(context.$element()).then(function(){
				context.app.trigger('initCalendar');
			});
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
						context.app.clearTemplateCache();
						context.redirect('#/');
					}
				}
			});
		}
	};	
})();
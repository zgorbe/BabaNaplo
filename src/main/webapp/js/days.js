var Days = (function() {
	
	return {
		newDay: function(context) {
			context.render('/templates/newday.hb')
			.swap(context.$element());
			$('a.dropdown-toggle').dropdown('toggle');
			$('ul.dropdown-menu > li').removeClass('active');
		}
	};	
})();
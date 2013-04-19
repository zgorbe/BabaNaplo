var Days = (function() {
	
	return {
		newDay: function(context) {
			context.render('/templates/newday.hb')
			.swap(context.$element())
			.then(function() {
				$('.dropdown.open').removeClass('open');
				$('ul.dropdown-menu > li').removeClass('active');
			});
		},
		addDay: function(context) {
			var formParams = context.app._parseFormParams($('#formAddDay'));
			console.log($.toJSON(formParams));
		    
			$.ajax({
				type: "POST",
				contentType : 'application/json',
				data : $.toJSON(formParams),
				url: '/json/days',
				success: function(data, type, xmlhttp){
					
				}
			});
			//alert(context.params['theDay']);
		}
	};	
})();
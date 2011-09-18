var selectedDay;

function getEventsOfTheDay(dateText) {
	selectedDay = dateText;
	$.ajax({
		type: "GET",
		data: "theDay=" + dateText,
		url: '/diaryweb',
		success: function(data, type, xmlhttp){
			$("#events").html(data);
		}
	});
}
var selectedDay;

function getEventsOfTheDay(dateText) {
	selectedDay = dateText;
	$.ajax({
		type: "GET",
		data: "theDay=" + dateText,
		url: '/diaryweb',
		success: function(data, type, xmlhttp){
			$("#events").html(data);
			$("#theDayInput").val(selectedDay);
		}
	});
}

function addday() {
	$.ajax({
		type: "GET",
		data: "cmd=addday",
		url: '/diaryweb',
		success: function(data, type, xmlhttp){
			$("#add_div").html(data);
			$("#add_div").show();
		}
	});
}

function hide_add_div() {
	$("#add_div").hide();
}
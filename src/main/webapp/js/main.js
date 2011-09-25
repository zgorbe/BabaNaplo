var selectedDay = getFormattedNow();

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
function addevent() {
	$.ajax({
		type: "GET",
		data: "cmd=addevent",
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

function getFormattedNow() {
	var now = new Date();
	var months = now.getMonth() + 1;
	var days = now.getDate();
	var year = now.getFullYear();
	if (months < 10) {
		months = '0' + months;
	}
	if (days < 10) {
		days = '0' + days;
	}
	return months + '/' + days + '/' + year; 
}
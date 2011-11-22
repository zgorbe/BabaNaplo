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
function inactivate_all() {
	$('#menu_list').children().removeClass('active');	
}
function home(e) {
	inactivate_all();
	$('#li_home').addClass('active');
	document.location.href = '/diaryweb';
}
function addday(e) {
	inactivate_all();
	$('#li_addday').addClass('active');
	$.ajax({
		type: "GET",
		data: "cmd=addday",
		url: '/diaryweb',
		success: function(data, type, xmlhttp){
			$("#content").html(data);
		}
	});
}
function addevent(e) {
	inactivate_all();
	$('#li_addevent').addClass('active');
	$.ajax({
		type: "GET",
		data: "cmd=addevent",
		url: '/diaryweb',
		success: function(data, type, xmlhttp){
			$("#content").html(data);
		}
	});	
}

function allday(e) {
	inactivate_all();
	$('#li_allday').addClass('active');
	var now = new Date();
	var months = now.getMonth();
	var year = now.getFullYear();
	$.ajax({
		type: "GET",
		data: "cmd=allday&year=" + year + "&months=" + months,
		url: '/diaryweb',
		success: function(data, type, xmlhttp){
			$("#content").html(data);
		}
	});
}

function datefilter() {
	var year = $("#yearFilter").val();
	var months = $("#monthsFilter").val();
	$.ajax({
		type: "GET",
		data: "cmd=allday&year=" + year + "&months=" + months,
		url: '/diaryweb',
		success: function(data, type, xmlhttp){
			$("#content").html(data);
		}
	});
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

var selectedDay = getFormattedNow();
var month_days = [];

function getEventsOfTheDay(dateText) {
	selectedDay = dateText;
	$('#div_events').html('');	
	$('#loader_events').show();
	$.ajax({
		type: "GET",
		data: "theDay=" + dateText,
		url: '/diaryweb',
		success: function(data, type, xmlhttp){
			$('#events').html(data);
			$('#theDayInput').val(selectedDay);
			$('#loader_events').hide();
			smiley();
		}
	});
}
function getLatestEvents() {
	$('#div_latests').html('');
	$('#loader_latests').show();
	$.ajax({
		type: "GET",
		data: "cmd=latests",
		url: '/diaryweb',
		success: function(data, type, xmlhttp){
			$('#latests').html(data);
			$('#loader_latests').hide();
			smiley();
		}
	});
}
function search() {
	var searchTerm = $('#searchTerm').val().trim();
	if (searchTerm.length == 0) {
		$('#searchTerm').focus();
		return;
	}
	$('#div_result').html('');
	$('#loader_result').show();
	$.ajax({
		type: "GET",
		data: "cmd=search&searchTerm=" + searchTerm,
		url: '/diaryweb',
		success: function(data, type, xmlhttp){
			$('#events').html(data);
			$('#loader_result').hide();
			$('#searchTerm').val('');
			smiley();
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
			$('#content').html(data);
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
			$('#content').html(data);
		}
	});	
}

function allday() {
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
			$('#events').html(data);
			$('#latests').html('');
			smiley();
		}
	});
}

function videos() {
	inactivate_all();
	$('#li_videos').addClass('active');
	$.ajax({
		type: "GET",
		data: "cmd=videos",
		url: '/diaryweb',
		success: function(data, type, xmlhttp){
			$('#content').html(data);
		}
	});
}
function datefilter() {
	var year = $('#yearFilter').val();
	var months = $('#monthsFilter').val();
	$('#div_all').html('');	
	$('#loader_all').show();
	$.ajax({
		type: "GET",
		data: "cmd=allday&year=" + year + "&months=" + months,
		url: '/diaryweb',
		success: function(data, type, xmlhttp){
			$('#content').html(data);
			$('#loader_all').hide();
			smiley();
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
	return year + '.' + months + '.' + days; 
}

function smiley() {
	$('.entry').each(function(index, element) {
	  var tmp = $(element).html().replace(/:\)/g, '<img src="images/smiley.png" alt=":-)" />');
	  $(element).html(tmp);
	});
}

function initCalendar() {
	var now = new Date();
	var month = now.getMonth();
	var year = now.getFullYear();
	getDaysForAMonth(year, month);
}

function getDaysForAMonth(year, month) {
	$.ajax({
		type: "GET",
		data: "cmd=getDays&key=" + year + "-" + month,
		url: '/diaryweb',
		success: function(data, type, xmlhttp){
		}
	});	
}

function updateCalendar() {
  $('#datepicker1 tr').each(function() {
    $.each(this.cells, function() {
      var cell = $(this);
      var cellAnchor = $(this).find('a');
      if (cellAnchor) {
        var cellData = cellAnchor.html();
        if (cellData) {
          $.each(month_days, function(index, value) {
            if (value == cellData) {
              cellAnchor.addClass('ui-state-has-event');
              // cell.css('background-color', 'red');
            }        
          });
        }
      }
    });
  });
}

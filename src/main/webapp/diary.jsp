<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
  
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link href="<c:url value="/css/style.css" />" rel="stylesheet" type="text/css" media="screen" />
    <link href="<c:url value="/css/table.css" />" rel="stylesheet" type="text/css" media="screen" />
    <link href="<c:url value="/css/jquery-ui-1.8.9.custom.css" />" rel="stylesheet" type="text/css" media="screen" />
          
		<script type="text/javascript" src="<c:url value="/js/jquery-1.4.2.js" />"></script>
		<script type="text/javascript" src="<c:url value="/js/jquery-ui-1.8.9.custom.min.js" />"></script>
		<script type="text/javascript" src="<c:url value="/js/jquery-ui-timepicker-addon.js" />"></script>
		<script type="text/javascript" src="<c:url value="/js/main.js" />"></script>
    <title>Baba napló</title>		
	</head>
	<body>
		<div id="header">
			<div id="menu">
				<ul>
					<li class="current_page_item"><a id="a_home" href="/diaryweb">Home</a></li>
					<li><a id="a_allday" href="#" onclick="allday();">Összes nap</a></li>
					<li><a id="a_addday" href="#" onclick="addday();">Új nap</a></li>
					<li><a id="a_addevent" href="#" onclick="addevent();">Új esemény</a></li>
				</ul>
			</div>
		</div>
		<div id="logo">
		</div>
		<div id="page">
			<div id="content">
				<div id="datepicker1" style="font-size: 12px;"></div>
				<script type="text/javascript">
					$(function(){
						$('#datepicker1').datepicker({
							numberOfMonths: 3,
							onSelect: function(dateText, inst) { getEventsOfTheDay(dateText); }
						});		
					});
				</script>
				<div id="events">
					<jsp:include page="events.jsp" />
				</div>
	       	</div>
	       	<div style="clear: both;">&nbsp;</div>
	    </div>
        <!-- div id="footer">
      			Baba Napló, 2011
    	</div -->
		<script type="text/javascript">
			getEventsOfTheDay(selectedDay);
		</script>
	</body>
</html>

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
        <title>Net napló</title>		
	</head>
	<body>
		<div id="container">
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
				<a href="#" onclick="addday();">Új nap hozzáadása</a>
		        <div id="add_div"></div>
	        </div>
	        <div id="footer">
      			Net Napló, 2011
    		</div>
        </div>
	</body>
</html>
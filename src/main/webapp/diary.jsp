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
		<div id="wrapper">
			<div id="header">
				<div id="logo">
					<h1><a href="/diaryweb">Timcsi naplója</a></h1>
					<p>Stílus: <a href="http://www.freecsstemplates.org/" target="_blank">Free CSS Templates</a>.</p>
				</div>
				<div id="menu">
					<ul id="menu_list">
						<li id="li_home" class="active"><a href="#" onclick="home();">Home</a></li>
						<li id="li_allday"><a href="#" onclick="allday();">Összes nap</a></li>
            <li id="li_videos"><a href="#" onclick="videos();">Videók</a></li>
						<li id="li_addday"><a href="#" onclick="addday();">Új nap</a></li>
						<li id="li_addevent"><a href="#" onclick="addevent();">Új esemény</a></li>
					</ul>
				</div>
			</div>
			
			<div id="page">
				<div id="header-pic"></div>
				<div id="content">
					<div id="loader_result" style="display: none;"><img src="images/loading_pink.gif"></div>
					<div id="events">
						<jsp:include page="events.jsp" />
					</div>
					<div id="latests">
						<jsp:include page="latests.jsp" />
					</div>
				</div>
				<div id="sidebar">
					<div id="sidebar-bgtop"></div>
					<div id="sidebar-content">
						<div id="sidebar-bgbtm">
						<ul>
							<li id="search">
								<h2>Keresés</h2>
								<fieldset>
									<input type="text" id="searchTerm" value="" />
									<button type="button" onclick="search();">Keresés</button>
								</fieldset>
							</li>
							<li>
								<h2>Válassz napot</h2>
								<div id="datepicker1" style="font-size: 14px;"></div>
							</li>
						</ul>
					</div>
					</div>
				</div>
				<!-- end #sidebar -->
				<div style="clear: both;">&nbsp;</div>	
				<script type="text/javascript">
					$(function(){
						$('#datepicker1').datepicker({
							onSelect: function(dateText, inst) { getEventsOfTheDay(dateText); },
							onChangeMonthYear: function(year, month, inst) { getDaysForAMonth(year, month -1); }
						});		
					});
				</script>
		    </div>
			<script type="text/javascript">
				getEventsOfTheDay(selectedDay);
				getLatestEvents();
			</script>
		</div>
		<div id="footer">
			<p>&copy; 2011. Baba napló.</p>
		</div>
	</body>
</html>

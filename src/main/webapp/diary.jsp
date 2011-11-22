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
					<h1><a href="#">Title</a></h1>
					<p>Design by <a href="http://www.freecsstemplates.org/">Free CSS Templates</a></p>
				</div>
				<div id="menu">
					<ul id="menu_list">
						<li id="li_home" class="active"><a onclick="home();">Home</a></li>
						<li id="li_allday" class=""><a href="#" onclick="allday();">Összes nap</a></li>
						<li id="li_addday" class=""><a href="#" onclick="addday();">Új nap</a></li>
						<li id="li_addevent" class=""><a href="#" onclick="addevent();">Új esemény</a></li>
					</ul>
				</div>
			</div>
			
			<div id="page">
				<div id="header-pic"></div>
				<div id="content">
					<div class="post">
						<h1 class="title">Welcome to our website </h1>
						<p class="byline"><small>Posted by FreeCssTemplates</small></p>
						<div class="entry">
							<p><strong>Professional 1.0</strong> is a free template from <a href="http://www.freecsstemplates.org/">Free CSS Templates</a> released under a <a href="http://creativecommons.org/licenses/by/2.5/">Creative Commons Attribution 2.5 License</a>. You're free to use this template for both commercial or personal use. I only ask that you link back to <a href="http://www.freecsstemplates.org/">my site</a> in some way. Enjoy :)</p>
						</div>
						<div class="meta">
							<p class="links"><a href="#" class="comments">Comments (32)</a> &nbsp;&bull;&nbsp;&nbsp; <a href="#" class="more">Read full post &raquo;</a></p>
						</div>
					</div>
					<div class="post">
						<h2 class="title">Lorem Ipsum Dolor Volutpat</h2>
						<p class="byline"><small>Posted by FreeCssTemplates</small></p>
						<div class="entry">
							<div id="events">
								<jsp:include page="events.jsp" />
							</div>
						</div>
						<div class="meta">
							<p class="links"><a href="#" class="comments">Comments (32)</a> &nbsp;&bull;&nbsp;&nbsp; <a href="#" class="more">Read full post &raquo;</a></p>
						</div>
					</div>
				</div>
				<div id="sidebar">
					<div id="sidebar-bgtop"></div>
					<div id="sidebar-content">
						<div id="sidebar-bgbtm">
						<ul>
							<li id="search">
								<h2>Keresés</h2>
								<form method="get" action="">
									<fieldset>
									<input type="text" id="s" name="s" value="" />
									<input type="submit" id="x" value="Keresés" />
									</fieldset>
								</form>
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
							onSelect: function(dateText, inst) { getEventsOfTheDay(dateText); }
						});		
					});
				</script>
		    </div>
	        <!-- div id="footer">
	      			Baba Napló, 2011
	    	</div -->
			<script type="text/javascript">
				getEventsOfTheDay(selectedDay);
			</script>
		</div>
		<div id="footer">
			<p>&copy; 2008. All Rights Reserved. Design by <a href="http://www.freecsstemplates.org/">Free CSS Templates</a>.</p>
		</div>
	</body>
</html>

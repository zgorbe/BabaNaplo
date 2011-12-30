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
	    <link href="<c:url value="/css/admin.css" />" rel="stylesheet" type="text/css" media="screen" />
	    <link href="<c:url value="/css/jquery-ui-1.8.9.custom.css" />" rel="stylesheet" type="text/css" media="screen" />
	          
		<script type="text/javascript" src="<c:url value="/js/jquery-1.4.2.js" />"></script>
		<script type="text/javascript" src="<c:url value="/js/jquery-ui-1.8.9.custom.min.js" />"></script>
		<script type="text/javascript" src="<c:url value="/js/jquery-ui-timepicker-addon.js" />"></script>
		<script type="text/javascript" src="<c:url value="/js/main.js" />"></script>
		<script type="text/javascript" src="<c:url value="/js/jquery.ui.datepicker-hu.js" />"></script>
	    <title>Baba napló - Admin</title>		
	</head>
	<body>
		<div id="wrapper">
			<div id="page">
				<div id="content">
					<jsp:include page="edit.jsp" />
				</div>
				<div id="sidebar">
					<div id="sidebar-bgtop"></div>
					<div id="sidebar-content">
						<div id="sidebar-bgbtm">
						<ul>
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
						$.datepicker.setDefaults($.extend({showMonthAfterYear: true}, $.datepicker.regional['hu']));
						$('#datepicker1').datepicker({
							onSelect: function(dateText, inst) { adminGetDay(dateText); }
						});
					});
				</script>
		    </div>
			<script type="text/javascript">
				adminGetDay(selectedDay);
			</script>
		</div>
		<div id="footer">
			<p>&copy; 2011. Baba napló.</p>
		</div>
	</body>
</html>

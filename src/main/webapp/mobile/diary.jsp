<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<!DOCTYPE html> 
<html> 
	<head> 
		<title>Baba napló</title> 
		<meta name="viewport" content="width=device-width, initial-scale=1">
				
		<link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.css" />
		<link rel="stylesheet" href="/css/baba-naplo.min.css" />
		<link rel="stylesheet" href="/css/mstyle.css" />
		<link rel="stylesheet" href="/css/mobiscroll-2.3.1.custom.min.css" />
		<script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
		<script src="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script>
		<script src="/js/mobile.js"></script>
		<script src="/js/mobiscroll-2.3.1.custom.min.js"></script>
	</head> 
	<body> 
		<div data-role="page" data-theme="e">
			<div data-role="header" data-theme="e">
				<h1>Baba napló</h1>
				<a href="<c:url value="naplo" />" class="ui-btn-left" data-icon="home" data-iconpos="notext" data-direction="reverse" title="Home">Home</a> 
				<div data-role="navbar">
					<ul>
						<li><a href="<c:url value="naplo?cmd=alldays" />">Összes esemény</a></li>
						<li><a href="b.html">Képek</a></li>
						<li><a href="<c:url value="naplo?cmd=addday" />">Új nap</a></li>
						<li><a href="<c:url value="naplo?cmd=addevent" />">Új esemény</a></li>
					</ul>
				</div>

			</div>
		
			<div id="container" data-role="content">
				<c:if test="${not empty jspPage}">
					<jsp:include page="${jspPage}" flush="true" />
				</c:if>
			</div>
			<div data-role="footer" data-theme="e"> 
				<h6>&copy; 2011-2013. Baba napló.</h6> 
			</div> 
		</div>
	</body>
</html>
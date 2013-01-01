<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@page import="com.zotyo.diary.web.DiaryHelper"%>
<%@page import="com.zotyo.diary.client.Event"%>

<% DiaryHelper diaryHelper = new DiaryHelper(); %>
  

<!DOCTYPE html> 
<html> 
	<head> 
		<title>Baba napló</title> 
		<meta name="viewport" content="width=device-width, initial-scale=1"> 
		<link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.css" />
		<script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
		<script src="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script>
	</head> 
	<body> 
		<div data-role="page">
			<div data-role="header" data-theme="b">
				<h1>Baba napló</h1>
				<div data-role="navbar">
					<ul>
						<li><a href="b.html">Összes esemény</a></li>
						<li><a href="a.html">Új nap</a></li>
						<li><a href="b.html">Új esemény</a></li>
					</ul>
				</div>
			</div>
		
			<div data-role="content">	
				<c:forEach items="${latests}" var="event">
					<div>
						<c:out value="${event.description}" /><br />
						<small><%= diaryHelper.formatStartTime((Event)pageContext.getAttribute("event")) %></small>
						<c:if test="${event.duration > 0}">
							<br />Időtartam (óra:perc):
							<%= diaryHelper.getDurationInHHMM((Event)pageContext.getAttribute("event")) %>	
						</c:if>
					</div>
				</c:forEach>
			</div>
			<div data-role="footer" data-theme="b"> 
				<h6>&copy; 2011-2013. Baba napló.</h6> 
			</div> 
		</div>
	</body>
</html>
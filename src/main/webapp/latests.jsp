<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@page import="com.zotyo.diary.web.DiaryHelper"%>
<%@page import="com.zotyo.diary.client.Event"%>


<% DiaryHelper diaryHelper = new DiaryHelper(); %>

<div class="post">
		<h1 class="title">Legfrissebb események</h1>
		<p class="byline"><small>Posted by FreeCssTemplates</small></p>
		<div class="entry">
		<div id="loader_latests" style="display: none;"><img src="images/loading_pink.gif"></div>
		<c:choose>
			<c:when test="${fn:length(latests) > 0}">
				<c:forEach items="${latests}" var="event">
					<div class="entry_item">
						<c:out value="${event.description}" /><br />
						<small><c:out value="${event.startTime}" /></small>
						<c:if test="${event.duration > 0}">
							<br />Időtartam (óra:perc):
							<%= diaryHelper.getDurationInHHMM((Event)pageContext.getAttribute("event")) %>	
						</c:if>
					</div>
				</c:forEach>
			</c:when>
		</c:choose>
	</div>
	<div class="meta">
		<p class="links"><a href="#" class="comments">További események</a></p>
	</div>
</div>
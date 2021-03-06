<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@page import="com.zotyo.diary.web.DiaryHelper"%>
<%@page import="com.zotyo.diary.client.Event"%>


<% DiaryHelper diaryHelper = new DiaryHelper(); %>

<article>
	<header>Legfrissebb események</header>
	<div class="paragraphs">
		<div id="loader_latests" style="display: none;"><img src="images/loading_pink.gif"></div>
		<c:choose>
			<c:when test="${fn:length(latests) > 0}">
				<c:forEach items="${latests}" var="event">
					<p>
						<c:out value="${event.description}" /><br />
						<small><%= diaryHelper.formatStartTime((Event)pageContext.getAttribute("event")) %></small>
						<c:if test="${event.duration > 0}">
							<br />Időtartam (óra:perc):
							<%= diaryHelper.getDurationInHHMM((Event)pageContext.getAttribute("event")) %>	
						</c:if>
					</p>
				</c:forEach>
			</c:when>
		</c:choose>
	</div>
	<div class="meta">
		<p class="links"><a href="#" class="comments" onclick="isotope_all_days();">További események</a></p>
	</div>
</article>
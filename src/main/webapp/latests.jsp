<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@page import="com.zotyo.diary.web.DiaryHelper"%>
<%@page import="com.zotyo.diary.client.Event"%>


<% DiaryHelper diaryHelper = new DiaryHelper(); %>

<div class="post">
		<h1 class="title">Legfrissebb események </h1>
		<p class="byline"><small>Posted by FreeCssTemplates</small></p>
		<div class="entry">
		<c:choose>
			<c:when test="${fn:length(eventsOfTheDay) > 0}">
				<br />
				A nap leírása: <c:out value="${descriptionOfTheDay}" /> <br />
				<ul>
					<c:forEach items="${eventsOfTheDay}" var="event">
						<li>
							<c:out value="${event.description}" />
							<c:if test="${event.duration > 0}">
								<br />Időtartam (óra:perc):
								<%= diaryHelper.getDurationInHHMM((Event)pageContext.getAttribute("event")) %>	
							</c:if>
						</li>
					</c:forEach>
				</ul>
			</c:when>
			<c:otherwise>
				Nincs esemény a választott napra (<c:out value="${theDay}" />). 
			</c:otherwise>
		</c:choose>
	</div>
	<div class="meta">
		<p class="links"><a href="#" class="comments">Comments (32)</a> &nbsp;&bull;&nbsp;&nbsp; <a href="#" class="more">Read full post &raquo;</a></p>
	</div>
</div>
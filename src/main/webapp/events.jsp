<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@page import="com.zotyo.diary.web.DiaryHelper"%>
<%@page import="com.zotyo.diary.client.Event"%>


<% DiaryHelper diaryHelper = new DiaryHelper(); %>

<div class="post">
	<h2 class="title"><c:out value="${theDay}" /> eseményei</h2>
	<p class="byline"><small>Posted by FreeCssTemplates</small></p>
	<div class="entry">
		<div id="loader_events" style="display: none;"><img src="images/loading_pink.gif"></div>
		<div id="div_events">
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
	</div>
</div>
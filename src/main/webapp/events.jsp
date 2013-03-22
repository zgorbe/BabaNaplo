<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@page import="com.zotyo.diary.web.DiaryHelper"%>
<%@page import="com.zotyo.diary.client.Event"%>


<% DiaryHelper diaryHelper = new DiaryHelper(); %>

<article>
	<header><c:out value="${theDay}" /> eseményei</header>
	<div class="paragraphs">
		<div id="loader_events" style="display: none;"><img src="images/loading_pink.gif"></div>
		<c:choose>
			<c:when test="${fn:length(eventsOfTheDay) > 0}">
				<br />
				<b>A nap leírása: <c:out value="${descriptionOfTheDay}" /> </b><br />
				<c:forEach items="${eventsOfTheDay}" var="event">
					<p>
						<c:out value="${event.description}" />
						<c:if test="${event.duration > 0}">
							<br />Időtartam (óra:perc):
							<%= diaryHelper.getDurationInHHMM((Event)pageContext.getAttribute("event")) %>	
						</c:if>
					</p>
				</c:forEach>
			</c:when>
			<c:otherwise>
				Nincs esemény a választott napra (<c:out value="${theDay}" />). 
			</c:otherwise>
		</c:choose>
	</div>
</article>
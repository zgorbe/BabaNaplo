<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@page import="com.zotyo.diary.web.DiaryHelper"%>
<%@page import="com.zotyo.diary.client.Event"%>

<c:choose>
	<c:when test="${fn:length(alldays) > 0}">
		<b> A naplóban szereplő napok:</b><br /><br />
		<c:forEach items="${alldays}" var="day">
			<b></b><c:out value="${day.theDay}" /> - <c:out value="${day.descriptionOfTheDay}" /></b> <br />
				<c:forEach items="${day.eventsOfTheDay}" var="event">
					<li>
						<c:out value="${event.description}" />
						<c:if test="${event.duration > 0}">
							<br />Időtartam (óra:perc):
							<%= DiaryHelper.getDurationInHHMM((Event)pageContext.getAttribute("event")) %>	
						</c:if>
					</li>
				</c:forEach>
		</c:forEach>
	</c:when>
	<c:otherwise>
		Nincs nap a naplóban. 
	</c:otherwise>
</c:choose>

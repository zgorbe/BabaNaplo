<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<c:choose>
	<c:when test="${fn:length(eventsOfTheDay) > 0}">
		<b><c:out value="${theDay}" /> eseményei a naplóban:</b><br />
		A nap leírása: <c:out value="${descriptionOfTheDay}" /> <br />
		<ul>
			<c:forEach items="${eventsOfTheDay}" var="event">
				<li><c:out value="${event.description}" /></li>
			</c:forEach>
		</ul>
	</c:when>
	<c:otherwise>
		Nincs esemény a választott napra (<c:out value="${theDay}" />). 
	</c:otherwise>
</c:choose>

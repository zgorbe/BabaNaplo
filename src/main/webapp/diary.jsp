<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
  
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <link href="<c:url value="/css/style.css" />" rel="stylesheet" type="text/css" />        
        <title>Your web diary</title>		
	</head>
	<body>
		<c:choose>
			<c:when test="${fn:length(eventsOfTheDay) > 0}">
				<ul>
					<c:forEach items="${eventsOfTheDay}" var="event">
						<li><c:out value="${event.description}" /></li>
					</c:forEach>
				</ul>
			</c:when>
			<c:otherwise>
				Mára nincs esemény a naplóban.
			</c:otherwise>
		</c:choose>
        <div id="add_div">
            <jsp:include page="addday.jsp" />
        </div>
	</body>
</html>
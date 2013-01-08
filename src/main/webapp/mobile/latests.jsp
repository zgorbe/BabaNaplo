<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 

<%@page import="com.zotyo.diary.web.DiaryHelper"%>
<%@page import="com.zotyo.diary.client.Event"%>

<% DiaryHelper diaryHelper = new DiaryHelper(); %>

<b>Legfrissebb események</b>
<c:forEach items="${latests}" var="event">
	<div class="entry">
		<c:out value="${event.description}" />
		<div class="time">
			<%= diaryHelper.formatStartTime((Event)pageContext.getAttribute("event")) %>
			<c:if test="${event.duration > 0}">
				<br />
				Időtartam (óra:perc):
					<%= diaryHelper.getDurationInHHMM((Event)pageContext.getAttribute("event")) %>
			</c:if>
		</div>
	</div>
</c:forEach>
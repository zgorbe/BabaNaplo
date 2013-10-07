<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 

<%@page import="com.zotyo.diary.web.DiaryHelper"%>
<%@page import="com.zotyo.diary.client.Event"%>

<% DiaryHelper diaryHelper = new DiaryHelper(); %>
<h4>Legfrissebb események</h4>
<div id="latest-events">
	<ul data-role="listview" data-theme="e" class="day-list">
		<c:forEach items="${latests}" var="event">
			<li>
				<c:out value="${event.description}" />
				<div class="time">
					<%= diaryHelper.formatStartTime((Event)pageContext.getAttribute("event")) %>
					<c:if test="${event.duration > 0}">
						<br />
						Időtartam (óra:perc):
							<%= diaryHelper.getDurationInHHMM((Event)pageContext.getAttribute("event")) %>
					</c:if>
				</div>
			</li>
		</c:forEach>
	</ul>
</div>
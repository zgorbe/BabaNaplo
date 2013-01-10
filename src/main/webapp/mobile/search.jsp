<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@page import="com.zotyo.diary.web.DiaryHelper"%>
<%@page import="com.zotyo.diary.client.Event"%>


<% DiaryHelper diaryHelper = new DiaryHelper(); %>

<c:if test="${controlsNeeded}">
	<b>Keresés</b>
	<div class="ui-grid-a">
		<div class="ui-block-a"><input type="search" id="search-term" name="search" value="" data-mini="true" /></div>
		<div class="ui-block-b"><button type="button" id="search-button" data-mini="true">Keresés</button></div>
	</div>
</c:if>
<div id="search-result">
	<c:if test="${empty controlsNeeded}">
		<b><c:out value="${fn:length(result)}" /> keresési találat:</b>
	</c:if>
	<c:choose>
		<c:when test="${fn:length(result) > 0}">
			<c:forEach items="${result}" var="event">
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
		</c:when>
	</c:choose>
</div>

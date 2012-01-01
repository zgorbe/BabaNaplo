<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@page import="com.zotyo.diary.web.DiaryHelper"%>
<%@page import="com.zotyo.diary.client.Event"%>


<% DiaryHelper diaryHelper = new DiaryHelper(); %>

<div class="post">
	<h1 class="title">Keresett szó: <c:out value="${searchTerm}" />, <c:out value="${fn:length(result)}" /> találat </h1>
	<div class="entry">
		<div id="div_result">
			<c:choose>
				<c:when test="${fn:length(result) > 0}">
					<c:forEach items="${result}" var="event">
						<div class="entry_item">
							<c:out value="${event.description}" /><br />
							<small><%= diaryHelper.formatStartTime((Event)pageContext.getAttribute("event")) %></small>
							<c:if test="${event.duration > 0}">
								<br />Időtartam (óra:perc):
								<%= diaryHelper.getDurationInHHMM((Event)pageContext.getAttribute("event")) %>	
							</c:if>
						</div>
					</c:forEach>
				</c:when>
			</c:choose>
		</div>
	</div>
	<div class="meta">
		<p class="links"><a href="#" class="comments" onclick="allday();">További események</a></p>
	</div>
</div>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@page import="com.zotyo.diary.pojos.Day"%>
<%@page import="com.zotyo.diary.pojos.Event"%>
<%@page import="com.zotyo.diary.web.DiaryHelper"%>

<% DiaryHelper diaryHelper = new DiaryHelper(); %>

<c:choose>
	<c:when test="${not empty day}">
		<div id="editday">
			<form action="/naplo/admin" method="POST" accept-charset="UTF-8">
				<table class="box-table-a">
				    <tr>
				        <td><label for="theDay">A nap dátuma:</label></td>
				        <td><input id="theDayInput" type="text" name="theDay" value="<%= diaryHelper.formatDateTime(((Day)request.getAttribute("day")).getTheDay()) %>" disabled="disabled" /></td>
				    </tr>
				    <tr>
				        <td><label for="name">Leírása:</label></td>
				        <td><textarea name="descriptionOfTheDay" cols="56" rows="2" ><c:out value="${day.descriptionOfTheDay}" /></textarea></td>
				    </tr>
				    <tr>
				    	<td colspan="2" align="center">
				    		<button type="submit">Módosít</button>
				    		<c:if test="${empty events}">
				    			<button type="button" onclick="deleteDay(<c:out value="${day.id}" />);">Törlés</button>
				    		</c:if>
				    	</td>
				    </tr>
			    </table>
			    <input type="hidden" name="cmd" value="update_day" />
			    <input type="hidden" name="id" value="<c:out value="${day.id}" />" />
			</form>
		</div>
		<br />
		<div id="editevent">
			<c:forEach items="${events}" var="event">
				<form action="/naplo/admin" method="POST" accept-charset="UTF-8">
					<table class="box-table-a">
					    <tr>
					        <td><label for="startDate">Az esemény kezdete:</label></td>
					        <td><input type="text" name="startDate" value="<%= diaryHelper.formatDateTime(((Event)pageContext.getAttribute("event")).getStartTime()) %>" /></td>
					    </tr>
					    <tr>
					        <td><label for="duration">Az esemény időtartama:</label></td>
					        <td><input type="text" name="duration" value="<c:out value="${event.duration}" />" /></td>
					    </tr>
						<tr>
					        <td><label for="description">Az esemény:</label></td>
					        <td><textarea name="description" cols="56" rows="6" ><c:out value="${event.description}" /></textarea></td>
					    </tr>
					    <tr>
					    	<td colspan="2" align="center">
					    		<button type="submit">Módosít</button>
					    		<button type="button" onclick="deleteEvent(<c:out value="${event.id}" />);">Törlés</button>
					    	</td>
					    </tr>
				    </table>
				    <input type="hidden" name="cmd" value="update_event" />
				    <input type="hidden" name="id" value="<c:out value="${event.id}" />" />
				</form>
				<br />		
			</c:forEach>
			<form id="formDeleteEvent" action="/naplo/admin" method="POST">
				<input type="hidden" name="cmd" value="delete_event" />
				<input id="eventIdInput" type="hidden" name="id" value="-1" />
			</form>
		</div>
	</c:when>
	<c:otherwise>
		<c:out value="${dayString}" /> nem szerepel a naplóban.
	</c:otherwise>
</c:choose>


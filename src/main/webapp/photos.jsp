<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@page import="com.zotyo.photos.pojo.Photo"%>
<%@page import="java.util.List"%>
<%@page import="com.zotyo.diary.web.DiaryHelper"%>

<% DiaryHelper diaryHelper = new DiaryHelper(); %>

<div class="post">
	<h1 class="title">Képek</h1>
	<c:if test="${not empty photos}" >
		<% List<Photo> photos = ((List<Photo>)request.getAttribute("photos"));  %>
		<table cellspacing="13">
			<tr>
			<% for (int i=0; i < photos.size(); i++) { %>
				<% Photo photo = photos.get(i); %>
				<% if (i != 0 && i%3 == 0) {%>
					</tr><tr>
				<% } %>
				<td id="photo<%= i %>" class="imgcell" onmouseout='$("#photo<%= i %>").css("background-color","#FBE2F3");' onmouseover='$("#photo<%= i %>").css("background-color","#F792C9");'>
					<a href="javascript:void(0);" onclick="showimage('http://mongie.herokuapp.com/home?cmd=data&filename=<%= photo.getFilename() %>', '<%= diaryHelper.formatDateTime(photo.getCreatedate()) %>', '<%= photo.getFilename() %>')">
						<img src="http://mongie.herokuapp.com/home?cmd=thumbdata&filename=<%= photo.getFilename() %>" title="<%= photo.getDescription() %>" />
					</a><br />
					<small><%= diaryHelper.formatDateTime(photo.getCreatedate()) %></small>
				</td>
			<% } %>
			</tr>
		</table>
	</c:if>	
	<div id="dialog" style="display: none;"></div>
</div>
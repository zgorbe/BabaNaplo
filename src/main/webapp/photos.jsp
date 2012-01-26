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
		<c:choose>
			<c:when test="${slideshow}">
				<p><button type="button" onclick="icon_photos('false');">Ikon nézet</button></p>
				<div id="fotorama">
					<c:forEach items="${photos}" var="photo">
						<a href="/photos?cmd=data&filename=<%= ((Photo)pageContext.getAttribute("photo")).getFilename() %>">
							<img src="/photos?cmd=data&filename=<%= ((Photo)pageContext.getAttribute("photo")).getFilename() %>" />
						</a>
					</c:forEach>
				</div>
			</c:when>
			<c:otherwise>
				<p><button type="button" onclick="icon_photos('true');">Diavetítő</button></p>
				<% List<Photo> photos = ((List<Photo>)request.getAttribute("photos"));  %>
				<table cellspacing="13">
					<tr>
					<% for (int i=0; i < photos.size(); i++) { %>
						<% Photo photo = photos.get(i); %>
						<% if (i != 0 && i%3 == 0) {%>
							</tr><tr>
						<% } %>
						<td id="photo<%= i %>" class="imgcell" onmouseout='$("#photo<%= i %>").css("background-color","#FBE2F3");' onmouseover='$("#photo<%= i %>").css("background-color","#F792C9");'>
							<a href="javascript:void(0);" onclick="showimage('/photos?cmd=data&filename=<%= photo.getFilename() %>', '<%= diaryHelper.formatDateTime(photo.getCreatedate()) %>', '<%= photo.getFilename() %>')">
								<img src="/photos?cmd=thumbdata&filename=<%= photo.getFilename() %>" title="<%= photo.getDescription() %>" />
							</a><br />
							<small><%= diaryHelper.formatDateTime(photo.getCreatedate()) %></small>
						</td>
					<% } %>
					</tr>
				</table>
				<div id="dialog" style="display: none;"></div>
			</c:otherwise>
		</c:choose>
	</c:if>
	<script type="text/javascript">
		$(function() {
			var fotorama = $('#fotorama');
			var timeout, i = 0, time=3500;
			var photoSize = <c:out value="${fn:length(photos)}" />
			fotorama.fotorama({
			    width: 511,
			    height: 384,
			    resize: true,
			    backgroundColor: '#FBE2F3',
			    thumbsBackgroundColor: '#F792C9',
			    thumbBorderColor: '#FD3790',
			    thumbSize: 50,
			    transitionDuration: 1500,
			    onShowImg: function(data){
			    	//alert('Index of active photo: ' + data.index);
			    }
			});
			clearTimeout(timeout);
        		timeout = setInterval(function(){
				if (photoSize == i) { i = 0; }
            			fotorama.trigger('showimg', i++);
        		}, time);
		});
	</script>	
</div>

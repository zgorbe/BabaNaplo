<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@page import="com.zotyo.photos.pojo.Photo"%>
<%@page import="java.util.List"%>
<%@page import="com.zotyo.diary.web.DiaryHelper"%>

<% DiaryHelper diaryHelper = new DiaryHelper(); %>

<section>
	<h3>Képek&nbsp;&nbsp;-&nbsp;
	<c:choose>
			<c:when test="${slideshow}">
				<a href="javascript:void(0);" onclick="icon_photos('false');" >Váltás ikon nézetre</a>
				<span style="float: right;">
				<a href="javascript:void(0);" onclick="slideshow_start();" ><img src="<c:url value="images/slideshow_start.png" />"></a>
				<a href="javascript:void(0);" onclick="slideshow_stop();" ><img src="<c:url value="images/slideshow_pause.png" />"></a>
				</span>
			</c:when>
			<c:otherwise>
				<a href="javascript:void(0);" onclick="icon_photos('true');" >Vissza a diavetítőhöz</a>
			</c:otherwise>
	</c:choose>
	</h3>
	<c:if test="${not empty photos}" >
		<c:choose>
			<c:when test="${slideshow}">
				<div id="fotorama">
					<c:forEach items="${photos}" var="photo">
						<a href="/photos?cmd=data&filename=<%= ((Photo)pageContext.getAttribute("photo")).getFilename() %>">
							<img src="/photos?cmd=data&filename=<%= ((Photo)pageContext.getAttribute("photo")).getFilename() %>" />
						</a>
					</c:forEach>
				</div>
			</c:when>
			<c:otherwise>
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
			</c:otherwise>
		</c:choose>
	</c:if>
	<input id="photos_size" type="hidden" value="<c:out value='${fn:length(photos)}' />" />
	<script type="text/javascript">
		$(function() {
			var fotorama = $('#fotorama');
			fotorama.fotorama({
			    width: 511,
			    height: 384,
			    resize: true,
			    arrowsColor: '#FD3790',
			    backgroundColor: '#FBE2F3',
			    thumbsBackgroundColor: '#F792C9',
			    thumbBorderColor: '#FD3790',
			    thumbSize: 50,
			    transitionDuration: 2000,
			    onShowImg: function(data){
			    	//alert('Index of active photo: ' + data.index);
			    }
			});
		});
	</script>	
</section>

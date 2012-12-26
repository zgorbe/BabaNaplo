<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@page import="com.zotyo.photos.pojo.Photo"%>
<%@page import="java.util.List"%>
<%@page import="com.zotyo.diary.web.DiaryHelper"%>

<% DiaryHelper diaryHelper = new DiaryHelper(); %>
<div class="post">
	<h1 class="title">Képek</h1>
	<div id="isotope_container">
		<c:if test="${not empty photos}" >
			<% List<Photo> photos = ((List<Photo>)request.getAttribute("photos"));
				for (int i = 0; i < photos.size(); i++) {
					Photo photo = photos.get(i); %>
					<div class="photo_item">
						<div class="buttons" align="right" style="display:none;">
							<img alt="P" class="zoom" src="images/zoom.png" />
							<img alt="X" class="cancel" src="images/cancel.png" />
						</div>
						<img class="baba" data-filename="<%= photo.getFilename() %>" data-createdate="<%= diaryHelper.formatDateTime(photo.getCreatedate()) %>" src="/photos?cmd=thumbdata&filename=<%= photo.getFilename() %>" title="<%= photo.getDescription() %>" />
					</div>
				<% } %>
			<div id="dialog" style="display: none;"></div>				
		</c:if>
		<script type="text/javascript">
			$(function() {
				$('#sidebar').hide();
				$('#content').css('float','none').css('width','900px');
	
				var $container = $('#isotope_container'); 
				$container.isotope({
					itemSelector: '.photo_item',
					filter: '*'
				});
				$('#isotope_container img').last().on('load', function() {
					$container.isotope('reLayout');
				});
				
				ImagePreview.init($container);
			});
		</script>	
	</div>
</div>
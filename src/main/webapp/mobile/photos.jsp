<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@page import="com.zotyo.photos.pojo.Photo"%>
<%@page import="java.util.List"%>
<%@page import="com.zotyo.diary.web.DiaryHelper"%>

<% DiaryHelper diaryHelper = new DiaryHelper(); %>
	<c:if test="${not empty photos}" >
		<div class="photos">
			<% List<Photo> photos = ((List<Photo>)request.getAttribute("photos"));
				for (int i = 0; i < photos.size(); i++) {
					Photo photo = photos.get(i); %>
					<div class="photo_item">
						<img class="baba" data-filename="<%= photo.getFilename() %>" src="/photos?cmd=thumbdata&filename=<%= photo.getFilename() %>" title="<%= photo.getDescription() %>" />
					</div>
				<% } %>
		</div>
		<div id="photo_popup">
			<img id="img_popup" src="" />
		</div>
	</c:if>
</div>
<script type="text/javascript">
	$(function() {
		mobileJS.initPhotosPage();
	});
</script>
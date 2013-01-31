<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@page import="com.zotyo.photos.pojo.Photo"%>
<%@page import="java.util.List"%>
<%@page import="com.zotyo.diary.web.DiaryHelper"%>

<% DiaryHelper diaryHelper = new DiaryHelper(); %>

<div data-role="collapsible" data-mini="true">
	<h4>Kép feltöltés</h4>
	<form action="/photos" method="post" enctype="multipart/form-data" accept-charset="UTF-8" data-ajax="false">
    	<label for="keywordInput">A keyword:</label>
    	<input id="keywordInput" type="password" name="keyword" data-mini="true" style="background-color: #FE2383; color: #fff" />		
		
		<label for="file">Fájl:</label>
		<input type="file" name="file" id="file" size="40" data-mini="true" />
		
		<label for="description">Leírás:</label>
		<textarea name="description"></textarea>
		
		<label for="createdate">Dátum:</label>
		<input type="text" name="createdate" id="createdate" data-mini="true" />
		
		<input type="submit" data-role="button" data-inline="true" data-mini="true" value="Küldés" />
		<input type="hidden" name="category" value="baba" />
		<input type="hidden" name="isMobile" value="true" />
	</form>   	
</div>

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

<script type="text/javascript">
	$(function() {
		mobileJS.initPhotosPage();
	});
</script>
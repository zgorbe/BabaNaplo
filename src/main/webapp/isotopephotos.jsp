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
						<img src="/photos?cmd=thumbdata&filename=<%= photo.getFilename() %>" title="<%= photo.getDescription() %>" />
					</div>
				<% } %>
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

				$container.on('mouseenter', 'img', function() {
					var $this = $(this);
					var width = parseInt($this.css('width'), 10);
					var height = parseInt($this.css('height'), 10);
					$this.attr('width', width * 2);
					$this.attr('height', height * 2);
					$container.isotope('reLayout');
				});
				$container.on('mouseleave', 'img', function() {
					var $this = $(this);
					var width = parseInt($this.css('width'), 10);
					var height = parseInt($this.css('height'), 10);
					$this.attr('width', width / 2);
					$this.attr('height', height / 2);
					$container.isotope('reLayout');
				});
			});

			/*
			$container.delegate( '.element', 'click', function(){
				$(this).toggleClass('large');
				$container.isotope('reLayout');
			});
			*/
		</script>	
	</div>
</div>
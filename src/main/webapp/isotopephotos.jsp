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

				$container.on('click', 'img.baba', function() {
					var $this = $(this);
					var width = parseInt($this.css('width'), 10);
					var height = parseInt($this.css('height'), 10);
					if ($this.hasClass('selected')) {
						return;
					} else {
						$this.attr('width', width * 2);
						$this.attr('height', height * 2);
						$this.attr('src', '/photos?cmd=data&filename='+$this.data('filename'));
						var $tempContainer = $this.parent();
						$('<img></img>', {
							style: 'float: right',
							alt: 'P',
							class: 'cancel',
							src: 'images/cancel.png'
						}).appendTo($tempContainer);
						$('<img></img>', {
							style: 'float: right',
							alt: 'P',
							class: 'zoom',
							src: 'images/zoom.png'
						}).appendTo($tempContainer);
					}
					$this.toggleClass('selected');
					$container.isotope('reLayout');
				});
				$container.on('click', 'img.zoom', function() {
					var $that = $(this).siblings().first();
					showimage('/photos?cmd=data&filename='+$that.data('filename'), $that.data('createdate'), $that.data('filename'));					
				});
				$container.on('click', 'img.cancel', function() {
					var $this = $(this);
					var $that = $this.siblings().first();
					var width = parseInt($that.css('width'), 10);
					var height = parseInt($that.css('height'), 10);
					$that.attr('width', width / 2);
					$that.attr('height', height / 2);
					$that.toggleClass('selected');
					$this.siblings().each(function() {
						if (!$(this).hasClass('baba')) {
							$(this).remove();	
						}
					});
					$this.remove();
					$container.isotope('reLayout');
				});
				$('#isotope_container img').last().on('load', function() {
					$container.isotope('reLayout');
				});
			});
		</script>	
	</div>
</div>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
  
<%@page import="com.zotyo.photos.pojo.Photo"%>  
<%@page import="com.zotyo.diary.web.DiaryHelper"%>

<% DiaryHelper diaryHelper = new DiaryHelper(); %>
  
<!doctype html>
<html lang="hu">
	<head>
	    <meta charset="utf-8" />
	    <title>Baba napló</title>
	    <link href="<c:url value="/css/style.css" />" rel="stylesheet" media="screen" />
	    <link href="<c:url value="/css/table.css" />" rel="stylesheet" media="screen" />
	    <link href="<c:url value="/css/jquery-ui-1.8.9.custom.css" />" rel="stylesheet" media="screen" />
	    <link href="<c:url value="/css/jquery.thumbnailScroller.css" />" rel="stylesheet" media="screen" />
		<script type="text/javascript" src="<c:url value="/js/jquery-1.7.min.js" />"></script>
		<script type="text/javascript" src="<c:url value="/js/jquery-ui-1.8.9.custom.min.js" />"></script>
		<script type="text/javascript" src="<c:url value="/js/jquery-ui-timepicker-addon.js" />"></script>
		<script type="text/javascript" src="<c:url value="/js/main.js" />"></script>
		<script type="text/javascript" src="<c:url value="/js/jquery.ui.datepicker-hu.js" />"></script>
		<script type="text/javascript" src="<c:url value="/js/jquery.thumbnailScroller.js" />"></script>
		<script type="text/javascript" src="<c:url value="/js/jquery.isotope.min.js" />"></script>
	</head>
	<body>
		<div id="wrapper">
			<header>
				<div id="logo">
					<h1><a href="/naplo">Baba napló</a></h1>
					<p>- Timcsi és ... naplója -</p>
				</div>
				<nav>
					<ul id="menu_list">
						<li id="li_home" class="active"><a href="javascript:void(0);" onclick="home();">Home</a></li>
						<li id="li_allday"><a href="javascript:void(0);" onclick="isotope_all_days();">Összes esemény</a></li>
            			<li id="li_videos"><a href="javascript:void(0);" onclick="videos();">Videók</a></li>
            			<li id="li_photos"><a href="javascript:void(0);" onclick="isotope_photos();">Képek</a></li>
						<li id="li_addday"><a href="javascript:void(0);" onclick="addday();">Új nap</a></li>
						<li id="li_addevent"><a href="javascript:void(0);" onclick="addevent();">Új esemény</a></li>
					</ul>
				</nav>
			</header>
			
			<div id="page">
				<section id="slider">
					<div id="slider-pic">
						<c:if test="${not empty photos}" >
							<div id="tS1" class="jThumbnailScroller">
								<div class="jTscrollerContainer">
									<div class="jTscroller">
										<c:forEach items="${photos}" var="photo">
											<a data-url="/photos?cmd=data&filename=<%= ((Photo)pageContext.getAttribute("photo")).getFilename() %>" 
												data-date="<%= diaryHelper.formatDateTime(((Photo)pageContext.getAttribute("photo")).getCreatedate()) %>" 
												data-filename="<%= ((Photo)pageContext.getAttribute("photo")).getFilename() %>">
												<img src="/photos?cmd=thumbdata&filename=<%= ((Photo)pageContext.getAttribute("photo")).getFilename() %>" />
											</a>
										</c:forEach>
									</div>
								</div>
							</div>
						</c:if>
					</div>			
				</section>
				<div id="content">
					<div id="loader_result" style="display: none;"><img src="images/loading_pink.gif" /></div>
					<section id="events">
						<jsp:include page="events.jsp" />
					</section>
					<section id="latests">
						<jsp:include page="latests.jsp" />
					</section>
				</div>
				<div id="sidebar">
					<div id="sidebar-bgtop"></div>
					<div id="sidebar-content">
						<div id="sidebar-bgbtm">
							<ul>
								<li id="search">
									<h2>Keresés</h2>
									<fieldset>
										<span class="ui-widget">
											<input type="text" id="searchTerm" value="" style="font-family: Cursive, Verdana, Arial;" />
										</span>
										<button type="button" onclick="search();">Keresés</button>
									</fieldset>
								</li>
								<li>
									<h2>Válassz napot</h2>
									<div id="datepicker1" style="font-size: 14px;"></div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<!-- end #sidebar -->
				<div style="clear: both;">&nbsp;</div>	
				<script type="text/javascript">
					$(function(){
						$.datepicker.setDefaults($.extend({showMonthAfterYear: true}, $.datepicker.regional['hu']));
						$('#datepicker1').datepicker({
							onSelect: function(dateText, inst) { getEventsOfTheDay(dateText); setTimeout("updateCalendar()", 100); },
							onChangeMonthYear: function(year, month, inst) { setTimeout("getDaysForAMonth("+year+", "+(month-1)+")", 100); }
						});
						$("#searchTerm").keypress(function(event) {
							if ( event.which == 13 ) {
								search();
							}
						});
						$("#searchTerm").autocomplete({
							source: "/naplo?cmd=terms",
							minLength: 2,
							select: function( event, ui ) {
								this.value = ui.item.value
								search();
							}
						});
						$('div.jTscroller').on('click', 'a', function() {
							var $this = $(this);
							showimage($this.data('url'), $this.data('date'), $this.data('filename')); 
						});
						window.onload=function(){ 
							$("#tS1").thumbnailScroller({ 
								scrollerType:"hoverAccelerate", 
								scrollerOrientation:"horizontal", 
								scrollEasing:"easeOutCirc", 
								scrollEasingAmount:600, 
								acceleration:1, 
								noScrollCenterSpace:0 
							});
						}
						getEventsOfTheDay(selectedDay);
						getLatestEvents();
						setTimeout("initCalendar()", 100);
					});
				</script>
				<div id="dialog" style="display: none;"></div>
		    </div>
		</div>
		<footer>
			<p>&copy; 2011. Baba napló.</p>
		</footer>
	</body>
</html>

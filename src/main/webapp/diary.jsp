<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
  
<%@page import="com.zotyo.photos.pojo.Photo"%>  
<%@page import="com.zotyo.diary.web.DiaryHelper"%>

<% DiaryHelper diaryHelper = new DiaryHelper(); %>
  
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	    <link href="<c:url value="/css/style.css" />" rel="stylesheet" type="text/css" media="screen" />
	    <link href="<c:url value="/css/table.css" />" rel="stylesheet" type="text/css" media="screen" />
	    <link href="<c:url value="/css/jquery-ui-1.8.9.custom.css" />" rel="stylesheet" type="text/css" media="screen" />
	    <link href="<c:url value="/css/fotorama.css" />" rel="stylesheet" type="text/css" media="screen" />
	    <link href="<c:url value="/css/jquery.thumbnailScroller.css" />" rel="stylesheet" type="text/css" media="screen" />
		<script type="text/javascript" src="<c:url value="/js/jquery-1.7.min.js" />"></script>
		<script type="text/javascript" src="<c:url value="/js/jquery-ui-1.8.9.custom.min.js" />"></script>
		<script type="text/javascript" src="<c:url value="/js/jquery-ui-timepicker-addon.js" />"></script>
		<script type="text/javascript" src="<c:url value="/js/main.js" />"></script>
		<script type="text/javascript" src="<c:url value="/js/jquery.ui.datepicker-hu.js" />"></script>
		<script type="text/javascript" src="<c:url value="/js/fotorama.js" />"></script>
		<script type="text/javascript" src="<c:url value="/js/jquery.thumbnailScroller.js" />"></script>
		
	    <title>Baba napló</title>		
	</head>
	<body>
		<div id="wrapper">
			<div id="header">
				<div id="logo">
					<h1><a href="/naplo">Timcsi naplója</a></h1>
					<p>Stílus: <a href="http://www.freecsstemplates.org/" target="_blank">Free CSS Templates</a>.</p>
				</div>
				<div id="menu">
					<ul id="menu_list">
						<li id="li_home" class="active"><a href="javascript:void(0);" onclick="home();">Home</a></li>
						<li id="li_allday"><a href="javascript:void(0);" onclick="allday();">Összes nap</a></li>
            			<li id="li_videos"><a href="javascript:void(0);" onclick="videos();">Videók</a></li>
            			<li id="li_photos"><a href="javascript:void(0);" onclick="photos();">Képek</a></li>
						<li id="li_addday"><a href="javascript:void(0);" onclick="addday();">Új nap</a></li>
						<li id="li_addevent"><a href="javascript:void(0);" onclick="addevent();">Új esemény</a></li>
					</ul>
				</div>
			</div>
			
			<div id="page">
				<div id="header-pic">
				<c:if test="${not empty photos}" >
					<div id="tS1" class="jThumbnailScroller">
						<div class="jTscrollerContainer">
							<div class="jTscroller">
								<c:forEach items="${photos}" var="photo">
									<a href="javascript:void(0);" onclick="showimage('/photos?cmd=data&filename=<%= ((Photo)pageContext.getAttribute("photo")).getFilename() %>', '<%= diaryHelper.formatDateTime(((Photo)pageContext.getAttribute("photo")).getCreatedate()) %>', '<%= ((Photo)pageContext.getAttribute("photo")).getFilename() %>')">
										<img src="/photos?cmd=thumbdata&filename=<%= ((Photo)pageContext.getAttribute("photo")).getFilename() %>" />
									</a>
								</c:forEach>
							</div>
						</div>
					</div>
				</c:if>
				</div>
				<div id="content">
					<div id="loader_result" style="display: none;"><img src="images/loading_pink.gif" /></div>
					<div id="events">
						<jsp:include page="events.jsp" />
					</div>
					<div id="latests">
						<jsp:include page="latests.jsp" />
					</div>
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
							<!-- 
							<li>
								<h2>Timcsi ma ...</h2>
								<div id="age">
									<jsp:include page="age.jsp" />
								</div>
							</li>
							 -->
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
					$(function(){
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
					});
				</script>
				<div id="dialog" style="display: none;"></div>
		    </div>
			<script type="text/javascript">
				getEventsOfTheDay(selectedDay);
				getLatestEvents();
				setTimeout("initCalendar()", 100);
			</script>
		</div>
		<div id="footer">
			<p>&copy; 2011. Baba napló.</p>
		</div>
	</body>
</html>

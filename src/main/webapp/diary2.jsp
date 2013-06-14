<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
  
<%@page import="com.zotyo.photos.pojo.Photo"%>  
<%@page import="com.zotyo.diary.web.DiaryHelper"%>

<% DiaryHelper diaryHelper = new DiaryHelper(); %>

<!DOCTYPE html>
<html>
	<head>
		<title>Baba Napló</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- Bootstrap -->
		<link href="/css/bootstrap.min.css" rel="stylesheet" media="screen">
		<link href="/css/bootstrap-responsive.min.css" rel="stylesheet" media="screen">
		<link href="/css/style2.css" rel="stylesheet" media="screen">
		<link href="/css/jquery-ui-1.10.3.custom.css" rel="stylesheet" media="screen">
		<link href="/css/jquery.thumbnailScroller2.css" rel="stylesheet" media="screen">
		<!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    	<!--[if lt IE 9]>
    		<script src="/js/html5shiv.js"></script>
    	<![endif]-->
  	</head>
	<body>
		<div class="navbar navbar-fixed-top">
			<div class="navbar-inner">
				<div class="container">
					<button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            			<span class="icon-bar"></span>
            			<span class="icon-bar"></span>
            			<span class="icon-bar"></span>
          			</button>
					<a class="brand" href="/naplo2/">Baba napló</a>
					<div class="nav-collapse collapse">
						<ul class="nav">
							<li id="liAllEvents" data-day-count="<c:out value="${countsBean.dayCount}" />" data-event-count="<c:out value="${countsBean.eventCount}" />">
								<a href="#/events/2011/09"><i class="icon-book"></i> Összes esemény <sup><span id="eventCount" class="badge"><c:out value="${countsBean.eventCount}" /></span></sup></a>
							</li>
							<li>
								<a href="#/videos/<c:out value="${firstVideoId}" />"><i class="icon-facetime-video"></i> Videók <sup><span id="videoCount" class="badge"><c:out value="${countsBean.videoCount}" /></span></sup></a>
							</li>
							<li>
								<a href="#/photos"><i class="icon-camera"></i> Képek <sup><span id="photoCount" class="badge"><c:out value="${countsBean.photoCount}" /></span></sup></a>
							</li>
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-comment"></i> Új bejegyzés <b class="caret"></b></a>
								<ul class="dropdown-menu">
									<li><a href="#/newday"><i class="icon-pencil"></i> Új nap</a></li>
									<li><a href="#/newevent"><i class="icon-edit"></i> Új esemény</a></li>
									<li><a href="#/newvideo"><i class="icon-facetime-video"></i> Új videó</a></li>
									<li><a href="#/newphoto"><i class="icon-camera"></i> Új kép</a></li>
								</ul>
							</li>
	            		</ul>
			            <div class="navbar-form pull-right">
							<input id="inputSearch" class="span2" type="text" placeholder="Keresés...">
							<button id="buttonSearch" type="button" class="btn btn-primary"><i class="icon-search icon-white"></i></button>
						</div>
	        		</div>
	        	</div>
	    	</div>
		</div>

		<div class="container">
			<div class="my-page-header">
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
			<div id="dialog" style="display: none;"></div>
			<div id="main">
			</div>
			<footer>
				<p>&copy; Baba napló 2013</p>
			</footer>
			<a href="/naplo" class="btn btn-primary old-style-btn">Kattints ide a régi naplóhoz</a>
		</div> 

		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
		<c:choose>
			<c:when test="${js_minify}">
				<script src="/js/application.js"></script>
			</c:when>
			<c:otherwise>
				<script src="/js/jquery-ui-timepicker-addon.js"></script>
				<script src="/js/jquery.ui.datepicker-hu.js"></script>
				<script src="/js/jquery.isotope.min.js"></script>
				<script src="/js/jquery-highlight.js"></script>
				<script src="/js/jquery.thumbnailScroller.js"></script>
				<script src="/js/jquery.dateFormat-1.0.js"></script>
				<script src="/js/bootstrap.min.js"></script>
				<script src="/js/sammy-0.7.4.min.js"></script>
				<script src="/js/handlebars.js"></script>
				<script src="/js/sammy.handlebars-0.7.4.min.js"></script>
				<script src="/js/days.js"></script>
				<script src="/js/events.js"></script>
				<script src="/js/mymedia.js"></script>
				<script src="/js/mysammy.js"></script>
			</c:otherwise>
		</c:choose>
		
		<input id="latestPhotosJSON" type="hidden" value="<c:out value="${latestPhotosJSON}" />" />
    </body>
</html>
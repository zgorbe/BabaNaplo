<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
	<head>
		<title>Baba Napló</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- Bootstrap -->
		<link href="/css/bootstrap.min.css" rel="stylesheet" media="screen">
		<link href="/css/style2.css" rel="stylesheet" media="screen">
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
							<li class="active"><a href="#/">Home</a></li>
							<li><a href="#/events">Összes esemény</a></li>
							<li><a href="#contact">Videók</a></li>
							<li><a href="#contact">Képek</a></li>
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown">Új bejegyzés <b class="caret"></b></a>
								<ul class="dropdown-menu">
									<li><a href="#">Új nap</a></li>
									<li><a href="#">Új esemény</a></li>
								</ul>
							</li>
	            		</ul>
			            <form class="navbar-form pull-right">
							<input class="span2" type="text" placeholder="Keresés...">
							<button type="submit" class="btn">Keresés</button>
						</form>
	        		</div>
	        	</div>
	    	</div>
		</div>

		<div class="container">
		
			<!-- Main hero unit for a primary marketing message or call to action -->
			<div class="page-header">
				<p>This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
				<p><a href="#" class="btn btn-primary btn-large">Learn more &raquo;</a></p>
			</div>
			
			<!-- Example row of columns 
			<div class="row">
				<div class="span4">
					<h3>Heading</h3>
					<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
					<p><a class="btn" href="#">View details &raquo;</a></p>
				</div>
				<div class="span8">
					<h3>Heading</h3>
					<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
					<p><a class="btn" href="#">View details &raquo;</a></p>
				</div>
			</div> -->
			<div id="main">
			</div>
			<footer>
				<p>&copy; Baba napló 2013</p>
			</footer>
		
		</div> 

		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<script src="/js/jquery.isotope.min.js"></script>
		<script src="/js/bootstrap.min.js"></script>
		<script src="/js/sammy-0.7.4.min.js"></script>
		<script src="/js/handlebars.js"></script>
		<script src="/js/sammy.handlebars-0.7.4.min.js"></script>
		<script src="/js/days.js"></script>
		<script src="/js/events.js"></script>
		<script src="/js/mysammy.js"></script>
		<script src="/js/jquery.dateFormat-1.0.js"></script>
    </body>
</html>
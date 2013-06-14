<div class="row">
	<div class="span4">
		<h2 style="color: #777777">Timcsi és Réka<br/>naplója</h2>
		<br />
		<div id="datepicker1"></div>
	</div>
	<div class="span8">
		<div id="myCarousel" class="carousel slide">
			<ol class="carousel-indicators">
				{{#each photos}}
					{{#if first}}
						<li data-target="#myCarousel" data-slide-to="{{@index}}" class="active"></li>
					{{else}}
						<li data-target="#myCarousel" data-slide-to="{{@index}}" class=""></li>
					{{/if}}
				{{/each}}
			</ol>
			<div class="carousel-inner">
				{{#each photos}}
					{{#if first}}
						<div class="item active">
					{{else}}
						<div class="item">
					{{/if}}
					<img src="/photos?cmd=data&filename={{filename}}" alt="">
					<div class="carousel-caption">
						<h4>{{createdate}}</h4>
						<p>{{description}}</p>
					</div>
				</div>
				{{/each}}
			</div>
			<a class="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>
			<a class="right carousel-control" href="#myCarousel" data-slide="next">›</a>
		</div>
	</div>
</div>
<div class="row span12">
	<div class="selected"></div>
	<div class="row">
		<h3>Legfrissebb események</h3>
	</div>
	{{#each items}}
	<div class="row">
	    <p>{{this.description}}</p>
	    <p>
	    	<small>{{this.startTime}}</small>
			{{#if this.hasDuration}}
		    <br/><small>Időtartam (óra:perc): {{this.duration}}</small>
			{{/if}}
		</p>
	</div>
	<div class="row">
		<hr>
	</div>
	{{/each}}
	<div class="row extra-padding-bottom">
		<a href="#/events/{{date.y}}/{{date.m}}">További események</a>
	</div>
</div>
<div class="row first-row">
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
						<h4>{{description}}</h4>
						<p>{{createdate}}</p>
					</div>
				</div>
				{{/each}}
			</div>
			<a class="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>
			<a class="right carousel-control" href="#myCarousel" data-slide="next">›</a>
		</div>
	</div>
	<div class="span4">
		<div id="datepicker1"></div>
		<div class="selected"></div>
	</div>	
</div>
<div class="row span12">
	<div class="row">
		<h3>Legfrissebb események</h3>
	</div>
	{{#each items}}
	<div class="row event" data-eventid="{{this.id}}">
	    <p>{{this.description}}</p>
	    <p>
	    	<small>{{this.startTime}}</small>
			{{#if this.hasDuration}}
		    <br/><small>Időtartam (óra:perc): {{this.duration}}</small>
			{{/if}}
		</p>
		<hr>
	</div>
	{{/each}}
	<div class="row extra-padding-bottom">
		<a href="#/events/{{date.y}}/{{date.m}}" class="more-events-link">További események</a>
	</div>
</div>
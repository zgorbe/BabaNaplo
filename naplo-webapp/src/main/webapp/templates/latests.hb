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
					<img src="/photos?cmd=data&filename={{filename}}&cache=true" alt="">
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
<div class="row-fluid">
	<div id="latest-events" class="span6">
		<h3>Legfrissebb események</h3>	
		{{#each items}}
			<div class="day-box" data-eventid="{{this.id}}">
				<div class="date-box">
					<p>{{this.day}}</p>
					<div class="ems">
						<em>{{this.month}}</em>
						<br>
						<em>{{this.year}}</em>
					</div> 
				</div>
				<div class="event-box">
					<div class="event-item">
							{{#if this.hasTimePart}}
								<b>{{this.hours}}:{{this.minutes}}</b>
							{{/if}}
							{{this.description}}
							{{#if this.hasDuration}}
								<br><small>Időtartam (óra:perc): {{this.duration}}</small>
							{{/if}}
					</div>
				</div>
			</div>
		{{/each}}
		<div class="extra-padding">
			<a href="#/days/{{date.y}}/{{date.m}}" class="more-events-link">További események</a>
		</div>
	</div>
	<div class="span6">
		<h3>Legújabb videó</h3>
		<div class="flex-video widescreen">
			<iframe src="http://www.youtube.com/embed/{{videoId}}?controls=0&rel=0&showinfo=0&wmode=transparent" allowfullscreen="" frameborder="0"></iframe>
	  	</div>
	  	<div class="extra-padding">
			<a href="#/videos" class="more-events-link">További videók</a>
		</div>
		
		<h3>Legújabb mondások</h3>
		<div id="latest-words">
		</div>
		<div class="extra-padding">
			<a id="more-words-link" href="javascript:void(0)" class="more-events-link">További mondások</a>
		</div>
		
		<div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				<h3 id="myModalLabel">Összes mondás</h3>
			</div>
			<div id="modal-unique-words" class="modal-body">
			</div>
		</div>
	</div>
</div>	

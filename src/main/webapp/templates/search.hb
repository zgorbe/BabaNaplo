<div class="row">
	<div class="row span12">
		<h4>Keresett szó: {{searchTerm}}, {{items.length}} találat</h4>
	</div>
	<br>
	{{#each items}}
	<div class="row span12">
	    <p>{{this.description}}</p>
	    <p>
	    	<small>{{this.startTime}}</small>
			{{#if this.hasDuration}}
		    <br/><small>Időtartam (óra:perc): {{this.duration}}</small>
			{{/if}}
		</p>
	</div>
	<div class="row span12">
		<hr>
	</div>
	{{/each}}
	<div class="row span12 extra-padding">
		<a href="#/days/{{date.y}}/{{date.m}}" class="more-events-link">Összes esemény</a>
	</div>
</div>
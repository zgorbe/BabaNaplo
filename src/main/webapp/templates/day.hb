{{#if day}}
	<div class="row">
		<h3>{{date}} eseményei</h3>
		<h4>{{day.descriptionOfTheDay}}</h4>
	</div>
	{{#each day.eventsOfTheDay}}
		<div class="row">
		    <p>{{this.description}}</p>
		    <p>{{this.startTime}}
			{{#if this.hasDuration}}
		    <br/><small>Időtartam (óra:perc): {{this.duration}}</small>
			{{/if}}
			</p>
		</div>
		<div class="row">
			<hr>
		</div>
	{{/each}}
{{else}}
	<div class="row">
		<p>Nincs esemény a választott napra ({{date}}).</p>
	</div>
{{/if}}
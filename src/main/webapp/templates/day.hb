{{#if day}}
	<div class="row">
		<h4>{{day.descriptionOfTheDay}}</h4>
	</div>
	{{#each day.eventsOfTheDay}}
		<div class="row">
		    <p>{{this.description}}</p>
		    <p>{{this.startTime}}</p>
			{{#if this.hasDuration}}
		    <p>{{this.duration}}</p>
			{{/if}}
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
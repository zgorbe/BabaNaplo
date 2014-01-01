{{#if day}}
	<div>
		<h3>{{date}} eseményei</h3>
		<h4>{{day.descriptionOfTheDay}}</h4>
	</div>
	{{#each day.eventsOfTheDay}}
		<div class="event">
		    <p>{{this.description}}</p>
		    <p>{{this.startTime}}
			{{#if this.hasDuration}}
		    <br/><small>Időtartam (óra:perc): {{this.duration}}</small>
			{{/if}}
			</p>
		</div>
		<div>
			<hr>
		</div>
	{{/each}}
{{else}}
	<div>
		<h3>{{date}} eseményei</h3>
		<p>Nincs esemény a választott napra ({{date}}).</p>
	</div>
{{/if}}
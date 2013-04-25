<div class="row">
	<p>{{day.descriptionOfTheDay}}</p>
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
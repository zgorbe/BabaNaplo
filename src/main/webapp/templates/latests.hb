{{#each items}}
<div class="row">
	<div class="span8 offset4">
	    <p>{{this.description}}</p>
	    <p>{{this.startTime}}</p>
		{{#if this.hasDuration}}
	    <p>{{this.duration}}</p>
		{{/if}}
	</div>
</div>
<div class="row">
	<div class="span8 offset4">
		<hr>
	</div>
</div>
{{/each}}
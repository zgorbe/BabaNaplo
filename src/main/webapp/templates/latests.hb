<div class="row">
	<div class="span4">
		<div id="datepicker1" style="font-size: 16px;"></div>
	</div>
	<div class="span8">
		<div class="selected"></div>
		{{#each items}}
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
	</div>
</div>
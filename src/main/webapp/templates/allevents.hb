<div id="isotope_container">
	{{#each events}}
	<div class="isotope_item {{this.startTime}}">
		<b>{{this.startTime}}</b>
		{{this.description}}
		{{#if this.hasDuration}}
			<br>Időtartam (óra:perc): {{this.duration}}
		{{/if}}
	</div>
	{{/each}}
</div>
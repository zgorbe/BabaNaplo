<div class="row">
	<div class="span4">
		<div id="datepicker1" style="font-size: 16px;"></div>
	</div>
	<div class="span8">
		<div class="selected"></div>
		<div class="row">
			<h4>Legfrissebb események</h4>
		</div>
		{{#each items}}
		<div class="row">
		    <p>{{this.description}}</p>
		    <p>
		    	<small>{{this.startTime}}</small>
				{{#if this.hasDuration}}
			    <br/><small>Időtartam (óra:perc): {{this.duration}}</small>
				{{/if}}
			</p>
		</div>
		<div class="row">
			<hr>
		</div>
		{{/each}}
	</div>
</div>
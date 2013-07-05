<div class="alldays clearfix">
	<div class="row span8">
		<div class="day-box">
			<h4>Keresett szó: {{searchTerm}}, {{items.length}} találat</h4>
		</div>
	</div>
	<br>
	{{#each items}}
	<div class="row span8">
		<div class="day-box">
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
					{{this.description}}
					{{#if this.hasDuration}}
						<br><small>Időtartam (óra:perc): {{this.duration}}</small>
					{{/if}}
				</div>
			</div>
		</div>
	</div>
	{{/each}}
	<div class="row span12 extra-padding">
		<a href="#/days/{{date.y}}/{{date.m}}" class="more-events-link">Összes esemény</a>
	</div>
</div>
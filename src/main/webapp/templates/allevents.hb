<div class="alldays clearfix">
	<div class="row span8">
		<div class="day-box">
		<div class="input-prepend">
		  <div class="btn-group">
		    <button class="btn dropdown-toggle" data-toggle="dropdown">
		      Év
		      <span class="caret"></span>
		    </button>
		    <ul id="yearFilter" class="dropdown-menu filter">
		      <li><a href="javascript:void(0);" data-filter="2011">2011</a></li>
		      <li><a href="javascript:void(0);" data-filter="2012">2012</a></li>
		      <li><a href="javascript:void(0);" data-filter="2013">2013</a></li>
		    </ul>
		  </div>
		  <input class="input-mini uneditable-input" id="prependedDropdownButton" type="text" disabled="disabled" value="">
		</div>
		<div class="input-append">
		  <input class="input-small uneditable-input" id="appendedDropdownButton" type="text" disabled="disabled" value="" data-filter="09">
		  <div class="btn-group">
		    <button class="btn dropdown-toggle" data-toggle="dropdown">
		      Hónap
		      <span class="caret"></span>
		    </button>
		    <ul id="monthFilter" class="dropdown-menu filter">
				<li><a href="javascript:void(0);" data-filter="01">Január</a></li>
				<li><a href="javascript:void(0);" data-filter="02">Február</a></li>
				<li><a href="javascript:void(0);" data-filter="03">Március</a></li>
				<li><a href="javascript:void(0);" data-filter="04">Április</a></li>
				<li><a href="javascript:void(0);" data-filter="05">Május</a></li>
				<li><a href="javascript:void(0);" data-filter="06">Június</a></li>
				<li><a href="javascript:void(0);" data-filter="07">Július</a></li>
				<li><a href="javascript:void(0);" data-filter="08">Augusztus</a></li>
				<li><a href="javascript:void(0);" data-filter="09">Szeptember</a></li>
				<li><a href="javascript:void(0);" data-filter="10">Október</a></li>
				<li><a href="javascript:void(0);" data-filter="11">November</a></li>
				<li><a href="javascript:void(0);" data-filter="12">December</a></li>				
		    </ul>
		  </div>
		</div>
		</div>
	</div>

	{{#each days}}
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
			<h4>{{this.descriptionOfTheDay}}</h4>
			{{#each eventsOfTheDay}}
				<div class="event-item">
					{{this.description}}
					{{#if this.hasDuration}}
						<br><small>Időtartam (óra:perc): {{this.duration}}</small>
					{{/if}}
				</div>
			{{/each}}
			</div>
		</div>
	</div>
	{{/each}}
</div>
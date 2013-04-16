{{#item}}
<div class="row">
	<div class="span8 offset4">
	    <p>{{description}}</p>
	    <p>{{startTime}}</p>
		{{#if hasDuration}}
	    <p>{{duration}}</p>
		{{/if}}
	</div>
</div>
<div class="row">
	<div class="span8 offset4">
		<hr>
	</div>
</div>
{{/item}}
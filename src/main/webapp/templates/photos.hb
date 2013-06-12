<div class="row">
	<div class="row span12">
		<h4>Képek</h4>
	</div>
</div>

<div id="isotope_container">
	{{#each items}}
		<div class="photo_item">
			<div class="buttons" align="right" style="display:none;">
				<img alt="P" class="zoom" src="/images/zoom.png" />
				<img alt="X" class="cancel" src="/images/cancel.png" />
			</div>
			<img class="baba" data-filename="{{this.filename}}" data-createdate="{{this.createdate}}" src="/photos?cmd=thumbdata&filename={{this.filename}}" title="{{this.description}}" />
		</div>
	{{/each}}
</div>
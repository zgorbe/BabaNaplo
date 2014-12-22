<div class="row">
	<div class="row span12">
		<h4>Képek</h4>
	</div>
</div>

<div id="fotorama_container">
	{{#eachObjectKeyReverse items}}
		<h2>{{@key}} <sup class="image-count">({{this.length}} kép)</sup></h2>
		<div class="row">
			<div class="span8 offset2 fotorama" data-nav="thumbs" data-width="100%" data-ratio="4/3" data-allowfullscreen="true">
			{{#each this}}
				<a href="/photos?cmd=data&filename={{this.filename}}" data-caption="{{this.createdate}}, {{this.description}}"><img src="/photos?cmd=thumbdata&filename={{this.filename}}"/></a>
			{{/each}}
			</div>
		</div>
	{{/eachObjectKeyReverse}}
</div>
<div id="dialog" style="display: none;"></div>
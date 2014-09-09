<div class="row">
	<div class="row span12">
		<h4>Videók</h4>
	</div>
	<div class="row span10 fotorama" data-nav="thumbs" data-width="100%" data-ratio="4/3">
		{{#each items}}
			<a href="http://youtube.com/watch?v={{this.videoId}}" data-caption="{{this.createDate}}, {{this.description}}"></a>
		{{/each}}
	</div>
</div>
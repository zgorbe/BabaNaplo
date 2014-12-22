<div class="row">
	<div class="span12">
		<h4>Videók</h4>
	</div>
</div>
<div class="row">
	<div class="span10 offset1 fotorama" data-nav="thumbs" data-width="100%" data-ratio="4/3">
		{{#each items}}
			<a href="http://youtube.com/watch?v={{this.videoId}}" data-caption="{{this.createDate}}, {{this.description}}"></a>
		{{/each}}
	</div>
</div>
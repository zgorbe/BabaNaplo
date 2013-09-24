<div class="row">
	<div class="row span12">
		<h4>Videók</h4>
	</div>

	<div class="row span10">
		<p id="video_text">{{video.createDate}}, {{video.description}}</p>
		<div class="flex-video widescreen">
			<iframe id="video_frame" src="http://www.youtube.com/embed/{{video.videoId}}?wmode=transparent" allowfullscreen="1" frameborder="1"></iframe>
	  	</div>
		<div id="tS2" class="jThumbnailScroller" style="height: 118px;">
			<div class="jTscrollerContainer">
				<div class="jTscroller video_thumbnails">
					{{#each items}}
					<a data-video-id="{{this.videoId}}" data-description="{{this.description}}" data-create-date="{{this.createDate}}">
						<img src="http://img.youtube.com/vi/{{this.videoId}}/2.jpg">
					</a>
					{{/each}}
				</div>
			</div>
		</div>
	</div>
</div>
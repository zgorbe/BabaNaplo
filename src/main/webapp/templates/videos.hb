<div class="row">
	<div class="row span12">
		<h4>Videók</h4>
	</div>

	<div class="row span6">
		<p id="video_text">{{first.createDate}}, {{first.description}}</p>
	
		<iframe id="video_frame" onload="Videos.init();" src="http://www.youtube.com/embed/{{first.videoId}}" allowfullscreen="1" width="560" frameborder="1" height="420"></iframe>
	  
		<div id="tS2" class="jThumbnailScroller" style="height: 112px;">
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
<div class="row">
	<div class="span12">
		<h4>Új mondás</h4>
		<form action="#/addword" method="post" class="form-horizontal new">
			<div class="offset1">
				<ul class="thumbnails">
					<li>
						<div class="thumbnail selected-img" data-kid="TIMCSI">
							<img src="/photos?cmd=thumbdata&filename=img_1558_1.jpg" />
							<h3>Timcsi</h3>
						</div>
					</li>
					<li>
						<div class="thumbnail" data-kid="REKA">				
							<img src="/photos?cmd=thumbdata&filename=2013-06-03%2019.11.02.jpg" />
							<h3>Réka</h3>
						</div>
					</li>
				</ul>
			</div>		
			<div class="control-group">
				<label class="control-label" for="inputKeyword">Kulcsszó</label>
				<div class="controls">
					<input class="span3"type="password" id="inputKeyword" name="keyword" placeholder="Keyword">
				</div>
			</div>
			<div class="control-group">
				<label class="control-label" for="word">Saját szó</label>
			    <div class="controls">
			    	<input class="span3" type="text" id="word" name="word" placeholder="Saját szó">
			    </div>
			</div>
			<div class="control-group">
				<label class="control-label" for="inputVideoId">Eredeti szó</label>
			    <div class="controls">
			    	<input class="span3" type="text" id="original" name="original" placeholder="Eredeti szó">
			    </div>
			</div>
			<div class="control-group">
				<label class="control-label" for="description">Magyarázat</label>
				<div class="controls">
					<textarea class="span5" rows="6" id="description" name="description" placeholder="Magyarázat"></textarea>
				</div>
			</div>
			<div class="control-group offset2 control-buttons">
				<button type="submit" class="btn btn-primary">Küldés</button>
				<a class="btn" href="#/">Mégse</a>
				<img src="/images/loading_blue.gif" />
			</div>
			<input type="hidden" name="kid" id="kid_input" value="TIMCSI" />
		</form>		
	</div>
</div>
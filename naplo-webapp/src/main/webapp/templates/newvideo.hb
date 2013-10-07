<div class="row">
	<div class="span8">
		<h4>Új videó</h4>	
		<form action="#/addvideo" method="post" class="form-horizontal new">
			<div class="control-group">
				<label class="control-label" for="inputKeyword">Kulcsszó</label>
				<div class="controls">
					<input class="span3"type="password" id="inputKeyword" name="keyword" placeholder="Keyword">
				</div>
			</div>
			<div class="control-group">
				<label class="control-label" for="inputTheDay">A videó dátuma</label>
			    <div class="controls">
			    	<input class="span3 uneditable-input" type="text" id="inputTheDay" name="theDay" placeholder="">
			    </div>
			</div>
			<div class="control-group">
				<label class="control-label" for="inputVideoId">A videó azonosítója</label>
			    <div class="controls">
			    	<input class="span3" type="text" id="inputVideoId" name="videoId" placeholder="Youtube azonosító">
			    </div>
			</div>
			<div class="control-group">
				<label class="control-label" for="description">Leírása</label>
				<div class="controls">
					<textarea class="span5" rows="6" id="description" name="description" placeholder="Leírás"></textarea>
				</div>
			</div>
			<div class="control-group offset2">
				<button type="submit" class="btn btn-primary">Küldés</button>
				<a class="btn" href="#/">Mégse</a>
			</div>
		</form>		
	</div>
	<div class="span4">
		<div id="datepicker1"></div>
	</div>	
</div>
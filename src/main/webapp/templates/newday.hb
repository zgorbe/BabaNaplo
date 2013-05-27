<div class="row">
	<div class="span4">
		<div id="datepicker1" style="font-size: 16px;"></div>
	</div>
	<div class="span8">
		<h4>Új nap</h4>
		<form action="#/addday" method="post" class="form-horizontal new">
			<div class="control-group">
				<label class="control-label" for="inputKeyword">Kulcsszó</label>
				<div class="controls">
					<input class="span3"type="password" id="inputKeyword" name="keyword" placeholder="Keyword">
				</div>
			</div>
			<div class="control-group">
				<label class="control-label" for="inputTheDay">A nap dátuma</label>
			    <div class="controls">
			    	<input class="span3" type="text" id="inputTheDay" name="theDay" placeholder="">
			    </div>
			</div>
			<div class="control-group">
				<label class="control-label" for="descriptionOfTheDay">Leírása</label>
				<div class="controls">
					<textarea class="span5" rows="2" id="descriptionOfTheDay" name="descriptionOfTheDay" placeholder="Leírás"></textarea>
				</div>
			</div>
			<div class="control-group">
				<label class="control-label" for="inputStartDate">Esemény kezdete</label>
			    <div class="controls">
			    	<input class="span3" type="text" id="inputStartDate" name="startDate" placeholder="">
			    </div>
			</div>
			<div class="control-group">
				<label class="control-label" for="inputDuration">Esemény időtartama</label>
			    <div class="controls">
			    	<input class="span3" type="text" id="inputDuration" name="duration" placeholder="">
			    </div>
			</div>
			<div class="control-group">
				<label class="control-label" for="initialEvent">Az esemény</label>
				<div class="controls">
					<textarea class="span5" rows="6" id="initialEvent" name="initialEvent" placeholder="Leírás"></textarea>
				</div>
			</div>
			<div class="control-group offset2">
				<button type="submit" class="btn btn-primary">Küldés</button>
				<a class="btn" href="#/">Mégse</a>
			</div>
		</form>		
	</div>
</div>


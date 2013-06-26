<div class="accordion" id="{{accordion}}">
	{{#each words}}
		<div class="accordion-group">
			<div class="accordion-heading" style="overflow: hidden;">
				{{#ifCond this.kid "TIMCSI"}}
					<img class="pull-left" src="/photos?cmd=thumbdata&filename=img_1558_1.jpg" />
				{{else}}
					<img class="pull-left" src="/photos?cmd=thumbdata&filename=2013-06-03%2019.11.02.jpg" />
				{{/ifCond}}		
				<a class="accordion-toggle" data-toggle="collapse" data-parent="#{{../accordion}}" href="#{{../accordion}}{{this.id}}">
					{{this.word}}
				</a>
			</div>
			<div id="{{../accordion}}{{this.id}}" class="accordion-body collapse">
				<div class="accordion-inner">
					<h4>{{this.originalWord}}</h4>
					<p>{{this.description}}</p>
				</div>
			</div>
		</div>
	{{/each}}
</div>
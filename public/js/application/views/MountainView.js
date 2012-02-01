	window.MountainView = Backbone.View.extend({
		className : 'mountain',
		initialize : function() {
			this.model.bind('positionChanged', this.setPosition, this);
			this.model.bind('heightChanged', this.setHeight, this);
		},
		render : function() {
			$(this.el).css({'background-color':'green', width:20, height:20});
			this.setPosition();
		},
		setPosition : function() {
			var posModel = this.model.getPosition()
			var position = {left: posModel.x, top:posModel.y};
			$(this.el).offset(position);
		},
		setHeight : function() {
			//this.el.addClass('height_'+this.model.getHeight());
		},
	});
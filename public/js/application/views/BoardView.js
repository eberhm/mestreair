window.BoardView = Backbone.View.extend({
		model: Board,
		classname : '.board',
		initialize : function() {
			this.model.bind('elementAdded', this.addElement, this);
		},
		addElement : function(element) {
			if (element instanceof Aircraft) {
				var view = new AircraftView({model: element});
				var scheduleRowView = new ScheduleRowView({model:element});
				scheduleRowView.render();
			} else if (element instanceof Mountain) {
				var view = new MountainView({model: element});
			}
			$(this.el).append(view.el);
			view.render();
		},
		render : function() {
			$(this.el).css({width:this.model.get('width'), height:this.model.get('height')});
		}
	});
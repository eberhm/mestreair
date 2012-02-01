var ScheduleRowView = Backbone.View.extend({
	//template : _.template($('#schedule-row').html()),
	//el : $('.schedules tbody'),
	tagName : 'tr',
	initialize : function() {
		$('.schedules tbody').append(this.el);
		this.model.bind('positionChanged', this.render, this);
		this.template = _.template($('#schedule-row').html());
	},
	render: function () {
		return $(this.el).html(
				this.template(
						this.model.allToJSON()
					)
				); 
	}
});
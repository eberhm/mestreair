var BoardView = Backbone.View.extend({
    model:Board,
    classname:'.board',
    initialize:function () {
        var scoreView = new ScoreView({
            model: this.model.score
        });
        this.model.bind('elementAdded', this.addElement, this);

    },
    addElement:function (element) {
        var view;

        if (element instanceof Aircraft) {
            view = new AircraftView({model:element});
            var scheduleRowView = new ScheduleRowView({model:element});
            scheduleRowView.render();
        } else if (element instanceof Mountain) {
            view = new MountainView({model:element});
        } else if (element instanceof FlightRoute) {
            view = new RouteView({model:element});
        }

        $(this.el).append(view.el);
        view.render();
    },
    render:function () {
        $(this.el).css({width:this.model.get('width'), height:this.model.get('height')});
    }
});
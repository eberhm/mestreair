RouteView = Backbone.View.extend({
    className:'route',
    events : {
        click : 'click'
    },
    initialize:function () {
        this.model.bind('positionChanged', this.setPosition, this);
        this.model.bind('heightChanged', this.setHeight, this);
        this.model.getAircraft().bind('activate', AircraftView.prototype.activate, this);
        this.model.getAircraft().bind('deactivate', AircraftView.prototype.deactivate, this);
        this.model.bind('score', this.score, this);
    },
    render:function () {
        //move this to css
        $(this.el).css({'background-color':'yellow', width:20, height:20});
        this.setPosition();
    },
    setPosition:function () {
        var posModel = this.model.getPosition()
        var position = {left:posModel.x, top:posModel.y};
        $(this.el).offset(position);
    },
    setHeight:function () {
        //this.el.addClass('height_'+this.model.getHeight());
    },
    click: function() {
        this.model.getAircraft().activate();
    },
    score : function(scoreBeat) {
        //alert('Yeahhh: '+scoreBeat.get('value')+' $$$');
        $(this.el).hide();
    }
});
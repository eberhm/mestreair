var ControlsView = Backbone.View.extend({
    el: '.controlls',
    events: {
        'click tr' : 'click'
    },
    initialize: function () {
        this.model.bind('activate', this.activateControls, this);
    },
    click: function() {
        this.activeAircraft.setHead(arguments.callee.arguments[0].target.innerText);
    },
    activateControls:function(aircraft) {
        this.activeAircraft = aircraft;
    }
});
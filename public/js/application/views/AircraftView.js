window.AircraftView = Backbone.View.extend({
    _menuShowing:false,
    className:'aircraft',
    events:{
        'click':'click'
    },
    initialize:function () {
        this.model.bind('positionChanged', this.setPosition, this);
        this.model.bind('crash', this.crash, this);
        this.model.bind('activate', this.activate, this);
        this.model.bind('deactivate', this.deactivate, this);
        //this.model.bind('heightChanged', this.setHeight, this);
        //this.model.bind('orientationChanged', this.setOrientation, this);
    },
    render:function () {
        //this.setPosition();
    },
    activate:function () {
        $(this.el).addClass('active');
    },
    deactivate:function () {
        $(this.el).removeClass('active');
    },
    click : function() {
        this.model.activate();
    },
    setPosition:function () {
        var posModel = this.model.getPosition();
        var position = {left:posModel.x, top:posModel.y};
        $(this.el).offset(position);
    },
    crash:function () {
        $(this.el).addClass('crashed');
        alert('plane crashed');
    },
    setHeight:function () {
        //this.el.addClass('height_'+this.model.getHeight());
    },
    showMenu:function () {
        if (!this._menuShowing) {
            //show menu
            alert('showing menu');
        }
    },
    hideMenu:function () {
        if (this._menuShowing) {
            //hide menu
            alert('hiding menu');
        }
    }
});
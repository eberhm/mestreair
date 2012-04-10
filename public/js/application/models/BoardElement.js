var BoardElement = Backbone.Model.extend({
    defaults:function () {
        return {
            x:10,
            y:10,
            height:10
        }
    },
    getPosition:function () {
        return {x:this.get('x'), y:this.get('y')};
    },
    setPosition:function (x, y) {
        this.set({'x':x, 'y':y});
        this.trigger('positionChanged');
    },
    getHeight:function () {
        return this.get('height');
    },
    setHeight:function (height) {
        this.set({'height':height});
        this.trigger('heightChanged');
    },
    getInitialPosition:function (limitX, limitY) {
        return {
            x:Math.ceil(Math.random() * limitX),
            y:Math.ceil(Math.random() * limitY)
        };
    },
    samePosition: function(element) {
        var thisPos = this.getPosition(),
            elementPos = element.getPosition();

        return ((thisPos.x <= elementPos.x + 20 &&
            thisPos.x >= elementPos.x - 20) &&
            (thisPos.y <= elementPos.y + 20 &&
                thisPos.y >= elementPos.y - 20));
    }
});
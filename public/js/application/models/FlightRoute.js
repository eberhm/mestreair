var FlightRoute = BoardElement.extend(
    {
        defaults : {
            head:'E',
            aircraft : false
        },
        getInitialPositionAndHead : Aircraft.prototype.getInitialPositionAndHead,
        setHead : Aircraft.prototype.setHead,
        getHead : Aircraft.prototype.getHead,
        activate: function() {
            this.trigger('activate');
        },
        deactivate: function() {
            this.trigger('deactivate');
        },
        setAircraft: function(aircraft) {
            this.aircraft = aircraft;
        },
        getAircraft: function() {
            return this.aircraft;
        },
        score : function() {
            this.set({'scored': true});
            this.trigger('score', new ScoreBeat);
        }
    }
);
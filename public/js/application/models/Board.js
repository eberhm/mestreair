var Board = Backbone.Model.extend({
    timer:null,
    defaults:{
        height:500,
        width:500
    },
    initialize:function () {
        this.aircraftList = new AircraftList;
        this.mountainList = new MountainList;
        this.routesList = new RouteList;
        this.elementList = new Backbone.Collection;
        this.score = new Score();
        //the scorable element triggers event score passing an ScoreBeat
        this.score.setScorable(this.routesList);
    },
    addBoardElement:function (element) {
        if (element instanceof Aircraft) {
            this.aircraftList.add(element);
        } else if (element instanceof Mountain) {
            this.mountainList.add(element);
        } else if (element instanceof FlightRoute) {
            this.routesList.add(element);
        }
        this.elementList.add(element);
        this.trigger('elementAdded', element);
    },
    play:function () {
        var self = this;
        this.timer = setInterval(
            function () {
                //starts moving all planes
                self.aircraftList.forEach(function (aircraft) {
                    var route;
                    aircraft.move();

                    //scoreing
                    if (route = aircraft.isInRoute()) {
                        route.score();
                    }

                    //detect collisions
                    var element = self.elementList.find(function (element) {
                        //if I'm me myself
                        if (element === aircraft) {
                            return false;
                        }

                        if (aircraft.samePosition(element)) {
                            var elementHeight = element.getHeight(),
                                aircraftHeight = aircraft.getHeight();

                            if (element instanceof Mountain) {
                                //if it's a mountain
                                if (elementHeight >= aircraftHeight) {
                                    return true;
                                }
                            } else if (elementHeight === aircraftHeight) {
                                //rest of elements
                                return true;
                            } else {
                                return false;
                            }
                        } else {
                            return false;
                        }
                    });

                    if (element) {
                        aircraft.crash(element);
                        self.pause();
                        alert('Game Over');
                    }

                    //control de aviones al limite del tablero
                    var aircraftPos = aircraft.getPosition();
                    if ((aircraftPos.x < 0 || aircraftPos.x > self.get('width')) ||
                        (aircraftPos.y < 0 || aircraftPos.y > self.get('height'))) {
                        self.pause();
                        alert('Aircraft left out the board!');
                    }

                });
            },
            100
        );
    },
    pause:function () {
        clearInterval(this.timer);
    }
});
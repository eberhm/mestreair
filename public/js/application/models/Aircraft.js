var Aircraft = BoardElement.extend({
    defaults:function () {
        return {
            head:'E',
            crashed:false,
            route : false
        }
    },
    initialize:function () {
        this.setPosition(50, 50);
    },
    move:function () {
        var position = this.getPosition();

        switch (this.get('head')) {
            case 'E':
                position.x++;
                break;
            case 'W':
                position.x--;
                break;
            case 'S':
                position.y++;
                break;
            case 'N':
                position.y--;
                break;
            case 'NE':
                position.x++;
                position.y--;
                break;
            case 'SE':
                position.x++;
                position.y++;
                break;
            case 'NW':
                position.x--;
                position.y--;
                break;
            case 'SW':
                position.x--;
                position.y++;
                break;
        }

        this.setPosition(position.x, position.y);
    },
    setHead:function (orientation) {
        this.set({'head':orientation});
    },
    getHead:function () {
        return this.get('head');
    },
    setRoute: function(route) {
        route.setAircraft(this);
        this.route = route;
    },
    getRoute: function() {
        return this.route;
    },
    isInRoute : function() {
        var thisHeight = this.getHeight(),
            routeHeight = this.route.getHeight();

        if (!this.route.get('scored') &&
            this.samePosition(this.route) &&
            //@TODO: need to implement height controls first
            //thisHeight <= routeHeight + 300 &&
            //thisHeight >= routeHeight - 300 &&
            this.getHead() === this.route.getHead()) {
            return this.route;
        } else {
            return null;
        }
    },
    getInitialPositionAndHead:function (limitX, limitY) {
        var posIni = this.getInitialPosition(limitX, limitY);
        if (posIni.x > limitX / 2 && posIni.y < limitY / 2) {
            //esquina de arriba derecha
            var directions = ['S', 'SW', 'W'];
        } else if (posIni.x <= limitX / 2 && posIni.y < limitY / 2) {
            //esquina de arriba izqda
            var directions = ['S', 'SE', 'E'];
        } else if (posIni.x <= limitX / 2 && posIni.y >= limitY / 2) {
            //esquina de abajo izqda
            var directions = ['N', 'NE', 'E'];
        } else if (posIni.x > limitX / 2 && posIni.y >= limitY / 2) {
            //esquina de abajo derecha
            var directions = ['N', 'NW', 'W'];
        }

        posIni.head = directions[Math.ceil((Math.random() * 100) % 2)];
        return posIni;
    },
    getInitialPosition:function (limitX, limitY) {
        var side = Math.ceil((Math.random() * 10) % 3);
        var initialPosition = {x:0, y:0};
        if (side === 1 || side === 3) {
            initialPosition.x = Math.ceil(Math.random() * 100) * 5;
            if (side === 3) {
                initialPosition.y = 500;
            }
        } else if (side === 2 || side === 4) {
            initialPosition.y = Math.ceil(Math.random() * 100) * 5;
            if (side === 4) {
                initialPosition.x = 500;
            }
        }

        return initialPosition;
    },
    crash:function (mountain) {
        this.set({'crashed':true});
        this.trigger('crash');
    },
    allToJSON:function () {
        var result = this.toJSON();
        result.route = this.route.toJSON();
        return result;
    },
    activate: function() {
        this.trigger('activate', this);
        this.route && this.route.activate();
    },
    deactivate: function() {
        this.trigger('deactivate', this);
        this.route && this.route.deactivate();
    }
});
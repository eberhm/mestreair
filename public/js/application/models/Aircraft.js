	window.Aircraft = Backbone.Model.extend({
		defaults : function() {
			return {
				head : 'E',
				crashed : false
			}
		},
		initialize : function() {
			this.boardElement = new BoardElement;
			this.setPosition(50,50);
		},
		move : function() {
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
		setHead : function(orientation) {
			this.set({'head': orientation});
		},
		getHead : function() {
			return this.get('head');
		},
		getPosition : function() {
			return this.boardElement.getPosition();
		},
		setPosition : function(x, y) {
			var res = this.boardElement.setPosition(x, y);
			this.trigger('positionChanged');
			return res;
		},
		getHeight : function() {
			return this.boardElement.getHeight();
		},
		setHeight : function(height) {
			return this.boardElement.setHeight(height);
		},
		getInitialPositionAndHead : function(limitX, limitY) {
			var posIni = this.getInitialPosition(limitX, limitY);
			if (posIni.x > limitX/2 && posIni.y<limitY/2) {
				//esquina de arriba derecha
				var directions = ['S', 'SW', 'W'];
			} else if (posIni.x <= limitX/2 && posIni.y<limitY/2) {
				//esquina de arriba izqda
				var directions = ['S', 'SE', 'E'];
			} else if (posIni.x <= limitX/2 && posIni.y>=limitY/2) {
				//esquina de abajo izqda
				var directions = ['N', 'NE', 'E'];
			} else if (posIni.x > limitX/2 && posIni.y>=limitY/2) {
				//esquina de abajo derecha
				var directions = ['N', 'NW', 'W'];
			}
			
			posIni.head = directions[Math.ceil((Math.random()*100)%2)];
			return posIni;
		},
		getInitialPosition: function(limitX, limitY) {
			var side = Math.ceil((Math.random()*10)%3);
			var initialPosition = {x:0, y:0};
			if (side === 1 || side === 3) {
				initialPosition.x = Math.ceil(Math.random()*100)*5;
				if (side === 3) {
					initialPosition.y = 500;
				}
			} else if (side === 2 || side === 4) {
				initialPosition.y = Math.ceil(Math.random()*100)*5;
				if (side === 4) {
					initialPosition.x = 500;
				}
			}
			
			return initialPosition;
		},
		crash : function(mountain) {
			this.set({'crashed' : true});
			this.trigger('crash');
		},
		allToJSON : function() {
			var data = this.boardElement.toJSON();
			data = _.extend(data, this.toJSON());
			
			return data;
		}
	});
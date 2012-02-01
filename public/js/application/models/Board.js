	window.Board = Backbone.Model.extend({
		timer : null,
		defaults : {
			height : 500,
			width : 500,
		},
		initialize : function() {
			this.aircraftList = new AircraftList;
			this.mountainList = new MountainList;
			this.elementList = new Backbone.Collection;
		},
		detectCollision : function(aircraft) {
			var airPos = aircraft.get('position');
			//if (airPos.x)
		},
		detectLanding : function(aircraft) {},
		resetBoard : function() {},
		addBoardElement : function(element) {
			if (element instanceof Aircraft) {
				this.aircraftList.add(element);
			} else if (element instanceof Mountain) {
				this.mountainList.add(element);
			}
			this.elementList.add(element);
			this.trigger('elementAdded', element);
		},
		play : function() {
			var self = this;
			this.timer = setInterval(
				function(){
					//starts moving all planes
					self.aircraftList.forEach(function (aircraft) {
						aircraft.move();
						
						//detect collisions
						var element = self.elementList.find(function (element) {
								//if I'm me myself
								if (element === aircraft) {
									return false;
								}
								var elementPos = element.getPosition();
								var aircraftPos = aircraft.getPosition();
								if ((aircraftPos.x <= elementPos.x+20 && 
									aircraftPos.x >= elementPos.x-20) &&
									(aircraftPos.y <= elementPos.y+20 && 
									aircraftPos.y >= elementPos.y-20)) {
									var elementHeight = element.getHeight();
									var aircraftHeight = aircraft.getHeight();
									if (element instanceof Mountain) {
										if (elementHeight >= aircraftHeight) {
											return true;
										}
									} else if (elementHeight === aircraftHeight) {
										return true;
									} else{
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
								alert('Avion se salio del tablero');
							}
						
					});
				},
				100
			);
		},
		pause : function() {
			clearInterval(this.timer);
		}
	});
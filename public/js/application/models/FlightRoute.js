var FlightRoute = Backbone.Model.extend({
	
},
{
	create: function() {
		var side = Math.ceil(Math.random()*100%4);
		var iniPos = aircraft.getInitialPositionAndHead();
		aircraft.setPosition(iniPos.x, iniPos.y);
		aircraft.setHead(iniPos.head);
		aircraft.setHeight(Math.ceil(Math.random()*10000));
		myBoard.addBoardElement(aircraft);
	}
});
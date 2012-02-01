$(function(){
	myBoard = new Board;
	app = new BoardView({
		model: myBoard,
		el : $('.board')
	});
	app.render();
	
	//aviones
	var n = 0;
	do{
		aircraft = new Aircraft;
		//random position
		var iniPos = aircraft.getInitialPositionAndHead(
			myBoard.get('width'), 
			myBoard.get('height')
		);
		aircraft.setPosition(iniPos.x, iniPos.y);
		aircraft.setHead(iniPos.head);
		aircraft.setHeight(Math.ceil(Math.random()*10000));
		myBoard.addBoardElement(aircraft);
		n++;
	}while (n<5);
	
	//montañas
	var n = 0;
	do{
		mountain = new Mountain;
		//random position
		var iniPos = mountain.getInitialPosition(
			myBoard.get('width'), 
			myBoard.get('height')
		);
		mountain.setPosition(iniPos.x, iniPos.y);
		mountain.setHeight(Math.ceil(Math.random()*100000));
		myBoard.addBoardElement(mountain);
		n++;
	}while (n<5);
	
	myBoard.play();
	
	/*
	//cosas que hay que corregir:
	
	-control de colisiones: move to right entity
	-colisiones entre todos los objetos : OK
	-colision solo si la altura es la adecuada : OK
	-control de salida de tablero: Mover a entidad correcta: OK
	-menu de controles y cuadro de vuelos
	-puntuaciones
	-rutas
	-Añadir aviones aleatoriamente al borde del tablero
	*/
});
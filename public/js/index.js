$(function () {
    var limits,
        aircraft,
        route,
        mountain,
        app,
        iniPos;

    myBoard = new Board;
    app = new BoardView({
        model:myBoard,
        el:$('.board')
    });
    app.render();

    limits = [myBoard.get('width'), myBoard.get('height')];

    for (n = 1; n--;) {
        //aircrafts
        aircraft = new Aircraft;
        //random position
        iniPos = aircraft.getInitialPositionAndHead(limits[0], limits[1]);
        aircraft.setPosition(iniPos.x, iniPos.y);
        aircraft.setHead(iniPos.head);
        aircraft.setHeight(Math.ceil(Math.random() * 10000));

        route = new FlightRoute;
        iniPos = route.getInitialPositionAndHead(limits[0], limits[1]);
        route.setPosition(iniPos.x, iniPos.y);
        route.setHead(iniPos.head);
        route.setHeight(Math.ceil(Math.random() * 100000));
        aircraft.setRoute(route);
        myBoard.addBoardElement(aircraft);
        myBoard.addBoardElement(route);
    }

    for (n = 10; n--;) {
        //mountains
        mountain = new Mountain;
        //random position
        iniPos = mountain.getInitialPosition(limits[0], limits[1]);
        mountain.setPosition(iniPos.x, iniPos.y);
        mountain.setHeight(Math.ceil(Math.random() * 100000));
        myBoard.addBoardElement(mountain);
    }

    var controlsView = new ControlsView(
        {
        model: myBoard.aircraftList
        }
    );

    myBoard.play();

    /*
     //@TODO:
        Phase I: (COMPLETED)
    -Collision detection: move to right entity: OK
    -All objects can collision : OK
    -Collision only at the right height : OK
    -Out of board detection: move to right entity: OK
    -Controlls and table: OK
    -Score: OK
    -Routes: OK
    -Add aircrafts randomly at board's border : OK

        Phase II:
    -height controls
    -Score considering positioning and height
    -Different ScoreBeats depending on the route
    -Board elements positioning
    -Makeup
    -Use of keyboard for controls
-IA for game

     */
});
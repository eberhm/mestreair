<html>
<head>
<title>MestreAir</title>
<link href="/css/mestreair.css" media="screen" rel="stylesheet" type="text/css">

<script src="/js/vendor/underscore-1.1.6.js"></script>
<script src="/js/vendor/jquery-1.5.js"></script>
<script src="/js/vendor/json2.js"></script>
<script src="/js/library/backbone/backbone.js"></script>

<script src="/js/application/models/BoardElement.js"></script>
<script src="/js/application/models/Mountain.js"></script>
<script src="/js/application/models/Aircraft.js"></script>
<script src="/js/application/models/Board.js"></script>

<script src="/js/application/collections/AircraftList.js"></script>
<script src="/js/application/collections/MountainList.js"></script>

<script src="/js/application/views/AircraftView.js"></script>
<script src="/js/application/views/MountainView.js"></script>
<script src="/js/application/views/BoardView.js"></script>
<script src="/js/application/views/ScheduleRowView.js"></script>


<script src="/js/index.js"></script>
</head>
<body>

<!-- Schedules table  -->
<table class="schedules">
<thead>
<tr><th>PosX</th><th>PosY</th><th>Height</th><th>Head</th><th>Destination</th></tr>
</thead>
<tbody>
</tbody>
</table>

<!-- Controlls -->
<table class="controlls">
<tr>
<td>NW</td><td>N</td><td>NE</td>
<tr>
<tr>
<td>W</td><td>*</td><td>NE</td>
<tr>
<tr>
<td>SW</td><td>S</td><td>SE</td>
<tr>
</table>
<div class="board">
mestre air
</div>

<script type="text/template" id="schedule-row">
    <td><%=x%></td>
    <td><%=y%></td>
    <td><%=height%></td>
    <td><%=head%></td>
    <td>destination not set</td>
</script>
</body>
</html>
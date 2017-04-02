var React = require('react');
var ReactDOM = require('react-dom');

var e = React.createElement;

function getInfo() {
	name = document.getElementById('name').value;
	fetch('request?name=' + name).then(function(response) {
		return response.json().then(function(result) {
			console.log(result);
			var cpi = result.commonPlayerInfo[0];
			var stats = result.playerHeadlineStats[0];
			console.log(result.commonPlayerInfo[0]);
			ReactDOM.render(<p>{cpi.displayFirstLast} <br />
				Number: {cpi.jersey}, Height: {cpi.height}, Weight: {cpi.weight} <br />
				Pts: {stats.pts}, Asts: {stats.ast}, Reb: {stats.reb} <br />
				</p>, document.getElementById('playerName'));
		});
	});
}

window.getInfo = getInfo;
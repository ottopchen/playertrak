var React = require('react');
var ReactDOM = require('react-dom');

var e = React.createElement;

function getInfo() {
	name = document.getElementById('name').value;
	ReactDOM.render(<p>{name}</p>, document.getElementById('playerName'));
}

window.getInfo = getInfo;
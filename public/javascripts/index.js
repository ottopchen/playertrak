React = require('react');
ReactDOM = require('react-dom');

e = React.createElement;

function getInfo() {
	name = document.getElementById('name').value;
	ReactDOM.render(e('h1', null, name), document.getElementById('playerName'));
}

window.getInfo = getInfo;
var express = require('express');
var NBA = require('nba');
var React = require('react');
var ReactDOM = require('react-dom')

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/request', function(req, res, next) {
	console.log(req.query.name);
	player = NBA.findPlayer(req.query.name);
	NBA.stats.playerInfo({ PlayerID: player.playerId}).then(function(result) {
		console.log(result);
		res.json(result);
	});
	//res.json(player);
});

module.exports = router;

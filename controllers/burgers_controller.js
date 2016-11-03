var express = require('express');
var router = express.Router();
var burger = require('../models/burgers.js');

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	return burger.findAll()
	
	.then(function(allBurgers)){
		res.render('index', allBurgers);
	}			
	
});

// TODO: insert
router.post('/burgers/insert', function(req, res){
	var newName = req.body.burger_name;

	// TODO: find right function
	burger.insertOne(['burger_name'], function(){
		res.redirect('/burgers');
	})	
})

router.put('/burgers/update/:id', function(req, res){
	var condition = req.params.id;

	burger.findOne({where: {id = condition}}
	
	.then(function(burger){
		//TODO: set devoured to true
		devoured: true;

		.then(function(daBurg){
			res.redirect('/burgers');
		})
	})


}) 

module.exports = router;
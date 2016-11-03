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

router.post('/burgers/insert', function(req, res){
	var newName = req.body.burger_name;

	
	burger.upsert({burger_name: newName})
	
	.then(function(burger){

		res.redirect('/burgers');
	})	
})

router.put('/burgers/update/:id', function(req, res){
	var condition = req.params.id;

	burger.findOne({where: {id = condition}})
	
	.then(function(burger){
		//TODO: set devoured to true, find function
		devoured: true;

		.then(function(daBurg){
			res.redirect('/burgers');
		})
	})


}) 

module.exports = router;
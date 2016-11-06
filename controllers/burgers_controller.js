var express = require('express');
var router = express.Router();
var burger = require('../models')['Burger'];

var sequelizeConnection = models.sequelize;

sequelizeConnection.sync()

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	
	burger.findAll()

	.then(function(data){
		var allBurgers = { burgers: data };
		res.render('index', allBurgers);
	})

});

router.post('/burgers/insert', function(req, res){	

	burger.create({burger_name: req.body.burger_name})
	
	.then(function(){
		res.redirect('/burgers');
	})
})

router.put('/burgers/update/:id', function(req, res){
	var id = req.params.id;

	burger.update({
		devoured: true }, {
		fields: ['devoured'],
		where: {id: id}
	})

	.then(function(data){
		res.redirect('/burgers');
	})		
}) 

module.exports = router;
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');
var sequelizeConnection = models.sequelize

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	
	burger.findAll({}, function(data){
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

// TODO
router.put('/burgers/update/:id', function(req, res){
	var id = req.params.id;

	burger.update({
		devoured: true }, {
		fields: ['title']
		where: {id: id}
	})

	.then(function(data){
		res.redirect('/burgers');
	})		
}) 

module.exports = router;
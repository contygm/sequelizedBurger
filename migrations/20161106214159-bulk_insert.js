'use strict';

// Require our models
var burger = require('../models')['Burger'];

module.exports = {
  // on migration...
  up: function (queryInterface, Sequelize) {
    // bulk insert these entries using our model
    return burger.bulkCreate(
      [
        {burger_name: "Jalapeno & Pepper Jack Burger"},
        {burger_name: "Bacon Ranch Burger"},
        {burger_name: "Classic Cheeseburger"},
        {burger_name: "Chedder Bacon Double Burger"},
        {burger_name: "California Lean Burger"},
        {burger_name: "Turkey & Fresh Mozzarella Burger"},
        {burger_name: "Vegan Melt With Almost Swiss Cheese"}
      ]
    )
  },

  // on undo...
  down: function (queryInterface, Sequelize) {
    
    //cleans database
    return burger.destroy({where: {burger_name: {$ne: null}}})

    // burger.findAll()

    // .then(function(data){
    //   var allBurgers = { burgers: data };
    //   return allBurgers.destroy();
    // })

  }
};


//sequelize migration:create --name bulk_insert

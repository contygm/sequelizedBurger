'use strict';
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define('Burger', {
    burger_name: {
      type:DataTypes.STRING,
      notNull: true},
    devoured: { 
      type: DataTypes.BOOLEAN, 
      defaultValue: false}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Burger;
};


//sequelize model:create --name Burger --attributes "burger_name:string, devoured:boolean"
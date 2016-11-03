'use strict';
module.exports = function(sequelize, DataTypes) {
    var burgers = sequelize.define('burgers', {
          burgerName: Sequelize.STRING,
            devoured: { type: Sequelize.BOOLEAN, 
              defaultValue: false},
            entryDate: { type: Sequelize.DATE, 
              defaultValue: Sequelize.NOW }
            }, {
              classMethods: {
                associate: function(models) {
                  // associations can be defined here
                }
              }
            });
          return burgers;
        };
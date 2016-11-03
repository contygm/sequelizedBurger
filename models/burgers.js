'use strict';
module.exports = function(sequelize, DataTypes) {
    var burgers = sequelize.define('burgers', {
          burger_name: DataTypes.STRING,
            devoured: { type: DataTypes.BOOLEAN, 
              defaultValue: false},
            entryDate: { type: DataTypes.DATE, 
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


//sequelize model:create --name burgers --attributes "burgerName:string,
//devoured:BOOLEAN, entryDate:date"
'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('burgers', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            burgerName: {
              type: Sequelize.[TYPE
              },
              devoured: {
                type: Sequelize.
              },
              [type: {
                  type: Sequelize.BOOLEAN]
              },
              entryDate: {
                type: Sequelize.[TYPE
                },
                createdAt: {
                  allowNull: false,
                  type: Sequelize.DATE
                },
                updatedAt: {
                  allowNull: false,
                  type: Sequelize.DATE
                }
              });
          }, down: function(queryInterface, Sequelize) {
            return queryInterface.dropTable('burgers');
          }
        };
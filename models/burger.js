// ********************************************************
// DEPENDENCIES - MODELS ARE TABLES IN THE MYSQL DATABASE
// ********************************************************

/* Sequelize (capital) references the standard library - 
used to create the model */
var Sequelize = require("sequelize");

// sequelize (lowercase) references my connection to the DB
var sequelize = require("../config/connection.js");

// ********************************************************
// Creates a "Burger" model that matches up with DB
// ********************************************************

var Burger = sequelize.define("burger", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  burger_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {isAlphanumeric: true}
  },
  isDevoured: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },

  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,

   });

// Syncs with DB
Burger.sync();
// Makes the Burger Model available for other files (will also create a table)
module.exports = Burger;
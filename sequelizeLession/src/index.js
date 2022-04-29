const {sequelize, DataTypes, Model} = require('./db');

const { Restaurant } = require('../src/restaurant');
const { Menu } = require('../src/menu');
const { MenuItem } = require('../src/menuItem');

//Create associations
Menu.belongsTo(Restaurant);
Restaurant.hasMany(Menu);

MenuItem.belongsTo(Menu);
Menu.hasMany(MenuItem);

module.exports = { Restaurant, Menu, MenuItem };

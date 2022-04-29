const {sequelize} = require('../db')
const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {Item} = require('./Item')

Menu.belongsTo(Restaurant) 
Restaurant.hasMany(Menu)

Item.belongsTo(Menu)
Menu.hasMany(Item) 

module.exports = { Restaurant, Menu, Item } //exporting models w/ associations

const {sequelize, DataTypes, Model} = require('./db');

class Menu extends Model {

}
Menu.init({
    menuCat: DataTypes.ENUM('appetizer','entree', 'sides', 'dessert', 'drink')
},{
    sequelize,
    timestamps: false,
});

module.exports = { Menu };
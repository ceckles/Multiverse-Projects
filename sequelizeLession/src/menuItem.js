const {sequelize, DataTypes, Model} = require('./db');

class MenuItem extends Model {}

MenuItem.init({
    itemName: DataTypes.STRING,
    itemPrice: DataTypes.DECIMAL(10,2)
},{
    sequelize,
});

module.exports = {MenuItem};
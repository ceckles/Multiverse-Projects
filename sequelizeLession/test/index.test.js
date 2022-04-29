const {sequelize} = require('../src/db');
const { Restaurant, Menu, MenuItem } = require('../src/index');

describe('Restaurant', () => {
    beforeAll(async() =>{
        await sequelize.sync({force: true});
    });

    test('can create a Restaurant and instance of Restaurant', async () =>{
        const restaurant = await Restaurant.create({ name:'Olive Garden' });
        expect(restaurant.id).toBe(1);
    });
    test('can read a restaurant', async () =>{
        const rest = await Restaurant.findAll();
        expect(rest[0].name).toBe('Olive Garden');
    });

    test('can create a Menu', async () =>{
        const menu = await Menu.create({ menuCat:'appetizer' });
        expect(menu.id).toBe(1);
        expect(menu.menuCat).toBe('appetizer');
    });

    test('can create a Menu Item', async () =>{
        const menuItem = await MenuItem.create({ itemName: 'bread sticks', itemPrice: 6.00 })
        expect(menuItem.id).toBe(1);
        expect(menuItem.itemName).toBe('bread sticks');
    });


    test('restaurant can have menu and items and price', async () =>{
        //created Restaurant
        const RR = await Restaurant.create({ name: 'Red Robin' });
        
        //Created Menu
        const appetizer = await Menu.create({ menuCat:'appetizer' });
        const entree = await Menu.create({ menuCat: 'entree' });
        const sides = await Menu.create({ menuCat:'sides' });
        const dessert = await Menu.create({ menuCat: 'dessert' });
        const drink = await Menu.create({ menuCat: 'drink' });

        //Create Menu Items
        const breadStick = await MenuItem.create({ itemName: 'Bread Stick', itemPrice: 8.00});
        const nacho = await MenuItem.create({ itemName: 'Nacho', itemPrice: 3.00});
        const hamburger = await Menu.create({ itemName:'Hamburger', itemPrice: 13.00});
        const frenchFry = await MenuItem.create({ itemName: 'French Fries', itemPrice: 3.00});
        const mudPie = await MenuItem.create({ itemName: 'Mud Pie', itemPrice: 5.00});
        const DPP = await MenuItem.create({ itemName: 'Dr. Pepper', itemPrice: 2.00});

        //Add Items to menu and restaurant
        //Item
        appetizer.addMenuItem(breadStick);
        appetizer.addMenuItem(nacho);
        entree.addMenuItem(hamburger);
        sides.addMenuItem(frenchFry);
        dessert.addMenuItem(mudPie);
        drink.addMenuItem(DPP);
        //Menu
        RR.addMenu(appetizer);
        RR.addMenu(entree)
        RR.addMenu(sides);
        RR.addMenu(dessert);
        RR.addMenu(drink);

        const testRestaurant = await RR.getMenus();
        const menuItem = await testRestaurant[0].getMenuItems();
        //console.log(menuItem[0].itemName);
        
        
        //expect
        expect(testRestaurant.length).toBe(5)
        expect(testRestaurant[0] instanceof Menu).toBeTruthy();
        expect(menuItem[0].itemName).toBe('Bread Stick');
        expect(menuItem[0].itemPrice).toBe(8.00);
    });
});
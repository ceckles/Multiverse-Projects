const express = require("express");
const { check, validationResult } = require('express-validator');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

const Restaurant = require('./models/restaurant');
const Menu = require('./models/menu');
const MenuItem = require('./models/menuItem');

const initialiseDb = require('./initialiseDb');
initialiseDb();

const app = express();
const port = 3000;

Handlebars.registerHelper('loud', function (aString) {
    return aString.toUpperCase()
});

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());

//Configures handlebars library to work well w/ Express + Sequelize model
const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
});

//Tell Express app we're using handlebars library
app.engine('handlebars', handlebars);
app.set('view engine', 'handlebars');

const restaurantChecks = [
    check('name').not().isEmpty().trim().escape(),
    check('image').isURL(),
    check('name').isLength({ max: 50 })
]

app.get('/restaurants', async (req, res) => {
    const restaurants = await Restaurant.findAll();
    //res.json(restaurants);
    res.render('restaurants', {restaurants})
});

app.get('/restaurants/:id', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id, {include: {
            model: Menu,
            include: MenuItem
        }
    });
    //res.json(restaurant);
    res.render('restaurant', {restaurant});
});

app.get('/new-restaurant-form', (req, res) => {
    res.render('new-restaurant-form');
});

app.post('/restaurants', async (req, res) => {
     console.log('Output test:', req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
     await Restaurant.create(req.body);
     res.redirect(201,'/restaurants');
});

app.delete('/restaurants/:id', async (req, res) => {
    await Restaurant.destroy({
        where: {
            id: req.params.id
        }
    });
    res.sendStatus(200);
});

app.put('/restaurants/:id', restaurantChecks, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const restaurant = await Restaurant.findByPk(req.params.id);
    await restaurant.update(req.body);
    res.sendStatus(200);
});

app.patch('/restaurants/:id', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id);
    await restaurant.update(req.body);
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`🚀 Server listening at http://localhost:${port} 🚀`);
});
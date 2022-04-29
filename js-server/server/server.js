
const express = require('express');
const app = express();
const port = 3000;
const {Restaurant, Item, Menu} = require('../models/index');
const { check, validationResult } = require('express-validator');

//app.use(express.static('../public'));
app.use(express.json());

app.listen(port, ()=>{
    console.log(`🚀 Server running on localhost:${port}.`);
});



//Routes
//greet with name
app.get('/ts/:name', function (req, res){
    res.send(`Hello ${req.params.name}`);
});

//Flip a coin
app.get('/flipcoin', function (req, res) {
    const coin = Math.floor(Math.random() * 2) ? 'Heads' : 'Tails';
    res.send(coin);
});




//Get Restaurant and get with Menu with passing an Id
//Get all restaurants
app.get('/restaurants', async (req, res) => {
    const allRestaurants = await Restaurant.findAll();
    res.json(allRestaurants);
});
app.get('/menus', async (req, res) => {
    const allMenu = await Menu.findAll();
    res.json(allMenu);
});
app.get('/menus/:id', async (req, res) => {
    const menu = await Menu.findByPk(req.params.id, {include: {all:true, nested: true}});
    res.json(menu);
});

//Get Specified restaurants and menus
app.get('/restaurants/:id', async (req,res) => {
    //let theRestaurant = await Restaurant.findByPk(req.params.id, {include : Menu});
    let theRestaurant = await Restaurant.findByPk(req.params.id, { include: { all: true, nested: true }});
    res.json(theRestaurant);
});


//CRUD & Validate
//C
app.post('/restaurant', 
    [
     check('name')
        .not().isEmpty().trim().escape().withMessage('Name CAN NOT be empty')
        .matches(/^[A-Za-z0-9 .,'!&]+$/).withMessage('Special Char not allowed'),
     check('location')
        .not().isEmpty().trim().escape().withMessage('Location CAN NOT be empty')
        .matches(/^[A-Za-z0-9 .,'!&]+$/).withMessage('Special Char not allowed'),
     check('cuisine')
        .not().isEmpty().trim().escape().withMessage('Cuisine CAN NOT be empty')
        .matches(/^[A-Za-z0-9 .,'!&]+$/).withMessage('Special Char not allowed')
    ],
    async (req, res) =>{
        //Validate req
        const err = validationResult(req);
        if(!err.isEmpty()){
            //if errors return 400 and error message.
            return res.status(400).json({errors : err.array() });
        }

    let newRestaurant = await Restaurant.create(req.body);
    res.status(200).send('Restaurant Created');
});

//R
//See above thing we covered that indepth
//Get all Restaurant
app.get('/restaurant', async (req, res) => {
    console.log(req);
    const allRestaurants = await Restaurant.findAll();
    res.json(allRestaurants);
});
//Get Specified restaurants and menus
app.get('/restaurant/:id',
    [
        check('id')
            .isNumeric().withMessage('ID must be a number')
    ],
    async (req,res) => {
    const err = validationResult(req);
    if(!err.isEmpty()){
        return res.status(400).json({error: err.array()});
    }
    //let theRestaurant = await Restaurant.findByPk(req.params.id, {include : Menu});
    let theRestaurant = await Restaurant.findByPk(req.params.id, { include: { all: true, nested: true }});
    res.json(theRestaurant);
});
//U
app.put('/restaurant/:id',
    [
        check('name')
        .not().isEmpty().trim().escape().withMessage('Name CAN NOT be empty')
        .matches(/^[A-Za-z0-9 .,'!&]+$/).withMessage('Special Char not allowed'),
     check('location')
        .not().isEmpty().trim().escape().withMessage('Location CAN NOT be empty')
        .matches(/^[A-Za-z0-9 .,'!&]+$/).withMessage('Special Char not allowed'),
     check('cuisine')
        .not().isEmpty().trim().escape().withMessage('Cuisine CAN NOT be empty')
        .matches(/^[A-Za-z0-9 .,'!&]+$/).withMessage('Special Char not allowed')
    ],
    async (req, res) =>{
        const err = validationResult(req);
        if(!err.isEmpty()){
            return res.status(400).json({error : err.array()});
        }
        let update = await Restaurant.update(req.body,{
            where: {id : req.params.id}
        });
        res.status(200).send("Restaurnt Updated");
});

//D
app.delete('/restaurant/:id',
[
    check('id')
        .isNumeric().withMessage('ID must be a number')
        .matches(/^[A-Za-z0-9 .,'!&]+$/).withMessage('Special Char not allowed')//dont think needed if it is already checking for numbder
    ],
    async (req, res) =>{
        const err = validationResult(req);
        if(!err.isEmpty()){
            return res.status(400).json({error : err.array()});
        }
        await Restaurant.destroy({
            where : {id : req.params.id}
        });
                return res.status(400).json({error : err.array()});
});
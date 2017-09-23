//****************************************************
//                Dependencies
//****************************************************

const Express = require('express');
const Burger = require('../models/burger');

//****************************************************
//         Use the Router() method of Express to 
//          set routes for requests and posts
//****************************************************

const router = Express.Router();

// when a user makes a get request to all/homepage

router.get('/', function (req, res) {
  // retrieve all burgers from the database
  Burger.findAll({}).then(function(dbRes){
    const hbsObject = { view_burgers: dbRes, };

    // send them back along with  the index/main template

    console.log(hbsObject);
    res.render('index', { view_burgers: dbRes, });
  });
});

// when a user makes a post request to the new route
router.post('/new', function (req, res) {
  const userBurger = req.data;

  // create new buger

  Burger.create(userBurger);

  res.render('index', { view_burgers: dbRes, });

  // do separate stuff to create a new burger
});

router.post('/eat', (req, res) => {
  const userBurger = req.data;

  // create new buger

  Burger.update(userBurger);

  res.render('index', { view_burgers: dbRes, });

  // do separate stuff to create a new burge
});

// when a uuser makes a post request to burger_name CREATE

// when a user wants to eat a burger UPDATE
module.exports = router;
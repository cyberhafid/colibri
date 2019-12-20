var express = require('express');
var router = express.Router();
//const data = require('../test/');
///const cities = require('../test/cities.json');
const axios = require('axios');
let cities = require('../test/cities.json');
//let coli = require('../test/Excolibri.json');
let coli = require('../test/Excolibri.json');

var findUserByUsername = function (username, callback) {
  // Perform database query that calls callback when it's done
  // This is our fake database
  if (!coli[username])
    return callback(new Error(
      'No user matching '
       + username
      )
    );
  return callback(null, coli[username]);
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get("/cat", function(req, res) {
 // let coli = require('../test/Excolibri.json');
  res.send(coli.Environment);
 });


 router.get('/cato/:id', function (req, res, next) {
    res.send(coli.req.params.id);
  //res.send('USER')

})
router.get('/cata/:username', function(request, response, next) {
  var username = request.params.username;
  findUserByUsername(username, function(error, user) {
    if (error) return next(error);
    return response.render('user', user);
  });
});



router.get('/catas/:elementId', function(request, response){
  // Now we automatically get the story and element in the request object
  response.send({ coli: request.coli, element: request.element} ,console.log(element));
});


router.post('/search-results', function(req, res) {
  searchModule.search(req.body, function(data) {
    res.render('index', { title: 'Express', results: data });
  });
});








module.exports = router;

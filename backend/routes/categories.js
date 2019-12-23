var express = require('express');
var router = express.Router();
//const data = require('../test/');
///const cities = require('../test/cities.json');
//const axios = require('axios');
//let cities = require('../test/cities.json');
//let coli = require('../test/Excolibri.json');
let coli = require('../test/Excolibri.json');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get("/cat/:id", function(req, res) {
  //let coli = require('../test/Excolibri.json');
  res.send(coli);
 });


 router.get('/cato/:id', function (req, res, next) {
  let coli = require('../test/Excolibri.json');

    res.send(req.params.id);
    console.log(coli.req.params.id)
  //res.send('USER')

})


router.get('/catas/:id', function(request, response){
  // Now we automatically get the story and element in the request object
  let coli = require('../test/Excolibri.json');

  let id  = ((request.params.id));
  return response.json(id);
});



module.exports = router;

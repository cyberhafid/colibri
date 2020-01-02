var express = require('express');
var router = express.Router();
//const coli = require('../test/colibri.json');
let coli = require('../test/Excolibri.json');
let baseURL= 'http://localhost:5000/sensors/';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(coli.Environment);
});

router.use(`/:id`, (req, res) => {
  id = req.params.id;
res.send(JSON.stringify(coli));
 // res.send(baseURL);
console.log('2222' + JSON.stringify(coli.id ));

});

router.get('/test/:id',function(req,res){
  //let cat_id = req.params.id;
  //res.send(baseURL + req.params.id);

 res.send(req.params.id)
  //console.log('2222' + JSON.stringify(baseURL.cat_id));
  });






module.exports = router;

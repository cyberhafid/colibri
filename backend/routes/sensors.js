var express = require('express');
var router = express.Router();
//const coli = require('../test/colibri.json');
let coli = require('../test/Excolibri.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


  router.get('/json', function (req, res) {
    //const data = require('../test/colibri');
    res.json(data)
      
});
  

router.get('/devifffce/:id', (req, res) => {
  const { id } = req.params.id;
 // res.send({ id });
  res.send(coli);
});


router.get('/derrvice/:id', (req, res) => {
let cat_id = req.params.id;


res.send(coli.cat_id)
});



router.get('/device/:id',function(req,res){
  coli.findById(req.params.id)
      .then(data => {
          if(!data) {
              console.log("data not found");            
          }
          res.send(coli);
      }).catch(err => {

        console.log("error");

      });
  });


module.exports = router;

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
  

router.get('/devddice/:id', (req, res) => {
  const { id } = req.params.id;
 // res.send({ id });
  res.send(coli.id);
});



router.get('/device/:id',function(req,res){
  let cat_id = req.params.id;


  res.json(coli)
  console.log('2222' + JSON.stringify(coli));
  });




module.exports = router;

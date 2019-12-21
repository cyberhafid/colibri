var express = require('express');
var router = express.Router();
//const data = require('../test/colibri.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


  router.get('/json', function (req, res) {
    //const data = require('../test/colibri');
    res.json(data)
      
});
  

router.get('/device/:id', (req, res) => {
  const { id } = req.params;
  res.send({ id });
});



module.exports = router;

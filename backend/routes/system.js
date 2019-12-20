var express = require('express');
var router = express.Router();
const data = require('../test/colibri');



router.get('/temp', function (req, res, next) {
  var spawn = require('child_process').spawn;

  temp = spawn('cat', ['/sys/class/thermal/thermal_zone0/temp']);
  
temp.stdout.on('data', function(data) {
          console.log('Result: ' + data/1000 + ' degrees Celcius');
  });
res.json(temp)
});


router.get('/tddemp', function (req, res, next) {
  var spawn = require('child_process').spawn;
 temp = spawn('cat', ['/sys/class/thermal/thermal_zone0/temp']);
temp.stdout.on('data', function(data) {
  console.log( data/1000) ; 
});
res.send(temp)
});



module.exports = router;

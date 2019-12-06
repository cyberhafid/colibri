var elasticsearch = require('elasticsearch');
var express = require('express');
var router = express.Router();
var elastic = new elasticsearch.Client({
  host: ['http://127.0.0.1:9200/'],
  log: 'trace'
});


//var elastic = require('../client');

/* GET suggestions */
router.get('/', function (req, res, next) {
  elastic.search(req.params.input).then(function (result) {
    res.json(result)
  })
  .catch(err => res.json({ err }).status(500));
  
});


router.get('/indice', function (req, res, next) {
  elastic.search(
     {
      index: 'filebeat-*'
    }
  ).then(function (result) {
    res.json(result)
  })
  .catch(err => res.json({ err }).status(500));
});


router.get('/indicetri', function (req, res, next) {
  let body = {
    size: 0,
    aggs: {
      process: {
        terms: {
          field: "process.name",
          size: 100
        }
      }
    }
  }
  elastic.search({
      index: 'filebeat-*',
      body: body
    })
    .then(function (result) {
      res.json(result)
    })
    .catch(err => res.json({ err }).status(500));
});


router.get('/indiceall', function (req, res, next) {

  let body = {
    size: 50,
    query: {
      "match_all": {}
    },

    _source: ["@timestamp", "message", "name", "process.name"],
  }

  elastic.search(
    // {index: 'france-grille-dirac-logs*' } filebeat-*
    {
      index: 'filebeat-*',
      body: body,
    }
  ).then(function (result) {
    res.json(result)
  })
  .catch(err => res.json({ err }).status(500));
});


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
   // data= data/1000 ; 
});
res.send(temp)
});






module.exports = router;
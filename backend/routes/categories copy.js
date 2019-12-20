var express = require('express');
var router = express.Router();
const data = require('../test/colibri');




/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/cato', function (req, res, next) {
  res.search(req.params.input).then(function (result) {
    res.json(result)
  })
  .catch(err => res.json({ err }).status(500));
  
});

var usersFilePath = path.join(__dirname, 'users.min.json');

apiRouter.get('/users', function(req, res){
    var readable = fs.createReadStream(usersFilePath);
    readable.pipe(res);
});




router.get('/cat', function (req, res, next) {
 
  req.get('https://opendata.paris.fr/api/datasets/1.0/search/?q=handicap&rows=100'
)
.then(res => res.data.datasets);
});


async function indexData() {
  const articlesRaw = await fs.readFileSync('./data.json');
  const articles = JSON.parse(articlesRaw);
  console.log(`${articles.length} items parsed from data file`);
  bulkIndex('library', 'article', articles);
};




module.exports = router;

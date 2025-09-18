var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const userRoutes = require('./users'); // same directory

router.use('/users', userRoutes);

module.exports = router;

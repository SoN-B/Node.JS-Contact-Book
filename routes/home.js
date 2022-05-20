//routes/home.js

var express = require('express');
var router = express.Router(); // 1

// Home
router.get('/', function(req, res){ // 2
  res.redirect('/contacts');
});

module.exports = router; // 3
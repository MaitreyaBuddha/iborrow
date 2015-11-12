/**
 * Author: Kelly Johnson
 * Copyright 2015
 * This work is licenced under Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License
 * http://creativecommons.org/licenses/by-nc-sa/4.0/
 *
 * Main client content handler
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'iBorrow' });
});

module.exports = router;

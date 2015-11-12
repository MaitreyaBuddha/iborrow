/**
 * Author: Kelly Johnson
 * Copyright 2015
 * This work is licenced under Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License
 * http://creativecommons.org/licenses/by-nc-sa/4.0/
 *
 * Main client content handler
 */

'use strict';

var express = require('express');
var router = express.Router();

var fbAppID = process.env.FB_APP_ID || 618966918146429;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'iBorrow', fbAppID: fbAppID });
});

/* GET home page. */
router.get('/:pageName', function(req, res, next) {
  var pageName = req.params.pageName.replace('.html','');
  res.render(pageName, { title: 'iBorrow', fbAppID: fbAppID });
});

module.exports = router;

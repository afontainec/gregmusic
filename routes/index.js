'use strict';
var express = require('express');
var router = express.Router();
const musicController = require('../controllers/musicController');

/* GET home page. */
router.get('/', function(req, res, next) {
  musicController.home(req, res);
});

router.get('/admin', function(req, res, next) {

});

router.get('/listen/:directory', function(req, res, next) {
musicController.getSong(req, res);
})



module.exports = router;

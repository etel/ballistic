'use strict';

var express = require('express');
var controller = require('./transaction');
var router = express.Router();

router.post('/create', controller.create);
router.put('/:id', controller.update);
router.get('/:id', controller.get);

module.exports = router;
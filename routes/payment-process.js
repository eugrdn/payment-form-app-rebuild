var express = require('express');
var router = express.Router();
var pp = require('../handlers/payment-process.js');

router.post('/', pp.post);

router.get('/completed', function(req, res) {
	res.render('payment-success');
});

module.exports = router;
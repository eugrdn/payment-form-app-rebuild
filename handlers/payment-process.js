var jsonfile = require('jsonfile');
var file = 'payment-history.json';

exports.post = function(req, res) {

	var transfer = req.body.payment;

	var context = {
		amount: transfer.amount,
		type: transfer.type,
		currency: transfer.currency,
		nameOnCard: transfer.nameOnCard,
		cardNumber: transfer.cardNumber,
		expiryDate: transfer.expiryDate,
		securityCode: transfer.securityCode,
		createdAt: transfer.createdAt
	};

	var options = {
		spaces: 2,
		flag: 'a'
	};

	jsonfile.writeFile(file, context, options, function(err) {
		if (err)
			console.error(err)
	});

	return res.send({
		status: 200
	});

};
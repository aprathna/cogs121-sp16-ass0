var models = require('../models');
var mongoose = require('mongoose');

exports.send = function(req, res) {
    console.log(req.body); // help you see what is inside of req.body
    // your solution here
    var email = req.body.email;
    var content = req.body.content;
    var data = new models.Message({
	email: email,
	content: content
});
data.save(function(err, data){
	if(err)
		throw err;
	else
		res.redirect('/');
});
}






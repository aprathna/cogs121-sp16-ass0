var mongoose = require('mongoose');

exports.view = function(req, res) {
    mongoose.model('tit').find(function(err,data){
	res.render("index",{ 
		"data": data
	});
	});
}



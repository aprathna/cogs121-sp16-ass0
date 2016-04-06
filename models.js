var mongoose = require('mongoose');
var mschema = new mongoose.Schema({
	email: String,
	content: String,
	created: { type: Date, default: Date.now}
});

var message = mongoose.model('tit',mschema);
exports.Message = message;

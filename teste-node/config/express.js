var express = require('express');
var app = express();
app.set('view engine','ejs');

module.exports = function() { //quando alguém der o require chama esse module
	return app;
}
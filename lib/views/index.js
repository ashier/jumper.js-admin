"use strict";

var path = require('path');

module.exports.index = function (req, res) {
    res.render(path.join(__dirname, '../tmpl/home/index'), {message:"Login Bro"});
};


module.exports.login = function (req, res) {
    res.render(path.join(__dirname, '../tmpl/home/index'), {message:"Login dude"});
};

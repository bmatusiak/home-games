var config = require("./webpack.config.js");


config.output.publicPath = "/";
config.mode = 'development';

module.exports = config;
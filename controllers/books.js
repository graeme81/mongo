var express = require('express');
var app = express();
var bookRouter = express.Router();

var BookQuery = require('../client/db/bookQuery');
var query = new BookQuery();

bookRouter.get('/', function(req, res){
  query.all(function(results){
    res.json(results);
  });
});

module.exports = bookRouter;
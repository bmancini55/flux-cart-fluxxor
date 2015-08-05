let express = require('express');
let app = express();
let items = require('server/home/items');

app.set('view engine', 'jade');
app.set('views', __dirname);

app.get('/', function(req, res) {
  let model = {
    items: items
  };
  res.render('index', model);
});

module.exports = app;

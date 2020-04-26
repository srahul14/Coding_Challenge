var mongoose = require('mongoose');
const DB_URI = 'mongodb://localhost:27017/beatdapp';
let options = { useNewUrlParser: true  };
mongoose.connect(DB_URI, options);

var express = require('express');
var http    = require('http');
var path    = require('path');
var engine  = require('ejs-locals');
var app     = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

console.log("Server Ready");

require('./router')(app);
app.set('port', 1337);

app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'static')));
var cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

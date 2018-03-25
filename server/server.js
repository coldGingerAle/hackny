var express = require('express');
var morgan = require('morgan');
var cookie = require('cookie-parser');
var body = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var config = require('./config.json');
var users = require('./models/users')
var passport = require('passport');
var session = require('express-session');
var router=require('./routes/router');
require('./services/passport')(passport);
var port = 8081;




mongoose.connect(`mongodb://${config.dbconfig.username}:${config.dbconfig.password}@${config.dbconfig.url}`);

app.use(session({
    secret: "hacknyu2018", // session secret
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(morgan("dev"));
app.use(body.urlencoded());
app.use(body.json());
app.use(cookie());

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', `http://localhost:$`);
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.use('/',router);
app.post('/new user', function(req, res) {
  var testing = new users();
  testing.email = req.body.email;
  testing.password = req.body.password;
  testing.save(function(err) {
    if (err) {
      res.send(err)
    }
  });
  res.send('User Registration succesful');
});

app.post('/search', function(req, res) {
  users.findOne({
    'email': req.body.email
  }, function(err, user) {
    if (err) {
      res.send(err);
    }
    res.send(user)
  })
});

app.listen(port);

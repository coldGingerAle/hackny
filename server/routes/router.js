var mongoose = require('mongoose');
var passport = require('passport');
require('../services/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var getToken = require('../services/getToken');
var User = require("../models/users");
var moreInfo = require("../models/moreInformation");

router.post('/signup', function(req, res) {
  if (!req.body.email || !req.body.password) {
    res.json({
      success: false,
      msg: 'Please pass email and password.'
    });
  } else {
    var newUser = new User();
    newUser.email= req.body.email;
    newUser.password=newUser.generateHash(req.body.password);
    // save the user
    newUser.name = req.body.name;
    newUser.college = req.body.college;
    newUser.username = req.body.username;

    newUser.save(function(err) {
      if (err) {
        return res.json({
          success: false,
          msg: 'email already exists.'
        });
      }
      res.json({
        success: true,
        msg: 'Successful created new user.'
      });
    });
  }
});

router.post('/extraInformation', getToken ,function(req, res) {
  var id = req.decoded.id;
  User.findOne({_id:id}).then(function(user){
    var email= user.email;
    //
    // var info = new Info();
    // info.email = email;
    // info.information =
  }).catch(function(err){
    res.json({
      "success": "false",
      "message": "something happened"
    })
  });
});

router.post('/skills', getToken ,function(req, res) {
  var id = req.decoded.id;
  User.findOne({_id:id}).then(function(user){
    var email= user.email;
    for (var key in req.body) {
    if (req.body.hasOwnProperty(key)) {
    item = req.body[key];
    var newInfo= new moreInfo();
    newInfo.email = email;
    newInfo.field = key;
    newInfo.value = item;
    newInfo.save(function(err) {
      if (err) {
        return res.json({
          success: false,
          msg: 'error'
        });
      }
      res.json({
        success: true,
        msg: 'Successful SkillSet level.'
      });
    });
  }}
  }).catch(function(err){
    res.json({
      "success": "false",
      "message": "something happened"
    })
  });
});

router.post('/interest', getToken ,function(req, res) {
  var id = req.decoded.id;
  User.findOne({_id:id}).then(function(user){
    var email= user.email;
    for (var key in req.body) {
    if (req.body.hasOwnProperty(key)) {
    item = req.body[key];
    var newInfo= new moreInfo();
    newInfo.email = email;
    newInfo.field = "interest";
    newInfo.value = item;
    newInfo.save(function(err) {
      if (err) {
        return res.json({
          success: false,
          msg: 'error'
        });
      }
      res.json({
        success: true,
        msg: 'Successful SkillSet level.'
      });
    });
  }}
  }).catch(function(err){
    res.json({
      "success": "false",
      "message": "something happened"
    })
  });
});

router.post('/edLevel', getToken ,function(req, res) {
  var id = req.decoded.id;
  User.findOne({_id:id}).then(function(user){
    var email= user.email;
    var newInfo= new moreInfo();
    newInfo.email = email;
    newInfo.field = "education Level";
    newInfo.value = req.body.edLevel;
    newInfo.save(function(err) {
      if (err) {
        return res.json({
          success: false,
          msg: 'error'
        });
      }
      res.json({
        success: true,
        msg: 'Successful adding education level.'
      });
    });
  }).catch(function(err){
    res.json({
      "success": "false",
      "message": "something happened"
    })
  });
});

router.get('/content',getToken,function(req,res){
  var id = req.decoded.id;
  User.findOne({_id:id}).then(function(user){


  }).catch(function(err){
    res.json({
      "success": "false",
      "message": "something happened"
    })
  });

});

router.post('/login', function(req, res) {
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      console.log('Not user ')
      res.status(401).send({
        success: false,
        msg: 'Authentication failed. User not found.'
      });
    } else {
      // check if password matches
      var isMatch = user.validPassword(req.body.password);
        if (isMatch === false) {
          console.log('wrong pass')
          res.send({
            success: false,
            msg: 'Authentication failed. Wrong password.'
          });
        } else {
          console.log(isMatch);
          console.log('eer')
          console.log(err);
          // if user is found and password is right create a token
          const token = jwt.sign(user.toJSON(), "hacknyu2018", {
            expiresIn: 604800 // 1 week
          });
          // return the information including token as JSON
          res.json({
            success: true,
            token: 'JWT ' + token
          });

        }
    }
  });
});





module.exports = router;

var jwt = require('jsonwebtoken');
var User = require('../models/users');

module.exports = function(req,res,next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
      console.log(token)
    // verifies secret and checks exp
        jwt.verify(token, "hacknyu2018", function(err, decoded) {
            if (err) { //failed verification.
                return res.json({"error": true});
            }
            req.decoded = decoded;

            next(); //no error, proceed
        });
    } else {
        // forbidden without token
        return res.status(403).send({
            "error": true
        });
    }
}

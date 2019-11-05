var db = require("../models");
var sdkClient = require('./horoscope');


module.exports = function(app) {
  // Get all examples
  app.get("/api/profile", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Create a new example
  app.post("/api/profile", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Delete an example by id
  app.delete("/api/profile/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

    
// return user login
  app.post("/api/profile/login", function(req, res) {
    db.User.findAll({ where: { first_name: req.body.first_name } }).then(function(dbUser) {
    // once user logs in, their info is posted to front-end
    location.replace("/profile/"+dbUser.id)
      res.json(dbUser);
    });
  });


  app.get("/api/profile/:sign", function(req, res) {
    db.User.findAll({ where: { astrology_sign: req.params.sign } }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

};



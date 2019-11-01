var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/user", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Create a new example
  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Delete an example by id
  app.delete("/api/user/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(dbUser) {
      res.json(dbUser);
    });
  });


// return user login
  app.post("/api/user/login", function(req, res) {
    db.User.findAll({ where: { first_name: req.body.first_name } }).then(function(dbUser) {
    // once user logs in, their info is posted to front-end
    location.replace("/user/"+dbUser.id)
      res.json(dbUser);
    });
  });


  app.get("/api/user/:sign", function(req, res) {
    db.User.findAll({ where: { astrology_sign: req.params.sign } }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};

// AstrologyAPI.com
// 04510aa4977d9306f944533f83a79b51
// 605418

// questions for cody: how will we tie the users in the database to the actual app
// if users coming to our site have to fill out a form, how do we add that info to our already exsisting database
// if I'm demonstrating the functionability of the app to someone, and I fill out the form, how do I then show them how I will be matched to someone
// the api will be used to match compatible signs together and also show your your daily horoscope
// should we use a match.com, tinder or bubmle api to get ppl if the database idea doesn't work
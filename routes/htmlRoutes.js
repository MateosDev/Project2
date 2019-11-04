var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {


    db.User.findAll({}).then(function(dbUser) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbUser

      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/user/:id", function(req, res) {
    db.User.findOne({ where: { id: req.params.id } }).then(function(dbUser) {
    // res.render is what loads the info to the handlebars file (front-end)

    // switch cases to make users in our database compatible
    switch(dbUser.astrology_sign){
      case "aquarius":
      db.User.findAll({ where: { astrology_sign: ["aries", "leo", "sagittarius"]  }}).then(function(matches) {
        // res.render is what loads the info to the handlebars file (front-end)
        res.render("user", {
          userdata: dbUser,
          matches: matches
        });
      });
      
      break;

      case "leo":
      db.User.findAll({ where: { astrology_sign: ["gemini", "libra", "aquarius"]  }}).then(function(matches) {
        // res.render is what loads the info to the handlebars file (front-end)
        res.render("user", {
          userdata: dbUser,
          matches: matches
        });
      });
      
      break;

      case "aries":
      db.User.findAll({ where: { astrology_sign: ["gemini", "libra", "aquarius"]  }}).then(function(matches) {
        // res.render is what loads the info to the handlebars file (front-end)
        res.render("user", {
          userdata: dbUser,
          matches: matches
        });
      });
      
      break;

      case "cancer":
      db.User.findAll({ where: { astrology_sign: ["taurus", "virgo", "capricorn"]  }}).then(function(matches) {
        // res.render is what loads the info to the handlebars file (front-end)
        res.render("user", {
          userdata: dbUser,
          matches: matches
        });
      });
      
      break;
      case "scorpio":
      db.User.findAll({ where: { astrology_sign: ["taurus", "virgo", "capricorn"]  }}).then(function(matches) {
        // res.render is what loads the info to the handlebars file (front-end)
        res.render("user", {
          userdata: dbUser,
          matches: matches
        });
      });
      
      break;
      case "pisces":
      db.User.findAll({ where: { astrology_sign: ["taurus", "virgo", "capricorn"]  }}).then(function(matches) {
        // res.render is what loads the info to the handlebars file (front-end)
        res.render("user", {
          userdata: dbUser,
          matches: matches
        });
      });
      
      break;

      case "taurus":
      db.User.findAll({ where: { astrology_sign: ["cancer", "scorpio", "pisces"]  }}).then(function(matches) {
        // res.render is what loads the info to the handlebars file (front-end)
        res.render("user", {
          userdata: dbUser,
          matches: matches
        });
      });
      
      break;
      case "virgo":
      db.User.findAll({ where: { astrology_sign: ["cancer", "scorpio", "pisces"]  }}).then(function(matches) {
        // res.render is what loads the info to the handlebars file (front-end)
        res.render("user", {
          userdata: dbUser,
          matches: matches
        });
      });
      
      break;
      case "capricorn":
      db.User.findAll({ where: { astrology_sign: ["cancer", "scorpio", "pisces"]  }}).then(function(matches) {
        // res.render is what loads the info to the handlebars file (front-end)
        res.render("user", {
          userdata: dbUser,
          matches: matches
        });
      });
      
      break;
      case "gemini":
      db.User.findAll({ where: { astrology_sign: ["aries", "leo", "sagittarius"]  }}).then(function(matches) {
        // res.render is what loads the info to the handlebars file (front-end)
        res.render("user", {
          userdata: dbUser,
          matches: matches
        });
      });
      
      break;
      case "libra":
      db.User.findAll({ where: { astrology_sign: ["aries", "leo", "sagittarius"]  }}).then(function(matches) {
        // res.render is what loads the info to the handlebars file (front-end)
        res.render("user", {
          userdata: dbUser,
          matches: matches
        });
      });
      
      break;

      case "sagittarius":
      db.User.findAll({ where: { astrology_sign: ["gemini", "libra", "aquarius"]  }}).then(function(matches) {
        // res.render is what loads the info to the handlebars file (front-end)
        res.render("user", {
          userdata: dbUser,
          matches: matches
        });
      });
      
      break;
      

    }    

    });
  });


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};



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
    switch(dbUser.astrology_sign){
      case "aquarius":
      db.User.findAll({ where: { astrology_sign: ["pisces", "leo"]  }}).then(function(matches) {
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



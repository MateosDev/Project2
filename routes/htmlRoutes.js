var db = require("../models");
var axios = require("axios");

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
      switch (dbUser.astrology_sign) {
        case "aquarius":
          db.User.findAll({
            where: { astrology_sign: ["aries", "leo", "sagittarius"] }
          }).then(function(matches) {
            // res.render is what loads the info to the handlebars file (front-end)
            axios
              .post(
                "https://aztro.sameerkumar.website/?sign=" +
                  dbUser.astrology_sign +
                  "&day=today"
              )
              .then(function(response) {
                var horoscope = response.data;
                res.render("user", {
                  userdata: dbUser,
                  matches: matches,
                  yourHoro: horoscope
                });
              });
          });

          break;

        case "leo":
          db.User.findAll({
            where: { astrology_sign: ["gemini", "libra", "aquarius"] }
          }).then(function(matches) {
            // res.render is what loads the info to the handlebars file (front-end)
            axios
              .post(
                "https://aztro.sameerkumar.website/?sign=" +
                  dbUser.astrology_sign +
                  "&day=today"
              )
              .then(function(response) {
                var horoscope = response.data;
                res.render("user", {
                  userdata: dbUser,
                  matches: matches,
                  yourHoro: horoscope
                });
              });
          });

          break;

        case "aries":
          db.User.findAll({
            where: { astrology_sign: ["gemini", "libra", "aquarius"] }
          }).then(function(matches) {
            // res.render is what loads the info to the handlebars file (front-end)
            axios
              .post(
                "https://aztro.sameerkumar.website/?sign=" +
                  dbUser.astrology_sign +
                  "&day=today"
              )
              .then(function(response) {
                var horoscope = response.data;
                res.render("user", {
                  userdata: dbUser,
                  matches: matches,
                  yourHoro: horoscope
                });
              });
          });

          break;

        case "cancer":
          db.User.findAll({
            where: { astrology_sign: ["taurus", "virgo", "capricorn"] }
          }).then(function(matches) {
            // res.render is what loads the info to the handlebars file (front-end)
            axios
              .post(
                "https://aztro.sameerkumar.website/?sign=" +
                  dbUser.astrology_sign +
                  "&day=today"
              )
              .then(function(response) {
                var horoscope = response.data;
                res.render("user", {
                  userdata: dbUser,
                  matches: matches,
                  yourHoro: horoscope
                });
              });
          });

          break;
        case "scorpio":
          db.User.findAll({
            where: { astrology_sign: ["taurus", "virgo", "capricorn"] }
          }).then(function(matches) {
            // res.render is what loads the info to the handlebars file (front-end)
            axios
              .post(
                "https://aztro.sameerkumar.website/?sign=" +
                  dbUser.astrology_sign +
                  "&day=today"
              )
              .then(function(response) {
                var horoscope = response.data;
                res.render("user", {
                  userdata: dbUser,
                  matches: matches,
                  yourHoro: horoscope
                });
              });
          });

          break;
        case "pisces":
          db.User.findAll({
            where: { astrology_sign: ["taurus", "virgo", "capricorn"] }
          }).then(function(matches) {
            // res.render is what loads the info to the handlebars file (front-end)
            axios
              .post(
                "https://aztro.sameerkumar.website/?sign=" +
                  dbUser.astrology_sign +
                  "&day=today"
              )
              .then(function(response) {
                var horoscope = response.data;
                res.render("user", {
                  userdata: dbUser,
                  matches: matches,
                  yourHoro: horoscope
                });
              });
          });

          break;

        case "taurus":
          db.User.findAll({
            where: { astrology_sign: ["cancer", "scorpio", "pisces"] }
          }).then(function(matches) {
            // res.render is what loads the info to the handlebars file (front-end)
            axios
              .post(
                "https://aztro.sameerkumar.website/?sign=" +
                  dbUser.astrology_sign +
                  "&day=today"
              )
              .then(function(response) {
                var horoscope = response.data;
                res.render("user", {
                  userdata: dbUser,
                  matches: matches,
                  yourHoro: horoscope
                });
              });
          });

          break;
        case "virgo":
          db.User.findAll({
            where: { astrology_sign: ["cancer", "scorpio", "pisces"] }
          }).then(function(matches) {
            // res.render is what loads the info to the handlebars file (front-end)
            axios
              .post(
                "https://aztro.sameerkumar.website/?sign=" +
                  dbUser.astrology_sign +
                  "&day=today"
              )
              .then(function(response) {
                var horoscope = response.data;
                res.render("user", {
                  userdata: dbUser,
                  matches: matches,
                  yourHoro: horoscope
                });
              });
          });

          break;
        case "capricorn":
          db.User.findAll({
            where: { astrology_sign: ["cancer", "scorpio", "pisces"] }
          }).then(function(matches) {
            // res.render is what loads the info to the handlebars file (front-end)
            axios
              .post(
                "https://aztro.sameerkumar.website/?sign=" +
                  dbUser.astrology_sign +
                  "&day=today"
              )
              .then(function(response) {
                var horoscope = response.data;
                res.render("user", {
                  userdata: dbUser,
                  matches: matches,
                  yourHoro: horoscope
                });
              });
          });

          break;
        case "gemini":
          db.User.findAll({
            where: { astrology_sign: ["aries", "leo", "sagittarius"] }
          }).then(function(matches) {
            // res.render is what loads the info to the handlebars file (front-end)
            axios
              .post(
                "https://aztro.sameerkumar.website/?sign=" +
                  dbUser.astrology_sign +
                  "&day=today"
              )
              .then(function(response) {
                var horoscope = response.data;
                res.render("user", {
                  userdata: dbUser,
                  matches: matches,
                  yourHoro: horoscope
                });
              });
          });

          break;
        case "libra":
          db.User.findAll({
            where: { astrology_sign: ["aries", "leo", "sagittarius"] }
          }).then(function(matches) {
            // res.render is what loads the info to the handlebars file (front-end)
            axios
              .post(
                "https://aztro.sameerkumar.website/?sign=" +
                  dbUser.astrology_sign +
                  "&day=today"
              )
              .then(function(response) {
                var horoscope = response.data;
                res.render("user", {
                  userdata: dbUser,
                  matches: matches,
                  yourHoro: horoscope
                });
              });
          });

          break;

        case "sagittarius":
          db.User.findAll({
            where: { astrology_sign: ["gemini", "libra", "aquarius"] }
          }).then(function(matches) {
            // res.render is what loads the info to the handlebars file (front-end)
            axios
              .post(
                "https://aztro.sameerkumar.website/?sign=" +
                  dbUser.astrology_sign +
                  "&day=today"
              )
              .then(function(response) {
                var horoscope = response.data;
                res.render("user", {
                  userdata: dbUser,
                  matches: matches,
                  yourHoro: horoscope
                });
              });
          });

          break;
      }
    });
  });


  app.get("/login", function(req, res) {
      res.render("login");
  });

  app.get("/signup", function(req, res) {
    res.render("signup");
});

app.get("/profile", function(req, res) {
  res.render("profile");
});

app.get("/editprofile", function(req, res) {
  res.render("editprofile");
});

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

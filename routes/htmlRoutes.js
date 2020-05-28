// var path = require("path");
var passport = require("passport");
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
<<<<<<< HEAD
    res.render("index");
    // });
=======
    //   res.render("index", {
    //     msg: "I Choose Brew!",
    //     examples: dbExamples
    //   });
    // });
    res.render("index");
>>>>>>> 002b5d8931915367c38135712a3332d85ad1f561
  });

  // Load example page and pass in an example by id
  app.get("/quiz", function(req, res) {
    res.render("quiz");
  });
  //render registration page
  app.get("/register", function(req, res) {
    res.render("registration");
  });

  app.get("/search", function(req, res) {
    res.render("search");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
  app.post(
    "/login",
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login",
      failureFlash: true,
    })
  );
};

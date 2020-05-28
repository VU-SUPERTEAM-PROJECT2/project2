// var path = require("path");

module.exports = function(app) {
  // Load index page
  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples,
  //     });
  //   });
  // });

  // Load example page and pass in an example by id
  app.get("/quiz", function(req, res) {
    res.render("quiz");
  });
  //render registration page
  app.get("/register", function(req, res) {
    res.render("registration");
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
